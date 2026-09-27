class PiranhaMessage {
    constructor(instance) {
        this.instance = instance;
    }
    getMessageType() {
        return PiranhaMessage.getMessageType(this.instance);
    }
    static getMessageType(instance) {
        return new NativeFunction(instance.readPointer().add(5 * Process.pointerSize).readPointer(), "int", [])();
    }
}

var LoginMessage_setAccountId = new NativeFunction(Libg.offset(15902472, 0), "void", ["pointer", "pointer"]);
var LoginMessage_encode = new NativeFunction(Libg.offset(15899916, 0), "void", ["pointer"]);

class LoginMessage {
    static patch() {
        Interceptor.replace(LoginMessage_setAccountId, new NativeCallback(function (message, logicLong) {
            PlayerInfo.accountId = new LogicLong(logicLong);
            PlayerInfo.tag = HashTagCodeGenerator.convertLongToPlayerTag(PlayerInfo.accountId);
        }, "void", ["pointer", "pointer"]));
    }
}

var LoginOkMessage_decode = new NativeFunction(Libg.offset(15904336, 0), "void", ["pointer", "pointer"]);
var accountIdOffset = LogicMemory.offset(144);
var sessionCountOffset = LogicMemory.offset(224);
var playTimeInSecondsOffset = LogicMemory.offset(228);
var serverTimeOffset = LogicMemory.offset(240);
var accountCreatedTimeOffset = LogicMemory.offset(248);

class LoginOkMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    static getSecondsSinceLoginOk() {
        return Math.floor(Date.now() / 1000) - this.logicOkTime;
    }
    static patch() {
        return;
    }
}
LoginOkMessage.sessionStartedTimestamp = 0;
LoginOkMessage.sessionCount = 0;
LoginOkMessage.playTimeInSeconds = 0;
LoginOkMessage.accountCreatedDate = "";
LoginOkMessage.serverTime = 0;
LoginOkMessage.logicOkTime = 0;

var LoginFailedMessage_decode = Libg.offset(15897532, 0);
var errorCodeOffset = LogicMemory.offset(144);

class LoginFailedMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get errorCode() {
        return this.instance.add(errorCodeOffset).readInt();
    }
    static patch() {
        return;
    }
}

var ServerHelloMessage_decode = Libg.offset(7992544, 0);

class ServerHelloMessage {
    static patch() {
        return;
    }
}

var StartLoadingMessage_decode = new NativeFunction(Libg.offset(16026116, 0), "void", ["pointer", "pointer"]);
var startLoadingGameModeVariationOffset = LogicMemory.offset(248);
var startLoadingPlayersArrayOffset = 256;

class StartLoadingMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get gameModeVariation() {
        return this.instance.add(startLoadingGameModeVariationOffset).readInt();
    }
    get gameModeVariationData() {
        var variationId = this.gameModeVariation;
        return LogicDataTables.getDataById(LogicDataTables.table.GameModeVariations, variationId);
    }
    get players() {
        var players = new LogicArrayList(this.instance.add(startLoadingPlayersArrayOffset).readPointer());
        var itemsCount = players.getItemsCount();
        return Array.from({ length: itemsCount }, function (_, i) {
            return new LogicPlayer(players.getElement(i));
        });
    }
    static patch() {
        BattleScreen.addEnterListener(function () {
            if (StartLoadingMessage.bsdResponseReady) {
                StartLoadingMessage.applyPendingTitles();
            }
        });
    }
    static applyPendingTitles() {
        try {
            var client = BattleMode.client;
            if (!client) {
                return;
            }
            var playerCount = client.getPlayerCount();
            if (playerCount === 0) {
                return;
            }
            if (StartLoadingMessage.bsdResponseReady && StartLoadingMessage.lastBSDResponse) {
                var response = StartLoadingMessage.lastBSDResponse;
                if (response.statusCode === 200 && response.json) {
                    var parsedResponseData = response.json;
                    var chaCha20 = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
                    var decryptedResponse = CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
                    var parsedResponse = JSON.parse(decryptedResponse);
                    if (parsedResponse.status === "ok" && parsedResponse.bsd_users) {
                        for (var i = 0; i < playerCount; i++) {
                            var player = client.getPlayer(i);
                            if (!player || !player.playerId) {
                                continue;
                            }
                            var tag = HashTagCodeGenerator.convertLongToPlayerTag(player.playerId);
                            var user = parsedResponse.bsd_users["#" + tag] || parsedResponse.bsd_users[tag];
                            if (!user) {
                                continue;
                            }
                            var hasCustomTitle = CustomMarks.hasTitle(tag);
                            var customTitle = hasCustomTitle ? CustomMarks.getTitleDefinitionFor(tag) : undefined;
                            var titleStr = customTitle != null ? customTitle : user.title;
                            if (titleStr && titleStr.length > 0) {
                                StartLoadingMessage.applyTitleToPlayer(client, playerCount, tag, titleStr, hasCustomTitle);
                            }
                            var introDetails = player.getLogicPlayerBattleIntroDetails();
                            var nativeName = introDetails.getPlayerName();
                            var cachedEntry = StartLoadingMessage.lastCachedPlayers.find(function (cachedPlayer) {
                                return cachedPlayer.tag === tag;
                            });
                            var cachedName = cachedEntry ? cachedEntry.name : nativeName;
                            if (typeof user.name === "string" && user.name.length > 0) {
                                cachedName = user.name;
                            }
                            var playerName = "";
                            if (Config.config.PlayerNameOverride) {
                                if (player.playerId != null && player.playerId.equals(PlayerInfo.accountId)) {
                                    playerName = Config.config.PlayerNameOverride;
                                }
                            }
                            var relationshipEmojis = "";
                            if (BSDPlusManager.isBSDPlusEnabled) {
                                if (Config.config.ShowAllianceMembersInBattle) {
                                    if (user.is_clan_member === true) {
                                        relationshipEmojis = relationshipEmojis + "🛡️";
                                    }
                                }
                            }
                            if (BSDPlusManager.isBSDPlusEnabled) {
                                if (Config.config.ShowBlacklistedPlayersInBattle) {
                                    if (user.is_blacklisted === true) {
                                        relationshipEmojis = relationshipEmojis + "❌";
                                    }
                                }
                            }
                            var decoratedName = [playerName, cachedName].filter(Boolean).join(" ");
                            if (relationshipEmojis) {
                                decoratedName = relationshipEmojis + " " + decoratedName;
                            }
                            var trophiesName = playerName || cachedName;
                            if (user.trophies !== undefined && user.trophies !== -1) {
                                StartLoadingMessage.playerTrophies.set(trophiesName, user.trophies);
                            }
                            if (user.character !== undefined && user.character !== -1) {
                                StartLoadingMessage.playerCharacterTrophies.set(trophiesName, user.character);
                            }
                            var namePrefix = null;
                            if (!CustomMarks.hasMark(tag) && typeof user.plus === "number" && user.plus !== -1 && user.plus === 1) {
                            }
                            if (namePrefix && !decoratedName.includes(namePrefix)) {
                                decoratedName = namePrefix + " " + decoratedName;
                            }
                            var finalName = decoratedName;
                            if (finalName !== nativeName) {
                                introDetails.setPlayerName(finalName);
                            }
                            StartLoadingMessage.logNameComparison({ stage: "after-api", tag: tag, beforeApi: cachedName, beforeApply: nativeName, apiName: user.name, finalName: finalName, changed: finalName !== nativeName });
                        }
                    }
                }
                StartLoadingMessage.lastBSDResponse = null;
                StartLoadingMessage.bsdResponseReady = false;
            }
            for (var i = 0; i < playerCount; i++) {
                var player = client.getPlayer(i);
                if (player && player.playerId) {
                    var tag = HashTagCodeGenerator.convertLongToPlayerTag(player.playerId);
                    if (CustomMarks.hasTitle(tag)) {
                        var titleStr = CustomMarks.getTitleDefinitionFor(tag);
                        if (titleStr) {
                            StartLoadingMessage.applyTitleToPlayer(client, playerCount, tag, titleStr, true);
                        }
                    }
                }
            }
        } catch (e) {
            Logcat.logError("Error applying titles: " + e.stack);
        }
    }
    static logNameComparison(details) {
        if (!Config.useDebugLogging || Config.config.ShowBSDApiResponse !== true) {
            return;
        }
        try {
            Object.assign(details, { requestId: StartLoadingMessage.bsdRequestId });
            Logcat.logDebug("[BSD names] " + JSON.stringify(details));
        } catch (e) {
            return;
        }
    }
    static applyTitleToPlayer(client, playerCount, tag, titleStr, hasCustomTitle) {
        for (var i = 0; i < playerCount; i++) {
            var player = client.getPlayer(i);
            if (player && player.playerId) {
                var playerTag = HashTagCodeGenerator.convertLongToPlayerTag(player.playerId);
                if (playerTag === tag) {
                    var introDetails = player.getLogicPlayerBattleIntroDetails();
                    var titleData = LogicDataTables.getDataById(76, 0);
                    var gradient = LogicDataTables.getDataById(46, 2);
                    var devGradient = LogicDataTables.getDataById(46, 31);
                    var newTitleData = titleData.clone();
                    newTitleData.titleTid = titleStr;
                    newTitleData.gradient = hasCustomTitle ? devGradient : gradient;
                    introDetails.title = newTitleData;
                    return;
                }
            }
        }
    }
}
StartLoadingMessage.bsdUsersTags = [];
StartLoadingMessage.playerTrophies = new Map();
StartLoadingMessage.playerCharacterTrophies = new Map();
StartLoadingMessage.pendingTitleData = [];
StartLoadingMessage.bsdResponseReady = false;
StartLoadingMessage.bsdRequestSent = false;
StartLoadingMessage.lastBSDResponse = null;
StartLoadingMessage.lastCachedPlayers = [];
StartLoadingMessage.bsdRequestId = 0;

