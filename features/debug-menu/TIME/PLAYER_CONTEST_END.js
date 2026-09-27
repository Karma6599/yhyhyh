var PLAYER_CONTEST_END_BUTTON = {
    label: "PLAYER_CONTEST_END",
    category: DebugMenuCategory.EDebugCategory.TIME,
    actionIdx: 268,
    intParameter: 1
};

function PLAYER_CONTEST_END_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(PLAYER_CONTEST_END_BUTTON.actionIdx, PLAYER_CONTEST_END_BUTTON.intParameter);
}
