class Protector {
    static init() {
        this.bssSegmentOffset = Protector.findBssSegmentStart();
    }
    static findBssSegmentStart() {
        var section = Process.getModuleByName("libBSD.so").enumerateSections().find(function (section) {
            return section.name === ".bss";
        });
        if (!section) {
            throw new Error("No .bss in protector");
        }
        return section.address;
    }
    static getOffsetOf(type) {
        if (this.bssSegmentOffset.isNull()) {
            this.init();
        }
        if (type === this.Globals.AttestationCallback) {
            return this.bssSegmentOffset.add(8);
        }
        if (type === this.Globals.LibgOffset) {
            return this.bssSegmentOffset.add(16);
        }
        throw new Error("Unknown type ".concat(type));
    }
}
Protector.bssSegmentOffset = NULL;
Protector.Globals = { AttestationCallback: 0, LibgOffset: 1 };

var getAppAttestationResponseTokenOffset = Libg.offset(6765520, 0);
var STATIC_KEY = new Uint8Array([233, 84]);
var TOKEN_SIZE = 80;
var DEFAULT_STATE = new Uint32Array(8);
var ROUND_CONSTANTS = [];
var M = new Uint32Array(64);
var LITTLE_ENDIAN = !!new Uint8Array(new Uint32Array([1]).buffer)[0];

(function initSha256Tables() {
    var pow = Math.pow;
    var fract = function (x) {
        return (x - Math.floor(x)) * 4294967296;
    };
    var n = 2;
    var nPrime = 0;
    while (nPrime < 64) {
        var isPrime = true;
        var f = 2;
        while (f <= n / 2) {
            if (n % f === 0) {
                isPrime = false;
            }
            f++;
        }
        if (isPrime) {
            if (nPrime < 8) {
                DEFAULT_STATE[nPrime] = fract(pow(n, 1 / 2));
            }
            ROUND_CONSTANTS[nPrime] = fract(pow(n, 1 / 3));
            nPrime++;
        }
        n++;
    }
})();

var kAttestKey = new Uint8Array([79, 229]);
var kSecondaryIV = new Uint8Array([0, 132]);

var SHA256_K = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

var MASK64 = (BigInt(1) << BigInt(64)) - BigInt(1);
var NEG_1027_U64 = ((MASK64 + BigInt(1)) - BigInt(1027)) & MASK64;
var POS_1027 = BigInt(1027);

function convertEndian(word) {
    if (!LITTLE_ENDIAN) {
        return word;
    }
    return ((word >>> 24) | ((word >>> 16) & 255) << 8) | ((word & 65280) << 8) | (word << 24);
}

function rightRotate(word, bits) {
    return (word >>> bits) | (word << (32 - bits));
}

function sha256(data) {
    var STATE = DEFAULT_STATE.slice();
    var length = data.length;
    var bitLength = length * 8;
    var newBitLength = (512 - ((bitLength + 64) % 512)) - 1 + bitLength + 65;
    var bytes = new Uint8Array(newBitLength / 8);
    bytes.set(data);
    var words = new Uint32Array(bytes.buffer);
    bytes[length] = 128;
    words[words.length - 1] = convertEndian(bitLength);
    var block = 0;
    while (block < newBitLength / 32) {
        var ws = STATE.slice();
        var round = 0;
        while (round < 64) {
            var MRound;
            if (round < 16) {
                MRound = convertEndian(words[block + round]);
            } else {
                var g0 = M[round - 15];
                var g1 = M[round - 2];
                MRound = (M[round - 7] + M[round - 16] + ((rightRotate(g0, 7) ^ rightRotate(g0, 18)) ^ (g0 >>> 3)) + ((rightRotate(g1, 17) ^ rightRotate(g1, 19)) ^ (g1 >>> 10)));
            }
            MRound = MRound | 0;
            M[round] = MRound | 0;
            var t1 = (rightRotate(ws[4], 6) ^ rightRotate(ws[4], 11) ^ rightRotate(ws[4], 25)) + ((ws[4] & ws[5]) ^ (~ws[4] & ws[6])) + ws[7] + MRound + ROUND_CONSTANTS[round];
            var t2 = (rightRotate(ws[0], 2) ^ rightRotate(ws[0], 13) ^ rightRotate(ws[0], 22)) + ((ws[0] & ws[1]) ^ (ws[2] & (ws[0] ^ ws[1])));
            var i = 7;
            while (i > 0) {
                ws[i] = ws[i - 1];
                i--;
            }
            ws[0] = (t1 + t2) | 0;
            ws[4] = (ws[4] + t1) | 0;
            round++;
        }
        round = 0;
        while (round < 8) {
            STATE[round] = (STATE[round] + ws[round]) | 0;
            round++;
        }
        block = block + 16;
    }
    return new Uint8Array(new Uint32Array(STATE.map(convertEndian)).buffer);
}