var PiranhaMessage_ctor = new NativeFunction(Libg.offset(6708696, 0), "void", ["pointer", "int"]);
var GoHomeMessage_vtable = Libg.offset(18850008, 0);

class GoHomeMessage extends PiranhaMessage {
    constructor(instance) {
        if (instance instanceof NativePointer) {
            super(instance);
            return;
        }
        var messageInstance = Libc.malloc(GoHomeMessage.allocationSize);
        PiranhaMessage_ctor(messageInstance, 0);
        messageInstance.writePointer(GoHomeMessage_vtable);
        super(messageInstance);
    }
}
GoHomeMessage.allocationSize = 144;

var SinglePlayerMatchRequestMessage_ctor = Libg.offset(16162264, 0);

class SinglePlayerMatchRequestMessage {
    patch() {
        return;
    }
}

var CancelMatchmakingMessage_ctor = new NativeFunction(Libg.offset(16020164, 0), "void", ["pointer"]);

class CancelMatchmakingMessage extends PiranhaMessage {
    constructor() {
        var messageInstance = Libc.malloc(CancelMatchmakingMessage.allocationSize);
        CancelMatchmakingMessage_ctor(messageInstance);
        super(messageInstance);
    }
}
CancelMatchmakingMessage.allocationSize = 144;

var MatchMakingStatusMessage_playersCountOffset = LogicMemory.offset(148);
var maxPlayersOffset = LogicMemory.offset(152);

class MatchMakingStatusMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get playerCount() {
        return this.instance.add(MatchMakingStatusMessage_playersCountOffset).readInt();
    }
    get maxPlayers() {
        return this.instance.add(maxPlayersOffset).readInt();
    }
}

var PlayAgainMessage_ctor = new NativeFunction(Libg.offset(15993968, 0), "void", ["pointer", "bool", "bool"]);

class PlayAgainMessage extends PiranhaMessage {
    constructor(instance) {
        if (instance instanceof NativePointer) {
            super(instance);
            return;
        }
        var messageInstance = Libc.malloc(PlayAgainMessage.allocationSize);
        PlayAgainMessage_ctor(messageInstance, +instance, 0);
        super(messageInstance);
    }
}
PlayAgainMessage.allocationSize = 152;

