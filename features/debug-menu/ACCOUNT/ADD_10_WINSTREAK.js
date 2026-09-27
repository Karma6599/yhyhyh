var ADD_10_WINSTREAK_BUTTON = {
    label: "ADD_10_WINSTREAK",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 210,
    intParameter: 10
};

function ADD_10_WINSTREAK_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_10_WINSTREAK_BUTTON.actionIdx, ADD_10_WINSTREAK_BUTTON.intParameter);
}
