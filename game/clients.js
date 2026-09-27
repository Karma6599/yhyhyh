var LogicAreaEffectClient_decode = Libg.offset(15155452, 0);
var areaEffectDataOffset = LogicMemory.offset(16, 16);
var areaEffectIdOffset = LogicMemory.offset(60);

class LogicAreaEffectClient {
    static patch() {
        return;
    }
}

var LogicCharacterClient_isHero = new NativeFunction(Libg.offset(15169848, 0), "int", ["pointer"]);
var hitPointsOffset = LogicMemory.offset(196, 0);
var maxHitPointsOffset = LogicMemory.offset(200, 0);

class LogicCharacterClient extends LogicGameObjectClient {
    constructor(instance) {
        super(instance);
    }
    get data() {
        return new LogicCharacterData(this.dataPtr);
    }
    get hitPoints() {
        return this.instance.add(hitPointsOffset).readInt();
    }
    get maxHitPoints() {
        return this.instance.add(maxHitPointsOffset).readInt();
    }
    isAliveHero() {
        return (LogicCharacterClient_isHero(this.instance) & 1) === 1;
    }
    static isAliveHero(instance) {
        return (LogicCharacterClient_isHero(instance) & 1) === 1;
    }
}

var LogicBattleModeClient_getOwnCharacter = new NativeFunction(Libg.offset(16277308, 0), "pointer", ["pointer"]);
var LogicBattleModeClient_isGameOverOrResetting = new NativeFunction(Libg.offset(16275544, 0), "bool", ["pointer"]);
var tileMapOffset = LogicMemory.offset(248);
var eventModifiersArrayListOffset = LogicMemory.offset(128);
var playerCount = LogicMemory.offset(236);
var ownPlayerTeamOffset = LogicMemory.offset(228);
var ownPlayerIndexOffset = LogicMemory.offset(224);
var modeIndexOffset = LogicMemory.offset(292);
var gameModeUtilOffset = LogicMemory.offset(296);
var gameObjectsOffset = LogicMemory.offset(40);
var teammateCountOffset = LogicMemory.offset(320);
var teamSizeOffset = LogicMemory.offset(920);
var spectateTargetIndexOffset = LogicMemory.offset(240);

class LogicBattleModeClient {
    constructor(instance) {
        this.instance = instance;
    }
    getPlayer(index) {
        var array = new LogicArrayList(this.instance);
        var player = array.getElement(index);
        if (player.isNull()) {
            return null;
        }
        return new LogicPlayer(player);
    }
    getPlayerCount() {
        return this.instance.add(playerCount).readInt();
    }
    get modeIndex() {
        return this.instance.add(modeIndexOffset).readU32();
    }
    get ownPlayerIndex() {
        return this.instance.add(ownPlayerIndexOffset).readU32();
    }
    get ownPlayerTeam() {
        return this.instance.add(ownPlayerTeamOffset).readU32();
    }
    getGameModeUtil() {
        return this.instance.add(gameModeUtilOffset).readPointer();
    }
    getGameObjects() {
        return new LogicArrayList(this.instance.add(gameObjectsOffset).readPointer());
    }
    isGameOverOrResetting() {
        return Boolean(LogicBattleModeClient_isGameOverOrResetting(this.instance));
    }
    hasEventModifier(eventModifierIndex) {
        return LogicBattleModeClient.hasEventModifier(this.instance, eventModifierIndex);
    }
    static hasEventModifier(instance, eventModifierIndex) {
        var arrayListPtr = instance.add(eventModifiersArrayListOffset).readPointer();
        if (arrayListPtr.isNull()) {
            return 0;
        }
        var arrayList = new LogicArrayList(arrayListPtr);
        var count = arrayList.getItemsCount();
        var data = arrayList.getArray();
        var i = 0;
        while (i < count) {
            if (data.add(i * 4).readInt() === eventModifierIndex) {
                return 1;
            }
            i++;
        }
        return 0;
    }
    static getInstance() {
        return BattleMode.getLogicBattleModeClient();
    }
    static getOwnCharacter() {
        return new LogicCharacterClient(LogicBattleModeClient_getOwnCharacter(LogicBattleModeClient.getInstance()));
    }
    static getTileMap() {
        var logicBattle = GameScreen.getLogicBattle();
        if (logicBattle.isNull()) {
            return NULL;
        }
        return logicBattle.add(tileMapOffset).readPointer();
    }
    static getOwnPlayerTeam() {
        var instance = LogicBattleModeClient.getInstance();
        if (instance.isNull()) {
            return 0;
        }
        return instance.add(ownPlayerTeamOffset).readU32();
    }
    static getTeammateCount() {
        var instance = LogicBattleModeClient.getInstance();
        if (instance.isNull()) {
            return -1;
        }
        return instance.add(teammateCountOffset).readInt();
    }
    static getSpectateTargetIndex() {
        var instance = LogicBattleModeClient.getInstance();
        if (instance.isNull()) {
            return -2;
        }
        return instance.add(spectateTargetIndexOffset).readInt();
    }
    static setTeammateCount(value) {
        var instance = LogicBattleModeClient.getInstance();
        if (instance.isNull()) {
            return;
        }
        instance.add(teammateCountOffset).writeInt(value);
    }
    static getTeamSize() {
        var instance = LogicBattleModeClient.getInstance();
        if (instance.isNull()) {
            return -1;
        }
        var gameModeUtil = instance.add(gameModeUtilOffset).readPointer();
        if (gameModeUtil.isNull()) {
            return -1;
        }
        return gameModeUtil.add(teamSizeOffset).readInt();
    }
    static getModeIndex() {
        var instance = LogicBattleModeClient.getInstance();
        if (instance.isNull()) {
            return -1;
        }
        return instance.add(modeIndexOffset).readU32();
    }
    static hasTeammates() {
        return LogicBattleModeClient.getTeamSize() > 1;
    }
}

