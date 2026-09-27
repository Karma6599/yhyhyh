var SHOW_CHARACTER_STATE_BUTTON = {
    label: "SHOW_CHARACTER_STATE",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle"
};

function SHOW_CHARACTER_STATE_callback() {
    BattleDebugOverlay.BattleDebugOverlay.toggle();
}
