var BUY_BP_SEASON_2_BUTTON = {
    label: "BUY_BP_SEASON_2",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 94,
    intParameter: 1
};

function BUY_BP_SEASON_2_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(BUY_BP_SEASON_2_BUTTON.actionIdx, BUY_BP_SEASON_2_BUTTON.intParameter);
}
