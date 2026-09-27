var STOP_ALL_SFX_BUTTON = {
    label: "STOP_ALL_SFX",
    category: DebugMenuCategory.EDebugCategory.UTILS
};

function STOP_ALL_SFX_callback() {
    SoundManager.SoundManager.stopAllSounds();
}