function hmac(key, data) {
    if (key.length > 64) {
        key = sha256(key);
    }
    if (key.length < 64) {
        var tmp = new Uint8Array(64);
        tmp.set(key);
        key = tmp;
    }
    var inner = new Uint8Array(64);
    var outer = new Uint8Array(64);
    var i = 0;
    while (i < 64) {
        inner[i] = 54 ^ key[i];
        outer[i] = 92 ^ key[i];
        i++;
    }
    var msg = new Uint8Array(data.length + 64);
    msg.set(inner);
    msg.set(data, 64);
    var result = new Uint8Array(96);
    result.set(outer);
    result.set(sha256(msg), 64);
    return sha256(result);
}

function bytesToReversedU64(bytes) {
    if (bytes.length % 8 !== 0) {
        throw new Error("Length must be divisible by 8");
    }
    var out = new BigUint64Array(bytes.length / 8);
    var i = 0;
    while (i < bytes.length) {
        var hex = "";
        var j = 7;
        while (j >= 0) {
            hex = hex + bytes[i + j].toString(16).padStart(2, "0");
            j--;
        }
        out[i / 8] = BigInt("0x" + hex);
        i = i + 8;
    }
    return out;
}

function reversedU64ToBytes(words) {
    var out = new Uint8Array(words.length * 8);
    var i = 0;
    while (i < words.length) {
        var hex = words[i].toString(16).padStart(16, "0");
        var chunk = new Uint8Array(8);
        var j = 0;
        while (j < 8) {
            chunk[7 - j] = parseInt(hex.substr(j * 2, 2), 16);
            j++;
        }
        out.set(chunk, i * 8);
        i++;
    }
    return out;
}

function randomBytes(length) {
    var out = new Uint8Array(length);
    var i = 0;
    while (i < length) {
        out[i] = Math.floor(Math.random() * 256);
        i++;
    }
    return out;
}

function computeAttestationToken(requestToken) {
    var head = requestToken.slice(0, 8);
    var requestU64 = bytesToReversedU64(requestToken);
    var unpacked = new BigUint64Array(4);
    var i = 3;
    while (i > 0) {
        unpacked[i] = requestU64[i] - BigInt(1027) * requestU64[i - 1];
        i--;
    }
    unpacked[0] = bytesToReversedU64(head)[0];
    var hmacResult = hmac(reversedU64ToBytes(unpacked), STATIC_KEY);
    var qualifiers = Array.from(unpacked).concat(Array.from(bytesToReversedU64(hmacResult)));
    var tok = new BigUint64Array(10);
    tok[0] = bytesToReversedU64(randomBytes(8))[0];
    qualifiers.push(tok[0]);
    i = 0;
    while (i < 9) {
        tok[i + 1] = qualifiers[i] + BigInt(1027) * tok[i];
        i++;
    }
    return reversedU64ToBytes(tok);
}

function rotr32(x, n) {
    return ((x >>> n) | (x << (32 - n))) >>> 0;
}

