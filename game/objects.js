//============================================================================//// GAME OBJECTS// merged webpack modules: 5662 GameObject, 9575 GameObjectManager, 3932 Character, 2542 BattleCoordinates, 2035 LaserBoxManager, 9405 ClientInputManager//============================================================================//
// --------------------- MODULE 5662 — GameObject ---------------------


// ============================================================ //
// webpack module 5662  —  GameObject
// exports: GameObject
// deps: 1588 (LogicMemory), 9814 (LogicGameObjectClient)
// ============================================================ //

__webpack_modules__[5662] = function GameObject_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicGameObjectClient, logicOffset, GameObject, <class_fields_init>, GameObject;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameObject = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicGameObjectClient = __webpack_require__(9814);
        logicOffset = ((LogicMemory).LogicMemory).offset(16);
        static get logic () {
        return new (LogicGameObjectClient).LogicGameObjectClient((this).logicPtr);
};
        static get logicPtr () {
        return (((this).instance).add(logicOffset)).readPointer();
};
        <class_fields_init> = undefined;
        GameObject;
        class GameObject {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x3cb54 */
        this.instance = instance;
        return;
}
        }
        GameObject = GameObject = GameObject;
        exports.GameObject = GameObject;
        return;
};

// --------------------- MODULE 9575 — GameObjectManager ---------------------


// ============================================================ //
// webpack module 9575  —  GameObjectManager
// exports: GameObjectManager
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[9575] = function GameObjectManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GameObjectManager_playEffect, GameObjectManager, <class_fields_init>, GameObjectManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameObjectManager = undefined;
        Libg = __webpack_require__(9878);
        GameObjectManager_playEffect = new NativeFunction(((Libg).Libg).offset(8531312, 0), "pointer", ["pointer", "int", "int", "int", "pointer", "pointer", "int", "char", "char", "char"]);
        static isNull () {
        return ((this).instance).isNull();
};
        static playEffect (effect, x, y) {
    var z, ownerObject, ownerPlayerIndex, attached, autoOrient, useLayerOverride, effect, x, y, z, ownerObject, ownerPlayerIndex, attached, autoOrient, useLayerOverride;
        z = this;
        z = effect;
        ownerObject = x;
        ownerPlayerIndex = y;
        if (((z) === undefined)) {
            attached = z = 0;
        } /* if 0x3cdca */
        if (((ownerObject) === undefined)) {
            autoOrient = ownerObject = NULL;
        } /* if 0x3cddb */
        if (((ownerPlayerIndex) === undefined)) {
            useLayerOverride = ownerPlayerIndex = -1;
        } /* if 0x3cde9 */
        if (((attached) === undefined)) {
            effect = attached = false;
        } /* if 0x3cdf7 */
        if (((autoOrient) === undefined)) {
            x = autoOrient = true;
        } /* if 0x3ce05 */
        if (((useLayerOverride) === undefined)) {
            y = useLayerOverride = false;
        } /* if 0x3ce13 */
        if (attached) {
        } /* if 0x3ce36 */
        /* jump -> 0x3ce37 */
        if (autoOrient) {
        } /* if 0x3ce3f */
        /* jump -> 0x3ce40 */
        if (useLayerOverride) {
        } /* if 0x3ce48 */
        /* jump -> 0x3ce49 */
        return y(z, (effect).instance, ownerObject, ownerPlayerIndex, 1, 0, 1, 0, 1, 0);
};
        <class_fields_init> = undefined;
        GameObjectManager;
        class GameObjectManager {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x3ccf5 */
        this.instance = instance;
        return;
}
        }
        GameObjectManager = GameObjectManager = GameObjectManager;
        exports.GameObjectManager = GameObjectManager;
        return;
};

// --------------------- MODULE 3932 — Character ---------------------


