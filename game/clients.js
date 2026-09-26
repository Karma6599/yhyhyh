//============================================================================//// CLIENT-SIDE LOGIC MIRRORS// merged webpack modules: 6859 LogicAreaEffectClient, 9754 LogicCharacterClient, 5523 LogicBattleModeClient, 5583 LogicBattleModeServer, 9814 LogicGameObjectClient, 8593 LogicGameObjectManagerClient, 5984 LogicItemClient, 5460 LogicProjectileClient, 6823 LogicBattleEmotes, 6574 LogicGatchaDrop//============================================================================//
// --------------------- MODULE 6859 — LogicAreaEffectClient ---------------------


// ============================================================ //
// webpack module 6859  —  LogicAreaEffectClient
// exports: LogicAreaEffectClient
// deps: 1552 (LogicAreaEffectData), 1588 (LogicMemory), 1978 (Libc), 4009 (Config), 4330 (Player), 6139 (LogicDataTables), 6794 (LogicData), 7669 (SkinSelector), 8156 (_), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6859] = function LogicAreaEffectClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, SkinSelector, LogicData, Player, Config, Libc, LogicAreaEffectData, LogicDataTables, _, LogicAreaEffectClient_decode, areaEffectDataOffset, areaEffectIdOffset, LogicAreaEffectClient, <class_fields_init>, LogicAreaEffectClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicAreaEffectClient = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        SkinSelector = __webpack_require__(7669);
        LogicData = __webpack_require__(6794);
        Player = __webpack_require__(4330);
        Config = __webpack_require__(4009);
        Libc = __webpack_require__(1978);
        LogicAreaEffectData = __webpack_require__(1552);
        LogicDataTables = __webpack_require__(6139);
        _ = __webpack_require__(8156);
        LogicAreaEffectClient_decode = ((Libg).Libg).offset(15155452, 0);
        areaEffectDataOffset = ((LogicMemory).LogicMemory).offset(16, 16);
        areaEffectIdOffset = ((LogicMemory).LogicMemory).offset(60);
        <class_fields_init> = undefined;
        LogicAreaEffectClient;
        class LogicAreaEffectClient {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x60f06 (open) */
}
            patch () {
        return;
}
        }
        LogicAreaEffectClient = LogicDataTables = LogicAreaEffectClient;
        exports.LogicAreaEffectClient = LogicAreaEffectClient;
        return;
};

// --------------------- MODULE 9754 — LogicCharacterClient ---------------------


// ============================================================ //
// webpack module 9754  —  LogicCharacterClient
// exports: LogicCharacterClient
// deps: 1588 (LogicMemory), 7171 (LogicCharacterData), 9814 (LogicGameObjectClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9754] = function LogicCharacterClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicCharacterData, LogicGameObjectClient, Libg, LogicMemory, LogicCharacterClient_isHero, hitPointsOffset, maxHitPointsOffset, LogicCharacterClient, <class_fields_init>, LogicCharacterClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicCharacterClient = undefined;
        LogicCharacterData = __webpack_require__(7171);
        LogicGameObjectClient = __webpack_require__(9814);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LogicCharacterClient_isHero = new NativeFunction(((Libg).Libg).offset(15169848, 0), "int", ["pointer"]);
        hitPointsOffset = ((LogicMemory).LogicMemory).offset(196, 0);
        maxHitPointsOffset = ((LogicMemory).LogicMemory).offset(200, 0);
        static get data () {
        return new (LogicCharacterData).LogicCharacterData((this).dataPtr);
};
        static get hitPoints () {
        return (((this).instance).add(hitPointsOffset)).readInt();
};
        static get maxHitPoints () {
        return (((this).instance).add(maxHitPointsOffset)).readInt();
};
        static isAliveHero () {
        return ((LogicCharacterClient_isHero((this).instance) & 1) === 1);
};
        <class_fields_init> = undefined;
        LogicCharacterClient;
        class LogicCharacterClient extends <class_fields_init> = (LogicGameObjectClient).LogicGameObjectClient {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6146c */
        return this;
}
            isAliveHero (instance) {
        return ((LogicCharacterClient_isHero(instance) & 1) === 1);
}
        }
        LogicCharacterClient = <class_fields_init> = LogicCharacterClient;
        exports.LogicCharacterClient = LogicCharacterClient;
        return;
};

