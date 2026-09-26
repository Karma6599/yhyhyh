//============================================================================//// GAME MODES// merged webpack modules: 6128 BattleMode, 1018 HomeMode, 4801 LogicHomeMode, 9515 LogicGameModeUtil, 9005 BattleTraining, 2241 BattleIntro//============================================================================//
// --------------------- MODULE 6128 — BattleMode ---------------------


// ============================================================ //
// webpack module 6128  —  BattleMode
// exports: BattleMode
// deps: 1588 (LogicMemory), 5523 (LogicBattleModeClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6128] = function BattleMode_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, LogicBattleModeClient, BattleMode_instancePtr, BattleMode_isInOfflineGame, BattleMode_isPlayingTutorial, logicBattleModeClientOffset, clientInputManagerOffset, BattleMode, <class_fields_init>, BattleMode;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleMode = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LogicBattleModeClient = __webpack_require__(5523);
        BattleMode_instancePtr = new NativeFunction(((Libg).Libg).offset(13582140, 0), "pointer", []);
        BattleMode_isInOfflineGame = new NativeFunction(((Libg).Libg).offset(13586908, 0), "bool", ["pointer"]);
        BattleMode_isPlayingTutorial = new NativeFunction(((Libg).Libg).offset(13586828, 0), "bool", ["pointer"]);
        logicBattleModeClientOffset = ((LogicMemory).LogicMemory).offset(40);
        clientInputManagerOffset = ((LogicMemory).LogicMemory).offset(88);
        <class_fields_init> = undefined;
        BattleMode;
        class BattleMode {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5aa98 (open) */
}
            getInstance () {
        return BattleMode_instancePtr();
}
            getLogicBattleModeClient () {
        return (((this).getInstance()).add(logicBattleModeClientOffset)).readPointer();
}
            get client () {
        if (((this).getInstance()).isNull()) {
            return;
        } /* if 0x5a9ca */
        return new (LogicBattleModeClient).LogicBattleModeClient((this).getLogicBattleModeClient());
}
            get isInOfflineGame () {
        return BattleMode_isInOfflineGame((this).getInstance());
}
            get isPlayingTutorial () {
        return BattleMode_isPlayingTutorial((this).getInstance());
}
            get clientInputManager () {
        return (((this).getInstance()).add(clientInputManagerOffset)).readPointer();
}
        }
        BattleMode = BattleMode = BattleMode;
        exports.BattleMode = BattleMode;
        return;
};

// --------------------- MODULE 1018 — HomeMode ---------------------


