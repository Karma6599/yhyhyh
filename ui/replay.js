// =============================================================
// REPLAY UI
// merged webpack modules: 4111 SharedReplay, 6980 BattleEndReplayScreen
// =============================================================

// --------------------- MODULE 4111 — SharedReplay ---------------------

// ============================================================ //
// webpack module 4111  —  SharedReplay
// exports: SharedReplay
// deps: 1588 (LogicMemory), 1978 (Libc), 4541 (HashTagCodeGenerator), 4934 (GUI), 5200 (AllianceManager), 6046 (Application), 7265 (Localisation), 7535 (StringObject), 8073 (ReplayUuid), 8765 (ReplayUuidLogger), 8775 (GameMain), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4111] = function SharedReplay_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Libg, LogicMemory, AllianceManager, GameMain, ReplayUuidLogger, HashTagCodeGenerator, Application, GUI, ReplayUuid, Localisation, StringObject, battleUuidOffset, ownerAccountOffset, intParamOffset, busyFlagOffset, battleLogItemEntryContainerOffset, battleEntryUuidLoOffset, battleEntryUuidHiOffset, ENTRY_SIZE, BATTLE_UUID_SIZE, SHARED_REPLAY_TYPE, DEEPLINK_PREFIX, DEEPLINK_ACTION_MARKER, DEEPLINK_CODE_PARAM, UNKNOWN_ACTION_ENUM, handleDeeplinkAddress, deeplinkActionEnumAddress, SharedReplay, <class_fields_init>, SharedReplay;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SharedReplay = undefined;
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        AllianceManager = __webpack_require__(5200);
        GameMain = __webpack_require__(8775);
        ReplayUuidLogger = __webpack_require__(8765);
        HashTagCodeGenerator = __webpack_require__(4541);
        Application = __webpack_require__(6046);
        GUI = __webpack_require__(4934);
        ReplayUuid = __webpack_require__(8073);
        Localisation = __webpack_require__(7265);
        StringObject = __webpack_require__(7535);
        battleUuidOffset = ((LogicMemory).LogicMemory).offset(48);
        ownerAccountOffset = ((LogicMemory).LogicMemory).offset(16);
        intParamOffset = ((LogicMemory).LogicMemory).offset(136);
        busyFlagOffset = ((LogicMemory).LogicMemory).offset(157);
        battleLogItemEntryContainerOffset = ((LogicMemory).LogicMemory).offset(232, 240);
        battleEntryUuidLoOffset = ((LogicMemory).LogicMemory).offset(48);
        battleEntryUuidHiOffset = ((LogicMemory).LogicMemory).offset(56);
        ENTRY_SIZE = 200;
        BATTLE_UUID_SIZE = 16;
        SHARED_REPLAY_TYPE = 11;
        DEEPLINK_PREFIX = "https://link.brawlstars.com/?action=bsd_replay&code=";
        DEEPLINK_ACTION_MARKER = "action=bsd_replay";
        DEEPLINK_CODE_PARAM = "code=";
        UNKNOWN_ACTION_ENUM = -1;
        handleDeeplinkAddress = ((Libg).Libg).offset(8094792, 0);
        deeplinkActionEnumAddress = ((Libg).Libg).offset(19144312, 0);
        <class_fields_init> = undefined;
        SharedReplay;
        class SharedReplay {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa6b78 (open) */
}
            patch () {
        return;
}
            notifyHomeReady () {
    var code;
        SharedReplay.homeReady = true;
        if ((!(SharedReplay).pendingCode)) {
            return;
        } /* if 0xa6133 */
        code = (SharedReplay).pendingCode;
        SharedReplay.pendingCode = null;
        return;
}
            copyShareCode () {
    var shareCode;
        shareCode = (SharedReplay).buildShareCode();
        if ((!shareCode)) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CopyReplayCodeNoCapture"));
            return false;
        } /* if 0xa61c1 */
        ((Application).Application).copyString(shareCode);
        ((GUI).GUI).showFloaterTextAtDefaultPosition((((Localisation).Localisation).getString("CopyReplayCodeCopied")).replace("{code}", shareCode));
        return true;
}
            copyShareLink () {
    var shareCode;
        shareCode = (SharedReplay).buildShareCode();
        if ((!shareCode)) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CopyReplayCodeNoCapture"));
            return false;
        } /* if 0xa627d */
        ((Application).Application).copyString((SharedReplay).encodeDeeplink(shareCode));
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("BattleLogCopyLinkCopied"));
        return true;
}
            hasValidEntryUuid (item) {
    var battleEntry, uuidLo, uuidHi;
        /* CATCH -> 0xa6374 (try region) */
        battleEntry = (SharedReplay).resolveBattleEntry(item);
        if ((!battleEntry)) {
            return false;
        } /* if 0xa6325 */
        uuidLo = ((battleEntry).add(battleEntryUuidLoOffset)).readPointer();
        uuidHi = ((battleEntry).add(battleEntryUuidHiOffset)).readPointer();
        if (!(!(uuidLo).isNull())) {
            (!(uuidLo).isNull());
        } /* if 0xa636f */
        return (!(uuidHi).isNull());
        battleEntry = uuidLo = uuidHi = <underflow>;
        /* CATCH -> 0xa637d (try region) */
        return false;
        throw <underflow>;
}
            resolveBattleEntry (item) {
    var container, wrapper, backing, battleEntry;
        if ((item).isNull()) {
            return null;
        } /* if 0xa63d1 */
        container = ((item).add(battleLogItemEntryContainerOffset)).readPointer();
        if ((container).isNull()) {
            return null;
        } /* if 0xa63f5 */
        wrapper = ((container).add(8)).readPointer();
        if ((wrapper).isNull()) {
            return null;
        } /* if 0xa641a */
        backing = (wrapper).readPointer();
        if ((backing).isNull()) {
            return null;
        } /* if 0xa6435 */
        battleEntry = (backing).readPointer();
        if ((battleEntry).isNull()) {
            return null;
        } /* if 0xa6450 */
        return battleEntry;
}
            copyLinkForBattleLogItem (item) {
    var battleEntry, uuidBuffer, uuidHex, ownerTag, shareCode;
        battleEntry = (SharedReplay).resolveBattleEntry(item);
        if ((!battleEntry)) {
            return (SharedReplay).reportNoCapture();
        } /* if 0xa64f6 */
        uuidBuffer = ((Libc).Libc).malloc(BATTLE_UUID_SIZE);
        (Memory).copy(uuidBuffer, (battleEntry).add(battleEntryUuidLoOffset), 8);
        (Memory).copy((uuidBuffer).add(8), (battleEntry).add(battleEntryUuidHiOffset), 8);
        uuidHex = ((ReplayUuid).ReplayUuid).toHex(uuidBuffer);
        ((Libc).Libc).free(uuidBuffer);
        ownerTag = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag(((GameMain).GameMain).getAccountId());
        shareCode = ("").concat(uuidHex, ":", ownerTag);
        ((Application).Application).copyString((SharedReplay).encodeDeeplink(shareCode));
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("BattleLogCopyLinkCopied"));
        return true;
}
            encodeDeeplink (shareCode) {
        return (DEEPLINK_PREFIX + shareCode);
}
            watchByCode (shareCode) {
    var parts, battleUuid, ownerTag, ownerAccount;
        parts = ((shareCode).trim()).split(":");
        if ((parts.length !== 2)) {
            return (SharedReplay).reportInvalidCode();
        } /* if 0xa66a3 */
        battleUuid = ((ReplayUuid).ReplayUuid).toBuffer(parts[0]);
        ownerTag = (((parts[1]).replace("#", "")).trim()).toUpperCase();
        if (!(!battleUuid)) {
            if ((!(SharedReplay).isValidPlayerTag(ownerTag))) {
                return (SharedReplay).reportInvalidCode();
            } /* if 0xa6701 */
        } /* if 0xa66f4 */
        if ((ownerTag === ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag(((GameMain).GameMain).getAccountId()))) {
            return (SharedReplay).watchOwnReplay(battleUuid);
        } /* if 0xa6735 */
        ownerAccount = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(ownerTag);
        return (SharedReplay).watchSharedReplay(battleUuid, (ownerAccount).instance);
}
            watchOwnReplay (battleUuid) {
    var uuidLo, uuidHi, manager;
        uuidLo = (battleUuid).readU64();
        uuidHi = ((battleUuid).add(8)).readU64();
        manager = ((AllianceManager).AllianceManager).getInstance();
        if ((!(manager).isNull())) {
            ((manager).add(busyFlagOffset)).writeU8(0);
        } /* if 0xa67f8 */
        return ((AllianceManager).AllianceManager).doStartReplay(uuidLo, uuidHi);
}
            buildShareCode () {
    var battleUuid, ownerTag;
        battleUuid = ((ReplayUuidLogger).ReplayUuidLogger).getLastRawUuid();
        if ((!battleUuid)) {
            return null;
        } /* if 0xa6861 */
        ownerTag = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag(((GameMain).GameMain).getAccountId());
        return ("").concat(((ReplayUuid).ReplayUuid).toHex(battleUuid), ":", ownerTag);
}
            extractCodeFromDeeplink (url) {
    var codeStart, valueStart, ampEnd, value;
        codeStart = (url).indexOf(DEEPLINK_CODE_PARAM);
        if ((codeStart < 0)) {
            return null;
        } /* if 0xa6900 */
        valueStart = (codeStart + DEEPLINK_CODE_PARAM.length);
        ampEnd = (url).indexOf("&", valueStart);
        if ((ampEnd < 0)) {
        } /* if 0xa6930 */
        /* jump -> 0xa693f */
        value = (url).slice(valueStart, ampEnd);
        return decodeURIComponent(value);
}
            watchSharedReplay (battleUuid, ownerAccount) {
    var entry, manager;
        entry = ((Libc).Libc).calloc(ENTRY_SIZE, 1);
        ((entry).add(battleUuidOffset)).writeByteArray((battleUuid).readByteArray(BATTLE_UUID_SIZE));
        ((entry).add(intParamOffset)).writeInt(SHARED_REPLAY_TYPE);
        ((entry).add(ownerAccountOffset)).writePointer(ownerAccount);
        manager = ((AllianceManager).AllianceManager).getInstance();
        if ((!(manager).isNull())) {
            ((manager).add(busyFlagOffset)).writeU8(0);
        } /* if 0xa6a4d */
        return ((AllianceManager).AllianceManager).doStartSharedReplay(entry);
}
            isValidPlayerTag (tag) {
    var character;
        if ((tag.length === 0)) {
            return false;
        } /* if 0xa6a90 */
        /* jump -> 0xa6ab9 */
        character = /*iter*/ tag;
        if ((!(((HashTagCodeGenerator).HashTagCodeGenerator).CONVERSION_CHARS).includes(character))) {
            return undefined;
        } /* if 0xa6ab9 */
        } while (!tag);
        character = <underflow>;
        return true;
}
            reportInvalidCode () {
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("WatchSharedReplayBadCode"));
        return false;
}
            reportNoCapture () {
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CopyReplayCodeNoCapture"));
        return false;
}
        }
        SharedReplay = GUI = SharedReplay;
        exports.SharedReplay = SharedReplay;
        SharedReplay.pendingCode = null;
        SharedReplay.homeReady = false;
        return;
};

// --------------------- MODULE 6980 — BattleEndReplayScreen ---------------------

// ============================================================ //
// webpack module 6980  —  BattleEndReplayScreen
// exports: BattleEndReplayScreen
// deps: 4009 (Config), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6980] = function BattleEndReplayScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, BattleEndReplayScreen_addExecutionTo, BattleEndReplayScreen, <class_fields_init>, BattleEndReplayScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleEndReplayScreen = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        BattleEndReplayScreen_addExecutionTo = new NativeFunction(((Libg).Libg).offset(9579404, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        BattleEndReplayScreen;
        class BattleEndReplayScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x406f7 (open) */
}
            patch () {
        return;
}
        }
        BattleEndReplayScreen = BattleEndReplayScreen = BattleEndReplayScreen;
        exports.BattleEndReplayScreen = BattleEndReplayScreen;
        return;
};

