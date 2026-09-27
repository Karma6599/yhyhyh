class BASE64 {
    static decode(base64) {
        var charTable, byteTable, i, padding, length, bytes, j, a, b, c, d;
        charTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        byteTable = new Array(256);
        i = 0;
        while (i < 64) {
            byteTable[charTable.charCodeAt(i)] = i;
            i++;
        }
        padding = 0;
        if (base64.charAt(base64.length - 2) === "=") {
            padding = 2;
        } else if (base64.charAt(base64.length - 1) === "=") {
            padding = 1;
        }
        length = Math.ceil(base64.length / 4) * 3 - padding;
        bytes = new Uint8Array(length);
        i = 0;
        j = 0;
        while (i < base64.length) {
            a = byteTable[base64.charCodeAt(i++)];
            b = byteTable[base64.charCodeAt(i++)];
            c = byteTable[base64.charCodeAt(i++)];
            d = byteTable[base64.charCodeAt(i++)];
            bytes[j++] = (a << 2) | (b >> 4);
            if (j < length) {
                bytes[j++] = ((b & 15) << 4) | (c >> 2);
            }
            if (j < length) {
                bytes[j++] = ((c & 3) << 6) | d;
            }
        }
        return bytes;
    }
    static encode(bytes) {
        var charTable, base64, i, a, b, c, enc1, enc2, enc3, enc4;
        charTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        base64 = "";
        i = 0;
        while (i < bytes.length) {
            a = bytes[i];
            b = bytes[i + 1];
            c = bytes[i + 2];
            enc1 = a >> 2;
            enc2 = ((a & 3) << 4) | (b >> 4);
            enc3 = ((b & 15) << 2) | (c >> 6);
            enc4 = c & 63;
            if ((i + 1) < bytes.length) {
                if ((i + 2) < bytes.length) {
                    base64 += charTable.charAt(enc1) + charTable.charAt(enc2) + charTable.charAt(enc3) + charTable.charAt(enc4);
                } else {
                    base64 += charTable.charAt(enc1) + charTable.charAt(enc2) + charTable.charAt(enc3) + "=";
                }
            } else {
                base64 += charTable.charAt(enc1) + charTable.charAt(enc2) + "==";
            }
            i = i + 3;
        }
        return base64;
    }
}