var playAgainStatusOffset = LogicMemory.offset(144);

class PlayAgainStatusMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    getPlayAgainStatus() {
        return this.instance.add(playAgainStatusOffset).readPointer().readInt();
    }
}

var PlayerStatusMessage_ctor = Libg.offset(15933976, 0);

class PlayerStatusMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    static patch() {
        return;
    }
}

var TeamMemberStatusMessage_ctor = new NativeFunction(Libg.offset(15951740, 0), "void", ["pointer", "int"]);

class TeamMemberStatusMessage extends PiranhaMessage {
    constructor(instance) {
        if (instance && typeof instance === "number") {
            var messageInstance = Libc.malloc(TeamMemberStatusMessage.allocationSize);
            TeamMemberStatusMessage_ctor(messageInstance, instance == null ? 3 : instance);
            super(messageInstance);
            return;
        }
        super(instance);
    }
    patch() {
        return;
    }
}
TeamMemberStatusMessage.allocationSize = 152;
TeamMemberStatusMessage.teamMemberStatus = -1;

var TeamChatMessage_encode = Libg.offset(15941724, 0);
var chatMessageOffset = LogicMemory.offset(144);

class TeamChatMessage {
    static patch() {
        return;
    }
}

var friendEntriesArrayOffset = LogicMemory.offset(144);

class FriendListMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get friendList() {
        return new LogicArrayList(this.instance.add(friendEntriesArrayOffset).readPointer());
    }
}

var fullEntryOffset = LogicMemory.offset(152);

class AllianceDataMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get fullEntry() {
        return new AllianceFullEntry(this.instance.add(fullEntryOffset).readPointer());
    }
}

var headerOffset = LogicMemory.offset(160);

class MyAllianceMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get header() {
        var headerPtr = this.instance.add(headerOffset).readPointer();
        if (headerPtr.isNull()) {
            return null;
        }
        return new AllianceHeaderEntry(headerPtr);
    }
}

var MapPreviewMessage_ctor = new NativeFunction(Libg.offset(16178392, 0), "void", ["pointer"]);
var locationOffset = LogicMemory.offset(144);

class MapPreviewMessage extends PiranhaMessage {
    constructor(instance) {
        if (instance instanceof NativePointer) {
            super(instance);
            return;
        }
        var messageInstance = Libc.calloc(MapPreviewMessage.allocationSize, 1);
        MapPreviewMessage_ctor(messageInstance);
        super(messageInstance);
    }
    setLocation(location) {
        return;
    }
    patch() {
        return;
    }
}
MapPreviewMessage.allocationSize = 152;

