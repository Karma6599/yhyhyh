var LOCK_ALL_SKINS_BUTTON = {
    label: "LOCK_ALL_SKINS",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 309,
    intParameter: 1
};

function LOCK_ALL_SKINS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(LOCK_ALL_SKINS_BUTTON.actionIdx, LOCK_ALL_SKINS_BUTTON.intParameter);
}
