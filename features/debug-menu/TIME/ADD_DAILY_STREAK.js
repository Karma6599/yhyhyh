var ADD_DAILY_STREAK_BUTTON = {
    label: "ADD_DAILY_STREAK",
    category: DebugMenuCategory.EDebugCategory.TIME,
    actionIdx: 288,
    intParameter: 1
};

function ADD_DAILY_STREAK_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_DAILY_STREAK_BUTTON.actionIdx, ADD_DAILY_STREAK_BUTTON.intParameter);
}