// --------------------- MODULE 5523 — LogicBattleModeClient ---------------------


// ============================================================ //
// webpack module 5523  —  LogicBattleModeClient
// exports: LogicBattleModeClient
// deps: 1588 (LogicMemory), 2478 (GameScreen), 5417 (LogicArrayList), 6013 (LogicPlayer), 6128 (BattleMode), 9754 (LogicCharacterClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5523] = function LogicBattleModeClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, BattleMode, GameScreen, LogicMemory, LogicArrayList, LogicPlayer, LogicCharacterClient, LogicBattleModeClient_getOwnCharacter, LogicBattleModeClient_isGameOverOrResetting, tileMapOffset, eventModifiersArrayListOffset, playerCount, ownPlayerTeamOffset, ownPlayerIndexOffset, modeIndexOffset, gameModeUtilOffset, gameObjectsOffset, teammateCountOffset, teamSizeOffset, spectateTargetIndexOffset, LogicBattleModeClient, <class_fields_init>, LogicBattleModeClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicBattleModeClient = undefined;
        Libg = __webpack_require__(9878);
        BattleMode = __webpack_require__(6128);
        GameScreen = __webpack_require__(2478);
        LogicMemory = __webpack_require__(1588);
        LogicArrayList = __webpack_require__(5417);
        LogicPlayer = __webpack_require__(6013);
        LogicCharacterClient = __webpack_require__(9754);
        LogicBattleModeClient_getOwnCharacter = new NativeFunction(((Libg).Libg).offset(16277308, 0), "pointer", ["pointer"]);
        LogicBattleModeClient_isGameOverOrResetting = new NativeFunction(((Libg).Libg).offset(16275544, 0), "bool", ["pointer"]);
        tileMapOffset = ((LogicMemory).LogicMemory).offset(248);
        eventModifiersArrayListOffset = ((LogicMemory).LogicMemory).offset(128);
        playerCount = ((LogicMemory).LogicMemory).offset(236);
        ownPlayerTeamOffset = ((LogicMemory).LogicMemory).offset(228);
        ownPlayerIndexOffset = ((LogicMemory).LogicMemory).offset(224);
        modeIndexOffset = ((LogicMemory).LogicMemory).offset(292);
        gameModeUtilOffset = ((LogicMemory).LogicMemory).offset(296);
        gameObjectsOffset = ((LogicMemory).LogicMemory).offset(40);
        teammateCountOffset = ((LogicMemory).LogicMemory).offset(320);
        teamSizeOffset = ((LogicMemory).LogicMemory).offset(920);
        spectateTargetIndexOffset = ((LogicMemory).LogicMemory).offset(240);
        static getPlayer (index) {
    var array, player;
        array = new (LogicArrayList).LogicArrayList((this).instance);
        player = (array).getElement(index);
        if ((player).isNull()) {
            return null;
        } /* if 0x714de */
        return new (LogicPlayer).LogicPlayer(player);
};
        static getPlayerCount () {
        return (((this).instance).add(playerCount)).readInt();
};
        static get modeIndex () {
        return (((this).instance).add(modeIndexOffset)).readU32();
};
        static get ownPlayerIndex () {
        return (((this).instance).add(ownPlayerIndexOffset)).readU32();
};
        static get ownPlayerTeam () {
        return (((this).instance).add(ownPlayerTeamOffset)).readU32();
};
        static getGameModeUtil () {
        return (((this).instance).add(gameModeUtilOffset)).readPointer();
};
        static getGameObjects () {
        return new (LogicArrayList).LogicArrayList((((this).instance).add(gameObjectsOffset)).readPointer());
};
        static isGameOverOrResetting () {
        return Boolean(LogicBattleModeClient_isGameOverOrResetting((this).instance));
};
        static hasEventModifier (eventModifierIndex) {
        return (LogicBattleModeClient).hasEventModifier((this).instance, eventModifierIndex);
};
        <class_fields_init> = undefined;
        LogicBattleModeClient;
        class LogicBattleModeClient {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x71470 */
        this.instance = instance;
        return;
}
            hasEventModifier (instance, eventModifierIndex) {
    var arrayListPtr, arrayList, count, data, i;
        arrayListPtr = ((instance).add(eventModifiersArrayListOffset)).readPointer();
        if ((arrayListPtr).isNull()) {
            return 0;
        } /* if 0x71710 */
        arrayList = new (LogicArrayList).LogicArrayList(arrayListPtr);
        count = (arrayList).getItemsCount();
        data = (arrayList).getArray();
        i = 0;
        while ((i < count)) {
            if ((((data).add((i * 4))).readInt() === eventModifierIndex)) {
                return 1;
            } /* if 0x71765 */
            i = ((i) + 1);
            (i++);
        } /* while 0x7176f */
        return 0;
}
            getInstance () {
        return ((BattleMode).BattleMode).getLogicBattleModeClient();
}
            getOwnCharacter () {
        return new (LogicCharacterClient).LogicCharacterClient(LogicBattleModeClient_getOwnCharacter((this).getInstance()));
}
            getTileMap () {
    var logicBattle;
        logicBattle = ((GameScreen).GameScreen).getLogicBattle();
        if ((logicBattle).isNull()) {
            return NULL;
        } /* if 0x71821 */
        return ((logicBattle).add(tileMapOffset)).readPointer();
}
            getOwnPlayerTeam () {
    var instance;
        instance = (LogicBattleModeClient).getInstance();
        if ((instance).isNull()) {
            return 0;
        } /* if 0x71877 */
        return ((instance).add(ownPlayerTeamOffset)).readU32();
}
            getTeammateCount () {
    var instance;
        instance = (LogicBattleModeClient).getInstance();
        if ((instance).isNull()) {
            return -1;
        } /* if 0x718cd */
        return ((instance).add(teammateCountOffset)).readInt();
}
            getSpectateTargetIndex () {
    var instance;
        instance = (LogicBattleModeClient).getInstance();
        if ((instance).isNull()) {
            return -2;
        } /* if 0x71924 */
        return ((instance).add(spectateTargetIndexOffset)).readInt();
}
            setTeammateCount (value) {
    var instance;
        instance = (LogicBattleModeClient).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x7197e */
        return;
}
            getTeamSize () {
    var instance, gameModeUtil;
        instance = (LogicBattleModeClient).getInstance();
        if ((instance).isNull()) {
            return -1;
        } /* if 0x719e3 */
        gameModeUtil = ((instance).add(gameModeUtilOffset)).readPointer();
        if ((gameModeUtil).isNull()) {
            return -1;
        } /* if 0x71a09 */
        return ((gameModeUtil).add(teamSizeOffset)).readInt();
}
            getModeIndex () {
    var instance;
        instance = (LogicBattleModeClient).getInstance();
        if ((instance).isNull()) {
            return -1;
        } /* if 0x71a62 */
        return ((instance).add(modeIndexOffset)).readU32();
}
            hasTeammates () {
        return ((LogicBattleModeClient).getTeamSize() > 1);
}
        }
        LogicBattleModeClient = LogicBattleModeClient_isGameOverOrResetting = LogicBattleModeClient;
        exports.LogicBattleModeClient = LogicBattleModeClient;
        return;
};

