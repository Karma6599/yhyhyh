//============================================================================//
// MOD FEATURE: Replay logger
// Battle replay id logging.
//============================================================================//

// --------------------- MODULE 8073 — ReplayUuid ---------------------


// ============================================================ //
// webpack module 8073  —  ReplayUuid
// exports: ReplayUuid
// deps: 1978 (Libc)
// ============================================================ //

__webpack_modules__[8073] = function ReplayUuid_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, UUID_BYTE_LENGTH, UUID_HEX_LENGTH, ReplayUuid, <class_fields_init>, ReplayUuid;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ReplayUuid = undefined;
        Libc = __webpack_require__(1978);
        UUID_BYTE_LENGTH = 16;
        UUID_HEX_LENGTH = 32;
        <class_fields_init> = undefined;
        ReplayUuid;
        class ReplayUuid {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa5552 (open) */
}
            toBuffer (uuid) {
    var hex, buffer, byteIndex;
        hex = (uuid).replace(new RegExp("[^0-9a-fA-F]", "\u0001\u0001\u0000#\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u0015\u0004\u0000\u0000\u0000/\u0000:\u0000@\u0000G\u0000`\u0000g\u0000ÿÿ\f\u0000\n"), "");
        if ((hex.length !== UUID_HEX_LENGTH)) {
            return null;
        } /* if 0xa536c */
        buffer = ((Libc).Libc).malloc(UUID_BYTE_LENGTH);
        byteIndex = 0;
        while ((byteIndex < UUID_BYTE_LENGTH)) {
            ((buffer).add(byteIndex)).writeU8(parseInt((hex).substr((byteIndex * 2), 2), 16));
            byteIndex = ((byteIndex) + 1);
            (byteIndex++);
        } /* while 0xa53c8 */
        return buffer;
}
            toHex (buffer) {
    var hex, byteIndex;
        hex = "";
        byteIndex = 0;
        while ((byteIndex < UUID_BYTE_LENGTH)) {
            hex = (hex + ((((buffer).add(byteIndex)).readU8()).toString(16)).padStart(2, "0"));
            byteIndex = ((byteIndex) + 1);
            (byteIndex++);
        } /* while 0xa5484 */
        return hex;
}
            toFormatted (buffer) {
    var hex;
        hex = (ReplayUuid).toHex(buffer);
        return ("").concat((hex).slice(0, 8), "-", (hex).slice(8, 12), "-", (hex).slice(12, 16), "-", (hex).slice(16, 20), "-", (hex).slice(20, 32));
}
        }
        ReplayUuid = ReplayUuid = ReplayUuid;
        exports.ReplayUuid = ReplayUuid;
        return;
};

// --------------------- MODULE 4610 — ReplayStringIdLogger ---------------------


// ============================================================ //
// webpack module 4610  —  ReplayStringIdLogger
// exports: ReplayStringIdLogger
// deps: 3380 (Logcat), 4509 (ViewReplayByStringIdMessage)
// ============================================================ //

__webpack_modules__[4610] = function ReplayStringIdLogger_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ViewReplayByStringIdMessage, Logcat, ReplayStringIdLogger, <class_fields_init>, ReplayStringIdLogger;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ReplayStringIdLogger = undefined;
        ViewReplayByStringIdMessage = __webpack_require__(4509);
        Logcat = __webpack_require__(3380);
        <class_fields_init> = undefined;
        ReplayStringIdLogger;
        class ReplayStringIdLogger {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa523e (open) */
}
            patch () {
        return;
}
            getLastCapturedStringId () {
        return (ReplayStringIdLogger).lastCapturedStringId;
}
        }
        ReplayStringIdLogger = ReplayStringIdLogger = ReplayStringIdLogger;
        exports.ReplayStringIdLogger = ReplayStringIdLogger;
        ReplayStringIdLogger.lastCapturedStringId = null;
        return;
};

// --------------------- MODULE 8765 — ReplayUuidLogger ---------------------


// ============================================================ //
// webpack module 8765  —  ReplayUuidLogger
// exports: ReplayUuidLogger
// deps: 1978 (Libc), 3380 (Logcat), 5200 (AllianceManager), 8073 (ReplayUuid)
// ============================================================ //

__webpack_modules__[8765] = function ReplayUuidLogger_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Logcat, AllianceManager, ReplayUuid, UUID_BYTE_LENGTH, ReplayUuidLogger, <class_fields_init>, ReplayUuidLogger;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ReplayUuidLogger = undefined;
        Libc = __webpack_require__(1978);
        Logcat = __webpack_require__(3380);
        AllianceManager = __webpack_require__(5200);
        ReplayUuid = __webpack_require__(8073);
        UUID_BYTE_LENGTH = 16;
        <class_fields_init> = undefined;
        ReplayUuidLogger;
        class ReplayUuidLogger {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa5874 (open) */
}
            patch () {
        return;
}
            getLastCapturedUuid () {
        return (ReplayUuidLogger).lastCapturedUuid;
}
            getLastRawUuid () {
        if ((ReplayUuidLogger).hasRawUuid) {
            return (ReplayUuidLogger).rawUuid;
        } /* if 0xa57eb */
        return null;
}
            captureRawUuid (uuidHigh, uuidLow) {
        ((ReplayUuidLogger).rawUuid).writePointer(uuidHigh);
        (((ReplayUuidLogger).rawUuid).add(8)).writePointer(uuidLow);
        ReplayUuidLogger.hasRawUuid = true;
        return;
}
        }
        ReplayUuidLogger = v8 = ReplayUuidLogger;
        exports.ReplayUuidLogger = ReplayUuidLogger;
        ReplayUuidLogger.lastCapturedUuid = null;
        ReplayUuidLogger.hasRawUuid = false;
        ReplayUuidLogger.rawUuid = ((Libc).Libc).malloc(UUID_BYTE_LENGTH);
        return;
};

