var TOGGLE_CHAT_BUBBLES_BUTTON = {
    label: "TOGGLE_CHAT_BUBBLES",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle",
    checkbox: {}
};

function toggleChatBubbles() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return;
    }
    var hud = BattleScreen.BattleScreen.getCombatHUD();
    if (hud.isNull()) {
        return;
    }
}

function areChatBubblesVisible() {
    return CombatHUD.CombatHUD.areChatBubblesVisible();
}

function TOGGLE_CHAT_BUBBLES_callback() {
    toggleChatBubbles();
}

function TOGGLE_CHAT_BUBBLES_getState() {
    return areChatBubblesVisible();
}
