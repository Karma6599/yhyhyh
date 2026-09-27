var ADD_BP_XP_BUTTON = {
    label: "ADD_BP_XP",
    category: DebugMenuCategory.EDebugCategory.BRAWL_PASS,
    actionIdx: 81,
    intParameter: 1000
};

function ADD_BP_XP_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADD_BP_XP_BUTTON.actionIdx, ADD_BP_XP_BUTTON.intParameter);
}
