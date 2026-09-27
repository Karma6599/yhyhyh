var ADD_PRO_LEAGUE_POINT_BUTTON = {
    label: "ADD_PRO_LEAGUE_POINT",
    category: DebugMenuCategory.EDebugCategory.CHALLENGE,
    actionIdx: 91,
    intParameter: 1
};

function ADD_PRO_LEAGUE_POINT_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_PRO_LEAGUE_POINT_BUTTON.actionIdx, ADD_PRO_LEAGUE_POINT_BUTTON.intParameter);
}
