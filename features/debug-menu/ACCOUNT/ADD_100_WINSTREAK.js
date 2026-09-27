var ADD_100_WINSTREAK_BUTTON = {
    label: "ADD_100_WINSTREAK",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 210,
    intParameter: 100
};

function ADD_100_WINSTREAK_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_100_WINSTREAK_BUTTON.actionIdx, ADD_100_WINSTREAK_BUTTON.intParameter);
}
