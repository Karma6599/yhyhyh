// =============================================================
// PLAYERS & TEAMS
// merged webpack modules: 6013 LogicPlayer, 5292 LogicPlayerMap, 6288 LogicPlayerMapUtil, 6006 LogicAvatarHelper, 6153 LogicClientAvatar, 6385 LogicClientHome, 7487 LogicPlayerBattleIntroDetails, 4330 Player, 9518 PlayerInfo, 3293 PlayerProfile, 5522 PlayerMapManager, 3644 TeamManager, 5200 AllianceManager
// =============================================================

// --------------------- MODULE 6013 — LogicPlayer ---------------------

// ============================================================ //
// webpack module 6013  —  LogicPlayer
// exports: LogicPlayer, logicPlayerBattleIntroDetails
// deps: 1588 (LogicMemory), 2743 (LogicLong), 3380 (Logcat), 4009 (Config), 4330 (Player), 4541 (HashTagCodeGenerator), 5151 (LogicHeroSetup), 6139 (LogicDataTables), 7487 (LogicPlayerBattleIntroDetails), 7669 (SkinSelector), 9250 (StringTable), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6013] = function LogicPlayer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, StringTable, LogicMemory, LogicHeroSetup, LogicPlayerBattleIntroDetails, SkinSelector, PlayerInfo, LogicLong, Player, LogicDataTables, Logcat, HashTagCodeGenerator, LogicPlayer_decode, playerIdOffset, playerIndexOffset, heroSetupOffset, playersCountOffset, LogicPlayer, <class_fields_init>, LogicPlayer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.logicPlayerBattleIntroDetails = undefined;
        undefined.LogicPlayer = exports;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        StringTable = __webpack_require__(9250);
        LogicMemory = __webpack_require__(1588);
        LogicHeroSetup = __webpack_require__(5151);
        LogicPlayerBattleIntroDetails = __webpack_require__(7487);
        SkinSelector = __webpack_require__(7669);
        PlayerInfo = __webpack_require__(9518);
        LogicLong = __webpack_require__(2743);
        Player = __webpack_require__(4330);
        LogicDataTables = __webpack_require__(6139);
        Logcat = __webpack_require__(3380);
        HashTagCodeGenerator = __webpack_require__(4541);
        LogicPlayer_decode = new NativeFunction(((Libg).Libg).offset(16412296, 0), "void", ["pointer", "pointer"]);
        playerIdOffset = ((LogicMemory).LogicMemory).offset(64);
        playerIndexOffset = ((LogicMemory).LogicMemory).offset(72);
        heroSetupOffset = ((LogicMemory).LogicMemory).offset(112);
        playersCountOffset = ((LogicMemory).LogicMemory).offset(124);
        exports.logicPlayerBattleIntroDetails = ((LogicMemory).LogicMemory).offset(624);
        static decode (byteStream) {
        return;
};
        static getPlayersCount () {
        return (((this).instance).add(playersCountOffset)).readU32();
};
        static getLogicPlayerBattleIntroDetails () {
        return new (LogicPlayerBattleIntroDetails).LogicPlayerBattleIntroDetails((((this).instance).add((exports).logicPlayerBattleIntroDetails)).readPointer());
};
        static getLogicHeroSetup () {
        return new (LogicHeroSetup).LogicHeroSetup((((this).instance).add(heroSetupOffset)).readPointer());
};
        static get playerId () {
        if (((this).instance).isNull()) {
            return null;
        } /* if 0x62bd0 */
        return new (LogicLong).LogicLong(((this).instance).add(playerIdOffset));
};
        static getPlayerIndex () {
        return (((this).instance).add(playerIndexOffset)).readU32();
};
        static buildBattleName (playerName) {
    var relationshipEmojis, playerName, relationshipEmojis, emojis, emotes, characterName, character;
        character = this;
        relationshipEmojis = playerName;
        if (((relationshipEmojis) === undefined)) {
            playerName = relationshipEmojis = "";
        } /* if 0x62caf */
        relationshipEmojis = "";
        if ((((Config).Config).config).ShamePlayersWithThumbsdownPin) {
            if (((((character).getLogicHeroSetup()).getLogicBattleEmotes()) == null)) {
                ((character).getLogicHeroSetup()).getLogicBattleEmotes();
            } /* if 0x62ce9 */
            /* jump -> 0x62cf1 */
            emojis = (undefined).getEmotes();
            if (((emojis) == null)) {
            } /* if 0x62cfd */
            /* jump -> 0x62d07 */
            if ((undefined).some(function (emote) {
        return ((LogicPlayer).negativeEmotes).includes((emote).getName());
})) {
                relationshipEmojis = (relationshipEmojis + "🤡");
            } /* if 0x62d17 */
        } /* if 0x62d17 */
        relationshipEmojis = (relationshipEmojis + relationshipEmojis);
        emotes = "";
        if ((((Config).Config).config).ShowCharactersInNames) {
            characterName = ((character).getLogicHeroSetup()).getLogicCharacterData();
            if (characterName) {
                emotes = ("(").concat(((StringTable).StringTable).getString((characterName).getTID()), ")");
            } /* if 0x62d86 */
        } /* if 0x62d86 */
        if (relationshipEmojis) {
        } /* if 0x62da2 */
        /* jump -> 0x62da3 */
        return ((["", playerName, emotes]).filter(Boolean)).join(" ");
};
        <class_fields_init> = undefined;
        LogicPlayer;
        class LogicPlayer {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x62a9b */
        this.instance = instance;
        return;
}
            decode (logicPlayer, byteSteam) {
        return;
}
            logNativePlayerName (player, name) {
    var playerId;
        if (!(!((Config).Config).useDebugLogging)) {
            if (((((Config).Config).config).ShowBSDApiResponse !== true)) {
                return;
                /* CATCH -> 0x62eca (try region) */
            } /* if 0x62e59 */
        } /* if 0x62e56 */
        playerId = (player).playerId;
        if ((!playerId)) {
            return undefined;
        } /* if 0x62e71 */
        ((Logcat).Logcat).logDebug(("[BSD names] ").concat((JSON).stringify({ stage: "native-decoded", tag: ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag(playerId), name: name })));
        playerId = <underflow>;
        return;
        /* CATCH -> 0x62ed2 (try region) */
        return;
        throw <underflow>;
}
            patch () {
        return;
}
        }
        LogicPlayer = LogicLong = LogicPlayer;
        exports.LogicPlayer = LogicPlayer;
        LogicPlayer.THUMBDOWN_EMOTE = "emoji_thumbsdown";
        LogicPlayer.FIND_EMOTE_FUNC = function (e) {
        return ((e).getName() === (LogicPlayer).THUMBDOWN_EMOTE);
};
        LogicPlayer.negativeEmotes = ["emoji_thumbsdown", "emoji_champie_thumbsdown", "emoji_clown", "emoji_stop"];
        return;
};