var LogicDebugCommand_ctor = new NativeFunction(Libg.offset(14307184, 0), "void", ["pointer"]);
var LogicClientAvatar_setCommodityCount_native = new NativeFunction(LogicClientAvatar_setCommodityCountOffset, "pointer", ["pointer", "uint", "pointer", "uint", "uint"]);
var LogicDebugCommand_unlockAll_native = new NativeFunction(Libg.offset(14338136, 0), "void", ["pointer", "pointer", "int", "int", "int", "uchar", "int", "pointer"]);
var HomeMode_addCommand_native = new NativeFunction(HomeMode_addCommandOffset, "int", ["pointer", "pointer"]);
var RESOURCE_NAMES = { Gold: "Gold", Dust: "Dust", Upgradium: "Upgradium", Bolts: "Bolts", HeroLvlUpMaterial: "HeroLvlUpMaterial", FirstWins: "FirstWins", LegendaryTrophies: "LegendaryTrophies", Diamonds: "Diamonds", GearScrap: "GearScrap", ClubCoins: "ClubCoins", RecruitTokens: "RecruitTokens", ChromaticTokens: "ChromaticTokens", PowerPoints: "PowerPoints", Bling: "Bling", Fame: "Fame", CollabEventCurrency: "CollabEventCurrency", StarrDrop: "StarrDrop", BrawlPassBasic: "BrawlPassBasic", CompetitivePass: "CompetitivePass" };
var RESOURCE_DATA_GAINED_TYPE = { HeroLvlUpMaterial: 1, Diamonds: 2, LegendaryTrophies: 14, RecruitTokens: 20, PowerPoints: 22, Bling: 23, CollabEventCurrency: 26 };
var COMMODITY_TYPE_RESOURCE = 0;
var COMMODITY_TYPE_HERO_LEVEL = 5;
var COMMODITY_REASON_DEBUG = 3;
var COMMODITY_TYPE_PEAK_TROPHIES = 2;
var COMMODITY_TYPE_HIGHSCORE = 17;
var MAX_HERO_LEVEL = 11;
var ADD_RESOURCES_EXTRA_COINS_BONUS = 1000;
var RESOURCE_FLOATER_Y_OFFSET = 288;
var RESOURCE_FLOATER_HIDE_FLAG = 0;
var actionIdxOffset = LogicMemory.offset(28);
var intParameterOffset = LogicMemory.offset(32);
var cachedBrawlerOffset = LogicMemory.offset(56);
var dailyDataSelectedCharactersPtrOffset = LogicMemory.offset(368);
var dailyDataSelectedCharactersLengthOffset = LogicMemory.offset(380);
var _buttonCosmeticCoinsNameStringObject = null;
var debugCommandActive = false;
var suppressOutgoingCommands = false;
var EDebugAction = {};
EDebugAction.ADD_RESOURCES = 1;
EDebugAction.ADD_GEMS = 14;
EDebugAction.ADD_SCORE = 25;
EDebugAction.ADD_BRAWL_PASS_POINTS = 81;
EDebugAction.BP_DEBUG_RESET_PROGRESS = 171;
EDebugAction.COMP_PASS_DEBUG_RESET = 287;
var LOCAL_ONLY_ACTIONS = new Set([EDebugAction.BP_DEBUG_RESET_PROGRESS, EDebugAction.COMP_PASS_DEBUG_RESET]);

function buttonCosmeticCoinsNameStringObject() {
    return _buttonCosmeticCoinsNameStringObject;
}

class LogicDebugCommand extends LogicCommand {
    constructor(actionIdx, intParameter) {
        var instance = Libc.malloc(148);
        LogicDebugCommand_ctor(instance);
        super(instance);
        instance.add(actionIdxOffset).writeInt(actionIdx);
        instance.add(intParameterOffset).writeInt(intParameter);
    }
}

