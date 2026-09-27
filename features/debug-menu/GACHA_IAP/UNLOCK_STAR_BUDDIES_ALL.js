var UNLOCK_STAR_BUDDIES_ALL_BUTTON = {
    label: "UNLOCK_STAR_BUDDIES_ALL",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 419,
    intParameter: 1
};

function UNLOCK_STAR_BUDDIES_ALL_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(UNLOCK_STAR_BUDDIES_ALL_BUTTON.actionIdx, UNLOCK_STAR_BUDDIES_ALL_BUTTON.intParameter);
}
