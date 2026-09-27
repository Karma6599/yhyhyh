var LogicPlayer_decode = new NativeFunction(Libg.offset(16412296, 0), "void", ["pointer", "pointer"]);
var playerIdOffset = LogicMemory.offset(64);
var playerIndexOffset = LogicMemory.offset(72);
var heroSetupOffset = LogicMemory.offset(112);
var playersCountOffset = LogicMemory.offset(124);
var logicPlayerBattleIntroDetails = LogicMemory.offset(624);

class LogicPlayer {
    constructor(instance) {
        this.instance = instance;
    }
    decode(byteStream) {
        LogicPlayer_decode(this.instance, byteStream);
    }
    getPlayersCount() {
        return this.instance.add(playersCountOffset).readU32();
    }
    getLogicPlayerBattleIntroDetails() {
        return new LogicPlayerBattleIntroDetails(this.instance.add(logicPlayerBattleIntroDetails).readPointer());
    }
    getLogicHeroSetup() {
        return new LogicHeroSetup(this.instance.add(heroSetupOffset).readPointer());
    }
    get playerId() {
        if (this.instance.isNull()) {
            return null;
        }
        return new LogicLong(this.instance.add(playerIdOffset));
    }
    getPlayerIndex() {
        return this.instance.add(playerIndexOffset).readU32();
    }
    buildBattleName(playerName) {
        if (playerName === undefined) {
            playerName = "";
        }
        var relationshipEmojis = "";
        if (Config.config.ShamePlayersWithThumbsdownPin) {
            var battleEmotes = this.getLogicHeroSetup().getLogicBattleEmotes();
            if (battleEmotes != null) {
                var emojis = battleEmotes.getEmotes();
                if (emojis != null) {
                    if (emojis.some(function (emote) {
                        return LogicPlayer.negativeEmotes.includes(emote.getName());
                    })) {
                        relationshipEmojis = relationshipEmojis + "🤡";
                    }
                }
            }
        }
        relationshipEmojis = relationshipEmojis + relationshipEmojis;
        var emotes = "";
        if (Config.config.ShowCharactersInNames) {
            var characterName = this.getLogicHeroSetup().getLogicCharacterData();
            if (characterName) {
                emotes = "(".concat(StringTable.getString(characterName.getTID()), ")");
            }
        }
        return ["", playerName, emotes].filter(Boolean).join(" ");
    }
    static logNativePlayerName(player, name) {
        if (!Config.useDebugLogging) {
            return;
        }
        if (Config.config.ShowBSDApiResponse !== true) {
            return;
        }
        try {
            var playerId = player.playerId;
            if (!playerId) {
                return;
            }
            Logcat.logDebug("[BSD names] ".concat(JSON.stringify({ stage: "native-decoded", tag: HashTagCodeGenerator.convertLongToPlayerTag(playerId), name: name })));
        } catch (e) {
        }
    }
    static patch() {
        return;
    }
}
LogicPlayer.THUMBDOWN_EMOTE = "emoji_thumbsdown";
LogicPlayer.FIND_EMOTE_FUNC = function (e) {
    return e.getName() === LogicPlayer.THUMBDOWN_EMOTE;
};
LogicPlayer.negativeEmotes = ["emoji_thumbsdown", "emoji_champie_thumbsdown", "emoji_clown", "emoji_stop"];

var LogicPlayerMap_save = new NativeFunction(Libg.offset(15839788, 0), "void", ["pointer", "pointer", "pointer"]);
var nameOffset = LogicMemory.offset(8);
var gameModeVariationOffset = LogicMemory.offset(16);
var environmentOffset = LogicMemory.offset(24);

class LogicPlayerMap {
    constructor(instance) {
        if (instance) {
            this.instance = instance;
            return;
        }
        this.instance = Libc.calloc(LogicPlayerMap.allocationSize, 1);
    }
    setName(name) {
        return;
    }
    setGameModeVariation(variationId) {
        return;
    }
    setEnvironment(environment) {
        return;
    }
    save(tilemap, logicEditor) {
        LogicPlayerMap_save(this.instance, tilemap, logicEditor);
    }
}
LogicPlayerMap.allocationSize = 104;