// --------------------- MODULE 5292 — LogicPlayerMap ---------------------

// ============================================================ //
// webpack module 5292  —  LogicPlayerMap
// exports: LogicPlayerMap
// deps: 1588 (LogicMemory), 1978 (Libc), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5292] = function LogicPlayerMap_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicMemory, StringObject, LogicPlayerMap_save, nameOffset, gameModeVariationOffset, environmentOffset, LogicPlayerMap, <class_fields_init>, LogicPlayerMap;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicPlayerMap = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        LogicPlayerMap_save = new NativeFunction(((Libg).Libg).offset(15839788, 0), "void", ["pointer", "pointer", "pointer"]);
        nameOffset = ((LogicMemory).LogicMemory).offset(8);
        gameModeVariationOffset = ((LogicMemory).LogicMemory).offset(16);
        environmentOffset = ((LogicMemory).LogicMemory).offset(24);
        static setName (name) {
        return;
};
        static setGameModeVariation (variationId) {
        return;
};
        static setEnvironment (environment) {
        return;
};
        static save (tilemap, logicEditor) {
        return;
};
        <class_fields_init> = undefined;
        LogicPlayerMap;
        class LogicPlayerMap {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x6f967 */
        if (instance) {
            this.instance = instance;
            return;
        } /* if 0x6f973 */
        this.instance = ((Libc).Libc).calloc((LogicPlayerMap).allocationSize, 1);
        return;
}
        }
        LogicPlayerMap = LogicPlayerMap = LogicPlayerMap;
        exports.LogicPlayerMap = LogicPlayerMap;
        LogicPlayerMap.allocationSize = 104;
        return;
};

// --------------------- MODULE 6288 — LogicPlayerMapUtil ---------------------

