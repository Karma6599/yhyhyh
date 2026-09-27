var COLLAB_SIDE_SEEN_BUTTON = {
    label: "COLLAB_SIDE_SEEN",
    category: DebugMenuCategory.EDebugCategory.CHALLENGE,
    actionIdx: 266,
    intParameter: 1
};

function COLLAB_SIDE_SEEN_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(COLLAB_SIDE_SEEN_BUTTON.actionIdx, COLLAB_SIDE_SEEN_BUTTON.intParameter);
}
