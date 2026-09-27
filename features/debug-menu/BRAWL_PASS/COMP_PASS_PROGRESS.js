var COMP_PASS_PROGRESS_BUTTON = {
    label: "COMP_PASS_PROGRESS",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 285,
    intParameter: 1
};

function COMP_PASS_PROGRESS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(COMP_PASS_PROGRESS_BUTTON.actionIdx, COMP_PASS_PROGRESS_BUTTON.intParameter);
}