class TSChaCha20 {
    constructor(key, nonce, counter) {
        if (counter === undefined) {
            counter = 0;
        }
        this._rounds = 20;
        this._sigma = [1634760805, 857760878, 2036477234, 1797285236];
        this._param = [];
        this._keystream = new Uint8Array(64);
        this._byteCounter = 0;
        if (key.length !== 32) {
            throw new Error("Key should be 32 byte array!");
        }
        if (nonce.length !== 12) {
            throw new Error("Nonce should be 12 byte array!");
        }
        this._param = [this._sigma[0], this._sigma[1], this._sigma[2], this._sigma[3], this._get32(key, 0), this._get32(key, 4), this._get32(key, 8), this._get32(key, 12), this._get32(key, 16), this._get32(key, 20), this._get32(key, 24), this._get32(key, 28), counter, this._get32(nonce, 0), this._get32(nonce, 4), this._get32(nonce, 8)];
    }
    encrypt(data) {
        return this._update(data);
    }
    decrypt(data) {
        return this._update(data);
    }
    _update(data) {
        var output, i;
        if (data.length === 0) {
            throw new Error("Data should be type of bytes (Uint8Array) and not empty!");
        }
        output = new Uint8Array(data.length);
        i = 0;
        while (i < data.length) {
            if (this._byteCounter === 0 || this._byteCounter === 64) {
                this._chacha();
                this._param[12] = ++this._param[12];
                this._byteCounter = 0;
            }
            output[i] = data[i] ^ this._keystream[this._byteCounter++];
            i++;
        }
        return output;
    }
    _chacha() {
        var mix, i, b;
        mix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        i = 0;
        b = 0;
        while (i < 16) {
            mix[i] = this._param[i];
            i++;
        }
        i = 0;
        while (i < this._rounds) {
            this._quarterround(mix, 0, 4, 8, 12);
            this._quarterround(mix, 1, 5, 9, 13);
            this._quarterround(mix, 2, 6, 10, 14);
            this._quarterround(mix, 3, 7, 11, 15);
            this._quarterround(mix, 0, 5, 10, 15);
            this._quarterround(mix, 1, 6, 11, 12);
            this._quarterround(mix, 2, 7, 8, 13);
            this._quarterround(mix, 3, 4, 9, 14);
            i = i + 2;
        }
        i = 0;
        while (i < 16) {
            mix[i] = mix[i] + this._param[i];
            this._keystream[b++] = mix[i] & 255;
            this._keystream[b++] = (mix[i] >>> 8) & 255;
            this._keystream[b++] = (mix[i] >>> 16) & 255;
            this._keystream[b++] = (mix[i] >>> 24) & 255;
            i++;
        }
    }
    _quarterround(output, a, b, c, d) {
        output[a] = output[a] + output[b];
        output[d] = this._rotl(output[d] ^ (output[a] + output[b]), 16);
        output[c] = output[c] + output[d];
        output[b] = this._rotl(output[b] ^ (output[c] + output[d]), 12);
        output[a] = output[a] + output[b];
        output[d] = this._rotl(output[d] ^ (output[a] + output[b]), 8);
        output[c] = output[c] + output[d];
        output[b] = this._rotl(output[b] ^ (output[c] + output[d]), 7);
        output[a] = output[a] >>> 0;
        output[b] = output[b] >>> 0;
        output[c] = output[c] >>> 0;
        output[d] = output[d] >>> 0;
    }
    _get32(data, index) {
        return data[index++] ^ (data[index++] << 8) ^ (data[index++] << 16) ^ (data[index] << 24);
    }
    _rotl(data, shift) {
        return (data << shift) | (data >>> (32 - shift));
    }
}
TSChaCha20.key = new Uint8Array(32);
TSChaCha20.nonce = new Uint8Array([80, 175, 71, 64, 161, 167, 129, 39, 94, 56, 118, 21]);

class CryptoTools {
    static xor(data, key) {
        var encodedString, out, i;
        encodedString = CustomTextEncoder.encode(data);
        out = new Uint8Array(encodedString.length);
        i = 0;
        while (i < encodedString.length) {
            out[i] = encodedString[i] ^ key[i % key.length];
            i++;
        }
        return out;
    }
    static getXorKey() {
        var a, b;
        a = 18;
        b = 77;
        return ((a ^ b) + 18) & 255;
    }
    static getTransformedPrivateServerKey() {
        var k, result, i;
        k = CryptoTools.getXorKey();
        result = new Uint8Array(CryptoTools.RAW_PRIVATE_SERVER_KEY.length);
        i = 0;
        while (i < CryptoTools.RAW_PRIVATE_SERVER_KEY.length) {
            result[i] = CryptoTools.RAW_PRIVATE_SERVER_KEY[i] ^ k;
            i++;
        }
        return result;
    }
}
CryptoTools.RAW_PRIVATE_SERVER_KEY = new Uint8Array([19, 66, 218, 17, 35, 255, 85, 1, 20, 118, 16, 101, 65, 89, 34, 19]);

