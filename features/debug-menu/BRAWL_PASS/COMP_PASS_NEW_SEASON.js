var COMP_PASS_NEW_SEASON_BUTTON = {
    label: "COMP_PASS_NEW_SEASON",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 284,
    intParameter: 1
};

function COMP_PASS_NEW_SEASON_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(COMP_PASS_NEW_SEASON_BUTTON.actionIdx, COMP_PASS_NEW_SEASON_BUTTON.intParameter);
}
