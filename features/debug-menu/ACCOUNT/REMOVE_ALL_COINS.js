var REMOVE_ALL_COINS_BUTTON = {
    label: "REMOVE_ALL_COINS",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 19,
    intParameter: -1
};

function REMOVE_ALL_COINS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(REMOVE_ALL_COINS_BUTTON.actionIdx, REMOVE_ALL_COINS_BUTTON.intParameter);
}
