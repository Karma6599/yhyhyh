var SET_CC_ESPORTS_QUALIFIED_BUTTON = {
    label: "SET_CC_ESPORTS_QUALIFIED",
    category: DebugMenuCategory.EDebugCategory.CHALLENGE,
    actionIdx: 102,
    intParameter: 1
};

function SET_CC_ESPORTS_QUALIFIED_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(SET_CC_ESPORTS_QUALIFIED_BUTTON.actionIdx, SET_CC_ESPORTS_QUALIFIED_BUTTON.intParameter);
}