// --------------------- MODULE 5583 — LogicBattleModeServer ---------------------


// ============================================================ //
// webpack module 5583  —  LogicBattleModeServer
// exports: LogicBattleModeServer
// deps: 1588 (LogicMemory), 6128 (BattleMode)
// ============================================================ //

__webpack_modules__[5583] = function LogicBattleModeServer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BattleMode, LogicMemory, battleModeServerOffset, debugEndGameFlagOffset, botDifficultyOffset, LogicBattleModeServer, <class_fields_init>, LogicBattleModeServer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicBattleModeServer = undefined;
        BattleMode = __webpack_require__(6128);
        LogicMemory = __webpack_require__(1588);
        battleModeServerOffset = ((LogicMemory).LogicMemory).offset(48);
        debugEndGameFlagOffset = ((LogicMemory).LogicMemory).offset(249);
        botDifficultyOffset = ((LogicMemory).LogicMemory).offset(244);
        <class_fields_init> = undefined;
        LogicBattleModeServer;
        class LogicBattleModeServer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x71d06 (open) */
}
            getInstance () {
    var battleMode;
        battleMode = ((BattleMode).BattleMode).getInstance();
        if ((battleMode).isNull()) {
            return NULL;
        } /* if 0x71c06 */
        return ((battleMode).add(battleModeServerOffset)).readPointer();
}
            debugForceEndGame (_win, _ownTeam) {
    var instance;
        instance = (LogicBattleModeServer).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x71c65 */
        return;
}
            setBotDifficulty (difficulty) {
    var instance;
        instance = (LogicBattleModeServer).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x71cc2 */
        return;
}
        }
        LogicBattleModeServer = v8 = LogicBattleModeServer;
        exports.LogicBattleModeServer = LogicBattleModeServer;
        return;
};

