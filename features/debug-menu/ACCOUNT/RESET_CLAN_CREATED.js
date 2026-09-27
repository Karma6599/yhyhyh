var RESET_CLAN_CREATED_BUTTON = {
    label: "RESET_CLAN_CREATED",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 203,
    intParameter: 1
};

function RESET_CLAN_CREATED_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(RESET_CLAN_CREATED_BUTTON.actionIdx, RESET_CLAN_CREATED_BUTTON.intParameter);
}
