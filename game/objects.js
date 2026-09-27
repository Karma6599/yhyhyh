var logicOffset = LogicMemory.offset(16);

class GameObject {
    constructor(instance) {
        this.instance = instance;
    }
    get logic() {
        return new LogicGameObjectClient(this.logicPtr);
    }
    get logicPtr() {
        return this.instance.add(logicOffset).readPointer();
    }
}

var GameObjectManager_playEffect = new NativeFunction(Libg.offset(8531312, 0), "pointer", ["pointer", "int", "int", "int", "pointer", "pointer", "int", "char", "char", "char"]);

class GameObjectManager {
    constructor(instance) {
        this.instance = instance;
    }
    isNull() {
        return this.instance.isNull();
    }
    playEffect(effect, x, y, z, ownerObject, ownerPlayerIndex, attached, autoOrient, useLayerOverride) {
        if (z === undefined) {
            z = 0;
        }
        if (ownerObject === undefined) {
            ownerObject = NULL;
        }
        if (ownerPlayerIndex === undefined) {
            ownerPlayerIndex = -1;
        }
        if (attached === undefined) {
            attached = false;
        }
        if (autoOrient === undefined) {
            autoOrient = true;
        }
        if (useLayerOverride === undefined) {
            useLayerOverride = false;
        }
        return GameObjectManager_playEffect(this.instance, effect.instance, x, y, z, ownerObject, ownerPlayerIndex, attached ? 1 : 0, autoOrient ? 1 : 0, useLayerOverride ? 1 : 0);
    }
}

var Character_ctor = Libg.offset(8449092, 0);
var Character_updateHealthBar = Libg.offset(8498752, 0);
var Character_showFloatingNumber = Libg.offset(8523704, 0);
var playerNameClipOffset = LogicMemory.offset(1424);
var playerBuffsClipOffset = LogicMemory.offset(1312);
var playerBuffsModClipOffset = LogicMemory.offset(1320);
var wipeoutCrownOffset = LogicMemory.offset(1304);
var trophiesClipOffset = LogicMemory.offset(1104);
var wantedStarOffset = LogicMemory.offset(1272);
var wantedBlueStarOffset = LogicMemory.offset(1280);
var boltsCountOffset = LogicMemory.offset(1120);
var boltsCountModOffset = LogicMemory.offset(1128);
var ammoMovieClipOffset = LogicMemory.offset(2888);
var displayObjectVisibilityOffset = LogicMemory.offset(8);
var skinDataOffset = LogicMemory.offset(2840);
var trophyOverlays = new Map();

class Character extends GameObject {
    constructor(instance) {
        super(instance);
    }
    get skin() {
        var data = this.instance.add(skinDataOffset).readPointer();
        if (data.isNull()) {
            return null;
        }
        return new LogicSkinData(data);
    }
    set skin(value) {
        if (value) {
            return;
        }
    }
    get logic() {
        return new LogicCharacterClient(this.logicPtr);
    }
    static addFloatingNumberListener(callback) {
        Character.floatingNumberListeners.push(callback);
    }
    static applyHeroHudVisibility(character, visible) {
        for (var offset of Character.heroHudClipOffsets) {
            var clipPtr = character.add(offset).readPointer();
            if (!clipPtr.isNull()) {
                clipPtr.add(displayObjectVisibilityOffset).writeU8(+visible);
            }
        }
    }
    static patch() {
        Interceptor.attach(Character_showFloatingNumber, { onEnter(args) {
            var character = new Character(args[0]);
            var damage = args[1].toInt32();
            for (var listener of Character.floatingNumberListeners) {
                try {
                    listener(character, damage);
                } catch (e) {
                }
            }
        } });
        Interceptor.attach(Character_ctor, { onEnter(args) {
            this.character = args[0];
        }, onLeave() {
            var clip = this.character.add(playerNameClipOffset).readPointer();
            if (clip.isNull()) {
                return;
            }
            var movieClip = new MovieClip(clip);
            var textField = movieClip.getTextFieldByName("player_name");
            if (textField) {
                textField.colorTag = true;
                textField.setTextScaleIfNecessary(textField.text);
            }
            try {
                var trophyClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
                var trophyTf = trophyClip.getTextFieldByName("text");
                if (trophyTf) {
                    trophyTf.color = 4294956800;
                    trophyTf.fontOutline = true;
                    trophyTf.fontSize = 16;
                    trophyTf.align = 0;
                    trophyTf.visibility = false;
                    new Sprite(clip).addChildAt(trophyTf, 0);
                    var trophyIcon = StringTable.getMovieClip("sc/ui.sc", "icon_trophy");
                    trophyIcon.scale = 0.15;
                    trophyIcon.visibility = false;
                    new Sprite(clip).addChildAt(trophyIcon, 0);
                    trophyOverlays.set(this.character.toString(), { textField: trophyTf.instance, icon: trophyIcon.instance });
                    return;
                }
            } catch (e) {
            }
        } });
    }
    static findTrophiesForName(playerName, characterTrophies) {
        var trophiesStorage = characterTrophies ? StartLoadingMessage.playerCharacterTrophies : StartLoadingMessage.playerTrophies;
        for (var [name, trophies] of trophiesStorage) {
            if (playerName.includes(name)) {
                return trophies;
            }
        }
        return null;
    }
}
Character.floatingNumberListeners = [];
Character._childrenLogged = false;
Character._childCountLogged = false;
Character.heroHudHidden = false;
Character.heroHudCharactersToRestore = new Set();
Character.heroHudClipOffsets = [playerNameClipOffset, playerBuffsClipOffset, playerBuffsModClipOffset, wipeoutCrownOffset, trophiesClipOffset, wantedStarOffset, wantedBlueStarOffset, boltsCountOffset, boltsCountModOffset, ammoMovieClipOffset];