// ============================================================ //
// webpack module 1018  —  HomeMode
// exports: HomeMode, HomeMode_addCommandOffset
// deps: 3401 (GameStateManager), 4812 (LogicConfData), 5119 (LogicHeroSeenCommand), 6139 (LogicDataTables), 6385 (LogicClientHome), 7089 (LogicDailyData), 7332 (Settings), 9368 (EventSlot), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1018] = function HomeMode_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GameStateManager, LogicConfData, EventSlot, LogicDataTables, LogicHeroSeenCommand, LogicDailyData, LogicClientHome, Settings, HomeMode_addCommand_native, HomeMode_getConfData_native, HomeMode_getPlayerData_native, HomeMode, <class_fields_init>, HomeMode;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HomeMode_addCommandOffset = undefined;
        undefined.HomeMode = exports;
        Libg = __webpack_require__(9878);
        GameStateManager = __webpack_require__(3401);
        LogicConfData = __webpack_require__(4812);
        EventSlot = __webpack_require__(9368);
        LogicDataTables = __webpack_require__(6139);
        LogicHeroSeenCommand = __webpack_require__(5119);
        LogicDailyData = __webpack_require__(7089);
        LogicClientHome = __webpack_require__(6385);
        Settings = __webpack_require__(7332);
        exports.HomeMode_addCommandOffset = ((Libg).Libg).offset(13636756, 0);
        HomeMode_addCommand_native = new NativeFunction((exports).HomeMode_addCommandOffset, "int", ["pointer", "pointer"]);
        HomeMode_getConfData_native = new NativeFunction(((Libg).Libg).offset(13637096, 0), "pointer", []);
        HomeMode_getPlayerData_native = new NativeFunction(((Libg).Libg).offset(13638324, 0), "pointer", []);
        <class_fields_init> = undefined;
        HomeMode;
        class HomeMode {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5b483 (open) */
}
            getInstance () {
    var currentState;
        if ((!((GameStateManager).GameStateManager).isInState(((GameStateManager).GameStateId).Home))) {
            return null;
        } /* if 0x5b0ea */
        currentState = ((GameStateManager).GameStateManager).getCurrentState();
        if ((currentState).isNull()) {
            return null;
        } /* if 0x5b10a */
        return currentState;
}
            addCommand (command) {
    var instance;
        instance = (this).getInstance();
        /* is_null  */
        if (instance) {
            return;
        } /* if 0x5b14b */
        return;
}
            getConfData () {
        return HomeMode_getConfData_native();
}
            getPlayerData () {
        return HomeMode_getPlayerData_native();
}
            getPlayerAvatar () {
        return ((GameStateManager).GameStateManager).getPlayerAvatar();
}
            getActiveEventForSlot (slotIndex) {
        return ((LogicConfData).LogicConfData).getActiveEventForSlot((this).getConfData(), slotIndex);
}
            getSelectedEventSlot () {
        return (this).getActiveEventForSlot(((Settings).Settings).getLastPlayedEventSlot());
}
            getUnclaimedXpEventSlots () {
        return ((((LogicConfData).LogicConfData).getEventSlots((this).getConfData())).filter(function (slot) {
        if (((slot).claimLevel < (EventSlot).CLAIM_LEVEL_XP_CLAIMED)) {
            return ((slot).xpReward > 0);
        } /* if 0x5b2ac (open) */
})).map(function (slot) {
        return { slotIndex: (slot).slotIndex, xpReward: (slot).xpReward };
});
}
            getUnseenCharacters () {
    var playerAvatar, charactersTable, characterCount, unseen, i, character;
        playerAvatar = (this).getPlayerAvatar();
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        characterCount = (charactersTable).getItemCount();
        unseen = [];
        i = 0;
        while ((i < characterCount)) {
            character = (charactersTable).getItemAt(i);
            /* is_null  */
            if (!character) {
                if (!(!(character).isHero())) {
                    (!(character).isHero());
                    if (!(!(playerAvatar).hasHero(character))) {
                        if (!((playerAvatar).getHeroSeenState(character) === (((LogicHeroSeenCommand).LogicHeroSeenCommand).SeenState).FullyViewed)) {
                            (unseen).push(character);
                        } /* if 0x5b3df */
                    } /* if 0x5b3df */
                } /* if 0x5b3ab */
            } /* if 0x5b3df */
            i = ((i) + 1);
            (i++);
        } /* while 0x5b3e9 */
        return unseen;
}
            getNewCardItems () {
    var playerData;
        playerData = ((LogicClientHome).LogicClientHome).getPlayerData();
        /* is_null  */
        if (!playerData) {
            if ((playerData).isNull()) {
                return null;
            } /* if 0x5b445 */
        } /* if 0x5b441 */
        return ((LogicDailyData).LogicDailyData).getNewItems(playerData);
}
        }
        HomeMode = Settings = HomeMode;
        exports.HomeMode = HomeMode;
        HomeMode.gatchaType = { Character: 0, Skin: 0, PowerPoints: 1, Coins: 2, TokenDoublers: 3, StarPower: 4, EmotePack: 5, PlayerIcon: 6, Box: 7, Gadget: 8, Unknown: 9, StarPoints: 10, Hypercharge: 11, Empty: 12 };
        return;
};

// --------------------- MODULE 4801 — LogicHomeMode ---------------------


// ============================================================ //
// webpack module 4801  —  LogicHomeMode
// exports: LogicHomeMode
// deps: 1018 (HomeMode), 1588 (LogicMemory), 3401 (GameStateManager)
// ============================================================ //

__webpack_modules__[4801] = function LogicHomeMode_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, HomeMode, GameStateManager, logicHomeModeOffset, homeOffset, LogicHomeMode, <class_fields_init>, LogicHomeMode;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicHomeMode = undefined;
        LogicMemory = __webpack_require__(1588);
        HomeMode = __webpack_require__(1018);
        GameStateManager = __webpack_require__(3401);
        logicHomeModeOffset = ((LogicMemory).LogicMemory).offset(72);
        homeOffset = ((LogicMemory).LogicMemory).offset(24);
        <class_fields_init> = undefined;
        LogicHomeMode;
        class LogicHomeMode {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x71ef0 (open) */
}
            getInstance () {
    var homeMode;
        homeMode = ((HomeMode).HomeMode).getInstance();
        /* is_null  */
        if (homeMode) {
            return NULL;
        } /* if 0x71e51 */
        return ((homeMode).add(logicHomeModeOffset)).readPointer();
}
            getHome () {
        return (((this).getInstance()).add(homeOffset)).readPointer();
}
            getPlayerAvatar () {
        return ((GameStateManager).GameStateManager).getPlayerAvatar();
}
        }
        LogicHomeMode = v8 = LogicHomeMode;
        exports.LogicHomeMode = LogicHomeMode;
        return;
};

// --------------------- MODULE 9515 — LogicGameModeUtil ---------------------


