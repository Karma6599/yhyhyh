var slotIndexOffset = LogicMemory.offset(4);
var xpRewardOffset = LogicMemory.offset(20);
var locationOffset = LogicMemory.offset(24);
var claimLevelOffset = LogicMemory.offset(40);

class EventSlot {
    constructor(instance) {
        this.instance = instance;
    }
    get slotIndex() {
        return this.instance.add(slotIndexOffset).readInt();
    }
    get xpReward() {
        return this.instance.add(xpRewardOffset).readInt();
    }
    get claimLevel() {
        return this.instance.add(claimLevelOffset).readInt();
    }
    getLocation() {
        var locationPointer = this.instance.add(locationOffset).readPointer();
        if (locationPointer.isNull()) {
            return null;
        }
        return new LogicLocationData(locationPointer);
    }
}
EventSlot.CLAIM_LEVEL_VIEWED = 1;
EventSlot.CLAIM_LEVEL_XP_CLAIMED = 2;
