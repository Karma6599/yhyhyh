var CLAIM_TROPHY_ROAD_BUTTON = {
    label: "CLAIM_TROPHY_ROAD",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 129,
    intParameter: 1000
};

function CLAIM_TROPHY_ROAD_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(CLAIM_TROPHY_ROAD_BUTTON.actionIdx, CLAIM_TROPHY_ROAD_BUTTON.intParameter);
}
