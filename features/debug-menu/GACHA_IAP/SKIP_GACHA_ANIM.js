var SKIP_GACHA_ANIM_BUTTON = {
    label: "SKIP_GACHA_ANIM",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    checkbox: {}
};

function SKIP_GACHA_ANIM_callback() {
    HomeScreen.HomeScreen.setSkipGatchaAnimation(!HomeScreen.HomeScreen.isSkipGatchaAnimationEnabled());
}

function SKIP_GACHA_ANIM_getState() {
    return HomeScreen.HomeScreen.isSkipGatchaAnimationEnabled();
}
