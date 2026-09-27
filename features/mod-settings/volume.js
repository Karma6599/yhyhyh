var SoundManager_instanceAddr = Libg.Libg.offset(19950832, 0);
var SoundManager_playSound = new NativeFunction(Libg.Libg.offset(13545160, 0), "void", ["pointer", "pointer", "float", "float", "int", "float", "int"]);
var SoundManager_stopAllSounds = new NativeFunction(Libg.Libg.offset(13547432, 0), "void", ["pointer"]);
var SoundManager_playMusic = new NativeFunction(Libg.Libg.offset(13543424, 0), "void", ["pointer", "pointer"]);
var SoundManager_stopMusic = new NativeFunction(Libg.Libg.offset(13539368, 0), "void", ["pointer"]);
var SoundSystem_instanceAddr = Libg.Libg.offset(19874352, 0);
var ChannelControl_setPaused = new NativeFunction(Libg.Libg.offset(18491040, 0), "void", ["pointer", "bool"]);
var soundSystemInnerStructOffset = LogicMemory.LogicMemory.offset(0);
var musicChannelGroupOffset = LogicMemory.LogicMemory.offset(160);
var currentMusicVolumeOffset = LogicMemory.LogicMemory.offset(184);
var targetMusicVolumeOffset = LogicMemory.LogicMemory.offset(188);
var musicFadeTimeOffset = LogicMemory.LogicMemory.offset(192);
var isMusicFadeIdleOffset = LogicMemory.LogicMemory.offset(196);

class SoundManager {
    static getInstance() {
        return SoundManager_instanceAddr.readPointer();
    }

    static playSound(soundName) {
        var soundData = LogicDataTables.LogicDataTables.getTableItemByName(LogicDataTables.LogicDataTables.table.Sounds, soundName);
        if (!soundData) {
            return;
        }
    }

    static playMusic(musicData) {
        SoundManager_playMusic(SoundManager.getInstance(), musicData.instance);
    }

    static stopMusic() {
        SoundManager_stopMusic(SoundManager.getInstance());
    }

    static stopAllSounds() {
        SoundManager_stopAllSounds(SoundManager.getInstance());
    }

    static getCurrentMusicVolume() {
        return this.getInstance().add(currentMusicVolumeOffset).readFloat();
    }

    static fadeMusic(volume, fadeTime) {
        var soundManager = this.getInstance();
        soundManager.add(currentMusicVolumeOffset).writeFloat(this.getCurrentMusicVolume());
        soundManager.add(targetMusicVolumeOffset).writeFloat(volume);
        soundManager.add(musicFadeTimeOffset).writeFloat(fadeTime);
    }

    static cycleMusicVolume() {
        var steps = [0, 0.5, 1];
        SoundManager.musicVolumeStep = (SoundManager.musicVolumeStep + 1) % steps.length;
        var target = steps[SoundManager.musicVolumeStep];
        SoundManager.fadeMusic(target, 0.1);
        return target;
    }

    static getMusicChannelGroup() {
        var soundSystem = SoundSystem_instanceAddr.readPointer();
        if (soundSystem.isNull()) {
            return NULL;
        }
        return soundSystem.add(soundSystemInnerStructOffset).readPointer().add(musicChannelGroupOffset).readPointer();
    }

    static playMusicByName(musicName) {
        var musicItem = LogicDataTables.LogicDataTables.getTableItemByName(LogicDataTables.LogicDataTables.table.Music, musicName);
        if (!musicItem) {
            return;
        }
        SoundManager.playMusic(musicItem);
    }

    static toggleBossMusic() {
        SoundManager.bossMusicActive = !SoundManager.bossMusicActive;
        if (SoundManager.bossMusicActive) {
            SoundManager.playMusicByName(SoundManager.BOSS_MUSIC_NAME);
        } else {
            SoundManager.playMusicByName(SoundManager.DEFAULT_BATTLE_MUSIC_NAME);
        }
        return SoundManager.bossMusicActive;
    }

    static toggleMusicPaused() {
        var musicChannelGroup = SoundManager.getMusicChannelGroup();
        if (musicChannelGroup.isNull()) {
            return SoundManager.musicPaused;
        }
        SoundManager.musicPaused = !SoundManager.musicPaused;
        if (SoundManager.musicPaused) {
            ChannelControl_setPaused(musicChannelGroup, true);
        } else {
            ChannelControl_setPaused(musicChannelGroup, false);
        }
        return SoundManager.musicPaused;
    }

    static patch() {
    }
}

SoundManager.musicVolumeStep = 2;
SoundManager.bossMusicActive = false;
SoundManager.BOSS_MUSIC_NAME = "30_sec_panic";
SoundManager.DEFAULT_BATTLE_MUSIC_NAME = "BattleMusic";
SoundManager.musicPaused = false;

class NoMusicItem extends GameButton.GameButton {
    constructor(id, label, selected) {
        super();
        this.instance.writePointer(ListContainerPopup.ListContainerPopup.countryPopupListItemVtableAddr);
        var movieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(movieClip.instance, 1);
        this.id = id;
        var buttonTextField = movieClip.getTextFieldByName("Text");
        if (buttonTextField) {
            buttonTextField.colorTag = true;
            buttonTextField.setTextScaleIfNecessary(label);
        }
        movieClip.gotoAndStopFrameIndex(+(!selected));
    }
}
