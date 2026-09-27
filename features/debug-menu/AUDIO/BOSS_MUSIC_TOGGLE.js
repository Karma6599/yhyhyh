var BOSS_MUSIC_TOGGLE_BUTTON = {
    label: "BOSS_MUSIC_TOGGLE",
    category: DebugMenuCategory.EDebugCategory.AUDIO
};

function toggleBossMusic() {
    var active = SoundManager.SoundManager.toggleBossMusic();
    if (active) {
    }
}

function BOSS_MUSIC_TOGGLE_callback() {
    toggleBossMusic();
}
