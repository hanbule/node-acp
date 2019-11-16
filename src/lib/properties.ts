import {PropType, SupportedValues} from './property';

// Uncomment and fill out relevant fields to add support for a property
// Properties must be in the following format:
// (name, type, description, validation), where
// name (required) is a 4 character string,
// type (required) is a valid property type (str, dec, hex, log, mac, cfb, bin)
// description (required) is a short, one-line description of the property
// validation (optional) is eval()d to verify the input value for setting a property

const Validators = {
    range: (from: number, to: number): Validator<'dec'> => value => {
        const n = value.readUIntBE(0, value.length) - from;
        return 0 <= n && n <= (to - from);
    },
};

const _props = {
    'buil': ['str', 'Build string?', undefined] as Prop<'str'>,
    'DynS': ['cfb', 'DNS/Bonjour', undefined] as Prop<'cfb'>,
    // 'cfpf': ['', '', undefined],
    // 'cloC': ['', '', undefined],
    'cloD': ['cfb', '??', undefined] as Prop<'cfb'>,
    // 'conf': ['', '', undefined],
    'fire': ['cfb', 'Firewall', undefined] as Prop<'cfb'>,
    // 'prob': ['', '', undefined],
    'srcv': ['str', 'Source version', undefined] as Prop<'str'>,
    'syNm': ['str', 'Device name', undefined] as Prop<'str'>,
    // 'syDN': ['', '', undefined],
    // 'syPI': ['', '', undefined],
    'syPW': ['str', 'Router administration password', undefined] as Prop<'str'>,
    'syPR': ['str', 'syPR string???', undefined] as Prop<'str'>,
    'syGP': ['str', 'Router guest password???', undefined] as Prop<'str'>,
    // 'syCt': ['str', 'Contact', undefined] as Prop<'str'>,
    // 'syLo': ['str', 'Location', undefined] as Prop<'str'>,
    'syDs': ['str', 'System description', undefined] as Prop<'str'>,
    'syVs': ['str', 'System version', undefined] as Prop<'str'>,
    'syVr': ['str', 'System version???', undefined] as Prop<'str'>,
    'syIn': ['str', 'System information???', undefined] as Prop<'str'>,
    'syFl': ['hex', '????', undefined] as Prop<'hex'>,
    'syAM': ['str', 'Model identifier', undefined] as Prop<'str'>,
    'syAP': ['dec', 'Product ID', undefined] as Prop<'dec'>,
    'sySN': ['str', 'Serial number', undefined] as Prop<'str'>,
    // 'ssSN': ['', '', undefined],
    // 'sySK': ['', '', undefined],
    'ssSK': ['str', 'Apple SKU', undefined] as Prop<'str'>,
    'syRe': ['dec', 'Country', Validators.range(0, 54)] as Prop<'dec'>,
    'syLR': ['cfb', 'syLR blob', undefined] as Prop<'cfb'>,
    'syAR': ['cfb', 'syAR blob', undefined] as Prop<'cfb'>,
    'syUT': ['dec', 'System uptime', undefined] as Prop<'dec'>,
    // 'minV': ['', '', undefined],
    'minS': ['str', 'apple-minver', undefined] as Prop<'str'>,
    'chip': ['str', 'SoC description', undefined] as Prop<'str'>,
    // 'card': ['', '', undefined],
    // 'memF': ['', '', undefined],
    // 'pool': ['', '', undefined],
    // 'tmpC': ['', '', undefined],
    // 'RPMs': ['', '', undefined],
    'sySI': ['cfb', 'System info blob?', undefined] as Prop<'cfb'>,
    // 'fDCY': ['', '', undefined],
    'TMEn': ['hex', 'TMEn???', undefined] as Prop<'hex'>,
    'CLTM': ['cfb', 'CLTM???', undefined] as Prop<'cfb'>,
    // 'sPLL': ['', '', undefined],
    // 'syTL': ['', '', undefined],
    // 'syST': ['', '', undefined],
    'sySt': ['cfb', 'System Sstatus', undefined] as Prop<'cfb'>,
    'syIg': ['cfb', 'Ignored status codes', undefined] as Prop<'cfb'>,
    'syBL': ['str', 'Bootloader version string', undefined] as Prop<'str'>,
    'time': ['dec', 'System time', undefined] as Prop<'dec'>,
    'timz': ['cfb', 'Timezone config blob', undefined] as Prop<'cfb'>,
    'usrd': ['cfb', 'usrd???', undefined] as Prop<'cfb'>,
    // 'uuid': ['', '', undefined],
    // 'drTY': ['', '', undefined],
    // 'sttE': ['', '', undefined],
    // 'sttF': ['', '', undefined],
    'stat': ['cfb', 'System debug data', undefined] as Prop<'cfb'>,
    // 'sRnd': ['', '', undefined],
    // 'Accl': ['', '', undefined],
    'dSpn': ['cfb', 'Disk spin status?', undefined] as Prop<'cfb'>,
    'syMS': ['str', 'MLB serial number', undefined] as Prop<'str'>,
    // 'IGMP': ['', '', undefined],
    'diag': ['bin', 'diag???', undefined] as Prop<'bin'>,
    // 'paFR': ['', '', undefined],
    'raNm': ['str', 'Radio name', undefined] as Prop<'str'>,
    // 'raCl': ['', '', undefined],
    // 'raSk': ['', '', undefined],
    // 'raWM': ['', '', undefined],
    // 'raEA': ['', '', undefined],
    // 'raWE': ['', '', undefined],
    // 'raCr': ['', '', undefined],
    // 'raKT': ['', '', undefined],
    // 'raNN': ['', '', undefined],
    // 'raGK': ['', '', undefined],
    // 'raHW': ['', '', undefined],
    // 'raCM': ['', '', undefined],
    // 'raRo': ['', '', undefined],
    // 'raCA': ['', '', undefined],
    // 'raCh': ['', '', undefined],
    // 'rCh2': ['', '', undefined],
    // 'raWC': ['', '', undefined],
    // 'raDe': ['', '', undefined],
    // 'raMu': ['', '', undefined],
    // 'raLC': ['', '', undefined],
    // 'raLF': ['', '', undefined],
    // 'ra1C': ['', '', undefined],
    // 'raVs': ['', '', undefined],
    'raMA': ['mac', 'Wi-Fi MAC address', undefined] as Prop<'mac'>,
    // 'raM2': ['', '', undefined],
    // 'raMO': ['', '', undefined],
    // 'raLO': ['', '', undefined],
    'raDS': ['dec', 'Enable DHCP server', [0, 1]] as Prop<'dec'>,
    'raNA': ['dec', 'Enable NAT', [0, 1]] as Prop<'dec'>,
    // 'raWB': ['', '', undefined],
    // 'raIS': ['', '', undefined],
    // 'raMd': ['', '', undefined],
    // 'raPo': ['', '', undefined],
    // 'raPx': ['', '', undefined],
    // 'raTr': ['', '', undefined],
    // 'raDt': ['', '', undefined],
    // 'raFC': ['', '', undefined],
    // 'raEC': ['', '', undefined],
    // 'raMX': ['', '', undefined],
    // 'raIE': ['', '', undefined],
    // 'raII': ['', '', undefined],
    // 'raB0': ['', '', undefined],
    // 'raB1': ['', '', undefined],
    // 'raB2': ['', '', undefined],
    // 'raSt': ['', '', undefined],
    // 'APSR': ['', '', undefined],
    // 'raTX': ['', '', undefined],
    // 'raRX': ['', '', undefined],
    // 'raAC': ['', '', undefined],
    'raSL': ['cfb', 'Connected Wi-Fi clients', undefined] as Prop<'cfb'>,
    // 'raMI': ['', '', undefined],
    // 'raST': ['', '', undefined],
    // 'raDy': ['', '', undefined],
    // 'raEV': ['', '', undefined],
    // 'rTSN': ['', '', undefined],
    'raSR': ['cfb', 'Wi-Fi scan results', undefined] as Prop<'cfb'>,
    // 'eaRA': ['', '', undefined],
    'WiFi': ['cfb', 'Wi-Fi configuration', undefined] as Prop<'cfb'>,
    'rCAL': ['cfb', 'Radio calibration data?', undefined] as Prop<'cfb'>,
    // 'moPN': ['', '', undefined],
    // 'moAP': ['', '', undefined],
    // 'moUN': ['', '', undefined],
    // 'moPW': ['', '', undefined],
    // 'moIS': ['', '', undefined],
    // 'moLS': ['', '', undefined],
    // 'moLI': ['', '', undefined],
    // 'moID': ['', '', undefined],
    // 'moDT': ['', '', undefined],
    // 'moPD': ['', '', undefined],
    // 'moAD': ['', '', undefined],
    // 'moCC': ['', '', undefined],
    // 'moCR': ['', '', undefined],
    // 'moCI': ['', '', undefined],
    // '^moM': ['', '', undefined],
    // 'moVs': ['', '', undefined],
    // 'moMP': ['', '', undefined],
    // 'moMF': ['', '', undefined],
    // 'moFV': ['', '', undefined],
    // 'pdFl': ['', '', undefined],
    // 'pdUN': ['', '', undefined],
    // 'pdPW': ['', '', undefined],
    // 'pdAR': ['', '', undefined],
    // 'pdID': ['', '', undefined],
    // 'pdMC': ['', '', undefined],
    // 'peSN': ['', '', undefined],
    'peUN': ['str', 'PPPoE username', undefined] as Prop<'str'>,
    'pePW': ['str', 'PPPoE password', undefined] as Prop<'str'>,
    // 'peSC': ['', '', undefined],
    // 'peAC': ['', '', undefined],
    // 'peID': ['', '', undefined],
    // 'peAO': ['', '', undefined],
    'waCV': ['hex', 'WAN config mode?', undefined] as Prop<'hex'>,
    'waIn': ['bin', 'WAN interface mode?', undefined] as Prop<'bin'>,
    'waD1': ['ip4', 'IPv4 DNS server #1', undefined] as Prop<'ip4'>,
    'waD2': ['ip4', 'IPv4 DNS server #2', undefined] as Prop<'ip4'>,
    'waD3': ['ip4', 'IPv4 DNS server #3', undefined] as Prop<'ip4'>,
    'waC1': ['ip4', 'Automatically obtained IPv4 DNS server #1', undefined] as Prop<'ip4'>,
    'waC2': ['ip4', 'Automatically obtained IPv4 DNS server #2', undefined] as Prop<'ip4'>,
    'waC3': ['ip4', 'Automatically obtained IPv4 DNS server #3', undefined] as Prop<'ip4'>,
    'waIP': ['ip4', 'WAN IPv4 address', undefined] as Prop<'ip4'>,
    'waSM': ['ip4', 'WAN IPv4 subnet mask', undefined] as Prop<'ip4'>,
    'waRA': ['ip4', 'WAN IPv4 router address', undefined] as Prop<'ip4'>,
    'waDC': ['str', 'DHCP client ID', undefined] as Prop<'str'>,
    // 'waDS': ['', '', undefined],
    'waMA': ['mac', 'WAN MAC address', undefined] as Prop<'mac'>,
    // 'waMO': ['', '', undefined],
    'waDN': ['str', 'DNS search domain', undefined] as Prop<'str'>,
    // 'waCD': ['', '', undefined],
    // 'waIS': ['', '', undefined],
    // 'waNM': ['', '', undefined],
    'waSD': ['dec', '??', undefined] as Prop<'dec'>,
    // 'waFF': ['', '', undefined],
    // 'waRO': ['', '', undefined],
    // 'waW1': ['', '', undefined],
    // 'waW2': ['', '', undefined],
    // 'waW3': ['', '', undefined],
    'waLL': ['ip4', 'IPv4 local link address??', undefined] as Prop<'ip4'>,
    // 'waUB': ['', '', undefined],
    'waDI': ['cfb', 'WAN DHCP info?', undefined] as Prop<'cfb'>,
    // 'laCV': ['', '', undefined],
    'laIP': ['ip4', 'LAN IPv4 address', undefined] as Prop<'ip4'>,
    'laSM': ['ip4', 'LAN IPv4 subnet mask', undefined] as Prop<'ip4'>,
    // 'laRA': ['', '', undefined],
    // 'laDC': ['', '', undefined],
    // 'laDS': ['', '', undefined],
    // 'laNA': ['', '', undefined],
    'laMA': ['mac', 'LAN MAC address', undefined] as Prop<'mac'>,
    // 'laIS': ['', '', undefined],
    // 'laSD': ['', '', undefined],
    // 'laIA': ['', '', undefined],
    // 'gn6?': ['', '', undefined],
    // 'gn6A': ['', '', undefined],
    // 'gn6P': ['', '', undefined],
    // 'dhFl': ['', '', undefined],
    'dhBg': ['ip4', 'DHCP server start address', undefined] as Prop<'ip4'>,
    'dhEn': ['ip4', 'DHCP server end address', undefined] as Prop<'ip4'>,
    'dhSN': ['ip4', 'DHCP server subnet mask', undefined] as Prop<'ip4'>,
    'dhRo': ['ip4', '??', undefined] as Prop<'ip4'>,
    'dhLe': ['dec', 'DHCP server lease time', undefined] as Prop<'dec'>,
    // 'dhMg': ['', '', undefined],
    // 'dh95': ['', '', undefined],
    'DRes': ['cfb', 'DHCP reservations', undefined] as Prop<'cfb'>,
    // 'dhWA': ['', '', undefined],
    // 'dhDS': ['', '', undefined],
    // 'dhDB': ['', '', undefined],
    // 'dhDE': ['', '', undefined],
    // 'dhDL': ['', '', undefined],
    'dhSL': ['cfb', 'DHCP server leases', undefined] as Prop<'cfb'>,
    'gnFl': ['dec', '??', undefined] as Prop<'dec'>,
    'gnBg': ['ip4', 'Guest Network DHCP server start address', undefined] as Prop<'ip4'>,
    'gnEn': ['ip4', 'Guest Network DHCP server end address', undefined] as Prop<'ip4'>,
    'gnSN': ['ip4', 'Guest Network DHCP server subnet mask', undefined] as Prop<'ip4'>,
    'gnRo': ['ip4', 'Guest Network DHCP server router address', undefined] as Prop<'ip4'>,
    'gnLe': ['dec', 'Guest Network DHCP server lease time', undefined] as Prop<'dec'>,
    // 'gnMg': ['', '', undefined],
    // 'gn95': ['', '', undefined],
    // 'gnDi': ['', '', undefined],
    'naFl': ['dec', 'Enable NAT-PMP', [0, 1]] as Prop<'dec'>,
    // 'naBg': ['', '', undefined],
    // 'naEn': ['', '', undefined],
    // 'naSN': ['', '', undefined],
    // 'naRo': ['', '', undefined],
    // 'naAF': ['', '', undefined],
    'nDMZ': ['ip4', 'NAT Default Host', undefined] as Prop<'ip4'>,
    // 'pmPI': ['', '', undefined],
    // 'pmPS': ['', '', undefined],
    // 'pmPR': ['', '', undefined],
    // 'pmTa': ['', '', undefined],
    // 'acEn': ['', '', undefined],
    // 'acTa': ['', '', undefined],
    'tACL': ['cfb', 'Timed Access Control', undefined] as Prop<'cfb'>,
    // 'wdFl': ['', '', undefined],
    // 'wdLs': ['', '', undefined],
    // 'dWDS': ['', '', undefined],
    // 'cWDS': ['', '', undefined],
    // 'dwFl': ['', '', undefined],
    // 'raFl': ['', '', undefined],
    // 'raI1': ['', '', undefined],
    // 'raTm': ['', '', undefined],
    // 'raAu': ['', '', undefined],
    // 'raAc': ['', '', undefined],
    // 'raSe': ['', '', undefined],
    // 'raRe': ['', '', undefined],
    // 'raF2': ['', '', undefined],
    // 'raI2': ['', '', undefined],
    // 'raT2': ['', '', undefined],
    // 'raU2': ['', '', undefined],
    // 'raC2': ['', '', undefined],
    // 'raS2': ['', '', undefined],
    // 'raR2': ['', '', undefined],
    // 'raCi': ['', '', undefined],
    'ntSV': ['str', 'NTP Server Hostname', undefined] as Prop<'str'>,
    // 'ntpC': ['', '', undefined],
    // 'smtp': ['', '', undefined],
    // 'slog': ['', '', undefined],
    // 'slgC': ['', '', undefined],
    // 'slCl': ['', '', undefined],
    'slvl': ['dec', 'System log level', Validators.range(0, 7)] as Prop<'dec'>,
    // 'slfl': ['', '', undefined],
    'logm': ['log', 'System log data', undefined] as Prop<'log'>,
    // 'snAF': ['', '', undefined],
    // 'snLW': ['', '', undefined],
    // 'snLL': ['', '', undefined],
    // 'snRW': ['', '', undefined],
    // 'snWW': ['', '', undefined],
    // 'snRL': ['', '', undefined],
    // 'snWL': ['', '', undefined],
    // 'snCS': ['', '', undefined],
    // 'srtA': ['', '', undefined],
    // 'srtF': ['', '', undefined],
    // 'upsF': ['', '', undefined],
    // 'usbF': ['', '', undefined],
    'USBi': ['cfb', 'USB Info', undefined] as Prop<'cfb'>,
    // 'USBL': ['', '', undefined],
    // 'USBR': ['', '', undefined],
    // 'USBO': ['', '', undefined],
    // 'USBs': ['', '', undefined],
    // 'USBo': ['', '', undefined],
    // 'USBh': ['', '', undefined],
    // 'USBb': ['', '', undefined],
    // 'USBn': ['', '', undefined],
    'prni': ['cfb', 'USB Printer Info', undefined] as Prop<'cfb'>,
    // 'prnM': ['', '', undefined],
    'prnI': ['str', 'USB Printer Name', undefined] as Prop<'str'>,
    'prnR': ['bin', 'USB Priner Info???', undefined] as Prop<'bin'>, // ???
    // 'RUdv': ['', '', undefined],
    // 'RUfl': ['', '', undefined],
    'MaSt': ['cfb', 'USB Mass Storage Info', undefined] as Prop<'cfb'>,
    // 'SMBw': ['', '', undefined],
    // 'SMBs': ['', '', undefined],
    // 'fssp': ['', '', undefined],
    // 'diSD': ['', '', undefined],
    // 'diCS': ['', '', undefined],
    // 'deSt': ['', '', undefined],
    // 'daSt': ['', '', undefined],
    // 'dmSt': ['', '', undefined],
    // 'adNm': ['', '', undefined],
    // 'adBD': ['', '', undefined],
    // 'adAD': ['', '', undefined],
    // 'adHU': ['', '', undefined],
    // 'IDNm': ['', '', undefined],
    'seFl': ['bin', '????', undefined] as Prop<'bin'>, // ????
    // 'nvVs': ['', '', undefined],
    // 'dbRC': ['', '', undefined],
    'dbug': ['hex', 'Debug flags', Validators.range(0, 0xffffffff)] as Prop<'hex'>,
    // 'dlvl': ['', '', undefined],
    // 'dcmd': ['', '', undefined],
    // 'dsps': ['', '', undefined],
    // 'logC': ['', '', undefined],
    // 'cver': ['', '', undefined],
    'ctim': ['hex', 'ctim???', undefined] as Prop<'hex'>,
    // 'svMd': ['', '', undefined],
    // 'serM': ['', '', undefined],
    // 'serT': ['', '', undefined],
    // 'emNo': ['', '', undefined],
    // 'effF': ['', '', undefined],
    // 'LLnk': ['', '', undefined],
    // 'WLnk': ['', '', undefined],
    // 'PHYS': ['', '', undefined],
    // 'PHYN': ['', '', undefined],
    // 'Rnfo': ['', '', undefined],
    // 'evtL': ['', '', undefined],
    'isAC': ['dec', 'Power', [0, 1]] as Prop<'dec'>,
    // 'Adet': ['', '', undefined],
    'Prof': ['cfb', 'Restore Profile Blob', undefined] as Prop<'cfb'>,
    // 'maAl': ['', '', undefined],
    // 'maPr': ['', '', undefined],
    'leAc': ['dec', 'Status light', [1, 2]] as Prop<'dec'>,
    'APID': ['dec', 'Model', undefined] as Prop<'dec'>,
    // 'AAU ': ['', '', undefined],
    'lcVs': ['str', 'lcVs Version String?', undefined] as Prop<'str'>,
    // 'lcVr': ['', '', undefined],
    // 'lcmV': ['', '', undefined],
    // 'lcMV': ['', '', undefined],
    // 'iMTU': ['', '', undefined],
    'wsci': ['cfb', 'wsci Blob', undefined] as Prop<'cfb'>,
    // 'FlSu': ['', '', undefined],
    'OTPR': ['hex', 'machdep.otpval', undefined] as Prop<'hex'>,
    'acRB': ['dec', 'Reboot device flag', [0]] as Prop<'dec'>,
    'acRI': ['dec', 'Reload services??', [0]] as Prop<'dec'>,
    // 'acPC': ['', '', undefined],
    // 'acDD': ['', '', undefined],
    // 'acPD': ['', '', undefined],
    // 'acPG': ['', '', undefined],
    // 'acDS': ['', '', undefined],
    // 'acFN': ['', '', undefined],
    // 'acRP': ['', '', undefined],
    'acRN': ['dec', 'Resets something... (?)', [0]] as Prop<'dec'>,
    'acRF': ['dec', 'Reset to factory defaults', [0]] as Prop<'dec'>,
    // 'MdmH': ['', '', undefined],
    // 'dirf': ['', '', undefined],
    // 'Afrc': ['', '', undefined],
    // 'lebl': ['', '', undefined],
    // 'lebs': ['', '', undefined],
    'LEDc': ['dec', 'LED colour/pattern', Validators.range(0, 3)] as Prop<'dec'>,
    // 'acEf': ['', '', undefined],
    // 'invr': ['', '', undefined],
    // 'FLSH': ['', '', undefined],
    // 'acPL': ['', '', undefined],
    // 'rReg': ['', '', undefined],
    // 'dReg': ['', '', undefined],
    'GPIs': ['bin', 'GPIOs values', (value: Buffer) => value.length === 8] as Prop<'bin'>,
    // 'play': ['', '', undefined],
    // 'paus': ['', '', undefined],
    // 'ffwd': ['', '', undefined],
    // 'rwnd': ['', '', undefined],
    // 'itun': ['', '', undefined],
    // 'plls': ['', '', undefined],
    // 'User': ['', '', undefined],
    // 'Pass': ['', '', undefined],
    // 'itIP': ['', '', undefined],
    // 'itpt': ['', '', undefined],
    // 'daap': ['', '', undefined],
    // 'song': ['', '', undefined],
    // 'arti': ['', '', undefined],
    // 'albm': ['', '', undefined],
    // 'volm': ['', '', undefined],
    // 'rvol': ['', '', undefined],
    // 'Tcnt': ['', '', undefined],
    // 'Bcnt': ['', '', undefined],
    // 'shfl': ['', '', undefined],
    // 'rept': ['', '', undefined],
    // 'auPr': ['', '', undefined],
    // 'auJD': ['', '', undefined],
    // 'auNN': ['', '', undefined],
    // 'auNP': ['', '', undefined],
    // 'aFrq': ['', '', undefined],
    // 'aChn': ['', '', undefined],
    // 'aLvl': ['', '', undefined],
    // 'aPat': ['', '', undefined],
    // 'aSta': ['', '', undefined],
    // 'aStp': ['', '', undefined],
    // 'auCC': ['', '', undefined],
    // 'acmp': ['', '', undefined],
    // 'aenc': ['', '', undefined],
    // 'anBf': ['', '', undefined],
    // 'aWan': ['', '', undefined],
    'auRR': ['dec', 'Enable AirPlay', [0, 1]] as Prop<'dec'>,
    // 'auMt': ['', '', undefined],
    // 'aDCP': ['', '', undefined],
    // 'DCPc': ['', '', undefined],
    // 'DACP': ['', '', undefined],
    // 'DCPi': ['', '', undefined],
    // 'auSl': ['', '', undefined],
    // 'auFl': ['', '', undefined],
    'fe01': ['hex', '????', undefined] as Prop<'hex'>,
    'feat': ['str', 'Supported features?', undefined] as Prop<'str'>,
    'prop': ['str', 'Valid acp properties', undefined] as Prop<'str'>,
    'hw01': ['hex', '????', undefined] as Prop<'hex'>,
    // 'fltr': ['', '', undefined],
    // 'wdel': ['', '', undefined],
    // 'plEB': ['', '', undefined],
    // 'rWSC': ['', '', undefined],
    // 'uDFS': ['', '', undefined],
    // 'dWPA': ['', '', undefined],
    // 'dpFF': ['', '', undefined],
    // 'duLF': ['', '', undefined],
    // 'ieHT': ['', '', undefined],
    // 'dwlX': ['', '', undefined],
    // 'dd11': ['', '', undefined],
    // 'dRdr': ['', '', undefined],
    // 'dotD': ['', '', undefined],
    // 'dotH': ['', '', undefined],
    // 'dPwr': ['', '', undefined],
    // 'wlBR': ['', '', undefined],
    // 'iTIM': ['', '', undefined],
    // 'idAG': ['', '', undefined],
    // 'mvFL': ['', '', undefined],
    // 'mvFM': ['', '', undefined],
    // 'dPPP': ['', '', undefined],
    // '!mta': ['', '', undefined],
    // 'minR': ['', '', undefined],
    // 'SpTr': ['', '', undefined],
    // 'dRBT': ['', '', undefined],
    // 'dRIR': ['', '', undefined],
    'pECC': ['cfb', 'PCIe ECC Blob?', undefined] as Prop<'cfb'>,
    // 'fxEB': ['', '', undefined],
    // 'fxID': ['', '', undefined],
    // 'fuup': ['', '', undefined],
    // 'fust': ['', '', undefined],
    // 'fuca': ['', '', undefined],
    'fugp': ['str', 'Firmware upgrade progress', undefined] as Prop<'str'>,
    'cks0': ['hex', 'Bootloader Flash Checksum', undefined] as Prop<'hex'>,
    'cks1': ['hex', 'Primary Flash Checksum', undefined] as Prop<'hex'>,
    'cks2': ['hex', 'Secondary Flash Checksum', undefined] as Prop<'hex'>,
    // 'ddBg': ['', '', undefined],
    // 'ddEn': ['', '', undefined],
    // 'ddIn': ['', '', undefined],
    // 'ddSm': ['', '', undefined],
    // 'ddEC': ['', '', undefined],
    // 'ddFE': ['', '', undefined],
    // 'ddSR': ['', '', undefined],
    '6cfg': ['dec', 'IPv6 mode', undefined] as Prop<'dec'>,
    '6aut': ['dec', 'IPv6 autoconfiguration', undefined] as Prop<'dec'>,
    // '6Qpd': ['', '', undefined],
    '6Wad': ['ip6', 'WAN IPv6 address', undefined] as Prop<'ip6'>,
    // '6Wfx': ['', '', undefined],
    '6Wgw': ['ip6', 'WAN IPv6 router address', undefined] as Prop<'ip6'>,
    '6Wte': ['ip4', 'IPv6 tunnel endpoint', undefined] as Prop<'ip4'>,
    '6Lfw': ['dec', 'Enable LAN IPv6', undefined] as Prop<'dec'>,
    '6Lad': ['ip6', 'LAN IPv6 address', undefined] as Prop<'ip6'>,
    '6Lfx': ['dec', 'LAN IPv6 preflix length', Validators.range(0, 128)] as Prop<'dec'>,
    '6sfw': ['dec', 'Enable IPv6 firewall', undefined] as Prop<'dec'>,
    // '6pmp': ['', '', undefined],
    '6trd': ['dec', 'Allow Teredo', [0, 1]] as Prop<'dec'>,
    // '6sec': ['', '', undefined],
    // '6fwl': ['', '', undefined],
    '6NS1': ['ip6', 'IPv6 DNS server #1', undefined] as Prop<'ip6'>,
    '6NS2': ['ip6', 'IPv6 DNS server #2', undefined] as Prop<'ip6'>,
    '6NS3': ['ip6', 'IPv6 DNS server #3', undefined] as Prop<'ip6'>,
    // '6ahr': ['', '', undefined],
    // '6dhs': ['', '', undefined],
    // '6dso': ['', '', undefined],
    '6PDa': ['ip6', 'LAN IPv6 address block', undefined] as Prop<'ip6'>,
    '6PDl': ['dec', 'LAN IPv6 prefix length', Validators.range(0, 128)] as Prop<'dec'>,
    // '6vlt': ['', '', undefined],
    // '6plt': ['', '', undefined],
    '6CWa': ['ip6', 'WAN IPv6 tunnel address', undefined] as Prop<'ip6'>,
    '6CWp': ['dec', 'WAN IPv6 tunnel prefix length', Validators.range(0, 128)] as Prop<'dec'>,
    '6CWg': ['ip6', 'WAN IPv6 6to4 address', undefined] as Prop<'ip6'>,
    '6CLa': ['ip6', 'LAN IPv6 address', undefined] as Prop<'ip6'>,
    '6NSa': ['ip6', 'IPv6 DNS server #1', undefined] as Prop<'ip6'>,
    '6NSb': ['ip6', 'IPv6 DNS server #2', undefined] as Prop<'ip6'>,
    '6NSc': ['ip6', 'IPv6 DNS server #3', undefined] as Prop<'ip6'>,
    '6CPa': ['ip6', 'LAN IPv6 address', undefined] as Prop<'ip6'>,
    '6CPl': ['dec', 'LAN IPv6 prefix length', undefined] as Prop<'dec'>,
    '6!at': ['dec', '??', undefined] as Prop<'dec'>,
    'rteI': ['cfb', 'rteI Blob', undefined] as Prop<'cfb'>,
    // 'PCLI': ['', '', undefined],
    // 'dxEM': ['', '', undefined],
    // 'dxID': ['', '', undefined],
    // 'dxAI': ['', '', undefined],
    // 'dxIP': ['', '', undefined],
    // 'dxOA': ['', '', undefined],
    // 'dxIA': ['', '', undefined],
    // 'dxC1': ['', '', undefined],
    // 'dxP1': ['', '', undefined],
    // 'dxC2': ['', '', undefined],
    // 'dxP2': ['', '', undefined],
    // 'bjFl': ['', '', undefined],
    // 'bjSd': ['', '', undefined],
    // 'bjSM': ['', '', undefined],
    'wbEn': ['dec', 'Enable wide-area Bonjour', [0, 1]] as Prop<'dec'>,
    'wbHN': ['str', 'Wide-area Bonjour hostname', undefined] as Prop<'str'>,
    'wbHU': ['str', 'Wide-area Bonjour TSIG Key', undefined] as Prop<'str'>,
    'wbHP': ['str', 'Wide-area Bonjour TSIG Pass', undefined] as Prop<'str'>,
    // 'wbRD': ['', '', undefined],
    // 'wbRU': ['', '', undefined],
    // 'wbRP': ['', '', undefined],
    'wbAC': ['dec', 'Enable wide-area Bonjour DNS-SD', undefined] as Prop<'dec'>,
    // 'dMac': ['', '', undefined],
    'iCld': ['cfb', 'iCloud accounts', undefined] as Prop<'cfb'>,
    'iCLH': ['cfb', 'iCloud status', undefined] as Prop<'cfb'>,
    // 'iCLB': ['', '', undefined],
    'SUEn': ['dec', 'Check for firmware update', undefined] as Prop<'dec'>,
    // 'SUAI': ['', '', undefined],
    'SUFq': ['dec', 'Update frequency', undefined] as Prop<'dec'>,
    // 'SUSv': ['', '', undefined],
    // 'suPR': ['', '', undefined],
    // 'msEn': ['', '', undefined],
    // 'trCo': ['', '', undefined],
    // 'EZCF': ['', '', undefined],
    // 'ezcf': ['', '', undefined],
    // 'gVID': ['', '', undefined],
    // 'wcfg': ['', '', undefined],
    // 'awce': ['', '', undefined],
    // 'wcgu': ['', '', undefined],
    // 'wcgs': ['', '', undefined],
    // 'awcc': ['', '', undefined],
};

export type Validator<T extends PropType = PropType> = ((value: Buffer, name: string) => boolean) |
    SupportedValues[T][];

// type Prop = [PropType, string, Validator | undefined];
type Prop<T extends PropType = PropType> = [T, string, Validator<T> | undefined];

export type PropName = keyof typeof _props;
export type PropTypes = {
    [N in PropName]: (typeof _props[N])[0];
};
const props: {
    [name: string]: Prop;
} = _props;

export default props;
