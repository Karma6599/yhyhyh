var BP_DEBUG_RESET_PROGRESS_BUTTON = {
    label: "BP_DEBUG_RESET_PROGRESS",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 171,
    intParameter: 1
};

function BP_DEBUG_RESET_PROGRESS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(BP_DEBUG_RESET_PROGRESS_BUTTON.actionIdx, BP_DEBUG_RESET_PROGRESS_BUTTON.intParameter);
}
