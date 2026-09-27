var battleUuidOffset = LogicMemory.offset(48);
var ownerAccountOffset = LogicMemory.offset(16);
var intParamOffset = LogicMemory.offset(136);
var busyFlagOffset = LogicMemory.offset(157);
var battleLogItemEntryContainerOffset = LogicMemory.offset(232, 240);
var battleEntryUuidLoOffset = LogicMemory.offset(48);
var battleEntryUuidHiOffset = LogicMemory.offset(56);
var ENTRY_SIZE = 200;
var BATTLE_UUID_SIZE = 16;
var SHARED_REPLAY_TYPE = 11;
var DEEPLINK_PREFIX = "https://link.brawlstars.com/?action=bsd_replay&code=";
var DEEPLINK_ACTION_MARKER = "action=bsd_replay";
var DEEPLINK_CODE_PARAM = "code=";
var UNKNOWN_ACTION_ENUM = -1;
var handleDeeplinkAddress = Libg.offset(8094792, 0);
var deeplinkActionEnumAddress = Libg.offset(19144312, 0);

class SharedReplay {
    constructor() {
    }
    static patch() {
        return;
    }
    static notifyHomeReady() {
        var code;
        SharedReplay.homeReady = true;
        if (!SharedReplay.pendingCode) {
            return;
        }
        code = SharedReplay.pendingCode;
        SharedReplay.pendingCode = null;
        return SharedReplay.watchByCode(code);
    }
    static copyShareCode() {
        var shareCode;
        shareCode = SharedReplay.buildShareCode();
        if (!shareCode) {
            GUI.showFloaterTextAtDefaultPosition(Localisation.getString("CopyReplayCodeNoCapture"));
            return false;
        }
        Application.copyString(shareCode);
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("CopyReplayCodeCopied").replace("{code}", shareCode));
        return true;
    }
    static copyShareLink() {
        var shareCode;
        shareCode = SharedReplay.buildShareCode();
        if (!shareCode) {
            GUI.showFloaterTextAtDefaultPosition(Localisation.getString("CopyReplayCodeNoCapture"));
            return false;
        }
        Application.copyString(SharedReplay.encodeDeeplink(shareCode));
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("BattleLogCopyLinkCopied"));
        return true;
    }
    static hasValidEntryUuid(item) {
        var battleEntry, uuidLo, uuidHi;
        try {
            battleEntry = SharedReplay.resolveBattleEntry(item);
            if (!battleEntry) {
                return false;
            }
            uuidLo = battleEntry.add(battleEntryUuidLoOffset).readPointer();
            uuidHi = battleEntry.add(battleEntryUuidHiOffset).readPointer();
            if (uuidLo.isNull()) {
                return false;
            }
            return !uuidHi.isNull();
        } catch (e) {
            return false;
        }
    }
    static resolveBattleEntry(item) {
        var container, wrapper, backing, battleEntry;
        if (item.isNull()) {
            return null;
        }
        container = item.add(battleLogItemEntryContainerOffset).readPointer();
        if (container.isNull()) {
            return null;
        }
        wrapper = container.add(8).readPointer();
        if (wrapper.isNull()) {
            return null;
        }
        backing = wrapper.readPointer();
        if (backing.isNull()) {
            return null;
        }
        battleEntry = backing.readPointer();
        if (battleEntry.isNull()) {
            return null;
        }
        return battleEntry;
    }
    static copyLinkForBattleLogItem(item) {
        var battleEntry, uuidBuffer, uuidHex, ownerTag, shareCode;
        battleEntry = SharedReplay.resolveBattleEntry(item);
        if (!battleEntry) {
            return SharedReplay.reportNoCapture();
        }
        uuidBuffer = Libc.malloc(BATTLE_UUID_SIZE);
        Memory.copy(uuidBuffer, battleEntry.add(battleEntryUuidLoOffset), 8);
        Memory.copy(uuidBuffer.add(8), battleEntry.add(battleEntryUuidHiOffset), 8);
        uuidHex = ReplayUuid.toHex(uuidBuffer);
        Libc.free(uuidBuffer);
        ownerTag = HashTagCodeGenerator.convertLongToPlayerTag(GameMain.getAccountId());
        shareCode = "".concat(uuidHex, ":", ownerTag);
        Application.copyString(SharedReplay.encodeDeeplink(shareCode));
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("BattleLogCopyLinkCopied"));
        return true;
    }
    static encodeDeeplink(shareCode) {
        return DEEPLINK_PREFIX + shareCode;
    }
    static watchByCode(shareCode) {
        var parts, battleUuid, ownerTag, ownerAccount;
        parts = shareCode.trim().split(":");
        if (parts.length !== 2) {
            return SharedReplay.reportInvalidCode();
        }
        battleUuid = ReplayUuid.toBuffer(parts[0]);
        ownerTag = parts[1].replace("#", "").trim().toUpperCase();
        if (battleUuid) {
            if (!SharedReplay.isValidPlayerTag(ownerTag)) {
                return SharedReplay.reportInvalidCode();
            }
        }
        if (ownerTag === HashTagCodeGenerator.convertLongToPlayerTag(GameMain.getAccountId())) {
            return SharedReplay.watchOwnReplay(battleUuid);
        }
        ownerAccount = HashTagCodeGenerator.convertPlayerTagToLong(ownerTag);
        return SharedReplay.watchSharedReplay(battleUuid, ownerAccount.instance);
    }
    static watchOwnReplay(battleUuid) {
        var uuidLo, uuidHi, manager;
        uuidLo = battleUuid.readU64();
        uuidHi = battleUuid.add(8).readU64();
        manager = AllianceManager.getInstance();
        if (!manager.isNull()) {
            manager.add(busyFlagOffset).writeU8(0);
        }
        return AllianceManager.doStartReplay(uuidLo, uuidHi);
    }
    static buildShareCode() {
        var battleUuid, ownerTag;
        battleUuid = ReplayUuidLogger.getLastRawUuid();
        if (!battleUuid) {
            return null;
        }
        ownerTag = HashTagCodeGenerator.convertLongToPlayerTag(GameMain.getAccountId());
        return "".concat(ReplayUuid.toHex(battleUuid), ":", ownerTag);
    }
    static extractCodeFromDeeplink(url) {
        var codeStart, valueStart, ampEnd, value;
        codeStart = url.indexOf(DEEPLINK_CODE_PARAM);
        if (codeStart < 0) {
            return null;
        }
        valueStart = codeStart + DEEPLINK_CODE_PARAM.length;
        ampEnd = url.indexOf("&", valueStart);
        if (ampEnd < 0) {
            ampEnd = url.length;
        }
        value = url.slice(valueStart, ampEnd);
        return decodeURIComponent(value);
    }
    static watchSharedReplay(battleUuid, ownerAccount) {
        var entry, manager;
        entry = Libc.calloc(ENTRY_SIZE, 1);
        entry.add(battleUuidOffset).writeByteArray(battleUuid.readByteArray(BATTLE_UUID_SIZE));
        entry.add(intParamOffset).writeInt(SHARED_REPLAY_TYPE);
        entry.add(ownerAccountOffset).writePointer(ownerAccount);
        manager = AllianceManager.getInstance();
        if (!manager.isNull()) {
            manager.add(busyFlagOffset).writeU8(0);
        }
        return AllianceManager.doStartSharedReplay(entry);
    }
    static isValidPlayerTag(tag) {
        var character;
        if (tag.length === 0) {
            return false;
        }
        for (const character of tag) {
            if (!HashTagCodeGenerator.CONVERSION_CHARS.includes(character)) {
                return undefined;
            }
        }
        return true;
    }
    static reportInvalidCode() {
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("WatchSharedReplayBadCode"));
        return false;
    }
    static reportNoCapture() {
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("CopyReplayCodeNoCapture"));
        return false;
    }
}
SharedReplay.pendingCode = null;
SharedReplay.homeReady = false;

var BattleEndReplayScreen_addExecutionTo = new NativeFunction(Libg.offset(9579404, 0), "void", ["pointer", "pointer"]);

class BattleEndReplayScreen {
    constructor() {
    }
    static patch() {
        return;
    }
}