// --------------------- MODULE 9814 — LogicGameObjectClient ---------------------


// ============================================================ //
// webpack module 9814  —  LogicGameObjectClient
// exports: LogicGameObjectClient
// deps: 1588 (LogicMemory), 6794 (LogicData)
// ============================================================ //

__webpack_modules__[9814] = function LogicGameObjectClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicData, dataOffset, xOffset, yOffset, zOffset, playerIndexOffset, teamIndexOffset, getTypeVtableOffset, GAME_OBJECT_TYPE_CHARACTER, LogicGameObjectClient, <class_fields_init>, LogicGameObjectClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicGameObjectClient = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        dataOffset = ((LogicMemory).LogicMemory).offset(16);
        xOffset = ((LogicMemory).LogicMemory).offset(48);
        yOffset = ((LogicMemory).LogicMemory).offset(52);
        zOffset = ((LogicMemory).LogicMemory).offset(56);
        playerIndexOffset = ((LogicMemory).LogicMemory).offset(60);
        teamIndexOffset = ((LogicMemory).LogicMemory).offset(64);
        getTypeVtableOffset = (5 * (Process).pointerSize);
        GAME_OBJECT_TYPE_CHARACTER = 0;
        static get x () {
        return (((this).instance).add(xOffset)).readU32();
};
        static get y () {
        return (((this).instance).add(yOffset)).readU32();
};
        static get z () {
        return (((this).instance).add(zOffset)).readS32();
};
        static get data () {
        return new (LogicData).LogicData((this).dataPtr);
};
        static get playerIndex () {
        return (((this).instance).add(playerIndexOffset)).readInt();
};
        static get teamIndex () {
        return (((this).instance).add(teamIndexOffset)).readInt();
};
        static get index () {
        return (((this).instance).add(playerIndexOffset)).readInt();
};
        static get dataPtr () {
        return (((this).instance).add(dataOffset)).readPointer();
};
        static set dataPtr (value) {
        return;
};
        static isCharacter () {
    var vtable, vtableKey, typeFunctionPointer, isCharacter;
        vtable = ((this).instance).readPointer();
        if ((vtable).isNull()) {
            return false;
        } /* if 0x618db */
        vtableKey = (vtable).toString();
        if (((LogicGameObjectClient).characterVtables).has(vtableKey)) {
            return true;
        } /* if 0x618fe */
        if (((LogicGameObjectClient).nonCharacterVtables).has(vtableKey)) {
            return false;
        } /* if 0x61915 */
        typeFunctionPointer = ((vtable).add(getTypeVtableOffset)).readPointer();
        if ((typeFunctionPointer).isNull()) {
            return false;
            /* CATCH -> 0x61994 (try region) */
        } /* if 0x6193b */
        isCharacter = (new NativeFunction(typeFunctionPointer, "int", ["pointer"])((this).instance) === GAME_OBJECT_TYPE_CHARACTER);
        if (isCharacter) {
        } /* if 0x61978 */
        /* jump -> 0x61980 */
        ((LogicGameObjectClient).nonCharacterVtables).add(vtableKey);
        return isCharacter;
        /* CATCH -> 0x6199d (try region) */
        return false;
        throw isCharacter = vtable = vtableKey = typeFunctionPointer = <underflow>;
};
        <class_fields_init> = undefined;
        LogicGameObjectClient;
        class LogicGameObjectClient {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x61690 */
        this.instance = instance;
        return;
}
        }
        LogicGameObjectClient = getTypeVtableOffset = LogicGameObjectClient;
        exports.LogicGameObjectClient = LogicGameObjectClient;
        LogicGameObjectClient.characterVtables = new Set();
        LogicGameObjectClient.nonCharacterVtables = new Set();
        return;
};

