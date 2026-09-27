var UNLOCK_AND_MAX_ONE_BUTTON = {
    label: "UNLOCK_AND_MAX_ONE",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 154,
    intParameter: 1
};

function UNLOCK_AND_MAX_ONE_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(UNLOCK_AND_MAX_ONE_BUTTON.actionIdx, UNLOCK_AND_MAX_ONE_BUTTON.intParameter);
}