class BattleCoordinates {
    constructor() {
        var coordinatesMovieClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var coordinatesTextField = coordinatesMovieClip.getTextFieldByName("text");
        coordinatesTextField.x = 115;
        coordinatesTextField.y = 45;
        coordinatesTextField.color = 4294967295;
        coordinatesTextField.fontOutline = true;
        this.textField = coordinatesTextField;
    }
    setText(text) {
        this.textField.text = text;
        return this.textField;
    }
}

var LaserBoxManager_hasContentForCommunityTab = Libg.offset(11176112, 0);
var LaserBoxManager_hasContentForEsportsTab = Libg.offset(11176348, 0);
var LaserBoxManager_updateManifest = new NativeFunction(Libg.offset(11163408, 0), "void", ["pointer"]);
var LaserBoxManager_singleton = Libg.offset(19940056, 0);
var LaserBoxManager_globalSingleton = Libg.offset(19939888, 0);
var webview_computeBoundsFromScrollArea = new NativeFunction(Libg.offset(11186988, 0), "void", ["pointer"]);
var webview_setBounds = new NativeFunction(Libg.offset(11187948, 0), "void", ["pointer"]);
var webviewPointerOffset = LogicMemory.offset(8);
var webviewBoundsXOffset = LogicMemory.offset(208);
var webviewBoundsYOffset = LogicMemory.offset(212);
var webviewBoundsWidthOffset = LogicMemory.offset(216);
var webviewBoundsHeightOffset = LogicMemory.offset(220);
var webviewOpacityOffset = LogicMemory.offset(224);
var ctorCommunityCheckReturnAddr = Libg.offset(12556824, 0);
var ctorEsportsCheckReturnAddr = Libg.offset(12556968, 0);

class LaserBoxManager {
    static getInstance() {
        return LaserBoxManager_singleton.readPointer();
    }
    static getWebview() {
        var singleton = LaserBoxManager.getInstance();
        if (singleton.isNull()) {
            return NULL;
        }
        return singleton.add(webviewPointerOffset).readPointer();
    }
    static updateManifest() {
        var instance = LaserBoxManager_globalSingleton.readPointer();
        if (instance.isNull()) {
            return;
        }
        LaserBoxManager_updateManifest(instance);
    }
    static showWebview() {
        var webview = LaserBoxManager.getWebview();
        if (webview.isNull()) {
            return;
        }
        webview.add(webviewOpacityOffset).writeFloat(1);
        webview_computeBoundsFromScrollArea(webview);
    }
    static hideWebview() {
        var webview = LaserBoxManager.getWebview();
        if (webview.isNull()) {
            return;
        }
        webview.add(webviewBoundsXOffset).writeFloat(0);
        webview.add(webviewBoundsYOffset).writeFloat(0);
        webview.add(webviewBoundsWidthOffset).writeFloat(0);
        webview.add(webviewBoundsHeightOffset).writeFloat(0);
        webview.add(webviewOpacityOffset).writeFloat(0);
    }
    static patch() {
        Interceptor.attach(LaserBoxManager_hasContentForCommunityTab, { onLeave(retval) {
            if (LaserBoxManager.forceTabsAvailable) {
                if (this.returnAddress.equals(ctorCommunityCheckReturnAddr)) {
                    retval.replace(ptr(1));
                    return;
                }
            }
        } });
    }
}
LaserBoxManager.forceTabsAvailable = false;

var ClientInputManager_addInput = new NativeFunction(Libg.offset(11147068, 0), "void", ["pointer", "pointer"]);
var typeOffset = LogicMemory.offset(8);

class ClientInputManager {
    static addInput(clientInput) {
        return;
    }
    static patch() {
        return;
    }
}
ClientInputManager.type = { Attack: 0, Ulti: 1, Movement: 2, StopMovement: 3, EndBattle: 4, UltiEnable: 5, UltiDisable: 6, CarryableAim: 7, Accessory: 8, Emote: 9, ControlledProjectileStopWithStick: 10, ToggleEditing: 11, LeaveFromBattle: 12, StopHoldSkill: 13, StartHoldSkill: 14, Spray: 15, Overcharge: 17, BonusSkill: 18 };
ClientInputManager.shootClientInputType = [ClientInputManager.type.Attack, ClientInputManager.type.Ulti, ClientInputManager.type.Accessory];
ClientInputManager.currentShootClientInputType = -1;