var LogicPlayerMapUtil_isValidPlayerMap = Libg.offset(15844596, 0);
var LogicPlayerMapUtil_isInsideRestrictedArea = Libg.offset(15853640, 0);
var alwaysValidCallback = new NativeCallback(function () {
    return 0;
}, "int", ["pointer", "pointer", "int", "int"]);
var alwaysAllowedAreaCallback = new NativeCallback(function () {
    return 0;
}, "int", ["pointer", "int", "int", "int", "int", "uint"]);

class LogicPlayerMapUtil {
    static setValidationBypassed(enabled) {
        if (enabled === LogicPlayerMapUtil.validationBypassed) {
            return;
        }
        LogicPlayerMapUtil.validationBypassed = enabled;
        if (enabled) {
            Interceptor.replace(LogicPlayerMapUtil_isValidPlayerMap, alwaysValidCallback);
            return;
        }
        Interceptor.revert(LogicPlayerMapUtil_isValidPlayerMap);
    }
    static isValidationBypassed() {
        return LogicPlayerMapUtil.validationBypassed;
    }
    static setRestrictedAreaBypassed(enabled) {
        if (enabled === LogicPlayerMapUtil.restrictedAreaBypassed) {
            return;
        }
        LogicPlayerMapUtil.restrictedAreaBypassed = enabled;
        if (enabled) {
            Interceptor.replace(LogicPlayerMapUtil_isInsideRestrictedArea, alwaysAllowedAreaCallback);
            return;
        }
        Interceptor.revert(LogicPlayerMapUtil_isInsideRestrictedArea);
    }
    static isRestrictedAreaBypassed() {
        return LogicPlayerMapUtil.restrictedAreaBypassed;
    }
}
LogicPlayerMapUtil.validationBypassed = false;
LogicPlayerMapUtil.restrictedAreaBypassed = false;

var LogicAvatarHelper_levelUpHeroToTargetLevel = new NativeFunction(Libg.offset(14205384, 0), "void", ["pointer", "pointer", "int", "int"]);

class LogicAvatarHelper {
    static levelUpHeroToTargetLevel(home, character, targetLevel, reason) {
        if (reason === undefined) {
            reason = 0;
        }
        if (!home.isNull() && !character.instance.isNull()) {
            LogicAvatarHelper_levelUpHeroToTargetLevel(home, character.instance, targetLevel, reason);
        }
    }
}

var LogicClientAvatar_getHeroSeenState_native = new NativeFunction(Libg.offset(14223088, 0), "int", ["pointer", "pointer"]);
var LogicClientAvatar_hasHero = new NativeFunction(Libg.offset(14217428, 0), "bool", ["pointer", "pointer"]);
var LogicClientAvatar_setItem = new NativeFunction(Libg.offset(14215372, 0), "void", ["pointer", "pointer"]);
var LogicClientAvatar_unlockHero = new NativeFunction(Libg.offset(14212336, 0), "void", ["pointer", "pointer", "int"]);
var LogicClientAvatar_setCommodityCountOffset = Libg.offset(14211840, 0);
var LogicClientAvatar_setCommodityCount = new NativeFunction(LogicClientAvatar_setCommodityCountOffset, "void", ["pointer", "uint", "pointer", "uint", "uint"]);
var LogicClientAvatar_changeCommodityCount = new NativeFunction(Libg.offset(14213252, 0), "pointer", ["pointer", "uint", "pointer", "int", "uint", "uchar", "pointer", "pointer", "int", "int"]);
var LogicClientAvatar_getCommodityCount = new NativeFunction(Libg.offset(14214500, 0), "int", ["pointer", "int", "pointer"]);
var lengthOffset = LogicMemory.offset(12);
var heroLvlUpMaterialArrayListOffset = LogicMemory.offset(72);
var scoreArrayListOffset = LogicMemory.offset(80);
var powerArrayListOffset = LogicMemory.offset(104);
var tutorialsCompletedCountOffset = LogicMemory.offset(368);
var diamondsOffset = LogicMemory.offset(640, 764);

