var PAUSE_MUSIC_TOGGLE_BUTTON = {
    label: "PAUSE_MUSIC_TOGGLE",
    category: DebugMenuCategory.EDebugCategory.AUDIO
};

function toggleMusicPaused() {
    var paused = SoundManager.SoundManager.toggleMusicPaused();
    if (paused) {
    }
}

function PAUSE_MUSIC_TOGGLE_callback() {
    toggleMusicPaused();
}
