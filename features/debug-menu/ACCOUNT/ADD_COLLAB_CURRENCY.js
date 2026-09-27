var ADD_COLLAB_CURRENCY_BUTTON = {
    label: "ADD_COLLAB_CURRENCY",
    resource: "CollabEventCurrency",
    amount: 100
};

function ADD_COLLAB_CURRENCY_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.addResource(ADD_COLLAB_CURRENCY_BUTTON.resource, ADD_COLLAB_CURRENCY_BUTTON.amount);
}