// ============================================================ //
// webpack module 3932  —  Character
// exports: Character
// deps: 612 (MovieClip), 1191 (DisplayObject), 1588 (LogicMemory), 3000 (StartLoadingMessage), 3015 (TextField), 3217 (Sprite), 3555 (LogicSkinData), 4009 (Config), 4974 (Breadcrumbs), 5662 (GameObject), 9250 (StringTable), 9754 (LogicCharacterClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3932] = function Character_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, Breadcrumbs, LogicMemory, DisplayObject, MovieClip, Sprite, TextField, LogicCharacterClient, LogicSkinData, StartLoadingMessage, StringTable, GameObject, Character_ctor, Character_updateHealthBar, Character_showFloatingNumber, playerNameClipOffset, playerBuffsClipOffset, playerBuffsModClipOffset, wipeoutCrownOffset, trophiesClipOffset, wantedStarOffset, wantedBlueStarOffset, boltsCountOffset, boltsCountModOffset, ammoMovieClipOffset, displayObjectVisibilityOffset, skinDataOffset, trophyOverlays, Character, <class_fields_init>, Character;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Character = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        Breadcrumbs = __webpack_require__(4974);
        LogicMemory = __webpack_require__(1588);
        DisplayObject = __webpack_require__(1191);
        MovieClip = __webpack_require__(612);
        Sprite = __webpack_require__(3217);
        TextField = __webpack_require__(3015);
        LogicCharacterClient = __webpack_require__(9754);
        LogicSkinData = __webpack_require__(3555);
        StartLoadingMessage = __webpack_require__(3000);
        StringTable = __webpack_require__(9250);
        GameObject = __webpack_require__(5662);
        Character_ctor = ((Libg).Libg).offset(8449092, 0);
        Character_updateHealthBar = ((Libg).Libg).offset(8498752, 0);
        Character_showFloatingNumber = ((Libg).Libg).offset(8523704, 0);
        playerNameClipOffset = ((LogicMemory).LogicMemory).offset(1424);
        playerBuffsClipOffset = ((LogicMemory).LogicMemory).offset(1312);
        playerBuffsModClipOffset = ((LogicMemory).LogicMemory).offset(1320);
        wipeoutCrownOffset = ((LogicMemory).LogicMemory).offset(1304);
        trophiesClipOffset = ((LogicMemory).LogicMemory).offset(1104);
        wantedStarOffset = ((LogicMemory).LogicMemory).offset(1272);
        wantedBlueStarOffset = ((LogicMemory).LogicMemory).offset(1280);
        boltsCountOffset = ((LogicMemory).LogicMemory).offset(1120);
        boltsCountModOffset = ((LogicMemory).LogicMemory).offset(1128);
        ammoMovieClipOffset = ((LogicMemory).LogicMemory).offset(2888);
        displayObjectVisibilityOffset = ((LogicMemory).LogicMemory).offset(8);
        skinDataOffset = ((LogicMemory).LogicMemory).offset(2840);
        trophyOverlays = new Map();
        static get skin () {
    var data;
        data = (((this).instance).add(skinDataOffset)).readPointer();
        if ((data).isNull()) {
            return null;
        } /* if 0x3c068 */
        return new (LogicSkinData).LogicSkinData(data);
};
        static set skin (value) {
        /* is_null  */
        if (value) {
            return;
        } /* if 0x3c0a1 */
        return;
};
        static get logic () {
        return new (LogicCharacterClient).LogicCharacterClient((this).logicPtr);
};
        <class_fields_init> = undefined;
        Character;
        class Character extends <class_fields_init> = (GameObject).GameObject {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x3ca55 */
        return this;
}
            addFloatingNumberListener (callback) {
        return;
}
            applyHeroHudVisibility (character, visible) {
    var offset, clipPtr;
        /* jump -> 0x3c00a */
        offset = /*iter*/ (Character).heroHudClipOffsets;
        clipPtr = ((character).add(offset)).readPointer();
        if (!(clipPtr).isNull()) {
            ((clipPtr).add(displayObjectVisibilityOffset)).writeU8((+visible));
        } /* if 0x3c00a */
        } while (!clipPtr = (Character).heroHudClipOffsets);
        offset = <underflow>;
        return;
}
            patch () {
        (Interceptor).attach(Character_showFloatingNumber, { onEnter (args) {
    var character, damage, listener;
        /* CATCH -> 0x3c259 (try region) */
        character = new Character(args[0]);
        damage = (args[1]).toInt32();
        /* jump -> 0x3c24e */
        listener = /*iter*/ (Character).floatingNumberListeners;
        /* CATCH -> 0x3c247 (try region) */
        listener(character, damage);
        /* jump -> 0x3c24e */
        listener = character = damage = <underflow>;
        /* CATCH -> 0x3c250 (try region) */
        /* jump -> 0x3c24e */
        throw <underflow>;
        } while (!<underflow>);
        return;
        /* CATCH -> 0x3c261 (try region) */
        return;
        throw <underflow>;
} });
        (Interceptor).attach(Character_ctor, { onEnter (args) {
        this.character = args[0];
        return;
}, onLeave () {
    var clip, movieClip, textField, trophyClip, trophyTf, trophyIcon, e;
        clip = (((this).character).add(playerNameClipOffset)).readPointer();
        if ((clip).isNull()) {
            return;
        } /* if 0x3c32f */
        movieClip = new (MovieClip).MovieClip(clip);
        textField = (movieClip).getTextFieldByName("player_name");
        if (textField) {
            textField.colorTag = true;
            (textField).setTextScaleIfNecessary((textField).text);
            /* CATCH -> 0x3c486 (try region) */
        } /* if 0x3c372 */
        trophyClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        trophyTf = (trophyClip).getTextFieldByName("text");
        if (trophyTf) {
            trophyTf.color = 4294956800.0;
            trophyTf.fontOutline = true;
            trophyTf.fontSize = 16;
            trophyTf.align = 0;
            trophyTf.visibility = false;
            (new (Sprite).Sprite(clip)).addChildAt(trophyTf, 0);
            trophyIcon = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_trophy");
            trophyIcon.scale = 0.15;
            trophyIcon.visibility = false;
            (new (Sprite).Sprite(clip)).addChildAt(trophyIcon, 0);
            (trophyOverlays)["set"](((this).character).toString(), { textField: (trophyTf).instance, icon: (trophyIcon).instance });
            return;
            e = trophyIcon;
        } /* if 0x3c484 */
        /* CATCH -> 0x3c48f (try region) */
        return;
        throw trophyTf;
} });
        return;
}
            findTrophiesForName (playerName, characterTrophies) {
    var trophiesStorage, name, trophies;
        if (characterTrophies) {
        } /* if 0x3c9b9 */
        /* jump -> 0x3c9c6 */
        trophiesStorage = ((StartLoadingMessage).StartLoadingMessage).playerTrophies;
        /* jump -> 0x3c9f3 */
        name = /*iter*/ trophiesStorage;
        trophies = name = trophies = ((StartLoadingMessage).StartLoadingMessage).playerCharacterTrophies;
        if ((playerName).includes(name)) {
            return undefined;
        } /* if 0x3c9f3 */
        } while (!trophies);
        trophiesStorage = <underflow>;
        return null;
}
        }
        Character = LogicCharacterClient = Character;
        exports.Character = Character;
        Character.floatingNumberListeners = [];
        Character._childrenLogged = false;
        Character._childCountLogged = false;
        Character.heroHudHidden = false;
        Character.heroHudCharactersToRestore = new Set();
        Character.heroHudClipOffsets = [playerNameClipOffset, playerBuffsClipOffset, playerBuffsModClipOffset, wipeoutCrownOffset, trophiesClipOffset, wantedStarOffset, wantedBlueStarOffset, boltsCountOffset, boltsCountModOffset, ammoMovieClipOffset];
        return;
};