function sha256Compress(state, block, blockOffset) {
    var w = new Uint32Array(64);
    var i = 0;
    while (i < 16) {
        var o = blockOffset + i * 4;
        w[i] = ((block[o] << 24) | (block[o + 1] << 16) | (block[o + 2] << 8) | block[o + 3]) >>> 0;
        i++;
    }
    i = 16;
    while (i < 64) {
        var s0 = (rotr32(w[i - 15], 7) ^ rotr32(w[i - 15], 18)) ^ (w[i - 15] >>> 3);
        var s1 = (rotr32(w[i - 2], 17) ^ rotr32(w[i - 2], 19)) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
        i++;
    }
    var a = state[0];
    var b = state[1];
    var c = state[2];
    var d = state[3];
    var e = state[4];
    var f = state[5];
    var g = state[6];
    var h = state[7];
    i = 0;
    while (i < 64) {
        var S1 = (rotr32(e, 6) ^ rotr32(e, 11)) ^ rotr32(e, 25);
        var ch = (e & f) ^ (~e & g);
        var t1 = (((h + S1) + ch) + SHA256_K[i]) + w[i] >>> 0;
        var S0 = (rotr32(a, 2) ^ rotr32(a, 13)) ^ rotr32(a, 22);
        var mj = ((a & b) ^ (a & c)) ^ (b & c);
        var t2 = (S0 + mj) >>> 0;
        h = g;
        g = f;
        f = e;
        e = (d + t1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (t1 + t2) >>> 0;
        i++;
    }
    state[0] = (state[0] + a) >>> 0;
    state[1] = (state[1] + b) >>> 0;
    state[2] = (state[2] + c) >>> 0;
    state[3] = (state[3] + d) >>> 0;
    state[4] = (state[4] + e) >>> 0;
    state[5] = (state[5] + f) >>> 0;
    state[6] = (state[6] + g) >>> 0;
    state[7] = (state[7] + h) >>> 0;
}

function sha256WithCustomIV(data, iv, bitOffset) {
    var state = new Uint32Array(8);
    var i = 0;
    while (i < 8) {
        state[i] = ((iv[4 * i] | (iv[(4 * i) + 1] << 8)) | (iv[(4 * i) + 2] << 16) | (iv[(4 * i) + 3] << 24)) >>> 0;
        i++;
    }
    var len = data.length;
    var paddedSize = Math.floor((len + 72) / 64) * 64;
    var buf = new Uint8Array(paddedSize);
    if (len > 0) {
        buf.set(data);
    }
    buf[len] = 128;
    var bitLen = BigInt(bitOffset) + (BigInt(len) * BigInt(8));
    var j = 0;
    while (j < 8) {
        buf[(paddedSize - 1) - j] = Number((bitLen >> BigInt(8 * j)) & BigInt(255));
        j++;
    }
    var k = 0;
    while (k < paddedSize) {
        sha256Compress(state, buf, k);
        k = k + 64;
    }
    var out = new Uint8Array(32);
    var m = 0;
    while (m < 8) {
        out[4 * m] = (state[m] >>> 24) & 255;
        out[(4 * m) + 1] = (state[m] >>> 16) & 255;
        out[(4 * m) + 2] = (state[m] >>> 8) & 255;
        out[(4 * m) + 3] = state[m] & 255;
        m++;
    }
    return out;
}

function sha256Custom(data, iv) {
    return sha256WithCustomIV(data, iv, 512);
}

function packLe64(v, dst, offset) {
    var x = v & MASK64;
    var i = 0;
    while (i < 8) {
        dst[offset + i] = Number(x & BigInt(255));
        x = x >> BigInt(8);
        i++;
    }
}

function readLe64(bytes, offset) {
    var v = BigInt(0);
    var i = 7;
    while (i >= 0) {
        v = (v << BigInt(8)) | BigInt(bytes[offset + i]);
        i--;
    }
    return v;
}

function maddU64(a, b, c) {
    return ((a * b) + c) & MASK64;
}

function hashInternal(input, serverTime, serverMask, serverRandom) {
    var buf24 = new Uint8Array(24);
    packLe64(input, buf24, 0);
    packLe64(serverTime, buf24, 8);
    packLe64(serverMask, buf24, 16);
    var h1 = sha256Custom(buf24, kAttestKey);
    h1 = sha256Custom(h1, kSecondaryIV);
    var arr = [];
    var suffix = Number(serverMask & BigInt(14));
    if ((serverMask & BigInt(2)) !== BigInt(0)) {
        var rec = new Uint8Array(9);
        packLe64(BigInt(2), rec, 0);
        rec[8] = suffix;
        arr.push(sha256(rec));
    }
    if ((serverMask & BigInt(4)) !== BigInt(0)) {
        rec = new Uint8Array(9);
        packLe64(BigInt(4), rec, 0);
        rec[8] = suffix;
        arr.push(sha256(rec));
    }
    var bit8sha = null;
    if ((serverMask & BigInt(8)) !== BigInt(0)) {
        rec = new Uint8Array(9);
        packLe64(BigInt(8), rec, 0);
        rec[8] = suffix;
        bit8sha = sha256(rec);
    }
    var v47 = null;
    if (arr.length > 0) {
        var totalLen = 0;
        for (var d of arr) {
            totalLen = totalLen + d.length;
        }
        var concat = new Uint8Array(totalLen);
        var p = 0;
        for (d of arr) {
            concat.set(d, p);
            p = p + d.length;
        }
        v47 = sha256Custom(sha256Custom(concat, kAttestKey), kSecondaryIV);
    }
    var v42 = null;
    if (bit8sha) {
        v42 = sha256Custom(sha256Custom(bit8sha, kAttestKey), kSecondaryIV);
    }
    var mergedLen = 0;
    if (v47) {
        mergedLen = mergedLen + v47.length;
    }
    if (v42) {
        mergedLen = mergedLen + v42.length;
    }
    var merged = new Uint8Array(mergedLen);
    var mp = 0;
    if (v47) {
        merged.set(v47, mp);
        mp = mp + v47.length;
    }
    if (v42) {
        merged.set(v42, mp);
        mp = mp + v42.length;
    }
    var v38 = sha256Custom(sha256Custom(merged, kAttestKey), kSecondaryIV);
    var key32 = new Uint8Array(32);
    packLe64(input, key32, 0);
    packLe64(serverTime, key32, 8);
    packLe64(serverMask, key32, 16);
    packLe64(serverRandom, key32, 24);
    return hmac(key32, v38);
}

function attestInternalIos(request, clientTime, randomData) {
    var q0 = readLe64(request, 0);
    var q1 = readLe64(request, 8);
    var q2 = readLe64(request, 16);
    var q3 = readLe64(request, 24);
    var clientRandom = readLe64(randomData, 0);
    var serverTime = maddU64(q0, NEG_1027_U64, q1);
    var serverMask = maddU64(q1, NEG_1027_U64, q2);
    var serverRandom = maddU64(q2, NEG_1027_U64, q3);
    var hashData = hashInternal(q0, serverTime, serverMask, serverRandom);
    var h0 = readLe64(hashData, 0);
    var h1 = readLe64(hashData, 8);
    var h2 = readLe64(hashData, 16);
    var h3 = readLe64(hashData, 24);
    var out = new BigUint64Array(10);
    out[0] = clientRandom;
    out[1] = maddU64(out[0], POS_1027, clientTime);
    out[2] = maddU64(out[1], POS_1027, q0);
    out[3] = maddU64(out[2], POS_1027, serverTime);
    out[4] = maddU64(out[3], POS_1027, serverMask);
    out[5] = maddU64(out[4], POS_1027, serverRandom);
    out[6] = maddU64(out[5], POS_1027, h0);
    out[7] = maddU64(out[6], POS_1027, h1);
    out[8] = maddU64(out[7], POS_1027, h2);
    out[9] = maddU64(out[8], POS_1027, h3);
    var result = new Uint8Array(80);
    var i = 0;
    while (i < 10) {
        packLe64(out[i], result, i * 8);
        i++;
    }
    return result;
}

class Attestation {
    static patch() {
        if (Process.platform === "darwin") {
            Attestation.patchIos();
        } else {
            Attestation.patchAndroid();
        }
        this.isPatched = true;
    }
    static patchAndroid() {
        var requestToken = null;
        Interceptor.attach(getAppAttestationResponseTokenOffset, {
            onEnter(args) {
                requestToken = new Uint8Array(args[0].readPointer().readByteArray(32));
            }
        });
        Attestation.token = new NativeCallback(function (buffer) {
            if (!requestToken) {
                return;
            }
            var out = computeAttestationToken(requestToken);
            buffer.writeByteArray(out);
        }, "void", ["pointer"]);
        Protector.getOffsetOf(Protector.Globals.AttestationCallback).writePointer(Attestation.token);
    }
    static patchIos() {
        var ZnwmSym = Module.findExportByName(null, "_Znwm");
        if (!ZnwmSym) {
            return;
        }
        var operatorNew = new NativeFunction(ZnwmSym, "pointer", ["size_t"]);
        var arc4randomBufSym = Module.findExportByName(null, "arc4random_buf");
        var arc4random = null;
        if (arc4randomBufSym) {
            arc4random = new NativeFunction(arc4randomBufSym, "void", ["pointer", "size_t"]);
        }
        var requestToken = null;
        Interceptor.attach(getAppAttestationResponseTokenOffset, {
            onEnter(args) {
                requestToken = new Uint8Array(args[0].readPointer().readByteArray(32));
            }
        });
        Attestation.token = new NativeCallback(function (buffer) {
            if (!requestToken) {
                return;
            }
            var randomData = new Uint8Array(8);
            if (arc4random) {
                arc4random(randomData, 8);
            }
            var out = attestInternalIos(requestToken, BigInt(Date.now()), randomData);
            buffer.writeByteArray(out);
        }, "void", ["pointer"]);
        Protector.getOffsetOf(Protector.Globals.AttestationCallback).writePointer(Attestation.token);
    }
}
Attestation.isPatched = false;

class IntegrityControl {
    static test() {
        if (!Attestation.isPatched) {
            EDebugger.addMessage(EDebugger.ERROR, "Attestation is not patched! Immediately abort logging in if using main account!");
            return;
        }
    }
}

var tamperStatusGetterOffset = Libg.offset(7465640, 0);

class TamperStatus {
    static patch() {
        if (Process.platform === "darwin") {
            return;
        }
        TamperStatus.forceGetterReturnZero();
    }
    static forceGetterReturnZero() {
        Interceptor.attach(tamperStatusGetterOffset, {
            onLeave(retval) {
                retval.replace(0);
            }
        });
    }
}

var apkSignatureVerifyOffset = Libg.offset(11854252, 0);
var SIGNATURE_OK = 3;

class ApkSignature {
    static patch() {
        if (Process.platform === "darwin") {
            return;
        }
        Interceptor.attach(apkSignatureVerifyOffset, {
            onLeave(retval) {
                retval.replace(SIGNATURE_OK);
            }
        });
    }
}

var FramePresenter_present = Libg.offset(7541292);
var FrameRateConfig_instance = Libg.offset(19832880);
var FrameRateConfig_initializationGuard = Libg.offset(19832920);
var frameRateLimitOffset = LogicMemory.offset(0);
var targetFrameRateLimitOffset = LogicMemory.offset(32);

var wendelstein = {};

class SentryFilter {
    static patch() {
        var libsentry = Process.findModuleByName(SentryFilter.LIBSENTRY_NAME);
        if (!libsentry) {
            return;
        }
        SentryFilter.replaceWithNoop(libsentry, "sentry_init", function () {
            return -1;
        }, "int", ["pointer"]);
        SentryFilter.replaceWithNoop(libsentry, "sentry_envelope_serialize", function () {
            return NULL;
        }, "pointer", ["pointer", "pointer"]);
        SentryFilter.replaceWithNoop(libsentry, "sentry_envelope_write_to_file", function () {
            return -1;
        }, "int", ["pointer", "pointer"]);
        SentryFilter.replaceWithNoop(libsentry, "sentry_envelope_write_to_file_n", function () {
            return -1;
        }, "int", ["pointer", "pointer", "uint64"]);
        SentryFilter.replaceWithNoop(libsentry, "sentry_handle_exception", function () {
            return -1;
        }, "int", ["pointer"]);
        SentryFilter.replaceWithNoop(libsentry, "sentry_capture_minidump", function () {
            return NULL;
        }, "pointer", ["pointer"]);
        SentryFilter.replaceWithNoop(libsentry, "sentry_capture_minidump_n", function () {
            return NULL;
        }, "pointer", ["pointer", "uint64"]);
    }
    static replaceWithNoop(module, exportName, impl, retType, argTypes) {
        var addr = module.findExportByName(exportName);
        if (!addr) {
            return;
        }
        Interceptor.replace(addr, new NativeCallback(impl, retType, argTypes));
    }
}
SentryFilter.LIBSENTRY_NAME = "libsentry.so";

var NativeHTTPClientManager_startGetRequest = Libg.offset(7653996, 0);
var NativeHTTPClientManager_getFinished = Libg.offset(7366932, 0);

class Breadcrumbs {
    static push(label) {
        var last = this.entries[this.entries.length - 1];
        if (last) {
            if (last.label === label) {
                last.count++;
                return;
            }
        }
        if (this.entries.length >= this.MAX) {
            this.entries.shift();
        }
        this.entries.push({ label: label, count: 1 });
        return;
    }
    static dump() {
        return this.entries.map(function (e) {
            if (e.count > 1) {
                return "".concat(e.label, " (x", e.count, ")");
            }
            return e.label;
        }).join("\n");
    }
    static hasCrumbs() {
        return this.entries.length !== 0;
    }
    static clear() {
        this.entries.length = 0;
        return;
    }
    static initCrashDebug() {
        if (Process.platform === "darwin") {
            return;
        }
        Interceptor.attach(NativeHTTPClientManager_startGetRequest, {
            onEnter(args) {
                try {
                    this.requestUrl = StringObject.read(args[0]).split(/[?#]/, 1)[0].replace(/^(https?:\/\/)[^/]*@/, "$1").substring(0, 200);
                } catch (e) {
                    this.requestUrl = "(unreadable URL)";
                }
            },
            onLeave(result) {
                Breadcrumbs.recordHttp("GET " + this.requestUrl);
            }
        });
    }
    static recordHttp(message) {
        Breadcrumbs.push(message);
        if (ModProperties.isDev()) {
            Logcat.logDebug("[HTTP] ".concat(message));
            return;
        }
    }
    static initIOSCrashDebug() {
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_get, {
            onEnter(args) {
                var url;
                try {
                    url = StringObject.read(args[1]);
                    Breadcrumbs.push("GET ".concat(url.substring(0, 200)));
                } catch (e) {
                    Breadcrumbs.push("GET (read fail)");
                }
            }
        });
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_post, {
            onEnter(args) {
                var url, bodyLen;
                try {
                    url = StringObject.read(args[1]);
                    bodyLen = args[3].toInt32();
                    Breadcrumbs.push("POST ".concat(url.substring(0, 200), " len=", bodyLen));
                } catch (e) {
                    Breadcrumbs.push("POST (read fail)");
                }
            }
        });
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_download, {
            onEnter(args) {
                var url, path, slash, fname;
                try {
                    url = StringObject.read(args[1]);
                    path = StringObject.read(args[2]);
                    slash = path.lastIndexOf("/");
                    fname = path;
                    if (slash >= 0) {
                        fname = path.substring(slash + 1);
                    }
                    Breadcrumbs.push("DL ".concat(url.substring(0, 200), " → ", fname));
                } catch (e) {
                    Breadcrumbs.push("DL (read fail)");
                }
            }
        });
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_getMainTrampoline, {
            onEnter(args) {
                var status, code;
                try {
                    status = args[0].add(56).readU32();
                    code = args[0].add(60).readU32();
                    Breadcrumbs.push("GET← status=".concat(status, " code=", code));
                } catch (e) {
                }
            }
        });
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_postMainTrampoline, {
            onEnter(args) {
                var status, code;
                try {
                    status = args[0].add(56).readU32();
                    code = args[0].add(60).readU32();
                    Breadcrumbs.push("POST← status=".concat(status, " code=", code));
                } catch (e) {
                }
            }
        });
    }
}
Breadcrumbs.MAX = 64;
Breadcrumbs.entries = [];

