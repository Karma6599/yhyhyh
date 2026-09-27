var ADD_GOLD_TICKETS_BUTTON = {
    label: "ADD_GOLD_TICKETS",
    amount: 5,
    type: 33
};

function ADD_GOLD_TICKETS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.showFloater(ADD_GOLD_TICKETS_BUTTON.amount, ADD_GOLD_TICKETS_BUTTON.type);
}