// --------------------- MODULE 2542 — BattleCoordinates ---------------------


// ============================================================ //
// webpack module 2542  —  BattleCoordinates
// exports: BattleCoordinates
// deps: 9250 (StringTable)
// ============================================================ //

__webpack_modules__[2542] = function BattleCoordinates_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringTable, BattleCoordinates, <class_fields_init>, BattleCoordinates;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleCoordinates = undefined;
        StringTable = __webpack_require__(9250);
        static setText (text) {
        (this).textField.text = text;
        return (this).textField;
};
        <class_fields_init> = undefined;
        BattleCoordinates;
        class BattleCoordinates {
            constructor () {
    var coordinatesMovieClip, coordinatesTextField;
        if (<class_fields_init>) {
        } /* if 0xba764 */
        coordinatesMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        coordinatesTextField = (coordinatesMovieClip).getTextFieldByName("text");
        coordinatesTextField.x = 115;
        coordinatesTextField.y = 45;
        coordinatesTextField.color = 4294967295.0;
        coordinatesTextField.fontOutline = true;
        this.textField = coordinatesTextField;
        return;
}
        }
        BattleCoordinates = BattleCoordinates = BattleCoordinates;
        exports.BattleCoordinates = BattleCoordinates;
        return;
};

// --------------------- MODULE 2035 — LaserBoxManager ---------------------


