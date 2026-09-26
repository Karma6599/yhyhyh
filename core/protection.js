//============================================================================//// PROTECTION / INTEGRITY / TELEMETRY// merged webpack modules: 1398 Protector, 4776 IntegrityControl, 7726 TamperStatus, 8669 ApkSignature, 6055 Attestation, 3707 Wendelstein, 4844 SentryFilter, 4419 ExceptionWorker, 4974 Breadcrumbs//============================================================================//
// --------------------- MODULE 1398 — Protector ---------------------


// ============================================================ //
// webpack module 1398  —  Protector
// exports: Protector
// ============================================================ //

__webpack_modules__[1398] = function Protector_factory(__unused_webpack_module, exports) {
    var Protector, <class_fields_init>, Protector;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Protector = undefined;
        <class_fields_init> = undefined;
        Protector;
        class Protector {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x8456e (open) */
}
            init () {
        this.bssSegmentOffset = (Protector).findBssSegmentStart();
        return;
}
            findBssSegmentStart () {
    var section;
        section = (((Process).getModuleByName("libBSD.so")).enumerateSections()).find(function (section) {
        return ((section).name === ".bss");
});
        if ((!section)) {
            throw new Error("No .bss in protector");
        } /* if 0x8447f */
        return (section).address;
}
            getOffsetOf (type) {
        if (((this).bssSegmentOffset).isNull()) {
            (this).init();
        } /* if 0x844e8 */
        if ((type === ((this).Globals).AttestationCallback)) {
            return ((this).bssSegmentOffset).add(8);
        } /* if 0x84508 */
        if ((type === ((this).Globals).LibgOffset)) {
            return ((this).bssSegmentOffset).add(16);
        } /* if 0x84527 */
        throw new Error(("Unknown type ").concat(type));
}
        }
        Protector = Protector = Protector;
        exports.Protector = Protector;
        Protector.bssSegmentOffset = NULL;
        Protector.Globals = { AttestationCallback: 0, LibgOffset: 1 };
        return;
};

// --------------------- MODULE 4776 — IntegrityControl ---------------------


// ============================================================ //
// webpack module 4776  —  IntegrityControl
// exports: IntegrityControl
// deps: 4272 (EDebugger), 6055 (Attestation)
// ============================================================ //

__webpack_modules__[4776] = function IntegrityControl_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Attestation, EDebugger, IntegrityControl, <class_fields_init>, IntegrityControl;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IntegrityControl = undefined;
        Attestation = __webpack_require__(6055);
        EDebugger = __webpack_require__(4272);
        <class_fields_init> = undefined;
        IntegrityControl;
        class IntegrityControl {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xe2b0d (open) */
}
            test () {
        if ((!((Attestation).Attestation).isPatched)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Attestation is not patched! Immediately abort logging in if using main account!");
            return;
        } /* if 0xe2ae1 (open) */
}
        }
        IntegrityControl = IntegrityControl = IntegrityControl;
        exports.IntegrityControl = IntegrityControl;
        return;
};

// --------------------- MODULE 7726 — TamperStatus ---------------------


// ============================================================ //
// webpack module 7726  —  TamperStatus
// exports: TamperStatus
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[7726] = function TamperStatus_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, tamperStatusGetterOffset, TamperStatus, <class_fields_init>, TamperStatus;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TamperStatus = undefined;
        Libg = __webpack_require__(9878);
        tamperStatusGetterOffset = ((Libg).Libg).offset(7465640, 0);
        <class_fields_init> = undefined;
        TamperStatus;
        class TamperStatus {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x83b47 (open) */
}
            patch () {
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0x83ab4 */
        return;
}
            forceGetterReturnZero () {
        return;
}
        }
        TamperStatus = TamperStatus = TamperStatus;
        exports.TamperStatus = TamperStatus;
        return;
};

// --------------------- MODULE 8669 — ApkSignature ---------------------


// ============================================================ //
// webpack module 8669  —  ApkSignature
// exports: ApkSignature
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[8669] = function ApkSignature_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, apkSignatureVerifyOffset, SIGNATURE_OK, ApkSignature, <class_fields_init>, ApkSignature;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ApkSignature = undefined;
        Libg = __webpack_require__(9878);
        apkSignatureVerifyOffset = ((Libg).Libg).offset(11854252, 0);
        SIGNATURE_OK = 3;
        <class_fields_init> = undefined;
        ApkSignature;
        class ApkSignature {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x815a5 (open) */
}
            patch () {
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0x8153d */
        return;
}
        }
        ApkSignature = ApkSignature = ApkSignature;
        exports.ApkSignature = ApkSignature;
        return;
};

// --------------------- MODULE 6055 — Attestation ---------------------


