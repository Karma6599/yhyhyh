var UNLOCK_PROG_SKINS_TO_LVL_5_BUTTON = {
    label: "UNLOCK_PROG_SKINS_TO_LVL_5",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 282,
    intParameter: 5
};

function UNLOCK_PROG_SKINS_TO_LVL_5_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(UNLOCK_PROG_SKINS_TO_LVL_5_BUTTON.actionIdx, UNLOCK_PROG_SKINS_TO_LVL_5_BUTTON.intParameter);
}
