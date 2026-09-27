var UNLOCK_AND_MAX_ALL_LVL_7_BUTTON = {
    label: "UNLOCK_AND_MAX_ALL_LVL_7",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 23,
    intParameter: 1
};

function UNLOCK_AND_MAX_ALL_LVL_7_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(UNLOCK_AND_MAX_ALL_LVL_7_BUTTON.actionIdx, UNLOCK_AND_MAX_ALL_LVL_7_BUTTON.intParameter);
}
