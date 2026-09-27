var TOGGLE_HERO_HUD_BUTTON = {
    label: "TOGGLE_HERO_HUD",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle",
    checkbox: {}
};

function toggleHeroHud() {
    Character.Character.heroHudHidden = !Character.Character.heroHudHidden;
}

function isHeroHudShown() {
    return !Character.Character.heroHudHidden;
}

function TOGGLE_HERO_HUD_callback() {
    toggleHeroHud();
}

function TOGGLE_HERO_HUD_getState() {
    return isHeroHudShown();
}
