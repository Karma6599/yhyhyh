var DECREASE_SCORE_BUTTON = {
    label: "DECREASE_SCORE",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 26,
    intParameter: -125
};

function DECREASE_SCORE_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(DECREASE_SCORE_BUTTON.actionIdx, DECREASE_SCORE_BUTTON.intParameter);
}
