// =============================================================
// COMMANDS
// merged webpack modules: 7656 LogicCommand, 4484 LogicClaimDailyRewardCommand, 5119 LogicHeroSeenCommand, 4150 LogicItemSeenCommand, 5287 LogicPurchaseOfferCommand, 7933 LogicLaserMessageFactory
// =============================================================

// --------------------- MODULE 7656 — LogicCommand ---------------------

// ============================================================ //
// webpack module 7656  —  LogicCommand
// exports: LogicCommand, getCommandTypeVtableOffset
// ============================================================ //

__webpack_modules__[7656] = function LogicCommand_factory(__unused_webpack_module, exports) {
    var executeVtableOffset, LogicCommand, <class_fields_init>, LogicCommand;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.getCommandTypeVtableOffset = undefined;
        undefined.LogicCommand = exports;
        executeVtableOffset = (3 * (Process).pointerSize);
        exports.getCommandTypeVtableOffset = (4 * (Process).pointerSize);
        static execute (logicHomeMode) {
    var executeFunction;
        executeFunction = (LogicCommand).resolveExecuteFunction((this).vtable);
        return executeFunction((this).instance, logicHomeMode, 3, 0);
};
        static getCommandType () {
        return (LogicCommand).getCommandType((this).instance);
};
        <class_fields_init> = undefined;
        LogicCommand;
        class LogicCommand {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0xdbc8d */
        this.instance = instance;
        this.vtable = ((this).instance).readPointer();
        return;
}
            getCommandType (self) {
    var getCommandTypeFunction;
        getCommandTypeFunction = (LogicCommand).resolveGetCommandTypeFunction((self).readPointer());
        return getCommandTypeFunction(self);
}
            resolveExecuteFunction (vtable) {
        return new NativeFunction(((vtable).add(executeVtableOffset)).readPointer(), "int", ["pointer", "pointer", "int", "bool"]);
}
            resolveGetCommandTypeFunction (vtable) {
        return new NativeFunction(((vtable).add((exports).getCommandTypeVtableOffset)).readPointer(), "int", ["pointer"]);
}
        }
        LogicCommand = LogicCommand = LogicCommand;
        exports.LogicCommand = LogicCommand;
        return;
};

// --------------------- MODULE 4484 — LogicClaimDailyRewardCommand ---------------------

// ============================================================ //
// webpack module 4484  —  LogicClaimDailyRewardCommand
// exports: LogicClaimDailyRewardCommand
// deps: 1588 (LogicMemory), 1978 (Libc), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4484] = function LogicClaimDailyRewardCommand_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicMemory, LogicClaimDailyRewardCommand_constructor, vtableAddress, slotIndexOffset, claimTypeOffset, instanceSize, CLAIM_TYPE_MARK_VIEWED, CLAIM_TYPE_CLAIM_XP, LogicClaimDailyRewardCommand, <class_fields_init>, LogicClaimDailyRewardCommand;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicClaimDailyRewardCommand = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicClaimDailyRewardCommand_constructor = new NativeFunction(((Libg).Libg).offset(14360772, 0), "pointer", ["pointer"]);
        vtableAddress = ((Libg).Libg).offset(18968688, 0);
        slotIndexOffset = ((LogicMemory).LogicMemory).offset(28);
        claimTypeOffset = ((LogicMemory).LogicMemory).offset(32);
        instanceSize = 40;
        CLAIM_TYPE_MARK_VIEWED = 1;
        CLAIM_TYPE_CLAIM_XP = 2;
        <class_fields_init> = undefined;
        LogicClaimDailyRewardCommand;
        class LogicClaimDailyRewardCommand {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x6406b (open) */
}
            create (slotIndex, claimType) {
    var instance;
        instance = ((Libc).Libc).malloc(instanceSize);
        (instance).writeByteArray(new ArrayBuffer(instanceSize));
        (instance).writePointer(vtableAddress);
        LogicClaimDailyRewardCommand_constructor(instance);
        ((instance).add(slotIndexOffset)).writeInt(slotIndex);
        ((instance).add(claimTypeOffset)).writeInt(claimType);
        return instance;
}
        }
        LogicClaimDailyRewardCommand = CLAIM_TYPE_MARK_VIEWED = LogicClaimDailyRewardCommand;
        exports.LogicClaimDailyRewardCommand = LogicClaimDailyRewardCommand;
        LogicClaimDailyRewardCommand.ClaimType = { MarkViewed: CLAIM_TYPE_MARK_VIEWED, ClaimXp: CLAIM_TYPE_CLAIM_XP };
        return;
};