// ============================================================ //
// webpack module 6055  —  Attestation
// exports: Attestation
// deps: 1398 (Protector), 1978 (Libc), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6055] = function Attestation_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, Protector, getAppAttestationResponseTokenOffset, STATIC_KEY, TOKEN_SIZE, DEFAULT_STATE, ROUND_CONSTANTS, M, LITTLE_ENDIAN, convertEndian, rightRotate, sha256, hmac, bytesToReversedU64, reversedU64ToBytes, randomBytes, computeAttestationToken, kAttestKey, kSecondaryIV, SHA256_K, MASK64, NEG_1027_U64, POS_1027, rotr32, sha256Compress, sha256WithCustomIV, sha256Custom, packLe64, readLe64, maddU64, hashInternal, attestInternalIos, Attestation, <class_fields_init>, Attestation;
        convertEndian = function convertEndian(word) {
        if ((!LITTLE_ENDIAN)) {
            return word;
        } /* if 0x81c49 */
        return ((((word >>> 24) | (((word >>> 16) & 255) << 8)) | ((word & 65280) << 8)) | (word << 24));
};
        rightRotate = function rightRotate(word, bits) {
        return ((word >>> bits) | (word << (32 - bits)));
};
        sha256 = function sha256(data) {
    var STATE, length, bitLength, newBitLength, bytes, words, block, ws, round, MRound, g0, g1, t1, t2, i;
        STATE = (DEFAULT_STATE).slice();
        length = data.length;
        bitLength = (length * 8);
        newBitLength = ((((512 - ((bitLength + 64) % 512)) - 1) + bitLength) + 65);
        bytes = new Uint8Array((newBitLength / 8));
        words = new Uint32Array((bytes).buffer);
        bytes[length] = 128;
        words[(words.length - 1)] = convertEndian(bitLength);
        block = 0;
        while ((block < (newBitLength / 32))) {
            ws = (STATE).slice();
            round = undefined;
            round = 0;
            while ((round < 64)) {
                MRound = undefined;
                if ((round < 16)) {
                    MRound = convertEndian(words[(block + round)]);
                } /* if 0x81dfb */
                /* jump -> 0x81e5d */
                g0 = M[(round - 15)];
                g1 = M[(round - 2)];
                MRound = (((M[(round - 7)] + M[(round - 16)]) + ((rightRotate(g0, 7) ^ rightRotate(g0, 18)) ^ (g0 >>> 3))) + ((rightRotate(g1, 17) ^ rightRotate(g1, 19)) ^ (g1 >>> 10)));
                MRound = (MRound | 0);
                M[round] = (MRound | 0);
                t1 = ((((((rightRotate(ws[4], 6) ^ rightRotate(ws[4], 11)) ^ rightRotate(ws[4], 25)) + ((ws[4] & ws[5]) ^ ((~ws[4]) & ws[6]))) + ws[7]) + MRound) + ROUND_CONSTANTS[round]);
                t2 = (((rightRotate(ws[0], 2) ^ rightRotate(ws[0], 13)) ^ rightRotate(ws[0], 22)) + ((ws[0] & ws[1]) ^ (ws[2] & (ws[0] ^ ws[1]))));
                i = 7;
                while ((i > 0)) {
                    ws[i] = ws[(i - 1)];
                    i = ((i) - 1);
                    (i--);
                } /* while 0x81f1b */
                ws[0] = ((t1 + t2) | 0);
                ws[4] = ((ws[4] + t1) | 0);
                round = ((round) + 1);
                (round++);
                round = 0;
            } /* while 0x81f49 */
            while ((round < 8)) {
                STATE[round] = ((STATE[round] + ws[round]) | 0);
                round = ((round) + 1);
                (round++);
            } /* while 0x81f77 */
            block = (block + 16);
        } /* while 0x81f88 */
        return new Uint8Array((new Uint32Array((STATE).map(convertEndian))).buffer);
};
        hmac = function hmac(key, data) {
    var tmp, inner, outer, i, msg, result;
        if ((key.length > 64)) {
            key = sha256(key);
        } /* if 0x82024 */
        if ((key.length < 64)) {
            tmp = new Uint8Array(64);
            key = tmp;
        } /* if 0x8204c */
        inner = new Uint8Array(64);
        outer = new Uint8Array(64);
        i = 0;
        while ((i < 64)) {
            inner[i] = (54 ^ key[i]);
            outer[i] = (92 ^ key[i]);
            i = ((i) + 1);
            (i++);
        } /* while 0x8209b */
        msg = new Uint8Array((data.length + 64));
        result = new Uint8Array(96);
        (result)["set"](sha256(msg), 64);
        return sha256(result);
};
        bytesToReversedU64 = function bytesToReversedU64(bytes) {
    var out, i, hex, j;
        if (((bytes.length % 8) !== 0)) {
            throw new Error("Length must be divisible by 8");
        } /* if 0x8215b */
        out = new BigUint64Array((bytes.length / 8));
        i = 0;
        while ((i < bytes.length)) {
            hex = "";
            j = 7;
            while ((j >= 0)) {
                hex = (hex + ((bytes[(i + j)]).toString(16)).padStart(2, "0"));
                j = ((j) - 1);
                (j--);
            } /* while 0x821b9 */
            out[(i / 8)] = BigInt(("0x" + hex));
            i = (i + 8);
        } /* while 0x821e0 */
        return out;
};
        reversedU64ToBytes = function reversedU64ToBytes(words) {
    var out, i, hex, chunk, j;
        out = new Uint8Array((words.length * 8));
        i = 0;
        while ((i < words.length)) {
            hex = ((words[i]).toString(16)).padStart(16, "0");
            chunk = new Uint8Array(8);
            j = 0;
            while ((j < 8)) {
                chunk[(7 - j)] = parseInt((hex).substr((j * 2), 2), 16);
                j = ((j) + 1);
                (j++);
            } /* while 0x822ad */
            i = ((i) + 1);
            (i++);
            return out;
        } /* while 0x822d0 (open) */
};
        randomBytes = function randomBytes(length) {
    var out, i;
        out = new Uint8Array(length);
        i = 0;
        while ((i < length)) {
            out[i] = (Math).floor(((Math).random() * 256));
            i = ((i) + 1);
            (i++);
        } /* while 0x82347 */
        return out;
};
        computeAttestationToken = function computeAttestationToken(requestToken) {
    var head, requestU64, unpacked, i, hmacResult, qualifiers, tok, i;
        head = (requestToken).slice(0, 8);
        requestU64 = bytesToReversedU64(requestToken);
        unpacked = new BigUint64Array(4);
        i = 3;
        while ((i > 0)) {
            unpacked[i] = (requestU64[i] - (BigInt(1027) * requestU64[(i - 1)]));
            i = ((i) - 1);
            (i--);
        } /* while 0x8240a */
        unpacked[0] = bytesToReversedU64(head)[0];
        hmacResult = hmac(reversedU64ToBytes(unpacked), STATIC_KEY);
        /*append*/ bytesToReversedU64(hmacResult);
        qualifiers = /*append*/ unpacked;
        tok = new BigUint64Array(10);
        tok[0] = bytesToReversedU64(randomBytes(8))[0];
        i = 0;
        while ((i < 9)) {
            tok[(i + 1)] = (qualifiers[i] + (BigInt(1027) * tok[i]));
            i = ((i) + 1);
            (i++);
        } /* while 0x824b0 */
        return reversedU64ToBytes(tok);
};
        rotr32 = function rotr32(x, n) {
        return (((x >>> n) | (x << (32 - n))) >>> 0);
};
        sha256Compress = function sha256Compress(state, block, blockOffset) {
    var w, i, o, i, s0, s1, a, b, c, d, e, f, g, h, i, S1, ch, t1, S0, mj, t2;
        w = new Uint32Array(64);
        i = 0;
        while ((i < 16)) {
            o = (blockOffset + (i * 4));
            w[i] = (((((block[o] << 24) | (block[(o + 1)] << 16)) | (block[(o + 2)] << 8)) | block[(o + 3)]) >>> 0);
            i = ((i) + 1);
            (i++);
        } /* while 0x82716 */
        i = 16;
        while ((i < 64)) {
            s0 = ((rotr32(w[(i - 15)], 7) ^ rotr32(w[(i - 15)], 18)) ^ (w[(i - 15)] >>> 3));
            s1 = ((rotr32(w[(i - 2)], 17) ^ rotr32(w[(i - 2)], 19)) ^ (w[(i - 2)] >>> 10));
            w[i] = ((((w[(i - 16)] + s0) + w[(i - 7)]) + s1) >>> 0);
            i = ((i) + 1);
            (i++);
            a = state[0];
        } /* while 0x827b6 */
        b = state[1];
        c = state[2];
        d = state[3];
        e = state[4];
        f = state[5];
        g = state[6];
        h = state[7];
        i = 0;
        while ((i < 64)) {
            S1 = ((rotr32(e, 6) ^ rotr32(e, 11)) ^ rotr32(e, 25));
            ch = ((e & f) ^ ((~e) & g));
            t1 = (((((h + S1) + ch) + SHA256_K[i]) + w[i]) >>> 0);
            S0 = ((rotr32(a, 2) ^ rotr32(a, 13)) ^ rotr32(a, 22));
            mj = (((a & b) ^ (a & c)) ^ (b & c));
            t2 = ((S0 + mj) >>> 0);
            h = g;
            g = f;
            f = e;
            e = ((d + t1) >>> 0);
            d = c;
            c = b;
            b = a;
            a = ((t1 + t2) >>> 0);
            i = ((i) + 1);
            (i++);
        } /* while 0x828dd */
        state[0] = ((state[0] + a) >>> 0);
        state[1] = ((state[1] + b) >>> 0);
        state[2] = ((state[2] + c) >>> 0);
        state[3] = ((state[3] + d) >>> 0);
        state[4] = ((state[4] + e) >>> 0);
        state[5] = ((state[5] + f) >>> 0);
        state[6] = ((state[6] + g) >>> 0);
        state[7] = ((state[7] + h) >>> 0);
        return;
};
        sha256WithCustomIV = function sha256WithCustomIV(data, iv, bitOffset) {
    var state, i, len, paddedSize, buf, bitLen, j, k, out, m;
        state = new Uint32Array(8);
        i = 0;
        while ((i < 8)) {
            state[i] = ((((iv[(4 * i)] | (iv[((4 * i) + 1)] << 8)) | (iv[((4 * i) + 2)] << 16)) | (iv[((4 * i) + 3)] << 24)) >>> 0);
            i = ((i) + 1);
            (i++);
        } /* while 0x82a2d */
        len = data.length;
        paddedSize = ((Math).floor(((len + 72) / 64)) * 64);
        buf = new Uint8Array(paddedSize);
        if ((len > 0)) {
        } /* if 0x82a6d */
        buf[len] = 128;
        bitLen = (BigInt(bitOffset) + (BigInt(len) * BigInt(8)));
        j = 0;
        while ((j < 8)) {
            buf[((paddedSize - 1) - j)] = Number(((bitLen >> BigInt((8 * j))) & BigInt(255)));
            j = ((j) + 1);
            (j++);
        } /* while 0x82ad9 */
        k = 0;
        while ((k < paddedSize)) {
            sha256Compress(state, buf, k);
            k = (k + 64);
        } /* while 0x82b01 */
        out = new Uint8Array(32);
        m = 0;
        while ((m < 8)) {
            out[(4 * m)] = ((state[m] >>> 24) & 255);
            out[((4 * m) + 1)] = ((state[m] >>> 16) & 255);
            out[((4 * m) + 2)] = ((state[m] >>> 8) & 255);
            out[((4 * m) + 3)] = (state[m] & 255);
            m = ((m) + 1);
            (m++);
        } /* while 0x82b89 */
        return out;
};
        sha256Custom = function sha256Custom(data, iv) {
        return sha256WithCustomIV(data, iv, 512);
};
        packLe64 = function packLe64(v, dst, offset) {
    var x, i;
        x = (v & MASK64);
        i = 0;
        while ((i < 8)) {
            dst[(offset + i)] = Number((x & BigInt(255)));
            x = (x >> BigInt(8));
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0x82c4d (open) */
};
        readLe64 = function readLe64(bytes, offset) {
    var v, i;
        v = BigInt(0);
        i = 7;
        while ((i >= 0)) {
            v = ((v << BigInt(8)) | BigInt(bytes[(offset + i)]));
            i = ((i) - 1);
            (i--);
        } /* while 0x82cba */
        return v;
};
        maddU64 = function maddU64(a, b, c) {
        return (((a * b) + c) & MASK64);
};
        hashInternal = function hashInternal(input, serverTime, serverMask, serverRandom) {
    var buf24, h1, arr, suffix, rec, rec, bit8sha, rec, v47, totalLen, d, concat, p, d, v42, mergedLen, merged, mp, v38, key32;
        buf24 = new Uint8Array(24);
        packLe64(input, buf24, 0);
        packLe64(serverTime, buf24, 8);
        packLe64(serverMask, buf24, 16);
        h1 = sha256Custom(buf24, kAttestKey);
        sha256Custom(h1, kSecondaryIV);
        arr = [];
        suffix = Number((serverMask & BigInt(14)));
        if (((serverMask & BigInt(2)) !== BigInt(0))) {
            rec = new Uint8Array(9);
            packLe64(BigInt(2), rec, 0);
            rec[8] = suffix;
            (arr).push(sha256(rec));
        } /* if 0x82e55 */
        if (((serverMask & BigInt(4)) !== BigInt(0))) {
            rec = new Uint8Array(9);
            packLe64(BigInt(4), rec, 0);
            rec[8] = suffix;
            (arr).push(sha256(rec));
        } /* if 0x82ea3 */
        bit8sha = null;
        if (((serverMask & BigInt(8)) !== BigInt(0))) {
            rec = new Uint8Array(9);
            packLe64(BigInt(8), rec, 0);
            rec[8] = suffix;
            bit8sha = sha256(rec);
        } /* if 0x82eef */
        v47 = null;
        if ((arr.length > 0)) {
            totalLen = 0;
            /* jump -> 0x82f1e */
            d = /*iter*/ arr;
            totalLen = (totalLen + d.length);
            } while (!arr);
            d = totalLen = concat = p = rec = rec = rec = buf24 = h1 = arr = suffix = bit8sha = v47 = v42 = mergedLen = merged = mp = v38 = key32 = <underflow>;
            concat = new Uint8Array(totalLen);
            p = 0;
            /* jump -> 0x82f5f */
            d = /*iter*/ arr;
            p = (p + d.length);
            } while (!arr);
            d = <underflow>;
            v47 = sha256Custom(sha256Custom(concat, kAttestKey), kSecondaryIV);
        } /* if 0x82f77 */
        v42 = null;
        if (bit8sha) {
            v42 = sha256Custom(sha256Custom(bit8sha, kAttestKey), kSecondaryIV);
        } /* if 0x82f91 */
        mergedLen = 0;
        if (v47) {
            mergedLen = (mergedLen + v47.length);
        } /* if 0x82fa6 */
        if (v42) {
            mergedLen = (mergedLen + v42.length);
        } /* if 0x82fb8 */
        merged = new Uint8Array(mergedLen);
        mp = 0;
        if (v47) {
            mp = (mp + v47.length);
        } /* if 0x82fed */
        if (v42) {
            mp = (mp + v42.length);
        } /* if 0x83011 */
        v38 = sha256Custom(sha256Custom(merged, kAttestKey), kSecondaryIV);
        key32 = new Uint8Array(32);
        packLe64(input, key32, 0);
        packLe64(serverTime, key32, 8);
        packLe64(serverMask, key32, 16);
        packLe64(serverRandom, key32, 24);
        return hmac(key32, v38);
};
        attestInternalIos = function attestInternalIos(request, clientTime, randomData) {
    var q0, q1, q2, q3, clientRandom, serverTime, serverMask, serverRandom, hashData, h0, h1, h2, h3, out, result, i;
        q0 = readLe64(request, 0);
        q1 = readLe64(request, 8);
        q2 = readLe64(request, 16);
        q3 = readLe64(request, 24);
        clientRandom = readLe64(randomData, 0);
        serverTime = maddU64(q0, NEG_1027_U64, q1);
        serverMask = maddU64(q1, NEG_1027_U64, q2);
        serverRandom = maddU64(q2, NEG_1027_U64, q3);
        hashData = hashInternal(q0, serverTime, serverMask, serverRandom);
        h0 = readLe64(hashData, 0);
        h1 = readLe64(hashData, 8);
        h2 = readLe64(hashData, 16);
        h3 = readLe64(hashData, 24);
        out = new BigUint64Array(10);
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
        result = new Uint8Array(80);
        i = 0;
        while ((i < 10)) {
            packLe64(out[i], result, (i * 8));
            i = ((i) + 1);
            (i++);
        } /* while 0x832c3 */
        return result;
};
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Attestation = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        Protector = __webpack_require__(1398);
        getAppAttestationResponseTokenOffset = ((Libg).Libg).offset(6765520, 0);
        STATIC_KEY = new 233([...84]);
        TOKEN_SIZE = 80;
        DEFAULT_STATE = new Uint32Array(8);
        ROUND_CONSTANTS = [];
        M = new Uint32Array(64);
        LITTLE_ENDIAN = (!(!new Uint8Array((new Uint32Array([1])).buffer)[0]));
        function initSha256Tables() {
    var pow, fract, n, nPrime, isPrime, f;
        pow = (Math).pow;
        fract = pow = fract = n = nPrime = <underflow>;
        n = 2;
        nPrime = 0;
        while ((nPrime < 64)) {
            isPrime = true;
            f = 2;
            if ((f <= (n / 2))) {
                if (((n % f) === 0)) {
                    isPrime = false;
                } /* if 0x81b93 */
            } /* if 0x81b9d */
            /* jump -> 0x81b9d */
            f = ((f) + 1);
            (f++);
            /* loop: jump back to 0x81b75 */
            if (isPrime) {
                if ((nPrime < 8)) {
                    DEFAULT_STATE[nPrime] = fract(pow(n, (1 / 2)));
                } /* if 0x81bc0 */
                ROUND_CONSTANTS[nPrime] = fract(pow(n, (1 / 3)));
                nPrime = ((nPrime) + 1);
                (nPrime++);
            } /* if 0x81bde */
            n = ((n) + 1);
            (n++);
            return;
        } /* while 0x81bec (open) */
}();
        kAttestKey = new 79([...229]);
        kSecondaryIV = new 0([...132]);
        [...338241895][32] = 666307205;
        [...338241895][33] = 773529912;
        [...338241895][34] = 1294757372;
        [...338241895][35] = 1396182291;
        [...338241895][36] = 1695183700;
        [...338241895][37] = 1986661051;
        [...338241895][38] = 2177026350.0;
        [...338241895][39] = 2456956037.0;
        [...338241895][40] = 2730485921.0;
        [...338241895][41] = 2820302411.0;
        [...338241895][42] = 3259730800.0;
        [...338241895][43] = 3345764771.0;
        [...338241895][44] = 3516065817.0;
        [...338241895][45] = 3600352804.0;
        [...338241895][46] = 4094571909.0;
        [...338241895][47] = 275423344;
        [...338241895][48] = 430227734;
        [...338241895][49] = 506948616;
        [...338241895][50] = 659060556;
        [...338241895][51] = 883997877;
        [...338241895][52] = 958139571;
        [...338241895][53] = 1322822218;
        [...338241895][54] = 1537002063;
        [...338241895][55] = 1747873779;
        [...338241895][56] = 1955562222;
        [...338241895][57] = 2024104815;
        [...338241895][58] = 2227730452.0;
        [...338241895][59] = 2361852424.0;
        [...338241895][60] = 2428436474.0;
        [...338241895][61] = 2756734187.0;
        [...338241895][62] = 3204031479.0;
        [...338241895][63] = 3329325298.0;
        SHA256_K = new 3584528711.0([...338241895]);
        MASK64 = ((BigInt(1) << BigInt(64)) - BigInt(1));
        NEG_1027_U64 = (((MASK64 + BigInt(1)) - BigInt(1027)) & MASK64);
        POS_1027 = BigInt(1027);
        <class_fields_init> = undefined;
        Attestation;
        class Attestation {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x83842 (open) */
}
            patch () {
        if (((Process).platform === "darwin")) {
            (Attestation).patchIos();
        } /* if 0x8331e */
        /* jump -> 0x8332a */
        (Attestation).patchAndroid();
        this.isPatched = true;
        return;
}
            patchAndroid () {
    var requestToken;
        requestToken = null;
        (Interceptor).attach(getAppAttestationResponseTokenOffset, { onEnter (args) {
        requestToken = new Uint8Array(((args[0]).readPointer()).readByteArray(32));
        return;
} });
        Attestation.token = new NativeCallback(function (buffer) {
    var out;
        /* is_null  */
        if (requestToken) {
            return;
        } /* if 0x83446 */
        out = computeAttestationToken(requestToken);
        return;
}, "void", ["pointer"]);
        return;
}
            patchIos () {
    var ZnwmSym, operatorNew, arc4randomBufSym, arc4random;
        ZnwmSym = (Module).findExportByName(null, "_Znwm");
        if ((!ZnwmSym)) {
            return;
        } /* if 0x834c4 */
        operatorNew = new NativeFunction(ZnwmSym, "pointer", ["size_t"]);
        arc4randomBufSym = (Module).findExportByName(null, "arc4random_buf");
        if (arc4randomBufSym) {
        } /* if 0x83517 */
        /* jump -> 0x83518 */
        arc4random = null;
        return;
}
        }
        Attestation = M = Attestation;
        exports.Attestation = Attestation;
        Attestation.isPatched = false;
        return;
};