class CustomCRC32 {
    static computeString(string, seed, unsigned) {
        var buffer;
        if (string === undefined) {
            string = false;
        }
        if (seed === undefined) {
            seed = 0;
        }
        if (unsigned === undefined) {
            unsigned = false;
        }
        buffer = CustomTextEncoder.encode(string);
        return CustomCRC32.compute(buffer, seed, unsigned);
    }
    static compute(buffer, seed, unsigned) {
        var crc, limit, i, res;
        if (buffer === undefined) {
            buffer = false;
        }
        if (seed === undefined) {
            seed = 0;
        }
        if (unsigned === undefined) {
            unsigned = false;
        }
        crc = seed ^ -1;
        limit = buffer.length - 15;
        i = 0;
        while (i < limit) {
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
        }
        limit = limit + 15;
        while (i < limit) {
            crc = (crc >>> 8) ^ CustomCRC32.table[(crc ^ buffer[i++]) & 255];
        }
        res = crc ^ -1;
        if (unsigned) {
            return res >>> 0;
        }
        return res;
    }
}
CustomCRC32.table = [];
CustomCRC32.table[32] = 1220004309;
CustomCRC32.table[33] = -363035796;
CustomCRC32.table[34] = 1608966394;
CustomCRC32.table[35] = 392852037;
CustomCRC32.table[36] = 253329295;
CustomCRC32.table[37] = -1537730440;
CustomCRC32.table[38] = 539588118;
CustomCRC32.table[39] = 1763082458;
CustomCRC32.table[40] = -1336282894;
CustomCRC32.table[41] = 2065632324;
CustomCRC32.table[42] = 1211842566;
CustomCRC32.table[43] = -124679017;
CustomCRC32.table[44] = -412707921;
CustomCRC32.table[45] = -1675089401;
CustomCRC32.table[46] = -2030960901;
CustomCRC32.table[47] = -1733918204;
CustomCRC32.table[48] = -1506871696;
CustomCRC32.table[49] = 1760290220;
CustomCRC32.table[50] = 1527587371;
CustomCRC32.table[51] = -227446141;
CustomCRC32.table[52] = 1997787836;
CustomCRC32.table[53] = 607374914;
CustomCRC32.table[54] = 1514661650;
CustomCRC32.table[55] = 1843888935;
CustomCRC32.table[56] = 678395711;
CustomCRC32.table[57] = 1507219768;
CustomCRC32.table[58] = 943974803;
CustomCRC32.table[59] = -196141525;
CustomCRC32.table[60] = -1857932358;
CustomCRC32.table[61] = 392503780;
CustomCRC32.table[62] = -591629387;
CustomCRC32.table[63] = -85209246;
CustomCRC32.table[64] = -673258112;
CustomCRC32.table[65] = 760703436;
CustomCRC32.table[66] = 437747905;
CustomCRC32.table[67] = 2019472798;
CustomCRC32.table[68] = 1348711780;
CustomCRC32.table[69] = -1821630346;
CustomCRC32.table[70] = -175419027;
CustomCRC32.table[71] = -891739048;
CustomCRC32.table[72] = -1952813463;
CustomCRC32.table[73] = 1549689146;
CustomCRC32.table[74] = 1898530381;
CustomCRC32.table[75] = -2046505898;
CustomCRC32.table[76] = 1244173434;
CustomCRC32.table[77] = 687830729;
CustomCRC32.table[78] = -1544065918;
CustomCRC32.table[79] = 520008747;
CustomCRC32.table[80] = 1856947879;
CustomCRC32.table[81] = -1868292415;
CustomCRC32.table[82] = -1547425349;
CustomCRC32.table[83] = 1521058259;
CustomCRC32.table[84] = -15089908;
CustomCRC32.table[85] = -1298835154;
CustomCRC32.table[86] = 1318833926;
CustomCRC32.table[87] = 2023910409;
CustomCRC32.table[88] = 768455991;
CustomCRC32.table[89] = -1749326715;
CustomCRC32.table[90] = -1215227621;
CustomCRC32.table[91] = 2080828856;
CustomCRC32.table[92] = 79645854;
CustomCRC32.table[93] = 442597317;
CustomCRC32.table[94] = -1931974620;
CustomCRC32.table[95] = 1532446875;
CustomCRC32.table[96] = -1531596314;
CustomCRC32.table[97] = -586252475;
CustomCRC32.table[98] = -1344461652;
CustomCRC32.table[99] = 354307023;
CustomCRC32.table[100] = -1537716931;
CustomCRC32.table[101] = -212445308;
CustomCRC32.table[102] = 106546594;
CustomCRC32.table[103] = -594916013;
CustomCRC32.table[104] = 252616363;
CustomCRC32.table[105] = -337759888;
CustomCRC32.table[106] = -1284652625;
CustomCRC32.table[107] = 1874940270;
CustomCRC32.table[108] = 1865903719;
CustomCRC32.table[109] = 1972493802;
CustomCRC32.table[110] = 2044956614;
CustomCRC32.table[111] = -1002931056;
CustomCRC32.table[112] = -1240739561;
CustomCRC32.table[113] = -972579224;
CustomCRC32.table[114] = -1881315073;
CustomCRC32.table[115] = -429837217;
CustomCRC32.table[116] = -1472205181;
CustomCRC32.table[117] = -1678238037;
CustomCRC32.table[118] = -858833666;
CustomCRC32.table[119] = 2076503897;
CustomCRC32.table[120] = -1892638352;
CustomCRC32.table[121] = -1216365689;
CustomCRC32.table[122] = -1796480935;
CustomCRC32.table[123] = 789994265;
CustomCRC32.table[124] = -1448149212;
CustomCRC32.table[125] = 1788930776;
CustomCRC32.table[126] = -274551463;
CustomCRC32.table[127] = 2026652411;
CustomCRC32.table[128] = -166450296;
CustomCRC32.table[129] = -1673060056;
CustomCRC32.table[130] = -1917173553;
CustomCRC32.table[131] = 216794426;
CustomCRC32.table[132] = -441841207;
CustomCRC32.table[133] = -1426125945;
CustomCRC32.table[134] = -370212787;
CustomCRC32.table[135] = -798111194;
CustomCRC32.table[136] = 1975928216;
CustomCRC32.table[137] = -1499679994;
CustomCRC32.table[138] = 78150319;
CustomCRC32.table[139] = 2124462265;
CustomCRC32.table[140] = -1689852222;
CustomCRC32.table[141] = 1655056910;
CustomCRC32.table[142] = -244159727;
CustomCRC32.table[143] = 588227169;
CustomCRC32.table[144] = 1505786903;
CustomCRC32.table[145] = 1030394767;
CustomCRC32.table[146] = 17030091;
CustomCRC32.table[147] = 1986776980;
CustomCRC32.table[148] = -925811585;
CustomCRC32.table[149] = 524888131;
CustomCRC32.table[150] = 1881585743;
CustomCRC32.table[151] = -2174431;
CustomCRC32.table[152] = 1270900360;
CustomCRC32.table[153] = -710870589;
CustomCRC32.table[154] = 1576306823;
CustomCRC32.table[155] = -709116485;
CustomCRC32.table[156] = -1791011526;
CustomCRC32.table[157] = 1504427826;
CustomCRC32.table[158] = -135006858;
CustomCRC32.table[159] = 348516469;
CustomCRC32.table[160] = -2074529330;
CustomCRC32.table[161] = 1500183187;
CustomCRC32.table[162] = 1344860186;
CustomCRC32.table[163] = 1536094629;
CustomCRC32.table[164] = -572430676;
CustomCRC32.table[165] = -284413998;
CustomCRC32.table[166] = -1529395156;
CustomCRC32.table[167] = -488190382;
CustomCRC32.table[168] = 1797633882;
CustomCRC32.table[169] = -1015225963;
CustomCRC32.table[170] = 413805665;
CustomCRC32.table[171] = -685942503;
CustomCRC32.table[172] = -1685568600;
CustomCRC32.table[173] = 627401683;
CustomCRC32.table[174] = 116364400;
CustomCRC32.table[175] = 531493240;
CustomCRC32.table[176] = -1366587281;
CustomCRC32.table[177] = -224148089;
CustomCRC32.table[178] = -2134317383;
CustomCRC32.table[179] = 1512056144;
CustomCRC32.table[180] = 707869409;
CustomCRC32.table[181] = 2015432464;
CustomCRC32.table[182] = -555257831;
CustomCRC32.table[183] = -1823106709;
CustomCRC32.table[184] = -2017227116;
CustomCRC32.table[185] = 384840964;
CustomCRC32.table[186] = -1626040548;
CustomCRC32.table[187] = -389413950;
CustomCRC32.table[188] = -1088101231;
CustomCRC32.table[189] = -515812243;
CustomCRC32.table[190] = 189043626;
CustomCRC32.table[191] = -1668067859;
CustomCRC32.table[192] = -423002474;
CustomCRC32.table[193] = 1027460951;
CustomCRC32.table[194] = -2132843594;
CustomCRC32.table[195] = 1614537403;
CustomCRC32.table[196] = -1641647107;
CustomCRC32.table[197] = -2013273613;
CustomCRC32.table[198] = 438474503;
CustomCRC32.table[199] = -614276211;
CustomCRC32.table[200] = -969583346;
CustomCRC32.table[201] = -1474247062;
CustomCRC32.table[202] = -1848222977;
CustomCRC32.table[203] = 210588010;
CustomCRC32.table[204] = 902121041;
CustomCRC32.table[205] = 2010291613;
CustomCRC32.table[206] = -1804008788;
CustomCRC32.table[207] = 628152461;
CustomCRC32.table[208] = 2084664474;
CustomCRC32.table[209] = -344227228;
CustomCRC32.table[210] = -603592810;
CustomCRC32.table[211] = -1541207002;
CustomCRC32.table[212] = -230902764;
CustomCRC32.table[213] = -539649005;
CustomCRC32.table[214] = -1047848744;
CustomCRC32.table[215] = -533873412;
CustomCRC32.table[216] = 1845094808;
CustomCRC32.table[217] = -729241166;
CustomCRC32.table[218] = -1395241173;
CustomCRC32.table[219] = 879220120;
CustomCRC32.table[220] = -1089994417;
CustomCRC32.table[221] = 525177384;
CustomCRC32.table[222] = -1810498200;
CustomCRC32.table[223] = 827527796;
CustomCRC32.table[224] = -134578779;
CustomCRC32.table[225] = -2021483134;
CustomCRC32.table[226] = -418423762;
CustomCRC32.table[227] = 1019524024;
CustomCRC32.table[228] = -535050889;
CustomCRC32.table[229] = -252458152;
CustomCRC32.table[230] = -1682441706;
CustomCRC32.table[231] = -1495421285;
CustomCRC32.table[232] = 2141988229;
CustomCRC32.table[233] = 466026629;
CustomCRC32.table[234] = 1119304525;
CustomCRC32.table[235] = 1654238071;
CustomCRC32.table[236] = -1728257935;
CustomCRC32.table[237] = 396442331;
CustomCRC32.table[238] = 1436147381;
CustomCRC32.table[239] = -729309139;
CustomCRC32.table[240] = 616901707;
CustomCRC32.table[241] = -1035453084;
CustomCRC32.table[242] = 501784822;
CustomCRC32.table[243] = 460190857;
CustomCRC32.table[244] = 371551009;
CustomCRC32.table[245] = -482933540;
CustomCRC32.table[246] = -433615066;
CustomCRC32.table[247] = 1980261862;
CustomCRC32.table[248] = 432382483;
CustomCRC32.table[249] = 1133061464;
CustomCRC32.table[250] = -697005032;
CustomCRC32.table[251] = -416437275;
CustomCRC32.table[252] = -1105922530;
CustomCRC32.table[253] = -2145913678;
CustomCRC32.table[254] = -871086876;
CustomCRC32.table[255] = 2117243748;

var eccDigestGetterOffset = Libg.offset(11861716, 0);
var CLEAN_ECC_DIGEST_ANDROID = 1944213199;
var CLEAN_ECC_DIGEST_IOS = 0;

class EccDigest {
    static patch() {
        var cleanValue;
        if (Process.platform === "darwin") {
            cleanValue = CLEAN_ECC_DIGEST_IOS;
        } else {
            cleanValue = CLEAN_ECC_DIGEST_ANDROID;
        }
        return;
    }
}