class LogicClientAvatar {
    constructor(instance) {
        this.instance = instance;
    }
    getDataIndex(commodityArrayList, data) {
        var arrayLength = commodityArrayList.add(lengthOffset).readInt();
        if (arrayLength < 1) {
            EDebugger.addMessage(EDebugger.ERROR, "CommodityArrayList length is empty!");
            return -1;
        }
        var index = 0;
        while (index < arrayLength) {
            var dataSlot = new LogicDataSlot(commodityArrayList.readPointer().add(index * Process.pointerSize).readPointer());
            if (dataSlot.getData().equals(data)) {
                return index;
            }
            index++;
        }
        return -1;
    }
    getCommodityCount(commodityIndex, data) {
        return LogicClientAvatar_getCommodityCount(this.instance, commodityIndex, data.instance);
    }
    getHeroScore(character) {
        var commodityArrayList = this.instance.add(scoreArrayListOffset).readPointer();
        var dataIndex = this.getDataIndex(commodityArrayList, character);
        if (dataIndex === -1) {
            return 0;
        }
        return commodityArrayList.readPointer().add(dataIndex * Process.pointerSize).readPointer().readInt();
    }
    getHeroPower(character) {
        var powerArrayList = this.instance.add(powerArrayListOffset).readPointer();
        var dataIndex = this.getDataIndex(powerArrayList, character);
        if (dataIndex === -1) {
            return 0;
        }
        return powerArrayList.readPointer().add(dataIndex * Process.pointerSize).readPointer().readInt();
    }
    getHeroLvlUpMaterial(character) {
        var heroLvlUpMaterialData = LogicDataTables.getLvlUpMaterialData();
        var heroLvlUpMaterialArrayList = this.instance.add(heroLvlUpMaterialArrayListOffset);
        var dataIndex = this.getDataIndex(heroLvlUpMaterialArrayList, heroLvlUpMaterialData);
        if (dataIndex === -1) {
            return 0;
        }
        return heroLvlUpMaterialArrayList.readPointer().add(dataIndex * Process.pointerSize).readPointer().readInt();
    }
    get tutorialsCompletedCount() {
        return this.instance.add(tutorialsCompletedCountOffset).readInt();
    }
    hasHero(character) {
        if (!this.instance.isNull() && !character.instance.isNull()) {
            return !!LogicClientAvatar_hasHero(this.instance, character.instance);
        }
        return false;
    }
    getHeroSeenState(character) {
        if (this.instance.isNull()) {
            return 0;
        }
        return LogicClientAvatar_getHeroSeenState_native(this.instance, character.instance);
    }
    setItem(card) {
        if (!this.instance.isNull() && !card.instance.isNull()) {
            LogicClientAvatar_setItem(this.instance, card.instance);
        }
    }
    unlockHero(unlockCard, reason) {
        if (reason === undefined) {
            reason = 3;
        }
        if (!this.instance.isNull() && !unlockCard.instance.isNull()) {
            LogicClientAvatar_unlockHero(this.instance, unlockCard.instance, reason);
        }
    }
    setDiamonds(value) {
        if (this.instance.isNull()) {
            return;
        }
    }
    setCommodityCount(type, data, count, extra) {
        if (!this.instance.isNull() && !data.isNull()) {
            LogicClientAvatar_setCommodityCount(this.instance, type, data, count, extra);
        }
    }
    changeCommodityCount(type, data, delta, reason, applyFlag) {
        if (applyFlag === undefined) {
            applyFlag = 1;
        }
        if (this.instance.isNull() || data.isNull()) {
            return;
        }
    }
}
LogicClientAvatar.maxHeroPowerPoints = 3740;
LogicClientAvatar.commodityType = { Resource: 0, PeakTrophies: 2, HeroLevel: 5, HeroSeenState: 7, Highscore: 17, AvatarPassiveRecruit: 31, AvatarPassive: 33 };

var LogicClientHome_isEventSlotLocked = new NativeFunction(Libg.offset(15819872, 0), "bool", ["int"]);
var playerDataOffset = LogicMemory.offset(24, 24);

class LogicClientHome {
    static patch() {
        return;
    }
    static getPlayerData() {
        var home = LogicHomeMode.getHome();
        if (home.isNull()) {
            return null;
        }
        return home.add(playerDataOffset).readPointer();
    }
}