// ============================================================ //
// webpack module 6288  —  LogicPlayerMapUtil
// exports: LogicPlayerMapUtil
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[6288] = function LogicPlayerMapUtil_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicPlayerMapUtil_isValidPlayerMap, LogicPlayerMapUtil_isInsideRestrictedArea, alwaysValidCallback, alwaysAllowedAreaCallback, LogicPlayerMapUtil, <class_fields_init>, LogicPlayerMapUtil;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicPlayerMapUtil = undefined;
        Libg = __webpack_require__(9878);
        LogicPlayerMapUtil_isValidPlayerMap = ((Libg).Libg).offset(15844596, 0);
        LogicPlayerMapUtil_isInsideRestrictedArea = ((Libg).Libg).offset(15853640, 0);
        alwaysValidCallback = new NativeCallback(function () {
        return 0;
}, "int", ["pointer", "pointer", "int", "int"]);
        alwaysAllowedAreaCallback = new NativeCallback(function () {
        return 0;
}, "int", ["pointer", "int", "int", "int", "int", "uint"]);
        <class_fields_init> = undefined;
        LogicPlayerMapUtil;
        class LogicPlayerMapUtil {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x6fd7f (open) */
}
            setValidationBypassed (enabled) {
        if ((enabled === (LogicPlayerMapUtil).validationBypassed)) {
            return;
        } /* if 0x6fc75 */
        LogicPlayerMapUtil.validationBypassed = enabled;
        if (enabled) {
            (Interceptor).replace(LogicPlayerMapUtil_isValidPlayerMap, alwaysValidCallback);
            return;
        } /* if 0x6fc96 */
        (Interceptor).revert(LogicPlayerMapUtil_isValidPlayerMap);
        return;
}
            isValidationBypassed () {
        return (LogicPlayerMapUtil).validationBypassed;
}
            setRestrictedAreaBypassed (enabled) {
        if ((enabled === (LogicPlayerMapUtil).restrictedAreaBypassed)) {
            return;
        } /* if 0x6fcfe */
        LogicPlayerMapUtil.restrictedAreaBypassed = enabled;
        if (enabled) {
            (Interceptor).replace(LogicPlayerMapUtil_isInsideRestrictedArea, alwaysAllowedAreaCallback);
            return;
        } /* if 0x6fd1f */
        (Interceptor).revert(LogicPlayerMapUtil_isInsideRestrictedArea);
        return;
}
            isRestrictedAreaBypassed () {
        return (LogicPlayerMapUtil).restrictedAreaBypassed;
}
        }
        LogicPlayerMapUtil = v8 = LogicPlayerMapUtil;
        exports.LogicPlayerMapUtil = LogicPlayerMapUtil;
        LogicPlayerMapUtil.validationBypassed = false;
        LogicPlayerMapUtil.restrictedAreaBypassed = false;
        return;
};

// --------------------- MODULE 6006 — LogicAvatarHelper ---------------------

// ============================================================ //
// webpack module 6006  —  LogicAvatarHelper
// exports: LogicAvatarHelper
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[6006] = function LogicAvatarHelper_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicAvatarHelper_levelUpHeroToTargetLevel, LogicAvatarHelper, <class_fields_init>, LogicAvatarHelper;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicAvatarHelper = undefined;
        Libg = __webpack_require__(9878);
        LogicAvatarHelper_levelUpHeroToTargetLevel = new NativeFunction(((Libg).Libg).offset(14205384, 0), "void", ["pointer", "pointer", "int", "int"]);
        <class_fields_init> = undefined;
        LogicAvatarHelper;
        class LogicAvatarHelper {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5fe6b (open) */
}
            levelUpHeroToTargetLevel (home, character, targetLevel) {
    var reason, home, character, targetLevel, reason;
        reason = home;
        home = character;
        character = targetLevel;
        if (((reason) === undefined)) {
            targetLevel = reason = 0;
        } /* if 0x5fe11 */
        if (!(home).isNull()) {
            (home).isNull();
            if (((character).instance).isNull()) {
                return;
            } /* if 0x5fe30 */
        } /* if 0x5fe2d */
        return;
}
        }
        LogicAvatarHelper = LogicAvatarHelper = LogicAvatarHelper;
        exports.LogicAvatarHelper = LogicAvatarHelper;
        return;
};

// --------------------- MODULE 6153 — LogicClientAvatar ---------------------