// --------------------- MODULE 3707 — Wendelstein ---------------------


// ============================================================ //
// webpack module 3707  —  Wendelstein
// exports: wendelstein
// deps: 1588 (LogicMemory), 4009 (Config), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3707] = function Wendelstein_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, LogicMemory, FramePresenter_present, FrameRateConfig_instance, FrameRateConfig_initializationGuard, frameRateLimitOffset, targetFrameRateLimitOffset, wendelstein;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.wendelstein = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        FramePresenter_present = ((Libg).Libg).offset(7541292);
        FrameRateConfig_instance = ((Libg).Libg).offset(19832880);
        FrameRateConfig_initializationGuard = ((Libg).Libg).offset(19832920);
        frameRateLimitOffset = ((LogicMemory).LogicMemory).offset(0);
        targetFrameRateLimitOffset = ((LogicMemory).LogicMemory).offset(32);
        if (!wendelstein) {
            exports.wendelstein = wendelstein = {};
        } /* if 0x8129a */
        return;
};

// --------------------- MODULE 4844 — SentryFilter ---------------------


// ============================================================ //
// webpack module 4844  —  SentryFilter
// exports: SentryFilter
// ============================================================ //

__webpack_modules__[4844] = function SentryFilter_factory(__unused_webpack_module, exports) {
    var SentryFilter, <class_fields_init>, SentryFilter;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SentryFilter = undefined;
        <class_fields_init> = undefined;
        SentryFilter;
        class SentryFilter {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa5bd3 (open) */
}
            patch () {
    var libsentry;
        libsentry = (Process).findModuleByName((SentryFilter).LIBSENTRY_NAME);
        if ((!libsentry)) {
            return;
        } /* if 0xa5957 */
        (SentryFilter).replaceWithNoop(libsentry, "sentry_init", function () {
        return -1;
}, "int", ["pointer"]);
        (SentryFilter).replaceWithNoop(libsentry, "sentry_envelope_serialize", function () {
        return NULL;
}, "pointer", ["pointer", "pointer"]);
        (SentryFilter).replaceWithNoop(libsentry, "sentry_envelope_write_to_file", function () {
        return -1;
}, "int", ["pointer", "pointer"]);
        (SentryFilter).replaceWithNoop(libsentry, "sentry_envelope_write_to_file_n", function () {
        return -1;
}, "int", ["pointer", "pointer", "uint64"]);
        (SentryFilter).replaceWithNoop(libsentry, "sentry_handle_exception", function () {
        return -1;
}, "int", ["pointer"]);
        (SentryFilter).replaceWithNoop(libsentry, "sentry_capture_minidump", function () {
        return NULL;
}, "pointer", ["pointer"]);
        (SentryFilter).replaceWithNoop(libsentry, "sentry_capture_minidump_n", function () {
        return NULL;
}, "pointer", ["pointer", "uint64"]);
        return;
}
            replaceWithNoop (module, exportName, impl, retType, argTypes) {
    var addr;
        addr = (module).findExportByName(exportName);
        if ((!addr)) {
            return;
        } /* if 0xa5b87 */
        return;
}
        }
        SentryFilter = SentryFilter = SentryFilter;
        exports.SentryFilter = SentryFilter;
        SentryFilter.LIBSENTRY_NAME = "libsentry.so";
        return;
};