var LogicPlayerBattleIntroDetails_playerTitleOffset = LogicMemory.offset(40);

class LogicPlayerBattleIntroDetails {
    constructor(instance) {
        this.instance = instance;
    }
    get displayData() {
        return new PlayerDisplayData(this.instance.readPointer());
    }
    get title() {
        var titlePtr = this.instance.add(LogicPlayerBattleIntroDetails_playerTitleOffset).readPointer();
        if (titlePtr.isNull()) {
            return null;
        }
        return new LogicPlayerTitleData(titlePtr);
    }
    set title(title) {
        if (!title) {
            return;
        }
        if (title instanceof LogicPlayerTitleData) {
            this.instance.add(LogicPlayerBattleIntroDetails_playerTitleOffset).writePointer(title.instance);
        }
    }
    getPlayerName() {
        return StringObject.read(this.instance.readPointer());
    }
    setPlayerName(name) {
        return;
    }
}

class Player {
}
Player.ownIndex = -1;
Player.playingWith = [];
Player.tag = "";

var PlayerInfo_ctor = new NativeFunction(Libg.offset(9055432, 0), "void", ["pointer", "pointer", "int", "pointer", "int", "pointer"]);
var PlayerInfo_refreshPlayerHeader = new NativeFunction(Libg.offset(9072368, 0), "void", ["pointer"]);
var dropGUIContainerOffset = LogicMemory.offset(144);
var clipOffset = LogicMemory.offset(328);
var fieldOffset = LogicMemory.offset(128);

class PlayerInfo {
    constructor(logicLong) {
        this.instance = Libc.malloc(PlayerInfo.allocationSize);
    }
    static patch() {
        return;
    }
}
PlayerInfo.allocationSize = 624;
PlayerInfo.isInGameroom = false;
PlayerInfo.ownThumbdownEmoteIndex = -1;

var PlayerProfile_decode = new NativeFunction(Libg.offset(16142680, 0), "void", ["pointer", "pointer"]);
var displayDataOffset = LogicMemory.offset(48);
var PlayerProfile_playerTitleOffset = LogicMemory.offset(120);
var brawlerVectorOffset = LogicMemory.offset(24);
var brawlerVectorCountOffset = 12;
var brawlerEntryCharacterOffset = 0;
var brawlerEntrySkinOffset = 8;
var brawlerEntryTrophiesOffset = 36;

class PlayerProfile {
    constructor(_instance) {
        this._instance = _instance;
    }
    get accountId() {
        return new LogicLong(this._instance);
    }
    get displayData() {
        var displayData = this._instance.add(displayDataOffset).readPointer();
        if (displayData.isNull()) {
            return;
        }
        return new PlayerDisplayData(displayData);
    }
    get title() {
        return this._instance.add(PlayerProfile_playerTitleOffset).readPointer();
    }
    getBrawlerEntries() {
        var result = [];
        var vectorPointer = this._instance.add(brawlerVectorOffset).readPointer();
        if (vectorPointer.isNull()) {
            return result;
        }
        var dataPointer = vectorPointer.readPointer();
        var brawlerCount = vectorPointer.add(brawlerVectorCountOffset).readU32();
        if (dataPointer.isNull()) {
            return result;
        }
        var i = 0;
        while (i < brawlerCount) {
            var entryPointer = dataPointer.add(i * Process.pointerSize).readPointer();
            if (!entryPointer.isNull()) {
                var characterPointer = entryPointer.add(brawlerEntryCharacterOffset).readPointer();
                if (!characterPointer.isNull()) {
                    var skinPointer = entryPointer.add(brawlerEntrySkinOffset).readPointer();
                    result.push({
                        character: new LogicCharacterData(characterPointer),
                        skin: skinPointer.isNull() ? null : new LogicSkinData(skinPointer),
                        trophies: entryPointer.add(brawlerEntryTrophiesOffset).readInt()
                    });
                }
            }
            i++;
        }
        return result;
    }
    static patch() {
        return;
    }
}

var PlayerMapManager_handleMapPreview = new NativeFunction(Libg.offset(11200608, 0), "void", ["pointer", "pointer"]);