// ============================================================ //
// webpack module 6153  —  LogicClientAvatar
// exports: LogicClientAvatar, LogicClientAvatar_setCommodityCountOffset
// deps: 1588 (LogicMemory), 4272 (EDebugger), 6139 (LogicDataTables), 9366 (LogicDataSlot), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6153] = function LogicClientAvatar_factory(__unused_webpack_module, exports, __webpack_require__) {
    var EDebugger, LogicDataSlot, LogicMemory, LogicDataTables, Libg, LogicClientAvatar_getHeroSeenState_native, LogicClientAvatar_hasHero, LogicClientAvatar_setItem, LogicClientAvatar_unlockHero, LogicClientAvatar_setCommodityCount, LogicClientAvatar_changeCommodityCount, LogicClientAvatar_getCommodityCount, lengthOffset, heroLvlUpMaterialArrayListOffset, scoreArrayListOffset, powerArrayListOffset, tutorialsCompletedCountOffset, diamondsOffset, LogicClientAvatar, <class_fields_init>, LogicClientAvatar;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicClientAvatar_setCommodityCountOffset = undefined;
        undefined.LogicClientAvatar = exports;
        EDebugger = __webpack_require__(4272);
        LogicDataSlot = __webpack_require__(9366);
        LogicMemory = __webpack_require__(1588);
        LogicDataTables = __webpack_require__(6139);
        Libg = __webpack_require__(9878);
        LogicClientAvatar_getHeroSeenState_native = new NativeFunction(((Libg).Libg).offset(14223088, 0), "int", ["pointer", "pointer"]);
        LogicClientAvatar_hasHero = new NativeFunction(((Libg).Libg).offset(14217428, 0), "bool", ["pointer", "pointer"]);
        LogicClientAvatar_setItem = new NativeFunction(((Libg).Libg).offset(14215372, 0), "void", ["pointer", "pointer"]);
        LogicClientAvatar_unlockHero = new NativeFunction(((Libg).Libg).offset(14212336, 0), "void", ["pointer", "pointer", "int"]);
        exports.LogicClientAvatar_setCommodityCountOffset = ((Libg).Libg).offset(14211840, 0);
        LogicClientAvatar_setCommodityCount = new NativeFunction((exports).LogicClientAvatar_setCommodityCountOffset, "void", ["pointer", "uint", "pointer", "uint", "uint"]);
        LogicClientAvatar_changeCommodityCount = new NativeFunction(((Libg).Libg).offset(14213252, 0), "pointer", ["pointer", "uint", "pointer", "int", "uint", "uchar", "pointer", "pointer", "int", "int"]);
        LogicClientAvatar_getCommodityCount = new NativeFunction(((Libg).Libg).offset(14214500, 0), "int", ["pointer", "int", "pointer"]);
        lengthOffset = ((LogicMemory).LogicMemory).offset(12);
        heroLvlUpMaterialArrayListOffset = ((LogicMemory).LogicMemory).offset(72);
        scoreArrayListOffset = ((LogicMemory).LogicMemory).offset(80);
        powerArrayListOffset = ((LogicMemory).LogicMemory).offset(104);
        tutorialsCompletedCountOffset = ((LogicMemory).LogicMemory).offset(368);
        diamondsOffset = ((LogicMemory).LogicMemory).offset(640, 764);
        static getDataIndex (commodityArrayList, data) {
    var arrayLength, index, dataSlot;
        arrayLength = ((commodityArrayList).add(lengthOffset)).readInt();
        if ((arrayLength < 1)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "CommodityArrayList length is empty!");
            return -1;
        } /* if 0x6037a */
        index = 0;
        while ((index < arrayLength)) {
            dataSlot = new (LogicDataSlot).LogicDataSlot((((commodityArrayList).readPointer()).add((index * (Process).pointerSize))).readPointer());
            if (((dataSlot).getData()).equals(data)) {
                return index;
            } /* if 0x603d9 */
            index = ((index) + 1);
            (index++);
        } /* while 0x603e3 */
        return -1;
};
        static getCommodityCount (commodityIndex, data) {
        return LogicClientAvatar_getCommodityCount((this).instance, commodityIndex, (data).instance);
};
        static getHeroScore (character) {
    var commodityArrayList, dataIndex;
        commodityArrayList = (((this).instance).add(scoreArrayListOffset)).readPointer();
        dataIndex = (this).getDataIndex(commodityArrayList, character);
        if ((dataIndex === -1)) {
            return 0;
        } /* if 0x6048d */
        return ((((commodityArrayList).readPointer()).add((dataIndex * (Process).pointerSize))).readPointer()).readInt();
};
        static getHeroPower (character) {
    var powerArrayList, dataIndex;
        powerArrayList = (((this).instance).add(powerArrayListOffset)).readPointer();
        dataIndex = (this).getDataIndex(powerArrayList, character);
        if ((dataIndex === -1)) {
            return 0;
        } /* if 0x60525 */
        return ((((powerArrayList).readPointer()).add((dataIndex * (Process).pointerSize))).readPointer()).readInt();
};
        static getHeroLvlUpMaterial (character) {
    var heroLvlUpMaterialData, heroLvlUpMaterialArrayList, dataIndex;
        heroLvlUpMaterialData = ((LogicDataTables).LogicDataTables).getLvlUpMaterialData();
        heroLvlUpMaterialArrayList = ((this).instance).add(heroLvlUpMaterialArrayListOffset);
        dataIndex = (this).getDataIndex(heroLvlUpMaterialArrayList, heroLvlUpMaterialData);
        if ((dataIndex === -1)) {
            return 0;
        } /* if 0x605d4 */
        return ((((heroLvlUpMaterialArrayList).readPointer()).add((dataIndex * (Process).pointerSize))).readPointer()).readInt();
};
        static get tutorialsCompletedCountOffset () {
        return (((this).instance).add(tutorialsCompletedCountOffset)).readInt();
};
        static hasHero (character) {
        if (!((this).instance).isNull()) {
            ((this).instance).isNull();
            if (((character).instance).isNull()) {
                return false;
            } /* if 0x60685 */
        } /* if 0x60681 */
        return (!(!LogicClientAvatar_hasHero((this).instance, (character).instance)));
};
        static getHeroSeenState (character) {
        if (((this).instance).isNull()) {
            return 0;
        } /* if 0x606cd */
        return LogicClientAvatar_getHeroSeenState_native((this).instance, (character).instance);
};
        static setItem (card) {
        if (!((this).instance).isNull()) {
            ((this).instance).isNull();
            if (((card).instance).isNull()) {
                return;
            } /* if 0x60725 */
        } /* if 0x60722 */
        return;
};
        static unlockHero (unlockCard) {
    var reason, unlockCard, reason;
        reason = this;
        reason = unlockCard;
        if (((reason) === undefined)) {
            unlockCard = reason = 3;
        } /* if 0x6077d */
        if (!((reason).instance).isNull()) {
            ((reason).instance).isNull();
            if ((unlockCard).isNull()) {
                return;
            } /* if 0x6079c */
        } /* if 0x60799 */
        return;
};
        static setDiamonds (value) {
        if (((this).instance).isNull()) {
            return;
        } /* if 0x607de */
        return;
};
        static setCommodityCount (type, data, count, extra) {
        if (!((this).instance).isNull()) {
            ((this).instance).isNull();
            if ((data).isNull()) {
                return;
            } /* if 0x6084a */
        } /* if 0x60847 */
        return;
};
        static changeCommodityCount (type, data, delta, reason) {
    var applyFlag, type, data, delta, reason, applyFlag;
        applyFlag = this;
        applyFlag = type;
        type = data;
        data = delta;
        delta = reason;
        if (((applyFlag) === undefined)) {
            reason = applyFlag = 1;
        } /* if 0x608d4 */
        if (!((applyFlag).instance).isNull()) {
            ((applyFlag).instance).isNull();
            if ((data).isNull()) {
                return;
            } /* if 0x608f5 */
        } /* if 0x608f2 */
        return;
};
        <class_fields_init> = undefined;
        LogicClientAvatar;
        class LogicClientAvatar {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x602f4 */
        this.instance = instance;
        return;
}
        }
        LogicClientAvatar = LogicClientAvatar_unlockHero = LogicClientAvatar;
        exports.LogicClientAvatar = LogicClientAvatar;
        LogicClientAvatar.maxHeroPowerPoints = 3740;
        LogicClientAvatar.commodityType = { Resource: 0, PeakTrophies: 2, HeroLevel: 5, HeroSeenState: 7, Highscore: 17, AvatarPassiveRecruit: 31, AvatarPassive: 33 };
        return;
};

