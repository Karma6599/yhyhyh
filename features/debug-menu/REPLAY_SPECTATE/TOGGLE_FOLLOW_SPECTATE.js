var TOGGLE_FOLLOW_SPECTATE_BUTTON = {
    label: "TOGGLE_FOLLOW_SPECTATE",
    category: DebugMenuCategory.EDebugCategory.REPLAY_SPECTATE,
    mode: "battle",
    checkbox: {}
};

function toggleFollowSpectate() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return;
    }
}

function isFollowSpectate() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return false;
    }
    return BattleScreen.BattleScreen.isFollowSpectate();
}

function TOGGLE_FOLLOW_SPECTATE_callback() {
    toggleFollowSpectate();
}

function TOGGLE_FOLLOW_SPECTATE_getState() {
    return isFollowSpectate();
}
