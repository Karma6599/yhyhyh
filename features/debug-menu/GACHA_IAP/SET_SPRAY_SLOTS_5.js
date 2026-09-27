var SET_SPRAY_SLOTS_5_BUTTON = {
    label: "SET_SPRAY_SLOTS_5",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 147,
    intParameter: 5
};

function SET_SPRAY_SLOTS_5_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(SET_SPRAY_SLOTS_5_BUTTON.actionIdx, SET_SPRAY_SLOTS_5_BUTTON.intParameter);
}
