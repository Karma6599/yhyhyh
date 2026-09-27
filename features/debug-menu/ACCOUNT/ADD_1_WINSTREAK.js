var ADD_1_WINSTREAK_BUTTON = {
    label: "ADD_1_WINSTREAK",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 210,
    intParameter: 1
};

function ADD_1_WINSTREAK_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_1_WINSTREAK_BUTTON.actionIdx, ADD_1_WINSTREAK_BUTTON.intParameter);
}
