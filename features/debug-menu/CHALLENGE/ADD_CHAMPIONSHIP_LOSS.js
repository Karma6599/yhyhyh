var ADD_CHAMPIONSHIP_LOSS_BUTTON = {
    label: "ADD_CHAMPIONSHIP_LOSS",
    category: DebugMenuCategory.EDebugCategory.CHALLENGE,
    actionIdx: 95,
    intParameter: 1
};

function ADD_CHAMPIONSHIP_LOSS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_CHAMPIONSHIP_LOSS_BUTTON.actionIdx, ADD_CHAMPIONSHIP_LOSS_BUTTON.intParameter);
}
