var ADD_BLING_RESOURCE_BUTTON = {
    label: "ADD_BLING_RESOURCE",
    resource: "Bling",
    amount: 1000
};

function ADD_BLING_RESOURCE_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.addResource(ADD_BLING_RESOURCE_BUTTON.resource, ADD_BLING_RESOURCE_BUTTON.amount);
}
