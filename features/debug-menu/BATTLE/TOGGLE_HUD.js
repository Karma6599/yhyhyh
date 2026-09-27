var TOGGLE_HUD_BUTTON = {
    label: "TOGGLE_HUD",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle",
    checkbox: {}
};

function toggleHud() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return;
    }
    var hud = BattleScreen.BattleScreen.getCombatHUD();
    if (!hud.isNull()) {
        if (hud.scaleX === 0) {
            hud.scale = 1;
        } else {
            hud.scale = 0;
        }
    }
    DebugMenuButton.DebugMenuButton.toggleButtonVisibility();
    if (EDebugger.EDebugger.isCreated()) {
        EDebugger.EDebugger.hideOrShow();
    }
}

function isHudShown() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return true;
    }
    var hud = BattleScreen.BattleScreen.getCombatHUD();
    if (hud.isNull()) {
        return true;
    }
    return hud.scaleX !== 0;
}

function TOGGLE_HUD_callback() {
    toggleHud();
}

function TOGGLE_HUD_getState() {
    return isHudShown();
}