var battleModeServerOffset = LogicMemory.offset(48);
var debugEndGameFlagOffset = LogicMemory.offset(249);
var botDifficultyOffset = LogicMemory.offset(244);

class LogicBattleModeServer {
    static getInstance() {
        var battleMode = BattleMode.getInstance();
        if (battleMode.isNull()) {
            return NULL;
        }
        return battleMode.add(battleModeServerOffset).readPointer();
    }
    static debugForceEndGame(_win, _ownTeam) {
        var instance = LogicBattleModeServer.getInstance();
        if (instance.isNull()) {
            return;
        }
        instance.add(debugEndGameFlagOffset).writeInt(1);
    }
    static setBotDifficulty(difficulty) {
        var instance = LogicBattleModeServer.getInstance();
        if (instance.isNull()) {
            return;
        }
        instance.add(botDifficultyOffset).writeInt(difficulty);
    }
}

var dataOffset = LogicMemory.offset(16);
var xOffset = LogicMemory.offset(48);
var yOffset = LogicMemory.offset(52);
var zOffset = LogicMemory.offset(56);
var playerIndexOffset = LogicMemory.offset(60);
var teamIndexOffset = LogicMemory.offset(64);
var getTypeVtableOffset = 5 * Process.pointerSize;
var GAME_OBJECT_TYPE_CHARACTER = 0;

class LogicGameObjectClient {
    constructor(instance) {
        this.instance = instance;
    }
    get x() {
        return this.instance.add(xOffset).readU32();
    }
    get y() {
        return this.instance.add(yOffset).readU32();
    }
    get z() {
        return this.instance.add(zOffset).readS32();
    }
    get data() {
        return new LogicData(this.dataPtr);
    }
    get playerIndex() {
        return this.instance.add(playerIndexOffset).readInt();
    }
    get teamIndex() {
        return this.instance.add(teamIndexOffset).readInt();
    }
    get index() {
        return this.instance.add(playerIndexOffset).readInt();
    }
    get dataPtr() {
        return this.instance.add(dataOffset).readPointer();
    }
    set dataPtr(value) {
        this.instance.add(dataOffset).writePointer(value);
    }
    isCharacter() {
        var vtable = this.instance.readPointer();
        if (vtable.isNull()) {
            return false;
        }
        var vtableKey = vtable.toString();
        if (LogicGameObjectClient.characterVtables.has(vtableKey)) {
            return true;
        }
        if (LogicGameObjectClient.nonCharacterVtables.has(vtableKey)) {
            return false;
        }
        try {
            var typeFunctionPointer = vtable.add(getTypeVtableOffset).readPointer();
            if (typeFunctionPointer.isNull()) {
                return false;
            }
            var isCharacter = new NativeFunction(typeFunctionPointer, "int", ["pointer"])(this.instance) === GAME_OBJECT_TYPE_CHARACTER;
            if (isCharacter) {
                LogicGameObjectClient.characterVtables.add(vtableKey);
            } else {
                LogicGameObjectClient.nonCharacterVtables.add(vtableKey);
            }
            return isCharacter;
        } catch (e) {
            return false;
        }
    }
}
LogicGameObjectClient.characterVtables = new Set();
LogicGameObjectClient.nonCharacterVtables = new Set();

