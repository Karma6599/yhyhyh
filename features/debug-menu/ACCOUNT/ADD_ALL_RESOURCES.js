var ADD_ALL_RESOURCES_BUTTON = {
    label: "ADD_ALL_RESOURCES",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 249,
    intParameter: 1000
};

function ADD_ALL_RESOURCES_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_ALL_RESOURCES_BUTTON.actionIdx, ADD_ALL_RESOURCES_BUTTON.intParameter);
}