class LogicDebugButtonMessage {
    static patch() {
        Interceptor.replace(LogicClientAvatar_setCommodityCountOffset, new NativeCallback(function (avatar, commodityType, key, newValue, flag) {
            if (debugCommandActive) {
                if (commodityType === COMMODITY_TYPE_PEAK_TROPHIES || commodityType === COMMODITY_TYPE_HIGHSCORE) {
                    return ptr(0);
                }
            }
            return LogicClientAvatar_setCommodityCount_native(avatar, commodityType, key, newValue, flag);
        }, "pointer", ["pointer", "uint", "pointer", "uint", "uint"]));
    }
    static destroyCommand(command) {
        var vtable = command.readPointer();
        var destructorThunk = new NativeFunction(vtable.readPointer(), "void", ["pointer"]);
        var operatorDelete = new NativeFunction(vtable.add(16).readPointer(), "void", ["pointer"]);
        destructorThunk(command);
    }
    static send(actionIdx, intParameter) {
        if (intParameter === undefined) {
            intParameter = -1;
        }
        var homeMode = LogicHomeMode.getInstance();
        if (homeMode.isNull()) {
            return;
        }
        var command = new LogicDebugCommand(actionIdx, intParameter);
        var selectedCharacter = LogicDebugButtonMessage.getSelectedCharacter();
        if (!selectedCharacter.isNull()) {
            command.instance.add(cachedBrawlerOffset).writePointer(selectedCharacter);
        }
        debugCommandActive = true;
        suppressOutgoingCommands = LOCAL_ONLY_ACTIONS.has(actionIdx);
        try {
            command.execute(homeMode);
        } finally {
            debugCommandActive = false;
            suppressOutgoingCommands = false;
        }
        if (actionIdx === EDebugAction.ADD_RESOURCES) {
            return;
        }
        if (actionIdx === EDebugAction.ADD_GEMS) {
            var resource = this.getResourcePointer("Diamonds");
            if (!resource.isNull()) {
                this.showDataGainedFloater("Diamonds", resource, intParameter);
                return;
            }
        }
        if (actionIdx === EDebugAction.ADD_SCORE) {
            return;
        }
        if (actionIdx === EDebugAction.ADD_BRAWL_PASS_POINTS) {
            this.showFloater(intParameter, 3);
            return;
        }
    }
    static unlockAllBrawlers() {
        return;
    }
    static upgradeAllBrawlers() {
        return;
    }
    static unlockAll() {
        var homeMode = LogicHomeMode.getInstance();
        if (homeMode.isNull()) {
            return;
        }
        suppressOutgoingCommands = true;
        try {
            LogicDebugCommand_unlockAll_native(NULL, homeMode, 1, 1, 1, 1, 0, NULL);
        } finally {
            suppressOutgoingCommands = false;
        }
    }
    static setLevelOnAllBrawlers(level) {
        var avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return;
        }
        var charactersTable = LogicDataTables.getTable(LogicDataTables.table.Characters);
        var characterCount = charactersTable.getItemCount();
        for (var i = 0; i < characterCount; i++) {
            var character = charactersTable.getItemAt(i);
            if (character) {
                avatar.setCommodityCount(COMMODITY_TYPE_HERO_LEVEL, character.instance, level - 1, 0);
            }
        }
    }
    static executeNativeWithFloater(actionIdx, intParameter, dataGainedType) {
        var homeMode = LogicHomeMode.getInstance();
        if (homeMode.isNull()) {
            return;
        }
        var command = new LogicDebugCommand(actionIdx, intParameter);
        var selectedCharacter = LogicDebugButtonMessage.getSelectedCharacter();
        if (!selectedCharacter.isNull()) {
            command.instance.add(cachedBrawlerOffset).writePointer(selectedCharacter);
        }
        debugCommandActive = true;
        try {
            command.execute(homeMode);
        } finally {
            debugCommandActive = false;
        }
    }
    static addResource(resourceName, amount, dataGainedTypeOverride) {
        var avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return;
        }
        var resource = this.getResourcePointer(resourceName);
        if (resource.isNull()) {
            return;
        }
        avatar.changeCommodityCount(COMMODITY_TYPE_RESOURCE, resource, amount, COMMODITY_REASON_DEBUG);
    }
    static showDataGainedFloater(resourceName, resource, amount, dataGainedTypeOverride) {
        var dataGainedType = dataGainedTypeOverride !== undefined ? dataGainedTypeOverride : RESOURCE_DATA_GAINED_TYPE[resourceName];
        if (dataGainedType === undefined) {
            return;
        }
    }
    static getResourcePointer(name) {
        if (!this.resourceDataCache) {
            this.resourceDataCache = new Map();
        }
        var cached = this.resourceDataCache.get(name);
        if (cached) {
            return cached;
        }
        var data = LogicDataTables.getTableItemByName(LogicDataTables.table.Resources, name);
        if (data == null) {
            return null;
        }
        var pointer = data.instance == null ? NULL : data.instance;
        if (!pointer.isNull()) {
            this.resourceDataCache.set(name, pointer);
        }
        return pointer;
    }
    static showFloater(amount, dataGainedType) {
        if (dataGainedType === undefined) {
            dataGainedType = NULL;
        }
        var anchorButton = HomeScreen.getHomePage().getButtonByName(buttonCosmeticCoinsNameStringObject());
        if (!anchorButton) {
            return;
        }
    }
    static getSelectedCharacter() {
        var dailyData = LogicClientHome.getPlayerData();
        if (!dailyData || dailyData.isNull()) {
            return NULL;
        }
        var length = dailyData.add(dailyDataSelectedCharactersLengthOffset).readInt();
        if (length < 1) {
            return NULL;
        }
        var arrayPtr = dailyData.add(dailyDataSelectedCharactersPtrOffset).readPointer();
        if (arrayPtr.isNull()) {
            return NULL;
        }
        return arrayPtr.readPointer();
    }
}
LogicDebugButtonMessage.resourceDataCache = null;
LogicDebugButtonMessage.EDebugAction = EDebugAction;