class PlayerMapManager {
    static handleMapPreview(message) {
        return;
    }
}

var TeamManager_instance = Libg.offset(19935304, 0);
var TeamInvitationPopup = new NativeFunction(Libg.offset(10835668, 0), "pointer", ["pointer", "pointer", "int"]);
var TeamJoinRequestPopup = new NativeFunction(Libg.offset(10884128, 0), "pointer", ["pointer", "pointer", "pointer"]);
var TeamManager_onTeamMessage = new NativeFunction(Libg.offset(9119100, 0), "void", ["pointer", "pointer"]);
var TeamManager_onTeamLeftMessage = new NativeFunction(Libg.offset(9116628, 0), "void", ["pointer", "pointer"]);
var ownTeamEntryOffset = LogicMemory.offset(0);
var teamTypeOffset = LogicMemory.offset(0);

class TeamManager {
    static isFriendly() {
        var instance = TeamManager.getInstance();
        if (!instance) {
            return false;
        }
        var entry = instance.add(ownTeamEntryOffset).readPointer();
        if (!entry.isNull()) {
            return entry.add(teamTypeOffset).readS32() === 1;
        }
    }
    static getInstance() {
        var instance = TeamManager_instance.readPointer();
        if (instance.isNull()) {
            return null;
        }
        return instance;
    }
    static patch() {
        Interceptor.replace(TeamInvitationPopup, new NativeCallback(function (self, TeamInvitation, isSystemInvite) {
            TeamInvitationPopup(self, TeamInvitation, isSystemInvite);
            SoundManager.playSound("Leave_game_room");
            return self;
        }, "pointer", ["pointer", "pointer", "int"]));
        Interceptor.replace(TeamJoinRequestPopup, new NativeCallback(function (self, playerID, TeamJoinRequest) {
            TeamJoinRequestPopup(self, playerID, TeamJoinRequest);
            SoundManager.playSound("Join_game_room");
            return self;
        }, "pointer", ["pointer", "pointer", "pointer"]));
        Interceptor.attach(TeamManager_onTeamMessage, { onLeave() {
            PlayerInfo.isInGameroom = true;
        } });
    }
}

var AllianceManager_showPopup = new NativeFunction(Libg.offset(9014716, 0), "void", ["pointer"]);
var AllianceManager_getInstance = new NativeFunction(Libg.offset(9023828, 0), "pointer", []);
var AllianceManager_doStartReplayAddr = Libg.offset(9013400, 0);
var AllianceManager_doStartReplay = new NativeFunction(AllianceManager_doStartReplayAddr, "bool", ["pointer", "uint64", "uint64"]);
var AllianceManager_doStartSharedReplayAddr = Libg.offset(9013612, 0);
var AllianceManager_doStartSharedReplay = new NativeFunction(AllianceManager_doStartSharedReplayAddr, "bool", ["pointer", "pointer"]);
var AllianceManager_doStartSpectate = new NativeFunction(Libg.offset(9014204, 0), "bool", ["pointer", "pointer"]);

class AllianceManager {
    static getInstance() {
        return AllianceManager_getInstance();
    }
    static showPopup(popup) {
        if (popup.instance == null) {
            return;
        }
        AllianceManager_showPopup(popup.instance);
    }
    static doStartReplay(uuidLo, uuidHi) {
        var manager = AllianceManager.getInstance();
        if (manager.isNull()) {
            return false;
        }
        return AllianceManager_doStartReplay(manager, uuidLo, uuidHi);
    }
    static doStartSharedReplay(shareReplayEntryPtr) {
        var manager = AllianceManager.getInstance();
        if (manager.isNull()) {
            return false;
        }
        return AllianceManager_doStartSharedReplay(manager, shareReplayEntryPtr);
    }
    static doStartSpectate(logicLongPtr) {
        var manager = AllianceManager.getInstance();
        if (manager.isNull()) {
            return false;
        }
        return AllianceManager_doStartSpectate(manager, logicLongPtr);
    }
}
AllianceManager.doStartReplayAddr = AllianceManager_doStartReplayAddr;
AllianceManager.doStartSharedReplayAddr = AllianceManager_doStartSharedReplayAddr;
