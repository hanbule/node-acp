import {Server, Session, Message, CFLBinaryPList, Property} from '..';
import {MessageType} from '../lib/message';
import {replacer} from '../lib/util';
import {syLR} from '../lib/property-types';
import {RPCData} from '../lib/rpc-types';
import {LocalStorage} from 'node-persist';

const SYLR_REGIONS: syLR = require('../../resources/region-data');

export default class TestServer extends Server {
    constructor(readonly host: string, readonly port: number, readonly password: string, readonly storage: LocalStorage) {
        super(host, port);

        this.addUser('admin', password);
    }

    async handleMessage(session: Session, message: Message) {
        // @ts-ignore
        global.session = session;

        return super.handleMessage(session, message);
    }

    async handleMonitorMessage(session: Session, message: Message) {
        const [null_data, body] = [message.body!.slice(0, 4), message.body!.slice(4)];

        try {
            const data = CFLBinaryPList.parse(body);
            console.log('Monitor data', data, JSON.stringify(data));
        } catch (err) {
            console.log('Monitor data parse error', err);
        }

        const res = Message.composeMonitorCommand(0, '', Buffer.from([0, 0, 0, 0]));
        console.log('Monitor response', res);

        await session.send(res);
    }

    async handleRPCMessage(session: Session, message: Message) {
        try {
            const data: RPCData = CFLBinaryPList.parse(message.body!);

            console.log('RPC data', data, JSON.stringify(data, replacer));
        } catch (err) {
            console.log('RPC data parse error', err);
        }

        const res = Message.composeRPCCommand(0, '', CFLBinaryPList.compose({outputs: {}, status: 0}));
        await session.send(res);
    }

    properties: {[name: string]: Buffer | Error} = {};
    modified = false;

    async getProperties(props: Property[]) {
        const ret = await super.getProperties(props);
        if (this.modified) {
            await this.storage.setItem('Properties', this.properties);
            this.modified = false;
        }
        return ret;
    }

    async getProperty(prop: Property) {
        if (prop.name === 'syLR') return new Property('syLR', SYLR_REGIONS);

        if (this.properties[prop.name] instanceof Buffer) return this.properties[prop.name] as Buffer;
        if (this.properties[prop.name] instanceof Error) throw this.properties[prop.name];
        if (this.properties.hasOwnProperty(prop.name)) return new Property(prop.name, this.properties[prop.name]);
        this.modified = true;
        throw this.properties[prop.name] = new Error('Unknown property');
    }

    async setProperties(props: Property[]) {
        const ret = await super.setProperties(props);
        if (this.modified) {
            // fs.writeFileSync('properties.json', JSON.stringify(this.properties, replacer, 4) + '\n', 'utf-8');
            await this.storage.setItem('Properties', this.properties);
            this.modified = false;
        }
        return ret;
    }

    async setProperty(prop: Property) {
        this.properties[prop.name] = prop.format();
        this.modified = true;
    }
}