// --------------------- MODULE 8593 — LogicGameObjectManagerClient ---------------------


// ============================================================ //
// webpack module 8593  —  LogicGameObjectManagerClient
// exports: LogicGameObjectManagerClient
// deps: 3555 (LogicSkinData), 4009 (Config), 5417 (LogicArrayList), 6013 (LogicPlayer), 6139 (LogicDataTables), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8593] = function LogicGameObjectManagerClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, LogicDataTables, LogicArrayList, LogicPlayer, LogicSkinData, PlayerInfo, LogicGameObjectManagerClient_decode, LogicGameObjectManagerClient, <class_fields_init>, LogicGameObjectManagerClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicGameObjectManagerClient = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        LogicDataTables = __webpack_require__(6139);
        LogicArrayList = __webpack_require__(5417);
        LogicPlayer = __webpack_require__(6013);
        LogicSkinData = __webpack_require__(3555);
        PlayerInfo = __webpack_require__(9518);
        LogicGameObjectManagerClient_decode = new NativeFunction(((Libg).Libg).offset(15408036, 0), "void", ["pointer", "pointer", "pointer", "bool", "pointer", "pointer"]);
        <class_fields_init> = undefined;
        LogicGameObjectManagerClient;
        class LogicGameObjectManagerClient {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x61dd1 (open) */
}
            getCharacterNameBySkin (skinSlot) {
    var skinPointer;
        if ((skinSlot).isNull()) {
            return;
        } /* if 0x61b35 */
        skinPointer = (skinSlot).readPointer();
        if ((skinPointer).isNull()) {
            return;
        } /* if 0x61b4d */
        if ((((new (LogicSkinData).LogicSkinData(skinPointer)).getCharacter()) == null)) {
            (new (LogicSkinData).LogicSkinData(skinPointer)).getCharacter();
            return undefined;
        } /* if 0x61b6b */
        return (skinPointer = <underflow>).getName();
}
            patch () {
        return;
}
        }
        LogicGameObjectManagerClient = LogicGameObjectManagerClient = LogicGameObjectManagerClient;
        exports.LogicGameObjectManagerClient = LogicGameObjectManagerClient;
        return;
};

// --------------------- MODULE 5984 — LogicItemClient ---------------------


// ============================================================ //
// webpack module 5984  —  LogicItemClient
// exports: LogicItemClient
// deps: 1588 (LogicMemory), 1978 (Libc), 4009 (Config), 4330 (Player), 6139 (LogicDataTables), 6794 (LogicData), 7669 (SkinSelector), 8156 (_), 8899 (LogicItemData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5984] = function LogicItemClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, SkinSelector, LogicData, Player, Config, Libc, LogicItemData, LogicDataTables, _, LogicItemClient_decode, itemOffset, itemIdOffset, LogicItemClient, <class_fields_init>, LogicItemClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicItemClient = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        SkinSelector = __webpack_require__(7669);
        LogicData = __webpack_require__(6794);
        Player = __webpack_require__(4330);
        Config = __webpack_require__(4009);
        Libc = __webpack_require__(1978);
        LogicItemData = __webpack_require__(8899);
        LogicDataTables = __webpack_require__(6139);
        _ = __webpack_require__(8156);
        LogicItemClient_decode = ((Libg).Libg).offset(15460500, 0);
        itemOffset = ((LogicMemory).LogicMemory).offset(16);
        itemIdOffset = ((LogicMemory).LogicMemory).offset(60);
        <class_fields_init> = undefined;
        LogicItemClient;
        class LogicItemClient {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x626f7 (open) */
}
            patch () {
        return;
}
        }
        LogicItemClient = LogicDataTables = LogicItemClient;
        exports.LogicItemClient = LogicItemClient;
        return;
};