// ============================================================ //
// webpack module 2035  —  LaserBoxManager
// exports: LaserBoxManager
// deps: 1588 (LogicMemory), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2035] = function LaserBoxManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, LaserBoxManager_hasContentForCommunityTab, LaserBoxManager_hasContentForEsportsTab, LaserBoxManager_updateManifest, LaserBoxManager_singleton, LaserBoxManager_globalSingleton, webview_computeBoundsFromScrollArea, webview_setBounds, webviewPointerOffset, webviewBoundsXOffset, webviewBoundsYOffset, webviewBoundsWidthOffset, webviewBoundsHeightOffset, webviewOpacityOffset, ctorCommunityCheckReturnAddr, ctorEsportsCheckReturnAddr, LaserBoxManager, <class_fields_init>, LaserBoxManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LaserBoxManager = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LaserBoxManager_hasContentForCommunityTab = ((Libg).Libg).offset(11176112, 0);
        LaserBoxManager_hasContentForEsportsTab = ((Libg).Libg).offset(11176348, 0);
        LaserBoxManager_updateManifest = new NativeFunction(((Libg).Libg).offset(11163408, 0), "void", ["pointer"]);
        LaserBoxManager_singleton = ((Libg).Libg).offset(19940056, 0);
        LaserBoxManager_globalSingleton = ((Libg).Libg).offset(19939888, 0);
        webview_computeBoundsFromScrollArea = new NativeFunction(((Libg).Libg).offset(11186988, 0), "void", ["pointer"]);
        webview_setBounds = new NativeFunction(((Libg).Libg).offset(11187948, 0), "void", ["pointer"]);
        webviewPointerOffset = ((LogicMemory).LogicMemory).offset(8);
        webviewBoundsXOffset = ((LogicMemory).LogicMemory).offset(208);
        webviewBoundsYOffset = ((LogicMemory).LogicMemory).offset(212);
        webviewBoundsWidthOffset = ((LogicMemory).LogicMemory).offset(216);
        webviewBoundsHeightOffset = ((LogicMemory).LogicMemory).offset(220);
        webviewOpacityOffset = ((LogicMemory).LogicMemory).offset(224);
        ctorCommunityCheckReturnAddr = ((Libg).Libg).offset(12556824, 0);
        ctorEsportsCheckReturnAddr = ((Libg).Libg).offset(12556968, 0);
        <class_fields_init> = undefined;
        LaserBoxManager;
        class LaserBoxManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x47114 (open) */
}
            getInstance () {
        return (LaserBoxManager_singleton).readPointer();
}
            getWebview () {
    var singleton;
        singleton = (LaserBoxManager).getInstance();
        if ((singleton).isNull()) {
            return NULL;
        } /* if 0x46e2f */
        return ((singleton).add(webviewPointerOffset)).readPointer();
}
            updateManifest () {
    var instance;
        instance = (LaserBoxManager_globalSingleton).readPointer();
        if ((instance).isNull()) {
            return;
        } /* if 0x46e84 */
        return;
}
            showWebview () {
    var webview;
        webview = (LaserBoxManager).getWebview();
        if ((webview).isNull()) {
            return;
        } /* if 0x46ed4 */
        ((webview).add(webviewOpacityOffset)).writeFloat(1);
        webview_computeBoundsFromScrollArea(webview);
        return;
}
            hideWebview () {
    var webview;
        webview = (LaserBoxManager).getWebview();
        if ((webview).isNull()) {
            return;
        } /* if 0x46f53 */
        ((webview).add(webviewBoundsXOffset)).writeFloat(0);
        ((webview).add(webviewBoundsYOffset)).writeFloat(0);
        ((webview).add(webviewBoundsWidthOffset)).writeFloat(0);
        ((webview).add(webviewBoundsHeightOffset)).writeFloat(0);
        ((webview).add(webviewOpacityOffset)).writeFloat(0);
        return;
}
            patch () {
        (Interceptor).attach(LaserBoxManager_hasContentForCommunityTab, { onLeave (retval) {
        if ((LaserBoxManager).forceTabsAvailable) {
            if (((this).returnAddress).equals(ctorCommunityCheckReturnAddr)) {
                (retval).replace(ptr(1));
                return;
            } /* if 0x47093 (open) */
        } /* if 0x47093 (open) */
} });
        return;
}
        }
        LaserBoxManager = webview_setBounds = LaserBoxManager;
        exports.LaserBoxManager = LaserBoxManager;
        LaserBoxManager.forceTabsAvailable = false;
        return;
};