// --------------------- MODULE 5119 — LogicHeroSeenCommand ---------------------

// ============================================================ //
// webpack module 5119  —  LogicHeroSeenCommand
// exports: LogicHeroSeenCommand
// deps: 1588 (LogicMemory), 1978 (Libc), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5119] = function LogicHeroSeenCommand_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicMemory, LogicHeroSeenCommand_constructor, vtableAddress, characterDataOffset, seenStateOffset, instanceSize, SEEN_STATE_DEFAULT, SEEN_STATE_FULLY_VIEWED, SEEN_STATE_PARTIAL, LogicHeroSeenCommand, <class_fields_init>, LogicHeroSeenCommand;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicHeroSeenCommand = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicHeroSeenCommand_constructor = new NativeFunction(((Libg).Libg).offset(14382792, 0), "pointer", ["pointer"]);
        vtableAddress = ((Libg).Libg).offset(18971040, 0);
        characterDataOffset = ((LogicMemory).LogicMemory).offset(32);
        seenStateOffset = ((LogicMemory).LogicMemory).offset(40);
        instanceSize = 48;
        SEEN_STATE_DEFAULT = 1;
        SEEN_STATE_FULLY_VIEWED = 2;
        SEEN_STATE_PARTIAL = 3;
        <class_fields_init> = undefined;
        LogicHeroSeenCommand;
        class LogicHeroSeenCommand {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x642ef (open) */
}
            create (characterDataPointer, seenState) {
    var instance;
        instance = ((Libc).Libc).malloc(instanceSize);
        (instance).writeByteArray(new ArrayBuffer(instanceSize));
        (instance).writePointer(vtableAddress);
        LogicHeroSeenCommand_constructor(instance);
        ((instance).add(characterDataOffset)).writePointer(characterDataPointer);
        ((instance).add(seenStateOffset)).writeInt(seenState);
        return instance;
}
        }
        LogicHeroSeenCommand = SEEN_STATE_DEFAULT = LogicHeroSeenCommand;
        exports.LogicHeroSeenCommand = LogicHeroSeenCommand;
        LogicHeroSeenCommand.SeenState = { Default: SEEN_STATE_DEFAULT, FullyViewed: SEEN_STATE_FULLY_VIEWED, Partial: SEEN_STATE_PARTIAL };
        return;
};

// --------------------- MODULE 4150 — LogicItemSeenCommand ---------------------

// ============================================================ //
// webpack module 4150  —  LogicItemSeenCommand
// exports: LogicItemSeenCommand
// deps: 1588 (LogicMemory), 1978 (Libc), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4150] = function LogicItemSeenCommand_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicMemory, LogicItemSeenCommand_constructor, vtableAddress, cardDataOffset, instanceSize, LogicItemSeenCommand, <class_fields_init>, LogicItemSeenCommand;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicItemSeenCommand = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicItemSeenCommand_constructor = new NativeFunction(((Libg).Libg).offset(14384284, 0), "pointer", ["pointer"]);
        vtableAddress = ((Libg).Libg).offset(18971264, 0);
        cardDataOffset = ((LogicMemory).LogicMemory).offset(32);
        instanceSize = 40;
        <class_fields_init> = undefined;
        LogicItemSeenCommand;
        class LogicItemSeenCommand {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x644ea (open) */
}
            create (cardDataPointer) {
    var instance;
        instance = ((Libc).Libc).malloc(instanceSize);
        (instance).writeByteArray(new ArrayBuffer(instanceSize));
        (instance).writePointer(vtableAddress);
        LogicItemSeenCommand_constructor(instance);
        ((instance).add(cardDataOffset)).writePointer(cardDataPointer);
        return instance;
}
        }
        LogicItemSeenCommand = <class_fields_init> = LogicItemSeenCommand;
        exports.LogicItemSeenCommand = LogicItemSeenCommand;
        return;
};

