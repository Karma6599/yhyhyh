var UNLOCK_HYPER_BUDDIES_ALL_BUTTON = {
    label: "UNLOCK_HYPER_BUDDIES_ALL",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 420,
    intParameter: 1
};

function UNLOCK_HYPER_BUDDIES_ALL_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(UNLOCK_HYPER_BUDDIES_ALL_BUTTON.actionIdx, UNLOCK_HYPER_BUDDIES_ALL_BUTTON.intParameter);
}