// --------------------- MODULE 6385 — LogicClientHome ---------------------

// ============================================================ //
// webpack module 6385  —  LogicClientHome
// exports: LogicClientHome
// deps: 1588 (LogicMemory), 4801 (LogicHomeMode), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6385] = function LogicClientHome_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicHomeMode, Libg, LogicClientHome_isEventSlotLocked, playerDataOffset, LogicClientHome, <class_fields_init>, LogicClientHome;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicClientHome = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicHomeMode = __webpack_require__(4801);
        Libg = __webpack_require__(9878);
        LogicClientHome_isEventSlotLocked = new NativeFunction(((Libg).Libg).offset(15819872, 0), "bool", ["int"]);
        playerDataOffset = ((LogicMemory).LogicMemory).offset(24, 24);
        <class_fields_init> = undefined;
        LogicClientHome;
        class LogicClientHome {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x6effa (open) */
}
            patch () {
        return;
}
            getPlayerData () {
    var home;
        home = ((LogicHomeMode).LogicHomeMode).getHome();
        if ((home).isNull()) {
            return null;
        } /* if 0x6efb9 */
        return ((home).add(playerDataOffset)).readPointer();
}
        }
        LogicClientHome = v8 = LogicClientHome;
        exports.LogicClientHome = LogicClientHome;
        return;
};

// --------------------- MODULE 7487 — LogicPlayerBattleIntroDetails ---------------------

// ============================================================ //
// webpack module 7487  —  LogicPlayerBattleIntroDetails
// exports: LogicPlayerBattleIntroDetails, playerTitleOffset
// deps: 1588 (LogicMemory), 4629 (LogicPlayerTitleData), 7535 (StringObject), 9778 (PlayerDisplayData)
// ============================================================ //

__webpack_modules__[7487] = function LogicPlayerBattleIntroDetails_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, StringObject, PlayerDisplayData, LogicPlayerTitleData, LogicPlayerBattleIntroDetails, <class_fields_init>, LogicPlayerBattleIntroDetails;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.playerTitleOffset = undefined;
        undefined.LogicPlayerBattleIntroDetails = exports;
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        PlayerDisplayData = __webpack_require__(9778);
        LogicPlayerTitleData = __webpack_require__(4629);
        exports.playerTitleOffset = ((LogicMemory).LogicMemory).offset(40);
        static get displayData () {
        return new (PlayerDisplayData).PlayerDisplayData(((this).instance).readPointer());
};
        static get title () {
    var titlePtr;
        titlePtr = (((this).instance).add((exports).playerTitleOffset)).readPointer();
        if ((titlePtr).isNull()) {
            return null;
        } /* if 0x634cd */
        return new (LogicPlayerTitleData).LogicPlayerTitleData(titlePtr);
};
        static set title (title) {
    var instance;
        if ((!title)) {
            return;
        } /* if 0x63533 */
        if ((title instanceof (LogicPlayerTitleData).LogicPlayerTitleData)) {
        } /* if 0x63547 */
        /* jump -> 0x63548 */
        instance = title;
        return;
};
        static getPlayerName () {
        return ((StringObject).StringObject).read(((this).instance).readPointer());
};
        static setPlayerName (name) {
        return;
};
        <class_fields_init> = undefined;
        LogicPlayerBattleIntroDetails;
        class LogicPlayerBattleIntroDetails {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x63438 */
        this.instance = instance;
        return;
}
        }
        LogicPlayerBattleIntroDetails = v8 = LogicPlayerBattleIntroDetails;
        exports.LogicPlayerBattleIntroDetails = LogicPlayerBattleIntroDetails;
        return;
};

