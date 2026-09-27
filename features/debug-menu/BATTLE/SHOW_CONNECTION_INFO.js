var SHOW_CONNECTION_INFO_BUTTON = {
    label: "SHOW_CONNECTION_INFO",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle"
};

function SHOW_CONNECTION_INFO_callback() {
    BattleNetStatsOverlay.BattleNetStatsOverlay.toggle();
}