var stringIdOffset = LogicMemory.offset(144);

class ViewReplayByStringIdMessage {
    static readStringId(message) {
        return StringObject.read(message.add(stringIdOffset));
    }
}
ViewReplayByStringIdMessage.encodeAddress = Libg.offset(16174088, 0);

var UdpConnectionInfoMessage_decode = Libg.offset(16264832, 0);
var portOffset = LogicMemory.offset(144);
var ipOffset = LogicMemory.offset(152);
var proxyResponseTimeoutMs = 2500;

class UdpConnectionInfoMessage {
    patch() {
        return;
    }
    static requestProxy() {
        var response = null;
        var acceptingResponse = true;
        var deadline = Date.now() + proxyResponseTimeoutMs;
        try {
            BSDMessageManager.sendMessage(new GetBSDBattleProxyMessage(UdpConnectionInfoMessage.ip, UdpConnectionInfoMessage.port), function () {
                while (!response) {
                    if (Date.now() < deadline) {
                        Utils.setGameThreadSleepTo(0.01);
                    }
                }
            }, false, function (result) {
                if (acceptingResponse && Date.now() < deadline) {
                    response = result;
                }
            }).catch(function () {
                Logcat.logDebug("Battle proxy request failed; using the game server");
            });
        } finally {
            acceptingResponse = false;
        }
        return response;
    }
    static applyProxyResponse(message, response) {
        if (response.statusCode !== 200 || !response.json) {
            return;
        }
        var parsedResponseData = response.json;
        var chaCha20 = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
        var decryptedResponse = CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
        var endpoint = JSON.parse(decryptedResponse).data;
        if (!endpoint || typeof endpoint.ip !== "string" || !endpoint.ip.length || !Number.isInteger(endpoint.port) || endpoint.port < 1 || endpoint.port > 65535) {
            return;
        }
        var ipString = message.add(ipOffset).readPointer();
        if (ipString.isNull()) {
            return;
        }
        StringObject.assign(ipString, endpoint.ip);
        message.add(portOffset).writeInt(endpoint.port);
        UdpConnectionInfoMessage.ip = endpoint.ip;
        UdpConnectionInfoMessage.port = endpoint.port;
    }
}
UdpConnectionInfoMessage.ip = "";
UdpConnectionInfoMessage.port = -1;

var AnalyticEvent_setString = Libg.offset(15971784, 0);

class AnalyticEvent {
    static patch() {
        return;
    }
}

var DeliveryUnit_ctor = new NativeFunction(Libg.offset(14461060, 0), "void", ["pointer", "int"]);
var arrayOffset = LogicMemory.offset(16);
var capacityOffset = LogicMemory.offset(24);
var itemsCountOffset = LogicMemory.offset(28);

class DeliveryUnit {
    constructor(unitType) {
        this.instance = Libc.malloc(DeliveryUnit.allocationSize);
        DeliveryUnit_ctor(this.instance, unitType);
        this.array = new LogicArrayList();
    }
    addDrop(drop) {
        this.array.addElement(drop.instance);
        this.instance.add(arrayOffset).writePointer(this.array.getArray());
        this.instance.add(capacityOffset).writeInt(this.array.getCapacity());
        this.instance.add(itemsCountOffset).writeInt(this.array.getItemsCount());
        return this;
    }
}
DeliveryUnit.allocationSize = 32;

