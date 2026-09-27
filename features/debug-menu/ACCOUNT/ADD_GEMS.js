var ADD_GEMS_BUTTON = {
    label: "ADD_GEMS",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 14,
    intParameter: 800
};

function ADD_GEMS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_GEMS_BUTTON.actionIdx, ADD_GEMS_BUTTON.intParameter);
}
