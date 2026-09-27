var executeVtableOffset = 3 * Process.pointerSize;
var getCommandTypeVtableOffset = 4 * Process.pointerSize;

class LogicCommand {
    constructor(instance) {
        this.instance = instance;
        this.vtable = this.instance.readPointer();
    }
    execute(logicHomeMode) {
        var executeFunction = LogicCommand.resolveExecuteFunction(this.vtable);
        return executeFunction(this.instance, logicHomeMode, 3, 0);
    }
    getCommandType() {
        return LogicCommand.getCommandType(this.instance);
    }
    static getCommandType(self) {
        var getCommandTypeFunction = LogicCommand.resolveGetCommandTypeFunction(self.readPointer());
        return getCommandTypeFunction(self);
    }
    static resolveExecuteFunction(vtable) {
        return new NativeFunction(vtable.add(executeVtableOffset).readPointer(), "int", ["pointer", "pointer", "int", "bool"]);
    }
    static resolveGetCommandTypeFunction(vtable) {
        return new NativeFunction(vtable.add(getCommandTypeVtableOffset).readPointer(), "int", ["pointer"]);
    }
}

var LogicClaimDailyRewardCommand_constructor = new NativeFunction(Libg.offset(14360772, 0), "pointer", ["pointer"]);
var LogicClaimDailyRewardCommand_vtableAddress = Libg.offset(18968688, 0);
var slotIndexOffset = LogicMemory.offset(28);
var claimTypeOffset = LogicMemory.offset(32);
var LogicClaimDailyRewardCommand_instanceSize = 40;
var CLAIM_TYPE_MARK_VIEWED = 1;
var CLAIM_TYPE_CLAIM_XP = 2;

class LogicClaimDailyRewardCommand {
    static create(slotIndex, claimType) {
        var instance = Libc.malloc(LogicClaimDailyRewardCommand_instanceSize);
        instance.writeByteArray(new ArrayBuffer(LogicClaimDailyRewardCommand_instanceSize));
        instance.writePointer(LogicClaimDailyRewardCommand_vtableAddress);
        LogicClaimDailyRewardCommand_constructor(instance);
        instance.add(slotIndexOffset).writeInt(slotIndex);
        instance.add(claimTypeOffset).writeInt(claimType);
        return instance;
    }
}
LogicClaimDailyRewardCommand.ClaimType = { MarkViewed: CLAIM_TYPE_MARK_VIEWED, ClaimXp: CLAIM_TYPE_CLAIM_XP };

var LogicHeroSeenCommand_constructor = new NativeFunction(Libg.offset(14382792, 0), "pointer", ["pointer"]);
var LogicHeroSeenCommand_vtableAddress = Libg.offset(18971040, 0);
var characterDataOffset = LogicMemory.offset(32);
var seenStateOffset = LogicMemory.offset(40);
var LogicHeroSeenCommand_instanceSize = 48;
var SEEN_STATE_DEFAULT = 1;
var SEEN_STATE_FULLY_VIEWED = 2;
var SEEN_STATE_PARTIAL = 3;

class LogicHeroSeenCommand {
    static create(characterDataPointer, seenState) {
        var instance = Libc.malloc(LogicHeroSeenCommand_instanceSize);
        instance.writeByteArray(new ArrayBuffer(LogicHeroSeenCommand_instanceSize));
        instance.writePointer(LogicHeroSeenCommand_vtableAddress);
        LogicHeroSeenCommand_constructor(instance);
        instance.add(characterDataOffset).writePointer(characterDataPointer);
        instance.add(seenStateOffset).writeInt(seenState);
        return instance;
    }
}
LogicHeroSeenCommand.SeenState = { Default: SEEN_STATE_DEFAULT, FullyViewed: SEEN_STATE_FULLY_VIEWED, Partial: SEEN_STATE_PARTIAL };

var LogicItemSeenCommand_constructor = new NativeFunction(Libg.offset(14384284, 0), "pointer", ["pointer"]);
var LogicItemSeenCommand_vtableAddress = Libg.offset(18971264, 0);
var cardDataOffset = LogicMemory.offset(32);
var LogicItemSeenCommand_instanceSize = 40;

class LogicItemSeenCommand {
    static create(cardDataPointer) {
        var instance = Libc.malloc(LogicItemSeenCommand_instanceSize);
        instance.writeByteArray(new ArrayBuffer(LogicItemSeenCommand_instanceSize));
        instance.writePointer(LogicItemSeenCommand_vtableAddress);
        LogicItemSeenCommand_constructor(instance);
        instance.add(cardDataOffset).writePointer(cardDataPointer);
        return instance;
    }
}

var LogicPurchaseOfferCommand_isSkinPurchasableFromCatalog = new NativeFunction(Libg.offset(14402984, 0), "bool", ["pointer", "pointer"]);

class LogicPurchaseOfferCommand {
    static isSkinPurchasableFromCatalog(homeMode, skin) {
        return LogicPurchaseOfferCommand_isSkinPurchasableFromCatalog(homeMode, skin) !== 0;
    }
}

class LogicLaserMessageFactory {
    static createMessageByInstance(instance) {
        var messageType = PiranhaMessage.getMessageType(instance);
        if (messageType === 20105) {
            return new FriendListMessage(instance);
        }
        if (messageType === 20405) {
            return new MatchMakingStatusMessage(instance);
        }
        if (messageType === 23456) {
            return new BattleEndMessage(instance);
        }
        if (messageType === 24301) {
            return new AllianceDataMessage(instance);
        }
        if (messageType === 24399) {
            return new MyAllianceMessage(instance);
        }
        if (messageType === 24777) {
            return new PlayAgainStatusMessage(instance);
        }
        return new PiranhaMessage(instance);
    }
}