// --------------------- MODULE 4419 — ExceptionWorker ---------------------


// ============================================================ //
// webpack module 4419  —  ExceptionWorker
// exports: ExceptionWorker
// deps: 699 (FileManager), 1978 (Libc), 2214 (ModProperties), 3380 (Logcat), 4272 (EDebugger), 4974 (Breadcrumbs), 5281 (BSDMessageManager), 5548 (LogExceptionMessage), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4419] = function ExceptionWorker_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PlayerInfo, Libc, ModProperties, FileManager, BSDMessageManager, LogExceptionMessage, Breadcrumbs, Logcat, EDebugger, Libg, CONNECTION_ERROR_SUBSTRINGS, ExceptionWorker, <class_fields_init>, ExceptionWorker;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ExceptionWorker = undefined;
        PlayerInfo = __webpack_require__(9518);
        Libc = __webpack_require__(1978);
        ModProperties = __webpack_require__(2214);
        FileManager = __webpack_require__(699);
        BSDMessageManager = __webpack_require__(5281);
        LogExceptionMessage = __webpack_require__(5548);
        Breadcrumbs = __webpack_require__(4974);
        Logcat = __webpack_require__(3380);
        EDebugger = __webpack_require__(4272);
        Libg = __webpack_require__(9878);
        CONNECTION_ERROR_SUBSTRINGS = ["could not connect", "No address associated", "Connection reset by peer", "Connection timed out", "Software caused connection abort"];
        <class_fields_init> = undefined;
        ExceptionWorker;
        class ExceptionWorker {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x97e2a (open) */
}
            init () {
        if ((ExceptionWorker).READY) {
            return;
        } /* if 0x9734e */
        ExceptionWorker.READY = true;
        (ExceptionWorker).flushPendingCrashLog();
        (ExceptionWorker).installJsErrorTrap();
        return;
}
            flushPendingCrashLog () {
    var crashLog, tag;
        if ((!((FileManager).FileManager).isFilepath((ExceptionWorker).crashLogDir))) {
            return;
        } /* if 0x973cd */
        crashLog = ((FileManager).FileManager).readFile((ExceptionWorker).crashLogDir, "r");
        if ((!crashLog)) {
            return;
        } /* if 0x973f2 */
        tag = ((FileManager).FileManager).readFile((ExceptionWorker).tagDir, "r");
        (ExceptionWorker).logException("CRASH", crashLog, tag);
        return;
}
            installJsErrorTrap () {
    var original;
        original = (Error).prepareStackTrace;
        Error.prepareStackTrace = function (e, s) {
    var stack, text, isConnectionError;
        stack = original(e, s);
        text = (ExceptionWorker).formatJsException(e, String(stack));
        if (((ModProperties).ModProperties).isDev()) {
            ((Logcat).Logcat).logDebug(text);
        } /* if 0x97539 */
        isConnectionError = (CONNECTION_ERROR_SUBSTRINGS).some(function (sub) {
        return (text).includes(sub);
});
        if ((!isConnectionError)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, text);
            (ExceptionWorker).logException("JSERROR", ([text, "", "Breadcrumbs:", ((Breadcrumbs).Breadcrumbs).dump()]).join("\n"));
        } /* if 0x975a8 */
        return text;
};
        return;
}
            formatJsException (error, stack) {
    var details, modules, lines;
        details = error;
        if ((((details).context) == null)) {
        } /* if 0x97626 */
        /* jump -> 0x9762b */
        if ((!(undefined).pc)) {
            return stack;
            /* CATCH -> 0x9774a (try region) */
        } /* if 0x97630 */
        modules = (ExceptionWorker).snapshotModules();
        if ((((details).type) == null)) {
        } /* if 0x97665 */
        lines = [stack, "", ("Native fault: ").concat("exception", " at ", (ExceptionWorker).formatAddress(((details).context).pc, modules)), ("libg base=").concat(((Libg).Libg).libgBeginOffset)];
        if ((details).memory) {
            (lines).push(("Memory: ").concat(((details).memory).operation, " at ", ((details).memory).address));
        } /* if 0x976e8 */
        (lines).push(("Registers:\n" + (ExceptionWorker).formatRegisters((details).context)));
        (lines).push(("Backtrace:\n" + (ExceptionWorker).formatBacktrace((details).context, modules)));
        return (lines).join("\n");
        modules = lines = details = <underflow>;
        /* CATCH -> 0x97753 (try region) */
        return stack;
        throw <underflow>;
}
            installNativeExceptionHandler () {
    var modules;
        modules = (ExceptionWorker).snapshotModules();
        return;
}
            snapshotModules () {
        return ((Process).enumerateModules()).map(function (module) {
        if (((module).base).equals(((Libg).Libg).libgBeginOffset)) {
        } /* if 0x97a1d */
        /* jump -> 0x97a23 */
        "libg.so".name = (module).name;
        return "libg.so";
});
}
            formatAddress (address, modules) {
    var module;
        module = (modules).find(function (candidate) {
        if (((address).compare((candidate).base) >= 0)) {
            ((address).compare((candidate).base) >= 0);
            return ((address).compare(((candidate).base).add((candidate).size)) < 0);
        } /* if 0x97ae6 (open) */
});
        if (module) {
            return ("").concat((module).name, "+", (address).sub((module).base));
        } /* if 0x97a8a */
        return (address).toString();
}
            formatRegisters (context) {
    var registers, index;
        registers = [];
        index = 0;
        while ((index < 29)) {
            (registers).push(("x").concat(index, "=", context[("x" + index)]));
            index = ((index) + 1);
            (index++);
        } /* while 0x97b54 */
        (registers).push(("fp=").concat((context).fp), ("lr=").concat((context).lr), ("sp=").concat((context).sp), ("pc=").concat((context).pc));
        return (registers).join("  ");
}
            formatBacktrace (context, modules) {
        /* CATCH -> 0x97c1e (try region) */
        return (((Thread).backtrace(context, (Backtracer).FUZZY)).map(function (address) {
        return (ExceptionWorker).formatAddress(address, modules);
})).join("\n");
        /* CATCH -> 0x97c2b (try region) */
        return "(backtrace failed)";
        throw <underflow>;
}
            logException (exceptionType, exception, tag) {
        if (!(!(ExceptionWorker).READY)) {
            if ((ExceptionWorker).reportInProgress) {
                /* return_async  */
            } /* if 0x97ca6 */
        } /* if 0x97ca2 */
        ExceptionWorker.reportInProgress = true;
        /* CATCH -> 0x97ce2 (try region) */
        await (((BSDMessageManager).BSDMessageManager).sendMessage(new (LogExceptionMessage).LogExceptionMessage(exceptionType, exception, tag)));
        /* gosub 0x97d0e (finally) */
        /* jump -> 0x97d15 */
        /* CATCH -> 0x97d08 (try region) */
        ((Logcat).Logcat).logError("Could not send exception report");
        /* gosub 0x97d0e (finally) */
        /* jump -> 0x97d15 */
        /* gosub 0x97d0e (finally) */
        throw <underflow>;
        ExceptionWorker.reportInProgress = false;
        /* end finally */
        /* return_async  */
}
            get crashLogDir () {
        return (((FileManager).FileManager).saveDirPath + (ExceptionWorker).CRASHLOG_FILE);
}
            get tagDir () {
        return (((FileManager).FileManager).saveDirPath + (ExceptionWorker).PLAYERTAG_FILE);
}
            saveCrashLog (message) {
        if (((((PlayerInfo).PlayerInfo).tag) == null)) {
        } /* if 0x97dda */
        ((FileManager).FileManager).writeToFile((ExceptionWorker).tagDir, "w", "UNKNOWN");
        return;
}
        }
        ExceptionWorker = EDebugger = ExceptionWorker;
        exports.ExceptionWorker = ExceptionWorker;
        ExceptionWorker.CRASHLOG_FILE = "/bsd_crash.log";
        ExceptionWorker.PLAYERTAG_FILE = "/bsd_tag.log";
        ExceptionWorker.IS_EXCEPTION_THROWN = false;
        ExceptionWorker.reportInProgress = false;
        ExceptionWorker.READY = false;
        return;
};

