var BUY_BP_SEASON_3_BUTTON = {
    label: "BUY_BP_SEASON_3",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 94,
    intParameter: 2
};

function BUY_BP_SEASON_3_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(BUY_BP_SEASON_3_BUTTON.actionIdx, BUY_BP_SEASON_3_BUTTON.intParameter);
}