// ============================================================ //
// webpack module 9515  —  LogicGameModeUtil
// exports: LogicGameModeUtil
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[9515] = function LogicGameModeUtil_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicGameModeUtil_getRespawnSeconds, LogicGameModeUtil_isShowdownLikeMode, LogicGameModeUtil_isDuoShowdown, LogicGameModeUtil, <class_fields_init>, LogicGameModeUtil;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicGameModeUtil = undefined;
        Libg = __webpack_require__(9878);
        LogicGameModeUtil_getRespawnSeconds = new NativeFunction(((Libg).Libg).offset(16596260, 0), "int", ["pointer", "int", "pointer"]);
        LogicGameModeUtil_isShowdownLikeMode = new NativeFunction(((Libg).Libg).offset(16594892, 0), "bool", ["pointer"]);
        LogicGameModeUtil_isDuoShowdown = new NativeFunction(((Libg).Libg).offset(16592268, 0), "bool", ["int"]);
        <class_fields_init> = undefined;
        LogicGameModeUtil;
        class LogicGameModeUtil {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x6a30c (open) */
}
            getRespawnSeconds (gameModeUtil, hasRespawnEventModifier) {
        return LogicGameModeUtil_getRespawnSeconds(gameModeUtil, hasRespawnEventModifier, NULL);
}
            isShowdownLikeMode (gameModeUtil) {
        return (LogicGameModeUtil_isShowdownLikeMode(gameModeUtil) === 1);
}
            isDuoShowdown (modeIndex) {
        return (LogicGameModeUtil_isDuoShowdown(modeIndex) === 1);
}
        }
        LogicGameModeUtil = v8 = LogicGameModeUtil;
        exports.LogicGameModeUtil = LogicGameModeUtil;
        return;
};

// --------------------- MODULE 9005 — BattleTraining ---------------------


// ============================================================ //
// webpack module 9005  —  BattleTraining
// exports: BattleTraining
// deps: 2757 (HomePage), 4959 (SessionStatics), 6128 (BattleMode), 6139 (LogicDataTables), 8569 (HomeScreen)
// ============================================================ //

__webpack_modules__[9005] = function BattleTraining_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicDataTables, HomeScreen, BattleMode, HomePage, SessionStatics, TRAINING_MODE_ID, TRAINING_SESSION_CONTEXT, TRAINING_CHARACTER_NAME, BattleTraining, <class_fields_init>, BattleTraining;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleTraining = undefined;
        LogicDataTables = __webpack_require__(6139);
        HomeScreen = __webpack_require__(8569);
        BattleMode = __webpack_require__(6128);
        HomePage = __webpack_require__(2757);
        SessionStatics = __webpack_require__(4959);
        TRAINING_MODE_ID = 4;
        TRAINING_SESSION_CONTEXT = 3;
        TRAINING_CHARACTER_NAME = "ShotgunGirl";
        <class_fields_init> = undefined;
        BattleTraining;
        class BattleTraining {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9b163 (open) */
}
            start () {
    var location, character;
        if (((Process).platform !== "linux")) {
            return;
        } /* if 0x9b080 */
        if ((!((HomeScreen).HomeScreen).isEntered)) {
            return;
        } /* if 0x9b091 */
        if ((!(((BattleMode).BattleMode).getInstance()).isNull())) {
            return;
        } /* if 0x9b0ad */
        location = ((LogicDataTables).LogicDataTables).getTrainingLocationData();
        if ((!location)) {
            return;
        } /* if 0x9b0c5 */
        character = ((LogicDataTables).LogicDataTables).getCharacterByName(TRAINING_CHARACTER_NAME);
        if (!(!character)) {
            if (((character).instance).isNull()) {
                return;
            } /* if 0x9b0f4 */
        } /* if 0x9b0f1 */
        ((HomePage).HomePage).startGame((location).instance, TRAINING_MODE_ID, (character).instance);
        return;
}
        }
        BattleTraining = BattleTraining = BattleTraining;
        exports.BattleTraining = BattleTraining;
        return;
};

// --------------------- MODULE 2241 — BattleIntro ---------------------


// ============================================================ //
// webpack module 2241  —  BattleIntro
// exports: BattleIntro
// deps: 1588 (LogicMemory), 4009 (Config), 7171 (LogicCharacterData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2241] = function BattleIntro_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Config, LogicCharacterData, BattleIntro_setupPlayerCard, logicPlayerHeroSetupArrayOffset, logicPlayerHeroSetupIndexOffset, logicPlayerSkinOffset, heroSetupEntrySkinOffset, BattleIntro, <class_fields_init>, BattleIntro;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleIntro = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Config = __webpack_require__(4009);
        LogicCharacterData = __webpack_require__(7171);
        BattleIntro_setupPlayerCard = ((Libg).Libg).offset(9302480, 0);
        logicPlayerHeroSetupArrayOffset = ((LogicMemory).LogicMemory).offset(112);
        logicPlayerHeroSetupIndexOffset = ((LogicMemory).LogicMemory).offset(128);
        logicPlayerSkinOffset = ((LogicMemory).LogicMemory).offset(536);
        heroSetupEntrySkinOffset = ((LogicMemory).LogicMemory).offset(32);
        <class_fields_init> = undefined;
        BattleIntro;
        class BattleIntro {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3d58c (open) */
}
            patch () {
        return;
}
        }
        BattleIntro = heroSetupEntrySkinOffset = BattleIntro;
        exports.BattleIntro = BattleIntro;
        return;
};

