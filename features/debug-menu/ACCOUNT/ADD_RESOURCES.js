var ADD_RESOURCES_BUTTON = {
    label: "ADD_RESOURCES",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 1,
    intParameter: -1
};

function ADD_RESOURCES_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_RESOURCES_BUTTON.actionIdx, ADD_RESOURCES_BUTTON.intParameter);
}
