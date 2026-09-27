var TROPHY_SEASON_END_NOTIF_BUTTON = {
    label: "TROPHY_SEASON_END_NOTIF",
    category: DebugMenuCategory.EDebugCategory.TIME,
    actionIdx: 245,
    intParameter: 1
};

function TROPHY_SEASON_END_NOTIF_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(TROPHY_SEASON_END_NOTIF_BUTTON.actionIdx, TROPHY_SEASON_END_NOTIF_BUTTON.intParameter);
}
