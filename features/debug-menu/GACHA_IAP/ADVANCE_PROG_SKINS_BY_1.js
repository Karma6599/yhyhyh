var ADVANCE_PROG_SKINS_BY_1_BUTTON = {
    label: "ADVANCE_PROG_SKINS_BY_1",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 283,
    intParameter: 1
};

function ADVANCE_PROG_SKINS_BY_1_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(ADVANCE_PROG_SKINS_BY_1_BUTTON.actionIdx, ADVANCE_PROG_SKINS_BY_1_BUTTON.intParameter);
}