// --------------------- MODULE 4330 — Player ---------------------

// ============================================================ //
// webpack module 4330  —  Player
// exports: Player
// ============================================================ //

__webpack_modules__[4330] = function Player_factory(__unused_webpack_module, exports) {
    var Player, <class_fields_init>, Player;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Player = undefined;
        <class_fields_init> = undefined;
        Player;
        class Player {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3ab1b (open) */
}
        }
        Player = Player = Player;
        exports.Player = Player;
        Player.ownIndex = -1;
        Player.playingWith = [];
        Player.tag = "";
        return;
};

// --------------------- MODULE 9518 — PlayerInfo ---------------------

// ============================================================ //
// webpack module 9518  —  PlayerInfo
// exports: PlayerInfo
// deps: 1588 (LogicMemory), 1978 (Libc), 4541 (HashTagCodeGenerator), 4934 (GUI), 6046 (Application), 7265 (Localisation), 9407 (DropGUIContainer), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9518] = function PlayerInfo_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, DropGUIContainer, GUI, Localisation, Application, Libc, LogicMemory, HashTagCodeGenerator, PlayerInfo_ctor, PlayerInfo_refreshPlayerHeader, dropGUIContainerOffset, clipOffset, fieldOffset, PlayerInfo, <class_fields_init>, PlayerInfo;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerInfo = undefined;
        Libg = __webpack_require__(9878);
        DropGUIContainer = __webpack_require__(9407);
        GUI = __webpack_require__(4934);
        Localisation = __webpack_require__(7265);
        Application = __webpack_require__(6046);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        HashTagCodeGenerator = __webpack_require__(4541);
        PlayerInfo_ctor = new NativeFunction(((Libg).Libg).offset(9055432, 0), "void", ["pointer", "pointer", "int", "pointer", "int", "pointer"]);
        PlayerInfo_refreshPlayerHeader = new NativeFunction(((Libg).Libg).offset(9072368, 0), "void", ["pointer"]);
        dropGUIContainerOffset = ((LogicMemory).LogicMemory).offset(144);
        clipOffset = ((LogicMemory).LogicMemory).offset(328);
        fieldOffset = ((LogicMemory).LogicMemory).offset(128);
        <class_fields_init> = undefined;
        PlayerInfo;
        class PlayerInfo {
            constructor (logicLong) {
        if (<class_fields_init>) {
        } /* if 0x3b38f */
        this.instance = ((Libc).Libc).malloc((PlayerInfo).allocationSize);
        return;
}
            patch () {
        return;
}
        }
        PlayerInfo = PlayerInfo_ctor = PlayerInfo;
        exports.PlayerInfo = PlayerInfo;
        PlayerInfo.allocationSize = 624;
        PlayerInfo.isInGameroom = false;
        PlayerInfo.ownThumbdownEmoteIndex = -1;
        return;
};

// --------------------- MODULE 3293 — PlayerProfile ---------------------

