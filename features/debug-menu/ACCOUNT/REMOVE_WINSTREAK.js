var REMOVE_WINSTREAK_BUTTON = {
    label: "REMOVE_WINSTREAK",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 211,
    intParameter: -1
};

function REMOVE_WINSTREAK_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(REMOVE_WINSTREAK_BUTTON.actionIdx, REMOVE_WINSTREAK_BUTTON.intParameter);
}
