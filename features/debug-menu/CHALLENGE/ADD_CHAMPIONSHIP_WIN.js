var ADD_CHAMPIONSHIP_WIN_BUTTON = {
    label: "ADD_CHAMPIONSHIP_WIN",
    category: DebugMenuCategory.EDebugCategory.CHALLENGE,
    actionIdx: 84,
    intParameter: 1
};

function ADD_CHAMPIONSHIP_WIN_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_CHAMPIONSHIP_WIN_BUTTON.actionIdx, ADD_CHAMPIONSHIP_WIN_BUTTON.intParameter);
}
