var ADD_LEGENDARY_TROPHIES_BUTTON = {
    label: "ADD_LEGENDARY_TROPHIES",
    actionIdx: LogicDebugButtonMessage.LogicDebugButtonMessage.EDebugAction.ADD_SCORE,
    amount: 100,
    type: 28
};

function ADD_LEGENDARY_TROPHIES_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.executeNativeWithFloater(ADD_LEGENDARY_TROPHIES_BUTTON.actionIdx, ADD_LEGENDARY_TROPHIES_BUTTON.amount, ADD_LEGENDARY_TROPHIES_BUTTON.type);
}
