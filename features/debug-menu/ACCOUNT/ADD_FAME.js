var ADD_FAME_BUTTON = {
    label: "ADD_FAME",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 165,
    intParameter: 1000
};

function ADD_FAME_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_FAME_BUTTON.actionIdx, ADD_FAME_BUTTON.intParameter);
}