// ============================================================ //
// webpack module 3293  —  PlayerProfile
// exports: PlayerProfile
// deps: 1588 (LogicMemory), 2053 (ProfileSkinNames), 2743 (LogicLong), 3555 (LogicSkinData), 4541 (HashTagCodeGenerator), 7146 (CustomMarks), 7171 (LogicCharacterData), 9778 (PlayerDisplayData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3293] = function PlayerProfile_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, HashTagCodeGenerator, LogicMemory, PlayerDisplayData, LogicLong, CustomMarks, LogicCharacterData, LogicSkinData, ProfileSkinNames, PlayerProfile_decode, displayDataOffset, playerTitleOffset, brawlerVectorOffset, brawlerVectorCountOffset, brawlerEntryCharacterOffset, brawlerEntrySkinOffset, brawlerEntryTrophiesOffset, PlayerProfile, <class_fields_init>, PlayerProfile;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerProfile = undefined;
        Libg = __webpack_require__(9878);
        HashTagCodeGenerator = __webpack_require__(4541);
        LogicMemory = __webpack_require__(1588);
        PlayerDisplayData = __webpack_require__(9778);
        LogicLong = __webpack_require__(2743);
        CustomMarks = __webpack_require__(7146);
        LogicCharacterData = __webpack_require__(7171);
        LogicSkinData = __webpack_require__(3555);
        ProfileSkinNames = __webpack_require__(2053);
        PlayerProfile_decode = new NativeFunction(((Libg).Libg).offset(16142680, 0), "void", ["pointer", "pointer"]);
        displayDataOffset = ((LogicMemory).LogicMemory).offset(48);
        playerTitleOffset = ((LogicMemory).LogicMemory).offset(120);
        brawlerVectorOffset = ((LogicMemory).LogicMemory).offset(24);
        brawlerVectorCountOffset = 12;
        brawlerEntryCharacterOffset = 0;
        brawlerEntrySkinOffset = 8;
        brawlerEntryTrophiesOffset = 36;
        static get accountId () {
        return new (LogicLong).LogicLong((this)._instance);
};
        static get displayData () {
    var displayData;
        displayData = (((this)._instance).add(displayDataOffset)).readPointer();
        if ((displayData).isNull()) {
            return;
        } /* if 0x3b7fb */
        return new (PlayerDisplayData).PlayerDisplayData(displayData);
};
        static get title () {
        return (((this)._instance).add(playerTitleOffset)).readPointer();
};
        static getBrawlerEntries () {
    var result, vectorPointer, dataPointer, brawlerCount, i, entryPointer, characterPointer, skinPointer;
        result = [];
        vectorPointer = (((this)._instance).add(brawlerVectorOffset)).readPointer();
        if ((vectorPointer).isNull()) {
            return result;
        } /* if 0x3b8dd */
        dataPointer = (vectorPointer).readPointer();
        brawlerCount = ((vectorPointer).add(brawlerVectorCountOffset)).readU32();
        if ((dataPointer).isNull()) {
            return result;
        } /* if 0x3b911 */
        i = 0;
        while ((i < brawlerCount)) {
            entryPointer = ((dataPointer).add((i * (Process).pointerSize))).readPointer();
            if (!(entryPointer).isNull()) {
                characterPointer = ((entryPointer).add(brawlerEntryCharacterOffset)).readPointer();
                if (!(characterPointer).isNull()) {
                    skinPointer = ((entryPointer).add(brawlerEntrySkinOffset)).readPointer();
                    if ((skinPointer).isNull()) {
                    } /* if 0x3b9c9 */
                    /* jump -> 0x3b9d8 */
                    null.skin = new (LogicSkinData).LogicSkinData(skinPointer);
                    null.trophies = ((entryPointer).add(brawlerEntryTrophiesOffset)).readInt();
                    { character: new (LogicCharacterData).LogicCharacterData(characterPointer) }(null);
                } /* if 0x3b9fc */
            } /* if 0x3b9ff */
            i = ((i) + 1);
            (i++);
            return result;
        } /* while 0x3ba0a (open) */
};
        <class_fields_init> = undefined;
        PlayerProfile;
        class PlayerProfile {
            constructor (_instance) {
        if (<class_fields_init>) {
        } /* if 0x3b772 */
        this._instance = _instance;
        return;
}
            patch () {
        return;
}
        }
        PlayerProfile = ProfileSkinNames = PlayerProfile;
        exports.PlayerProfile = PlayerProfile;
        return;
};

// --------------------- MODULE 5522 — PlayerMapManager ---------------------

// ============================================================ //
// webpack module 5522  —  PlayerMapManager
// exports: PlayerMapManager
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[5522] = function PlayerMapManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, PlayerMapManager_handleMapPreview, PlayerMapManager, <class_fields_init>, PlayerMapManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerMapManager = undefined;
        Libg = __webpack_require__(9878);
        PlayerMapManager_handleMapPreview = new NativeFunction(((Libg).Libg).offset(11200608, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        PlayerMapManager;
        class PlayerMapManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x488c1 (open) */
}
            handleMapPreview (message) {
        return;
}
        }
        PlayerMapManager = PlayerMapManager = PlayerMapManager;
        exports.PlayerMapManager = PlayerMapManager;
        return;
};

// --------------------- MODULE 3644 — TeamManager ---------------------

