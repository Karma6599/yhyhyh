var ADD_CREDITS_BUTTON = {
    label: "ADD_CREDITS",
    resource: "RecruitTokens",
    amount: 100
};

function ADD_CREDITS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.addResource(ADD_CREDITS_BUTTON.resource, ADD_CREDITS_BUTTON.amount);
}
