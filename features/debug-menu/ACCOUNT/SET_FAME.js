var SET_FAME_BUTTON = {
    label: "SET_FAME",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 166,
    intParameter: 5000
};

function SET_FAME_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(SET_FAME_BUTTON.actionIdx, SET_FAME_BUTTON.intParameter);
}
