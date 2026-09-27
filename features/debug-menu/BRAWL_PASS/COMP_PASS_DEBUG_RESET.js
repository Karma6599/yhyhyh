var COMP_PASS_DEBUG_RESET_BUTTON = {
    label: "COMP_PASS_DEBUG_RESET",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 287,
    intParameter: 1
};

function COMP_PASS_DEBUG_RESET_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(COMP_PASS_DEBUG_RESET_BUTTON.actionIdx, COMP_PASS_DEBUG_RESET_BUTTON.intParameter);
}
