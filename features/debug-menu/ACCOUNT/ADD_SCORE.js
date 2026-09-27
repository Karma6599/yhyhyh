var ADD_SCORE_BUTTON = {
    label: "ADD_SCORE",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 25,
    intParameter: 125
};

function ADD_SCORE_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_SCORE_BUTTON.actionIdx, ADD_SCORE_BUTTON.intParameter);
}