var CONNECTION_ERROR_SUBSTRINGS = ["could not connect", "No address associated", "Connection reset by peer", "Connection timed out", "Software caused connection abort"];

class ExceptionWorker {
    static init() {
        if (ExceptionWorker.READY) {
            return;
        }
        ExceptionWorker.READY = true;
        ExceptionWorker.flushPendingCrashLog();
        ExceptionWorker.installJsErrorTrap();
    }
    static flushPendingCrashLog() {
        var crashLog, tag;
        if (!FileManager.isFilepath(ExceptionWorker.crashLogDir)) {
            return;
        }
        crashLog = FileManager.readFile(ExceptionWorker.crashLogDir, "r");
        if (!crashLog) {
            return;
        }
        tag = FileManager.readFile(ExceptionWorker.tagDir, "r");
        ExceptionWorker.logException("CRASH", crashLog, tag);
    }
    static installJsErrorTrap() {
        var original = Error.prepareStackTrace;
        Error.prepareStackTrace = function (e, s) {
            var stack, text, isConnectionError;
            stack = original(e, s);
            text = ExceptionWorker.formatJsException(e, String(stack));
            if (ModProperties.isDev()) {
                Logcat.logDebug(text);
            }
            isConnectionError = CONNECTION_ERROR_SUBSTRINGS.some(function (sub) {
                return text.includes(sub);
            });
            if (!isConnectionError) {
                EDebugger.addMessage(EDebugger.ERROR, text);
                ExceptionWorker.logException("JSERROR", [text, "", "Breadcrumbs:", Breadcrumbs.dump()].join("\n"));
            }
            return text;
        };
        return;
    }
    static formatJsException(error, stack) {
        var details = error;
        try {
            if (details.context == null) {
                return stack;
            }
            if (!details.context.pc) {
                return stack;
            }
            var modules = ExceptionWorker.snapshotModules();
            if (details.type == null) {
            }
            var lines = [stack, "", "Native fault: ".concat("exception", " at ", ExceptionWorker.formatAddress(details.context.pc, modules)), "libg base=".concat(Libg.libgBeginOffset)];
            if (details.memory) {
                lines.push("Memory: ".concat(details.memory.operation, " at ", details.memory.address));
            }
            lines.push("Registers:\n" + ExceptionWorker.formatRegisters(details.context));
            lines.push("Backtrace:\n" + ExceptionWorker.formatBacktrace(details.context, modules));
            return lines.join("\n");
        } catch (e) {
            return stack;
        }
    }
    static installNativeExceptionHandler() {
        var modules = ExceptionWorker.snapshotModules();
        return;
    }
    static snapshotModules() {
        return Process.enumerateModules().map(function (module) {
            if (module.base.equals(Libg.libgBeginOffset)) {
                module.name = "libg.so";
            }
            return module;
        });
    }
    static formatAddress(address, modules) {
        var module = modules.find(function (candidate) {
            if (address.compare(candidate.base) >= 0) {
                return address.compare(candidate.base.add(candidate.size)) < 0;
            }
        });
        if (module) {
            return "".concat(module.name, "+", address.sub(module.base));
        }
        return address.toString();
    }
    static formatRegisters(context) {
        var registers = [];
        var index = 0;
        while (index < 29) {
            registers.push("x".concat(index, "=", context["x" + index]));
            index++;
        }
        registers.push("fp=".concat(context.fp), "lr=".concat(context.lr), "sp=".concat(context.sp), "pc=".concat(context.pc));
        return registers.join("  ");
    }
    static formatBacktrace(context, modules) {
        try {
            return Thread.backtrace(context, Backtracer.FUZZY).map(function (address) {
                return ExceptionWorker.formatAddress(address, modules);
            }).join("\n");
        } catch (e) {
            return "(backtrace failed)";
        }
    }
    static async logException(exceptionType, exception, tag) {
        if (ExceptionWorker.READY) {
            if (ExceptionWorker.reportInProgress) {
                return;
            }
        }
        ExceptionWorker.reportInProgress = true;
        try {
            await BSDMessageManager.sendMessage(new LogExceptionMessage(exceptionType, exception, tag));
        } catch (e) {
            Logcat.logError("Could not send exception report");
        } finally {
            ExceptionWorker.reportInProgress = false;
        }
    }
    static get crashLogDir() {
        return FileManager.saveDirPath + ExceptionWorker.CRASHLOG_FILE;
    }
    static get tagDir() {
        return FileManager.saveDirPath + ExceptionWorker.PLAYERTAG_FILE;
    }
    static saveCrashLog(message) {
        if (PlayerInfo.tag == null) {
            FileManager.writeToFile(ExceptionWorker.tagDir, "w", "UNKNOWN");
        } else {
            FileManager.writeToFile(ExceptionWorker.tagDir, "w", PlayerInfo.tag);
        }
        FileManager.writeToFile(ExceptionWorker.crashLogDir, "w", message);
    }
}
ExceptionWorker.CRASHLOG_FILE = "/bsd_crash.log";
ExceptionWorker.PLAYERTAG_FILE = "/bsd_tag.log";
ExceptionWorker.IS_EXCEPTION_THROWN = false;
ExceptionWorker.reportInProgress = false;
ExceptionWorker.READY = false;
