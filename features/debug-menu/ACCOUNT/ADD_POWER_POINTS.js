var ADD_POWER_POINTS_BUTTON = {
    label: "ADD_POWER_POINTS",
    resource: "PowerPoints",
    amount: 1000
};

function ADD_POWER_POINTS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.addResource(ADD_POWER_POINTS_BUTTON.resource, ADD_POWER_POINTS_BUTTON.amount);
}
