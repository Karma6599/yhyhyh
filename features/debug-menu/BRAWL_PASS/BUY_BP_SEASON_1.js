var BUY_BP_SEASON_1_BUTTON = {
    label: "BUY_BP_SEASON_1",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 94,
    intParameter: 0
};

function BUY_BP_SEASON_1_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(BUY_BP_SEASON_1_BUTTON.actionIdx, BUY_BP_SEASON_1_BUTTON.intParameter);
}