// --------------------- MODULE 4974 — Breadcrumbs ---------------------


// ============================================================ //
// webpack module 4974  —  Breadcrumbs
// exports: Breadcrumbs
// deps: 1753 (IOSHTTPOffsets), 2214 (ModProperties), 3380 (Logcat), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4974] = function Breadcrumbs_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, Logcat, ModProperties, IOSHTTPOffsets, NativeHTTPClientManager_startGetRequest, NativeHTTPClientManager_getFinished, Breadcrumbs, <class_fields_init>, Breadcrumbs;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Breadcrumbs = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        Logcat = __webpack_require__(3380);
        ModProperties = __webpack_require__(2214);
        IOSHTTPOffsets = __webpack_require__(1753);
        NativeHTTPClientManager_startGetRequest = ((Libg).Libg).offset(7653996, 0);
        NativeHTTPClientManager_getFinished = ((Libg).Libg).offset(7366932, 0);
        <class_fields_init> = undefined;
        Breadcrumbs;
        class Breadcrumbs {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x96075 (open) */
}
            push (label) {
    var last;
        last = (this).entries[((this).entries.length - 1)];
        if (last) {
            if (((last).label === label)) {
                last.count = (++(last).count);
                return;
            } /* if 0x956fe */
        } /* if 0x956fe */
        if (((this).entries.length >= (this).MAX)) {
            ((this).entries).shift();
        } /* if 0x9571d */
        return;
}
            dump () {
        return (((this).entries).map(function (e) {
        if (((e).count > 1)) {
            return ("").concat((e).label, " (x", (e).count, ")");
        } /* if 0x957ba */
        return (e).label;
})).join("\n");
}
            hasCrumbs () {
        return ((this).entries.length !== 0);
}
            clear () {
        (this).entries.length = 0;
        return;
}
            initCrashDebug () {
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0x9584b */
        (Interceptor).attach(NativeHTTPClientManager_startGetRequest, { onEnter (args) {
        /* CATCH -> 0x95908 (try region) */
        this.requestUrl = (((((StringObject).StringObject).read(args[0])).split(new RegExp("[?#]", "\u0000\u0001\u0000\u001b\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u0015\u0002\u0000#\u0000#\u0000?\u0000?\u0000\f\u0000\n"), 1)[0]).replace(new RegExp("^(https?:\\/\\/)[^/]*@", "\u0000\u0002\u0000_\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u0005\u000b\u0001\u0001h\u0000\u0001t\u0000\u0001t\u0000\u0001p\u0000\u001c\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0001s\u0000\n\u0001:\u0000\u0001/\u0000\u0001/\u0000\f\u0001\u001c\f\u0000\u0000\u0000\u0000\u0000\u0000\u0000ÿÿÿ\u0001\u0000\u0000\u0000\u0015\u0002\u0000\u0000\u0000.\u00000\u0000ÿÿ\n\u0001@\u0000\f\u0000\n"), "$1")).substring(0, 200);
        return;
        /* CATCH -> 0x9591b (try region) */
        this.requestUrl = "(unreadable URL)";
        return;
        throw <underflow>;
}, onLeave (result) {
        return;
} });
        return;
}
            recordHttp (message) {
        (Breadcrumbs).push(message);
        if (((ModProperties).ModProperties).isDev()) {
            ((Logcat).Logcat).logDebug(("[HTTP] ").concat(message));
            return;
        } /* if 0x95b25 (open) */
}
            initIOSCrashDebug () {
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_get, { onEnter (args) {
    var url;
        /* CATCH -> 0x95c8f (try region) */
        url = ((StringObject).StringObject).read(args[1]);
        (Breadcrumbs).push(("GET ").concat((url).substring(0, 200)));
        url = <underflow>;
        return;
        /* CATCH -> 0x95ca8 (try region) */
        (Breadcrumbs).push("GET (read fail)");
        return;
        throw <underflow>;
} });
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_post, { onEnter (args) {
    var url, bodyLen;
        /* CATCH -> 0x95d37 (try region) */
        url = ((StringObject).StringObject).read(args[1]);
        bodyLen = (args[3]).toInt32();
        (Breadcrumbs).push(("POST ").concat((url).substring(0, 200), " len=", bodyLen));
        url = bodyLen = <underflow>;
        return;
        /* CATCH -> 0x95d50 (try region) */
        (Breadcrumbs).push("POST (read fail)");
        return;
        throw <underflow>;
} });
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_download, { onEnter (args) {
    var url, path, slash, fname;
        /* CATCH -> 0x95e27 (try region) */
        url = ((StringObject).StringObject).read(args[1]);
        path = ((StringObject).StringObject).read(args[2]);
        slash = (path).lastIndexOf("/");
        if ((slash >= 0)) {
        } /* if 0x95dee */
        /* jump -> 0x95df1 */
        fname = path;
        (Breadcrumbs).push(("DL ").concat((url).substring(0, 200), " → ", fname));
        (path).substring((slash + 1));
        return;
        url = path = slash = fname = <underflow>;
        /* CATCH -> 0x95e40 (try region) */
        (Breadcrumbs).push("DL (read fail)");
        return;
        throw <underflow>;
} });
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_getMainTrampoline, { onEnter (args) {
    var status, code;
        /* CATCH -> 0x95ece (try region) */
        status = ((args[0]).add(56)).readU32();
        code = ((args[0]).add(60)).readU32();
        (Breadcrumbs).push(("GET← status=").concat(status, " code=", code));
        status = code = <underflow>;
        return;
        /* CATCH -> 0x95ed6 (try region) */
        return;
        throw <underflow>;
} });
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_postMainTrampoline, { onEnter (args) {
    var status, code;
        /* CATCH -> 0x95f60 (try region) */
        status = ((args[0]).add(56)).readU32();
        code = ((args[0]).add(60)).readU32();
        (Breadcrumbs).push(("POST← status=").concat(status, " code=", code));
        status = code = <underflow>;
        return;
        /* CATCH -> 0x95f68 (try region) */
        return;
        throw <underflow>;
} });
        return;
}
        }
        Breadcrumbs = <class_fields_init> = Breadcrumbs;
        exports.Breadcrumbs = Breadcrumbs;
        Breadcrumbs.MAX = 64;
        Breadcrumbs.entries = [];
        return;
};

