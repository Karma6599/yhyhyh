var REMOVE_ALL_GEMS_BUTTON = {
    label: "REMOVE_ALL_GEMS",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 18,
    intParameter: -1
};

function REMOVE_ALL_GEMS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(REMOVE_ALL_GEMS_BUTTON.actionIdx, REMOVE_ALL_GEMS_BUTTON.intParameter);
}
