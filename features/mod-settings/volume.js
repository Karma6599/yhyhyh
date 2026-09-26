//============================================================================//
// MOD FEATURE: Volume
// In-game name: "Volume"  (TID: VolumeSettingsButton)
// Menu: game Settings screen (ui/screens.js#7591)
// Config key: SoundMuted
// Volume popup (music / SFX sliders) + no-music item. SoundMuted is persisted through GameSettings (core/config.js#8489).
//============================================================================//

// --------------------- MODULE 7037 — SoundManager ---------------------


// ============================================================ //
// webpack module 7037  —  SoundManager
// exports: SoundManager
// deps: 1588 (LogicMemory), 6139 (LogicDataTables), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7037] = function SoundManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicDataTables, Libg, LogicMemory, SoundManager_instanceAddr, SoundManager_playSound, SoundManager_stopAllSounds, SoundManager_playMusic, SoundManager_stopMusic, SoundSystem_instanceAddr, ChannelControl_setPaused, soundSystemInnerStructOffset, musicChannelGroupOffset, currentMusicVolumeOffset, targetMusicVolumeOffset, musicFadeTimeOffset, isMusicFadeIdleOffset, SoundManager, <class_fields_init>, SoundManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SoundManager = undefined;
        LogicDataTables = __webpack_require__(6139);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        SoundManager_instanceAddr = ((Libg).Libg).offset(19950832, 0);
        SoundManager_playSound = new NativeFunction(((Libg).Libg).offset(13545160, 0), "void", ["pointer", "pointer", "float", "float", "int", "float", "int"]);
        SoundManager_stopAllSounds = new NativeFunction(((Libg).Libg).offset(13547432, 0), "void", ["pointer"]);
        SoundManager_playMusic = new NativeFunction(((Libg).Libg).offset(13543424, 0), "void", ["pointer", "pointer"]);
        SoundManager_stopMusic = new NativeFunction(((Libg).Libg).offset(13539368, 0), "void", ["pointer"]);
        SoundSystem_instanceAddr = ((Libg).Libg).offset(19874352, 0);
        ChannelControl_setPaused = new NativeFunction(((Libg).Libg).offset(18491040, 0), "void", ["pointer", "bool"]);
        soundSystemInnerStructOffset = ((LogicMemory).LogicMemory).offset(0);
        musicChannelGroupOffset = ((LogicMemory).LogicMemory).offset(160);
        currentMusicVolumeOffset = ((LogicMemory).LogicMemory).offset(184);
        targetMusicVolumeOffset = ((LogicMemory).LogicMemory).offset(188);
        musicFadeTimeOffset = ((LogicMemory).LogicMemory).offset(192);
        isMusicFadeIdleOffset = ((LogicMemory).LogicMemory).offset(196);
        <class_fields_init> = undefined;
        SoundManager;
        class SoundManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7fd8e (open) */
}
            getInstance () {
        return (SoundManager_instanceAddr).readPointer();
}
            playSound (soundName) {
    var soundData;
        soundData = ((LogicDataTables).LogicDataTables).getTableItemByName((((LogicDataTables).LogicDataTables).table).Sounds, soundName);
        if ((!soundData)) {
            return;
        } /* if 0x7f997 */
        return;
}
            playMusic (musicData) {
        return;
}
            stopMusic () {
        return;
}
            stopAllSounds () {
        return;
}
            getCurrentMusicVolume () {
        return (((this).getInstance()).add(currentMusicVolumeOffset)).readFloat();
}
            fadeMusic (volume, fadeTime) {
    var soundManager;
        soundManager = (this).getInstance();
        ((soundManager).add(currentMusicVolumeOffset)).writeFloat((this).getCurrentMusicVolume());
        ((soundManager).add(targetMusicVolumeOffset)).writeFloat(volume);
        ((soundManager).add(musicFadeTimeOffset)).writeFloat(fadeTime);
        return;
}
            cycleMusicVolume () {
    var steps, target;
        steps = [0, 0.5, 1];
        SoundManager.musicVolumeStep = (((SoundManager).musicVolumeStep + 1) % steps.length);
        target = steps[(SoundManager).musicVolumeStep];
        (SoundManager).fadeMusic(target, 0.1);
        return target;
}
            getMusicChannelGroup () {
    var soundSystem;
        soundSystem = (SoundSystem_instanceAddr).readPointer();
        if ((soundSystem).isNull()) {
            return NULL;
        } /* if 0x7fbef */
        return ((((soundSystem).add(soundSystemInnerStructOffset)).readPointer()).add(musicChannelGroupOffset)).readPointer();
}
            playMusicByName (musicName) {
    var musicItem;
        musicItem = ((LogicDataTables).LogicDataTables).getTableItemByName((((LogicDataTables).LogicDataTables).table).Music, musicName);
        /* is_null  */
        if (musicItem) {
            return;
        } /* if 0x7fc6d */
        return;
}
            toggleBossMusic () {
        SoundManager.bossMusicActive = (!(SoundManager).bossMusicActive);
        if ((SoundManager).bossMusicActive) {
        } /* if 0x7fcc3 */
        /* jump -> 0x7fccb */
        (SoundManager).BOSS_MUSIC_NAME((SoundManager).DEFAULT_BATTLE_MUSIC_NAME);
        return (SoundManager).bossMusicActive;
}
            toggleMusicPaused () {
    var musicChannelGroup;
        musicChannelGroup = (SoundManager).getMusicChannelGroup();
        if ((musicChannelGroup).isNull()) {
            return (SoundManager).musicPaused;
        } /* if 0x7fd1e */
        SoundManager.musicPaused = (!(SoundManager).musicPaused);
        if ((SoundManager).musicPaused) {
        } /* if 0x7fd42 */
        /* jump -> 0x7fd43 */
        musicChannelGroup(1, 0);
        return (SoundManager).musicPaused;
}
            patch () {
        return;
}
        }
        SoundManager = SoundSystem_instanceAddr = SoundManager;
        exports.SoundManager = SoundManager;
        SoundManager.musicVolumeStep = 2;
        SoundManager.bossMusicActive = false;
        SoundManager.BOSS_MUSIC_NAME = "30_sec_panic";
        SoundManager.DEFAULT_BATTLE_MUSIC_NAME = "BattleMusic";
        SoundManager.musicPaused = false;
        return;
};

// --------------------- MODULE 9760 — NoMusicItem ---------------------


// ============================================================ //
// webpack module 9760  —  NoMusicItem
// exports: NoMusicItem
// deps: 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9760] = function NoMusicItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, NoMusicItem, <class_fields_init>, NoMusicItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NoMusicItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        <class_fields_init> = undefined;
        NoMusicItem;
        class NoMusicItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (id, label, selected) {
    var movieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb5093 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        movieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((movieClip).instance, 1);
        this.id = id;
        buttonTextField = (movieClip).getTextFieldByName("Text");
        if (buttonTextField) {
            buttonTextField.colorTag = true;
            (buttonTextField).setTextScaleIfNecessary(label);
        } /* if 0xb5113 */
        if (selected) {
        } /* if 0xb5121 */
        /* jump -> 0xb5122 */
        return this;
}
        }
        NoMusicItem = NoMusicItem = NoMusicItem;
        exports.NoMusicItem = NoMusicItem;
        return;
};

