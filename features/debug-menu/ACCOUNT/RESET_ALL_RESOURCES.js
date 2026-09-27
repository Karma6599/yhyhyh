var RESET_ALL_RESOURCES_BUTTON = {
    label: "RESET_ALL_RESOURCES",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 250,
    intParameter: 1
};

function RESET_ALL_RESOURCES_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(RESET_ALL_RESOURCES_BUTTON.actionIdx, RESET_ALL_RESOURCES_BUTTON.intParameter);
}