// --------------------- MODULE 5460 — LogicProjectileClient ---------------------


// ============================================================ //
// webpack module 5460  —  LogicProjectileClient
// exports: LogicProjectileClient
// deps: 1588 (LogicMemory), 1978 (Libc), 4009 (Config), 4330 (Player), 6139 (LogicDataTables), 6794 (LogicData), 7479 (LogicProjectileData), 7669 (SkinSelector), 8156 (_), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5460] = function LogicProjectileClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, SkinSelector, LogicData, Player, Config, Libc, LogicProjectileData, LogicDataTables, _, LogicProjectileClient_decode, projectileOffset, projectileIdOffset, LogicProjectileClient, <class_fields_init>, LogicProjectileClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicProjectileClient = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        SkinSelector = __webpack_require__(7669);
        LogicData = __webpack_require__(6794);
        Player = __webpack_require__(4330);
        Config = __webpack_require__(4009);
        Libc = __webpack_require__(1978);
        LogicProjectileData = __webpack_require__(7479);
        LogicDataTables = __webpack_require__(6139);
        _ = __webpack_require__(8156);
        LogicProjectileClient_decode = ((Libg).Libg).offset(15477344, 0);
        projectileOffset = ((LogicMemory).LogicMemory).offset(16);
        projectileIdOffset = ((LogicMemory).LogicMemory).offset(60);
        <class_fields_init> = undefined;
        LogicProjectileClient;
        class LogicProjectileClient {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x63cf4 (open) */
}
            patch () {
        return;
}
        }
        LogicProjectileClient = LogicDataTables = LogicProjectileClient;
        exports.LogicProjectileClient = LogicProjectileClient;
        return;
};

// --------------------- MODULE 6823 — LogicBattleEmotes ---------------------


// ============================================================ //
// webpack module 6823  —  LogicBattleEmotes
// exports: LogicBattleEmotes
// deps: 5417 (LogicArrayList), 8040 (LogicEmoteData)
// ============================================================ //

__webpack_modules__[6823] = function LogicBattleEmotes_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicArrayList, LogicEmoteData, LogicBattleEmotes, <class_fields_init>, LogicBattleEmotes;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicBattleEmotes = undefined;
        LogicArrayList = __webpack_require__(5417);
        LogicEmoteData = __webpack_require__(8040);
        static getLogicBattleEmotesArrayList () {
        if (((this).instance).isNull()) {
            return null;
        } /* if 0x610ed */
        return new (LogicArrayList).LogicArrayList((this).instance);
};
        static getEmotes () {
    var array, count, items, i, emojiPtr;
        array = (this).getLogicBattleEmotesArrayList();
        if ((!array)) {
            return null;
        } /* if 0x61155 */
        count = (array).getItemsCount();
        items = [];
        i = 0;
        while ((i < count)) {
            emojiPtr = (array).getElement(i);
            if (!(emojiPtr).isNull()) {
                (items).push(new (LogicEmoteData).LogicEmoteData(emojiPtr));
            } /* if 0x611ae */
            i = ((i) + 1);
            (i++);
        } /* while 0x611b8 */
        return items;
};
        <class_fields_init> = undefined;
        LogicBattleEmotes;
        class LogicBattleEmotes {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x610b5 */
        this.instance = instance;
        return;
}
        }
        LogicBattleEmotes = LogicBattleEmotes = LogicBattleEmotes;
        exports.LogicBattleEmotes = LogicBattleEmotes;
        return;
};

// --------------------- MODULE 6574 — LogicGatchaDrop ---------------------