// ============================================================ //
// webpack module 3644  —  TeamManager
// exports: TeamManager
// deps: 1588 (LogicMemory), 7037 (SoundManager), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3644] = function TeamManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, PlayerInfo, SoundManager, LogicMemory, TeamManager_instance, TeamInvitationPopup, TeamJoinRequestPopup, TeamManager_onTeamMessage, TeamManager_onTeamLeftMessage, ownTeamEntryOffset, teamTypeOffset, TeamManager, <class_fields_init>, TeamManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamManager = undefined;
        Libg = __webpack_require__(9878);
        PlayerInfo = __webpack_require__(9518);
        SoundManager = __webpack_require__(7037);
        LogicMemory = __webpack_require__(1588);
        TeamManager_instance = ((Libg).Libg).offset(19935304, 0);
        TeamInvitationPopup = new NativeFunction(((Libg).Libg).offset(10835668, 0), "pointer", ["pointer", "pointer", "int"]);
        TeamJoinRequestPopup = new NativeFunction(((Libg).Libg).offset(10884128, 0), "pointer", ["pointer", "pointer", "pointer"]);
        TeamManager_onTeamMessage = new NativeFunction(((Libg).Libg).offset(9119100, 0), "void", ["pointer", "pointer"]);
        TeamManager_onTeamLeftMessage = new NativeFunction(((Libg).Libg).offset(9116628, 0), "void", ["pointer", "pointer"]);
        ownTeamEntryOffset = ((LogicMemory).LogicMemory).offset(0);
        teamTypeOffset = ((LogicMemory).LogicMemory).offset(0);
        <class_fields_init> = undefined;
        TeamManager;
        class TeamManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x56a86 (open) */
}
            isFriendly () {
    var instance, entry;
        instance = (TeamManager).getInstance();
        if ((!instance)) {
            return false;
        } /* if 0x56813 */
        entry = ((instance).add(ownTeamEntryOffset)).readPointer();
        if ((!(entry).isNull())) {
            (!(entry).isNull());
            return (((entry).add(teamTypeOffset)).readS32() === 1);
        } /* if 0x56852 (open) */
}
            getInstance () {
    var instance;
        instance = (TeamManager_instance).readPointer();
        if ((instance).isNull()) {
            return null;
        } /* if 0x56890 */
        return instance;
}
            patch () {
        (Interceptor).replace(TeamInvitationPopup, new NativeCallback(function (self, TeamInvitation, isSystemInvite) {
        TeamInvitationPopup(self, TeamInvitation, isSystemInvite);
        ((SoundManager).SoundManager).playSound("Leave_game_room");
        return self;
}, "pointer", ["pointer", "pointer", "int"]));
        (Interceptor).replace(TeamJoinRequestPopup, new NativeCallback(function (self, playerID, TeamJoinRequest) {
        TeamJoinRequestPopup(self, playerID, TeamJoinRequest);
        ((SoundManager).SoundManager).playSound("Join_game_room");
        return self;
}, "pointer", ["pointer", "pointer", "pointer"]));
        (Interceptor).attach(TeamManager_onTeamMessage, { onLeave () {
        (PlayerInfo).PlayerInfo.isInGameroom = true;
        return;
} });
        return;
}
        }
        TeamManager = TeamManager_onTeamLeftMessage = TeamManager;
        exports.TeamManager = TeamManager;
        return;
};

// --------------------- MODULE 5200 — AllianceManager ---------------------

// ============================================================ //
// webpack module 5200  —  AllianceManager
// exports: AllianceManager
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[5200] = function AllianceManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, AllianceManager_showPopup, AllianceManager_getInstance, AllianceManager_doStartReplayAddr, AllianceManager_doStartReplay, AllianceManager_doStartSharedReplayAddr, AllianceManager_doStartSharedReplay, AllianceManager_doStartSpectate, AllianceManager, <class_fields_init>, AllianceManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AllianceManager = undefined;
        Libg = __webpack_require__(9878);
        AllianceManager_showPopup = new NativeFunction(((Libg).Libg).offset(9014716, 0), "void", ["pointer"]);
        AllianceManager_getInstance = new NativeFunction(((Libg).Libg).offset(9023828, 0), "pointer", []);
        AllianceManager_doStartReplayAddr = ((Libg).Libg).offset(9013400, 0);
        AllianceManager_doStartReplay = new NativeFunction(AllianceManager_doStartReplayAddr, "bool", ["pointer", "uint64", "uint64"]);
        AllianceManager_doStartSharedReplayAddr = ((Libg).Libg).offset(9013612, 0);
        AllianceManager_doStartSharedReplay = new NativeFunction(AllianceManager_doStartSharedReplayAddr, "bool", ["pointer", "pointer"]);
        AllianceManager_doStartSpectate = new NativeFunction(((Libg).Libg).offset(9014204, 0), "bool", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        AllianceManager;
        class AllianceManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x57387 (open) */
}
            getInstance () {
        return AllianceManager_getInstance();
}
            showPopup (popup) {
        if ((((popup).instance) == null)) {
        } /* if 0x57269 */
        return;
}
            doStartReplay (uuidLo, uuidHi) {
    var manager;
        manager = (AllianceManager).getInstance();
        if ((manager).isNull()) {
            return false;
        } /* if 0x572b3 */
        return AllianceManager_doStartReplay(manager, uuidLo, uuidHi);
}
            doStartSharedReplay (shareReplayEntryPtr) {
    var manager;
        manager = (AllianceManager).getInstance();
        if ((manager).isNull()) {
            return false;
        } /* if 0x57303 */
        return AllianceManager_doStartSharedReplay(manager, shareReplayEntryPtr);
}
            doStartSpectate (logicLongPtr) {
    var manager;
        manager = (AllianceManager).getInstance();
        if ((manager).isNull()) {
            return false;
        } /* if 0x57352 */
        return AllianceManager_doStartSpectate(manager, logicLongPtr);
}
        }
        AllianceManager = AllianceManager = AllianceManager;
        exports.AllianceManager = AllianceManager;
        AllianceManager.doStartReplayAddr = AllianceManager_doStartReplayAddr;
        AllianceManager.doStartSharedReplayAddr = AllianceManager_doStartSharedReplayAddr;
        return;
};

