var MUSIC_VOLUME_CYCLE_0_50_100_BUTTON = {
    label: "MUSIC_VOLUME_CYCLE_0_50_100",
    category: DebugMenuCategory.EDebugCategory.AUDIO
};

function cycleMusicVolume() {
    var volume = SoundManager.SoundManager.cycleMusicVolume();
}

function MUSIC_VOLUME_CYCLE_0_50_100_callback() {
    cycleMusicVolume();
}
