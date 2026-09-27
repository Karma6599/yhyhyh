var BattleMode_instancePtr = new NativeFunction(Libg.offset(13582140, 0), "pointer", []);
var BattleMode_isInOfflineGame = new NativeFunction(Libg.offset(13586908, 0), "bool", ["pointer"]);
var BattleMode_isPlayingTutorial = new NativeFunction(Libg.offset(13586828, 0), "bool", ["pointer"]);
var logicBattleModeClientOffset = LogicMemory.offset(40);
var clientInputManagerOffset = LogicMemory.offset(88);

class BattleMode {
    static getInstance() {
        return BattleMode_instancePtr();
    }
    static getLogicBattleModeClient() {
        return BattleMode.getInstance().add(logicBattleModeClientOffset).readPointer();
    }
    static get client() {
        if (BattleMode.getInstance().isNull()) {
            return;
        }
        return new LogicBattleModeClient(BattleMode.getLogicBattleModeClient());
    }
    static get isInOfflineGame() {
        return BattleMode_isInOfflineGame(BattleMode.getInstance());
    }
    static get isPlayingTutorial() {
        return BattleMode_isPlayingTutorial(BattleMode.getInstance());
    }
    static get clientInputManager() {
        return BattleMode.getInstance().add(clientInputManagerOffset).readPointer();
    }
}

var HomeMode_addCommandOffset = Libg.offset(13636756, 0);
var HomeMode_addCommand_native = new NativeFunction(HomeMode_addCommandOffset, "int", ["pointer", "pointer"]);
var HomeMode_getConfData_native = new NativeFunction(Libg.offset(13637096, 0), "pointer", []);
var HomeMode_getPlayerData_native = new NativeFunction(Libg.offset(13638324, 0), "pointer", []);

class HomeMode {
    static getInstance() {
        if (!GameStateManager.isInState(GameStateManager.GameStateId.Home)) {
            return null;
        }
        var currentState = GameStateManager.getCurrentState();
        if (currentState.isNull()) {
            return null;
        }
        return currentState;
    }
    static addCommand(command) {
        var instance = HomeMode.getInstance();
        if (instance == null || instance.isNull()) {
            return;
        }
        HomeMode_addCommand_native(instance, command);
    }
    static getConfData() {
        return HomeMode_getConfData_native();
    }
    static getPlayerData() {
        return HomeMode_getPlayerData_native();
    }
    static getPlayerAvatar() {
        return GameStateManager.getPlayerAvatar();
    }
    static getActiveEventForSlot(slotIndex) {
        return LogicConfData.getActiveEventForSlot(HomeMode.getConfData(), slotIndex);
    }
    static getSelectedEventSlot() {
        return HomeMode.getActiveEventForSlot(Settings.getLastPlayedEventSlot());
    }
    static getUnclaimedXpEventSlots() {
        return LogicConfData.getEventSlots(HomeMode.getConfData()).filter(function (slot) {
            if (slot.claimLevel < EventSlot.CLAIM_LEVEL_XP_CLAIMED) {
                return slot.xpReward > 0;
            }
        }).map(function (slot) {
            return { slotIndex: slot.slotIndex, xpReward: slot.xpReward };
        });
    }
    static getUnseenCharacters() {
        var playerAvatar = HomeMode.getPlayerAvatar();
        var charactersTable = LogicDataTables.getTable(LogicDataTables.table.Characters);
        var characterCount = charactersTable.getItemCount();
        var unseen = [];
        var i = 0;
        while (i < characterCount) {
            var character = charactersTable.getItemAt(i);
            if (character && character.isHero() && !playerAvatar.hasHero(character) && playerAvatar.getHeroSeenState(character) !== LogicHeroSeenCommand.SeenState.FullyViewed) {
                unseen.push(character);
            }
            i++;
        }
        return unseen;
    }
    static getNewCardItems() {
        var playerData = LogicClientHome.getPlayerData();
        if (playerData == null || playerData.isNull()) {
            return null;
        }
        return LogicDailyData.getNewItems(playerData);
    }
}
HomeMode.gatchaType = { Character: 0, Skin: 0, PowerPoints: 1, Coins: 2, TokenDoublers: 3, StarPower: 4, EmotePack: 5, PlayerIcon: 6, Box: 7, Gadget: 8, Unknown: 9, StarPoints: 10, Hypercharge: 11, Empty: 12 };

var logicHomeModeOffset = LogicMemory.offset(72);
var homeOffset = LogicMemory.offset(24);

class LogicHomeMode {
    static getInstance() {
        var homeMode = HomeMode.getInstance();
        if (homeMode == null || homeMode.isNull()) {
            return NULL;
        }
        return homeMode.add(logicHomeModeOffset).readPointer();
    }
    static getHome() {
        return LogicHomeMode.getInstance().add(homeOffset).readPointer();
    }
    static getPlayerAvatar() {
        return GameStateManager.getPlayerAvatar();
    }
}

var LogicGameModeUtil_getRespawnSeconds = new NativeFunction(Libg.offset(16596260, 0), "int", ["pointer", "int", "pointer"]);
var LogicGameModeUtil_isShowdownLikeMode = new NativeFunction(Libg.offset(16594892, 0), "bool", ["pointer"]);
var LogicGameModeUtil_isDuoShowdown = new NativeFunction(Libg.offset(16592268, 0), "bool", ["int"]);

class LogicGameModeUtil {
    static getRespawnSeconds(gameModeUtil, hasRespawnEventModifier) {
        return LogicGameModeUtil_getRespawnSeconds(gameModeUtil, hasRespawnEventModifier, NULL);
    }
    static isShowdownLikeMode(gameModeUtil) {
        return LogicGameModeUtil_isShowdownLikeMode(gameModeUtil) === 1;
    }
    static isDuoShowdown(modeIndex) {
        return LogicGameModeUtil_isDuoShowdown(modeIndex) === 1;
    }
}

var TRAINING_MODE_ID = 4;
var TRAINING_SESSION_CONTEXT = 3;
var TRAINING_CHARACTER_NAME = "ShotgunGirl";

class BattleTraining {
    static start() {
        if (Process.platform !== "linux") {
            return;
        }
        if (!HomeScreen.isEntered) {
            return;
        }
        if (!BattleMode.getInstance().isNull()) {
            return;
        }
        var location = LogicDataTables.getTrainingLocationData();
        if (!location) {
            return;
        }
        var character = LogicDataTables.getCharacterByName(TRAINING_CHARACTER_NAME);
        if (character && character.instance.isNull()) {
            return;
        }
        HomePage.startGame(location.instance, TRAINING_MODE_ID, character.instance);
    }
}

var BattleIntro_setupPlayerCard = Libg.offset(9302480, 0);
var logicPlayerHeroSetupArrayOffset = LogicMemory.offset(112);
var logicPlayerHeroSetupIndexOffset = LogicMemory.offset(128);
var logicPlayerSkinOffset = LogicMemory.offset(536);
var heroSetupEntrySkinOffset = LogicMemory.offset(32);

class BattleIntro {
    static patch() {
        return;
    }
}
