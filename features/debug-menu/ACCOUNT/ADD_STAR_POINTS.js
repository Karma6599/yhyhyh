var ADD_STAR_POINTS_BUTTON = {
    label: "ADD_STAR_POINTS",
    resource: "LegendaryTrophies",
    amount: 100
};

function ADD_STAR_POINTS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.addResource(ADD_STAR_POINTS_BUTTON.resource, ADD_STAR_POINTS_BUTTON.amount);
}