// ============================================================ //
// webpack module 6574  —  LogicGatchaDrop
// exports: EGatchaDropTypes, LogicGatchaDrop
// deps: 1588 (LogicMemory), 1978 (Libc), 4272 (EDebugger), 6139 (LogicDataTables)
// ============================================================ //

__webpack_modules__[6574] = function LogicGatchaDrop_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, LogicMemory, EDebugger, LogicDataTables, dropCountOffset, characterOffset, skinOffset, vanityItemOffset, cardOffset, EGatchaDropTypes, LogicGatchaDrop, <class_fields_init>, LogicGatchaDrop;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EGatchaDropTypes = undefined;
        undefined.LogicGatchaDrop = exports;
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        EDebugger = __webpack_require__(4272);
        LogicDataTables = __webpack_require__(6139);
        dropCountOffset = ((LogicMemory).LogicMemory).offset(4);
        characterOffset = ((LogicMemory).LogicMemory).offset(8);
        skinOffset = ((LogicMemory).LogicMemory).offset(16);
        vanityItemOffset = ((LogicMemory).LogicMemory).offset(24);
        cardOffset = ((LogicMemory).LogicMemory).offset(32);
        if (!EGatchaDropTypes) {
            exports.EGatchaDropTypes = cardOffset = {};
        } /* if 0x6f131 */
        cardOffset = {}(exports);
        static setDropType (type) {
        return;
};
        static setDropCount (count) {
        return;
};
        static setCharacter (character) {
        return;
};
        static setSkin (skin) {
        return;
};
        static setVanityItem (vanityItem) {
        return;
};
        static setCard (card) {
        return;
};
        <class_fields_init> = undefined;
        LogicGatchaDrop;
        class LogicGatchaDrop {
            constructor (dropType, dropCount, dataIndex, vanityItemType) {
        if (<class_fields_init>) {
        } /* if 0x6f38a */
        this.dropType = 0;
        this.dropCount = 0;
        this.instance = ((Libc).Libc).malloc((LogicGatchaDrop).allocationSize);
        (((this).instance).add(characterOffset)).writePointer(NULL);
        (((this).instance).add(skinOffset)).writePointer(NULL);
        (((this).instance).add(vanityItemOffset)).writePointer(NULL);
        (((this).instance).add(cardOffset)).writePointer(NULL);
        (this).setDropType(dropType);
        (this).setDropCount(dropCount);
        if ((dataIndex !== undefined)) {
            /* jump -> 0x6f47e */
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Not valid data!");
            /* jump -> 0x6f60f */
            if ((dropType === 1)) {
                (this).setCharacter(((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Characters, dataIndex));
            } /* if 0x6f4b3 */
            /* jump -> 0x6f60f */
            if ((dropType === 4)) {
                (this).setCard(((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Cards, dataIndex));
            } /* if 0x6f4e8 */
            /* jump -> 0x6f60f */
            if ((dropType === 9)) {
                (this).setSkin(((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Skins, dataIndex));
            } /* if 0x6f51e */
            /* jump -> 0x6f60f */
            if ((dropType === 11)) {
                if ((vanityItemType === (((LogicDataTables).LogicDataTables).table).Emotes)) {
                    (this).setVanityItem(((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Emotes, dataIndex));
                } /* if 0x6f56d */
                /* jump -> 0x6f5d5 */
                if ((vanityItemType === (((LogicDataTables).LogicDataTables).table).Sprays)) {
                    (this).setVanityItem(((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Sprays, dataIndex));
                } /* if 0x6f5b2 */
                /* jump -> 0x6f5d5 */
                ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Not valid VanityItem type!");
            } /* if 0x6f5db */
            /* jump -> 0x6f60e */
            } while (!(dropType === 20));
            (this).setCharacter(((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Characters, dataIndex));
            return;
        } /* if 0x6f612 (open) */
}
        }
        LogicGatchaDrop = cardOffset = LogicGatchaDrop;
        exports.LogicGatchaDrop = LogicGatchaDrop;
        LogicGatchaDrop.allocationSize = 56;
        return;
};