var LogicGameObjectManagerClient_decode = new NativeFunction(Libg.offset(15408036, 0), "void", ["pointer", "pointer", "pointer", "bool", "pointer", "pointer"]);

class LogicGameObjectManagerClient {
    static getCharacterNameBySkin(skinSlot) {
        if (skinSlot.isNull()) {
            return;
        }
        var skinPointer = skinSlot.readPointer();
        if (skinPointer.isNull()) {
            return;
        }
        var skin = new LogicSkinData(skinPointer);
        if (skin.getCharacter() == null) {
            return;
        }
        return skin.getCharacter().getName();
    }
    static patch() {
        return;
    }
}

var LogicItemClient_decode = Libg.offset(15460500, 0);
var itemOffset = LogicMemory.offset(16);
var itemIdOffset = LogicMemory.offset(60);

class LogicItemClient {
    static patch() {
        return;
    }
}

var LogicProjectileClient_decode = Libg.offset(15477344, 0);
var projectileOffset = LogicMemory.offset(16);
var projectileIdOffset = LogicMemory.offset(60);

class LogicProjectileClient {
    static patch() {
        return;
    }
}

class LogicBattleEmotes {
    constructor(instance) {
        this.instance = instance;
    }
    getLogicBattleEmotesArrayList() {
        if (this.instance.isNull()) {
            return null;
        }
        return new LogicArrayList(this.instance);
    }
    getEmotes() {
        var array = this.getLogicBattleEmotesArrayList();
        if (!array) {
            return null;
        }
        var count = array.getItemsCount();
        var items = [];
        var i = 0;
        while (i < count) {
            var emojiPtr = array.getElement(i);
            if (!emojiPtr.isNull()) {
                items.push(new LogicEmoteData(emojiPtr));
            }
            i++;
        }
        return items;
    }
}

var dropCountOffset = LogicMemory.offset(4);
var LogicGatchaDrop_characterOffset = LogicMemory.offset(8);
var skinOffset = LogicMemory.offset(16);
var vanityItemOffset = LogicMemory.offset(24);
var cardOffset = LogicMemory.offset(32);
var EGatchaDropTypes = {};

class LogicGatchaDrop {
    dropType = 0;
    dropCount = 0;
    constructor(dropType, dropCount, dataIndex, vanityItemType) {
        this.instance = Libc.malloc(LogicGatchaDrop.allocationSize);
        this.instance.add(LogicGatchaDrop_characterOffset).writePointer(NULL);
        this.instance.add(skinOffset).writePointer(NULL);
        this.instance.add(vanityItemOffset).writePointer(NULL);
        this.instance.add(cardOffset).writePointer(NULL);
        this.setDropType(dropType);
        this.setDropCount(dropCount);
        if (dataIndex !== undefined) {
            if (dropType === 1) {
                this.setCharacter(LogicDataTables.getDataById(LogicDataTables.table.Characters, dataIndex));
            } else if (dropType === 4) {
                this.setCard(LogicDataTables.getDataById(LogicDataTables.table.Cards, dataIndex));
            } else if (dropType === 9) {
                this.setSkin(LogicDataTables.getDataById(LogicDataTables.table.Skins, dataIndex));
            } else if (dropType === 11) {
                if (vanityItemType === LogicDataTables.table.Emotes) {
                    this.setVanityItem(LogicDataTables.getDataById(LogicDataTables.table.Emotes, dataIndex));
                } else if (vanityItemType === LogicDataTables.table.Sprays) {
                    this.setVanityItem(LogicDataTables.getDataById(LogicDataTables.table.Sprays, dataIndex));
                } else {
                    EDebugger.addMessage(EDebugger.ERROR, "Not valid VanityItem type!");
                }
            } else if (dropType === 20) {
                this.setCharacter(LogicDataTables.getDataById(LogicDataTables.table.Characters, dataIndex));
            }
        } else {
            EDebugger.addMessage(EDebugger.ERROR, "Not valid data!");
        }
    }
    setDropType(type) {
        this.instance.writeInt(type);
    }
    setDropCount(count) {
        this.instance.add(dropCountOffset).writeInt(count);
    }
    setCharacter(character) {
        this.instance.add(LogicGatchaDrop_characterOffset).writePointer(character.instance);
    }
    setSkin(skin) {
        this.instance.add(skinOffset).writePointer(skin.instance);
    }
    setVanityItem(vanityItem) {
        this.instance.add(vanityItemOffset).writePointer(vanityItem.instance);
    }
    setCard(card) {
        this.instance.add(cardOffset).writePointer(card.instance);
    }
}
LogicGatchaDrop.allocationSize = 56;
