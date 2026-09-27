var REMOVE_CC_ESPORTS_BUTTON = {
    label: "REMOVE_CC_ESPORTS",
    category: DebugMenuCategory.EDebugCategory.CHALLENGE,
    actionIdx: 103,
    intParameter: 1
};

function REMOVE_CC_ESPORTS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(REMOVE_CC_ESPORTS_BUTTON.actionIdx, REMOVE_CC_ESPORTS_BUTTON.intParameter);
}
