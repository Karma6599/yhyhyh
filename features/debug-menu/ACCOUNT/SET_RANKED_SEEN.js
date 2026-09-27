var SET_RANKED_SEEN_BUTTON = {
    label: "SET_RANKED_SEEN",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 217,
    intParameter: 1
};

function SET_RANKED_SEEN_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(SET_RANKED_SEEN_BUTTON.actionIdx, SET_RANKED_SEEN_BUTTON.intParameter);
}