var battleUUIdHighOffset = LogicMemory.offset(144);
var battleUUIdLowOffset = LogicMemory.offset(152);
var typeOffset = LogicMemory.offset(160);
var resultOffset = LogicMemory.offset(164);
var winstreakOffset = LogicMemory.offset(240);
var state264Offset = LogicMemory.offset(264);
var trainingBattleOffset = LogicMemory.offset(266);
var battleEndPlayersArrayOffset = LogicMemory.offset(280);
var battleEndGameModeVariationOffset = LogicMemory.offset(360);
var practiceMatchOffset = LogicMemory.offset(384);

class BattleEndMessage extends PiranhaMessage {
    constructor(instance) {
        super(instance);
    }
    get battleUUIdHigh() {
        return BigInt(this.instance.add(battleUUIdHighOffset).readU64().toString());
    }
    get battleUUIdLow() {
        return BigInt(this.instance.add(battleUUIdLowOffset).readU64().toString());
    }
    get battleUUId() {
        var hi = this.battleUUIdHigh;
        var lo = this.battleUUIdLow;
        var uuid = hi << 128n | lo;
        var hex = uuid.toString(16).padStart(32, "0");
        return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join("-");
    }
    get type() {
        return this.instance.add(typeOffset).readInt();
    }
    get result() {
        return this.instance.add(resultOffset).readInt();
    }
    get gameModeVariation() {
        return this.instance.add(battleEndGameModeVariationOffset).readInt();
    }
    get winstreak() {
        return this.instance.add(winstreakOffset).readInt();
    }
    get state264() {
        return !!this.instance.add(state264Offset).readU8();
    }
    get trainingBattle() {
        return !!this.instance.add(trainingBattleOffset).readU8();
    }
    get playersArray() {
        var array = this.instance.add(battleEndPlayersArrayOffset).readPointer();
        if (array.isNull()) {
            return null;
        }
        return new LogicArrayList(this.instance.add(battleEndPlayersArrayOffset).readPointer());
    }
    getPlayer(index) {
        var playersArray = this.playersArray;
        if (!playersArray || index < 0 || index > playersArray.getItemsCount()) {
            return null;
        }
        var element = playersArray.getElement(index);
        if (element.isNull()) {
            return null;
        }
        return new PlayerEntry(element);
    }
}
BattleEndMessage.result = null;

var TeamBotSlotDisableMessage_ctor = new NativeFunction(Libg.offset(15940384, 0), "void", ["pointer"]);
var SLOT_INDEX_OFFSET = 144;
var DISABLE_FLAG_OFFSET = 148;

class TeamBotSlotDisableMessage extends PiranhaMessage {
    constructor(slotIndex, disable) {
        if (disable === undefined) {
            disable = true;
        }
        var messageInstance = Libc.malloc(TeamBotSlotDisableMessage.allocationSize);
        TeamBotSlotDisableMessage_ctor(messageInstance);
        messageInstance.add(SLOT_INDEX_OFFSET).writeS32(slotIndex);
        if (disable) {
        }
        super(messageInstance);
    }
}
TeamBotSlotDisableMessage.allocationSize = 152;

var DebugBillingRequestMessage_ctor = new NativeFunction(Libg.offset(0, 0), "void", ["pointer"]);

class DebugBillingRequestMessage extends PiranhaMessage {
    constructor() {
        var messageInstance = Libc.malloc(DebugBillingRequestMessage.allocationSize);
        DebugBillingRequestMessage_ctor(messageInstance);
        super(messageInstance);
    }
    set tid(tid) {
        return;
    }
    set prodId(prodId) {
        return;
    }
    set currencyCode(currencyCode) {
        return;
    }
    set price(price) {
        return;
    }
    set receiptData(data) {
        var lenPtr = this.instance.add(216);
        var bufPtr = this.instance.add(208);
        var receiptBuffer = Libc.malloc(data.length);
        var buffer = new ArrayBuffer(data.length);
        var view = new Uint8Array(buffer);
        receiptBuffer.writeByteArray(buffer);
        bufPtr.writePointer(receiptBuffer);
    }
}
DebugBillingRequestMessage.allocationSize = 224;