// --------------------- MODULE 9405 — ClientInputManager ---------------------


// ============================================================ //
// webpack module 9405  —  ClientInputManager
// exports: ClientInputManager
// deps: 1588 (LogicMemory), 4009 (Config), 6128 (BattleMode), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9405] = function ClientInputManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var _a, Libg, Config, LogicMemory, BattleMode, ClientInputManager_addInput, typeOffset, ClientInputManager, <class_fields_init>, ClientInputManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ClientInputManager = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        BattleMode = __webpack_require__(6128);
        ClientInputManager_addInput = new NativeFunction(((Libg).Libg).offset(11147068, 0), "void", ["pointer", "pointer"]);
        typeOffset = ((LogicMemory).LogicMemory).offset(8);
        <class_fields_init> = undefined;
        ClientInputManager;
        class ClientInputManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5adf6 (open) */
}
            addInput (clientInput) {
        return;
}
            patch () {
        return;
}
        }
        ClientInputManager = <class_fields_init> = ClientInputManager;
        exports.ClientInputManager = ClientInputManager;
        _a = ClientInputManager;
        ClientInputManager.type = { Attack: 0, Ulti: 1, Movement: 2, StopMovement: 3, EndBattle: 4, UltiEnable: 5, UltiDisable: 6, CarryableAim: 7, Accessory: 8, Emote: 9, ControlledProjectileStopWithStick: 10, ToggleEditing: 11, LeaveFromBattle: 12, StopHoldSkill: 13, StartHoldSkill: 14, Spray: 15, Overcharge: 17, BonusSkill: 18 };
        ClientInputManager.shootClientInputType = [((_a).type).Attack, ((_a).type).Ulti, ((_a).type).Accessory];
        ClientInputManager.currentShootClientInputType = -1;
        return;
};