// --------------------- MODULE 5287 — LogicPurchaseOfferCommand ---------------------

// ============================================================ //
// webpack module 5287  —  LogicPurchaseOfferCommand
// exports: LogicPurchaseOfferCommand
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[5287] = function LogicPurchaseOfferCommand_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicPurchaseOfferCommand_isSkinPurchasableFromCatalog, LogicPurchaseOfferCommand, <class_fields_init>, LogicPurchaseOfferCommand;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicPurchaseOfferCommand = undefined;
        Libg = __webpack_require__(9878);
        LogicPurchaseOfferCommand_isSkinPurchasableFromCatalog = new NativeFunction(((Libg).Libg).offset(14402984, 0), "bool", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        LogicPurchaseOfferCommand;
        class LogicPurchaseOfferCommand {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x6460f (open) */
}
            isSkinPurchasableFromCatalog (homeMode, skin) {
        return (LogicPurchaseOfferCommand_isSkinPurchasableFromCatalog(homeMode, skin) !== 0);
}
        }
        LogicPurchaseOfferCommand = LogicPurchaseOfferCommand = LogicPurchaseOfferCommand;
        exports.LogicPurchaseOfferCommand = LogicPurchaseOfferCommand;
        return;
};

// --------------------- MODULE 7933 — LogicLaserMessageFactory ---------------------

// ============================================================ //
// webpack module 7933  —  LogicLaserMessageFactory
// exports: LogicLaserMessageFactory
// deps: 153 (BattleEndMessage), 980 (PlayAgainStatusMessage), 5532 (PiranhaMessage), 6335 (AllianceDataMessage), 8134 (MatchMakingStatusMessage), 8231 (FriendListMessage), 8321 (MyAllianceMessage)
// ============================================================ //

__webpack_modules__[7933] = function LogicLaserMessageFactory_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, AllianceDataMessage, BattleEndMessage, FriendListMessage, MatchMakingStatusMessage, MyAllianceMessage, PlayAgainStatusMessage, LogicLaserMessageFactory, <class_fields_init>, LogicLaserMessageFactory;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicLaserMessageFactory = undefined;
        PiranhaMessage = __webpack_require__(5532);
        AllianceDataMessage = __webpack_require__(6335);
        BattleEndMessage = __webpack_require__(153);
        FriendListMessage = __webpack_require__(8231);
        MatchMakingStatusMessage = __webpack_require__(8134);
        MyAllianceMessage = __webpack_require__(8321);
        PlayAgainStatusMessage = __webpack_require__(980);
        <class_fields_init> = undefined;
        LogicLaserMessageFactory;
        class LogicLaserMessageFactory {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x710b6 (open) */
}
            createMessageByInstance (instance) {
    var messageType;
        messageType = ((PiranhaMessage).PiranhaMessage).getMessageType(instance);
        if ((messageType === 20105)) {
            return new (FriendListMessage).FriendListMessage(instance);
        } /* if 0x71008 */
        if ((messageType === 20405)) {
            return new (MatchMakingStatusMessage).MatchMakingStatusMessage(instance);
        } /* if 0x7101d */
        if ((messageType === 23456)) {
            return new (BattleEndMessage).BattleEndMessage(instance);
        } /* if 0x71032 */
        if ((messageType === 24301)) {
            return new (AllianceDataMessage).AllianceDataMessage(instance);
        } /* if 0x71047 */
        if ((messageType === 24399)) {
            return new (MyAllianceMessage).MyAllianceMessage(instance);
        } /* if 0x7105c */
        if ((messageType === 24777)) {
            return new (PlayAgainStatusMessage).PlayAgainStatusMessage(instance);
        } /* if 0x71071 */
        return new (PiranhaMessage).PiranhaMessage(instance);
}
        }
        LogicLaserMessageFactory = <class_fields_init> = LogicLaserMessageFactory;
        exports.LogicLaserMessageFactory = LogicLaserMessageFactory;
        return;
};

