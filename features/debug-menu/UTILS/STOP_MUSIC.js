var STOP_MUSIC_BUTTON = {
    label: "STOP_MUSIC",
    category: DebugMenuCategory.EDebugCategory.UTILS
};

function STOP_MUSIC_callback() {
    SoundManager.SoundManager.stopMusic();
}
