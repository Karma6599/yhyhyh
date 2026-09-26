//============================================================================//// EVENTS// merged webpack modules: 9368 EventSlot//============================================================================//
// --------------------- MODULE 9368 — EventSlot ---------------------


// ============================================================ //
// webpack module 9368  —  EventSlot
// exports: CLAIM_LEVEL_VIEWED, CLAIM_LEVEL_XP_CLAIMED, EventSlot
// deps: 1588 (LogicMemory), 4325 (LogicLocationData)
// ============================================================ //

__webpack_modules__[9368] = function EventSlot_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicLocationData, slotIndexOffset, xpRewardOffset, locationOffset, claimLevelOffset, EventSlot, <class_fields_init>, EventSlot;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CLAIM_LEVEL_VIEWED = undefined;
        undefined.CLAIM_LEVEL_XP_CLAIMED = exports;
        exports.EventSlot = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicLocationData = __webpack_require__(4325);
        slotIndexOffset = ((LogicMemory).LogicMemory).offset(4);
        xpRewardOffset = ((LogicMemory).LogicMemory).offset(20);
        locationOffset = ((LogicMemory).LogicMemory).offset(24);
        claimLevelOffset = ((LogicMemory).LogicMemory).offset(40);
        exports.CLAIM_LEVEL_VIEWED = 1;
        exports.CLAIM_LEVEL_XP_CLAIMED = 2;
        static get slotIndex () {
        return (((this).instance).add(slotIndexOffset)).readInt();
};
        static get xpReward () {
        return (((this).instance).add(xpRewardOffset)).readInt();
};
        static get claimLevel () {
        return (((this).instance).add(claimLevelOffset)).readInt();
};
        static getLocation () {
    var locationPointer;
        locationPointer = (((this).instance).add(locationOffset)).readPointer();
        if ((locationPointer).isNull()) {
            return null;
        } /* if 0x649f1 */
        return new (LogicLocationData).LogicLocationData(locationPointer);
};
        <class_fields_init> = undefined;
        EventSlot;
        class EventSlot {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x648f7 */
        this.instance = instance;
        return;
}
        }
        EventSlot = EventSlot = EventSlot;
        exports.EventSlot = EventSlot;
        return;
};

