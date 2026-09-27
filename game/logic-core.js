var csvRowOffset = LogicMemory.offset(8);
var globalIdOffset = LogicMemory.offset(32);
var tidColumnIndexOffset = LogicMemory.offset(36);

class LogicData {
    constructor(instance) {
        this.instance = instance;
    }
    getName() {
        return LogicData.getName(this.instance);
    }
    getValueAt(index) {
        return LogicData.getValueAt(this.instance, index);
    }
    getBooleanValueAt(index) {
        return LogicData.getBooleanValueAt(this.instance, index);
    }
    getIntValueAt(index) {
        return LogicData.getIntValueAt(this.instance, index);
    }
    getStringValueAt(index) {
        return StringObject.read(this.getValueAt(index));
    }
    getTID() {
        return LogicData.getTID(this.instance);
    }
    getTIDPointer() {
        return LogicData.getTIDPointer(this.instance);
    }
    getGlobalID() {
        return LogicData.getGlobalID(this.instance);
    }
    getClassID() {
        return LogicData.getClassID(this.instance);
    }
    getInstanceID() {
        return LogicData.getInstanceID(this.instance);
    }
    equals(logicData) {
        return LogicData.equals(this, logicData);
    }
    readU8(fieldOffset) {
        return this.instance.add(fieldOffset).readU8();
    }
    readU16(fieldOffset) {
        return this.instance.add(fieldOffset).readU16();
    }
    readU32(fieldOffset) {
        return this.instance.add(fieldOffset).readU32();
    }
    readS32(fieldOffset) {
        return this.instance.add(fieldOffset).readS32();
    }
    readFloat(fieldOffset) {
        return this.instance.add(fieldOffset).readFloat();
    }
    readPointer(fieldOffset) {
        return this.instance.add(fieldOffset).readPointer();
    }
    readString(fieldOffset) {
        return StringObject.read(this.instance.add(fieldOffset));
    }
    readWrappedPointer(fieldOffset, factory) {
        var fieldPointer = this.readPointer(fieldOffset);
        if (fieldPointer.isNull()) {
            return null;
        }
        return factory(fieldPointer);
    }
    readBoolByte(fieldOffset) {
        return Boolean(this.readU8(fieldOffset));
    }
    writePointer(fieldOffset, value) {
        this.instance.add(fieldOffset).writePointer(value);
    }
    static getName(logicData) {
        return StringObject.read(CSVRow.getName(LogicData.getCsvRow(logicData)));
    }
    static getValueAt(logicData, index) {
        return CSVRow.getValueAt(LogicData.getCsvRow(logicData), index);
    }
    static getBooleanValueAt(data, index) {
        return CSVRow.getBooleanValueAt(LogicData.getCsvRow(data), index);
    }
    static getIntValueAt(logicData, index) {
        return CSVRow.getIntValueAt(LogicData.getCsvRow(logicData), index);
    }
    static getStringValueAt(logicData, index) {
        return StringObject.read(LogicData.getValueAt(logicData, index));
    }
    static getTID(logicData) {
        return StringObject.read(LogicData.getTIDPointer(logicData));
    }
    static getTIDPointer(logicData) {
        var columnIndex = logicData.add(tidColumnIndexOffset).readS32();
        return CSVRow.getValueAt(LogicData.getCsvRow(logicData), columnIndex);
    }
    static getGlobalID(logicData) {
        return logicData.add(globalIdOffset).readInt();
    }
    static getClassID(logicData) {
        var globalId = LogicData.getGlobalID(logicData);
        return GlobalID.getClassID(globalId);
    }
    static getInstanceID(logicData) {
        var globalId = LogicData.getGlobalID(logicData);
        return GlobalID.getInstanceID(globalId);
    }
    static equals(instance, logicData) {
        if (instance.instance == null || logicData.instance == null) {
            return false;
        }
        return instance.instance.equals(logicData.instance);
    }
    static getCsvRow(logicData) {
        return logicData.add(csvRowOffset).readPointer();
    }
}

var dataOffset = LogicMemory.offset(8);

class LogicDataSlot {
    constructor(instance) {
        this.instance = instance;
    }
    getData() {
        return new LogicData(this.instance.add(dataOffset).readPointer());
    }
}

var entriesPointerOffset = LogicMemory.offset(8);
var itemCountOffset = LogicMemory.offset(20);
var tableIndexOffset = LogicMemory.offset(80);
var getItemByNameVtableOffset = LogicMemory.offset(48);

class LogicDataTable {
    constructor(instance) {
        this.instance = instance;
    }
    getItemAt(itemId) {
        var itemPointer = this.getItemPointerAt(itemId);
        if (itemPointer == null || itemPointer.isNull()) {
            return null;
        }
        return LogicDataTables.wrapDataForTable(this.getTableIndex(), itemPointer);
    }
    getItemPointerAt(itemId) {
        if (itemId < 0 || itemId >= this.getItemCount()) {
            return null;
        }
        var entriesPointer = this.instance.add(entriesPointerOffset).readPointer();
        if (entriesPointer.isNull()) {
            return null;
        }
        return entriesPointer.add(itemId * 8).readPointer();
    }
    getItemCount() {
        if (this.instance.isNull()) {
            return 0;
        }
        return this.instance.add(itemCountOffset).readU32();
    }
    getItemByName(name, contextPointer) {
        if (contextPointer === undefined) {
            contextPointer = NULL;
        }
        if (this.instance.isNull()) {
            return null;
        }
        return StringObject.with(name, (stringObjectPointer) => {
            return LogicDataTables.getDataByPtr(this.callGetItemByNameNative(stringObjectPointer, contextPointer));
        });
    }
    getTableIndex() {
        return this.instance.add(tableIndexOffset).readInt();
    }
    callGetItemByNameNative(stringObjectPointer, contextPointer) {
        var vtablePointer = this.instance.readPointer();
        var nativeFunction = new NativeFunction(vtablePointer.add(getItemByNameVtableOffset).readPointer(), "pointer", ["pointer", "pointer", "pointer"]);
        return nativeFunction(this.instance, stringObjectPointer, contextPointer);
    }
}

var LogicDataTableResource_getFileName = Libg.offset(14776164, 0);
var isIOS = Process.platform === "darwin";
var allowedReturnAddrs = null;

class LogicDataTableResource {
    static patch() {
        var bsdCsvPatchPath = "bsd/mods/BSDCsvPatches/";
        var csvFiles = new Set(["csv_logic/themes.csv", "csv_client/effects.csv", "csv_client/music.csv"]);
        var mods = [{ file: "csv_logic/milestones.csv", mod: ModProperties.CustomModNames.oldRankMod }];
        return;
    }
}

var LogicDataTables_getCardForMetaType = new NativeFunction(Libg.offset(14788276, 0), "pointer", ["pointer", "int"]);
var LogicDataTables_getFameTierByFame = new NativeFunction(Libg.offset(14820200, 0), "pointer", ["int"]);
var loginStateUpdateOffset = Libg.offset(11419676, 0);
var LogicDataTables_isLoaded = new NativeFunction(Libg.offset(14802728, 0), "bool", []);
var isTablesLoadedOffset = Libg.offset(19955344, 0);
var LogicDataTables_TABLES = Libg.offset(19955352, 0);
var heroLvlUpMaterial = Libg.offset(19955384, 0);
var fameData = Libg.offset(19955512 + 8, 0);
var TRAINING_LOCATION_NAME = "Training";
var MAX_CLASS_ID = 156;

class LogicDataTables {
    static getTableItemByName(tableID, name) {
        var table = LogicDataTables.getTable(tableID);
        return table.getItemByName(name);
    }
    static getTable(id) {
        var tableArrayIndex = id + 38;
        return new LogicDataTable(LogicDataTables_TABLES.add(tableArrayIndex * 8).readPointer());
    }
    static getLvlUpMaterialData() {
        return new LogicResourceData(heroLvlUpMaterial.readPointer());
    }
    static getFameData() {
        return new LogicResourceData(fameData.readPointer());
    }
    static getFameTierByFame(fame) {
        var tier = LogicDataTables_getFameTierByFame(fame);
        if (tier.isNull()) {
            return null;
        }
        return new LogicFameTierData(tier);
    }
    static getCardForMetaType(character, metaType) {
        var card = LogicDataTables_getCardForMetaType(character.instance, metaType);
        if (card.isNull()) {
            return null;
        }
        return new LogicCardData(card);
    }
    static getTrainingLocationData() {
        var location = LogicDataTables.getLocationByName(TRAINING_LOCATION_NAME);
        if (!location || location.instance.isNull()) {
            return null;
        }
        return location;
    }
    static getDataByPtr(ptr) {
        if (ptr.isNull()) {
            return null;
        }
        var tmpData = new LogicData(ptr);
        return LogicDataTables.getDataById(tmpData.getGlobalID());
    }
    static getDataById(tableId, instanceId) {
        var globalId = tableId;
        if (instanceId !== undefined) {
            globalId = GlobalID.createGlobalID(tableId, instanceId);
        }
        var classId = GlobalID.getClassID(globalId);
        var instancePointer = LogicDataTables.lookupDataPointer(classId, GlobalID.getInstanceID(globalId));
        if (instancePointer == null || instancePointer.isNull()) {
            return null;
        }
        return LogicDataTables.wrapDataForTable(classId, instancePointer);
    }
    static wrapDataForTable(classId, instancePointer) {
        if (classId === LogicDataTables.table.Music) {
            return new LogicMusicData(instancePointer);
        }
        if (classId === LogicDataTables.table.Characters) {
            return new LogicCharacterData(instancePointer);
        }
        if (classId === LogicDataTables.table.Themes) {
            return new LogicThemeData(instancePointer);
        }
        if (classId === LogicDataTables.table.Skins) {
            return new LogicSkinData(instancePointer);
        }
        if (classId === LogicDataTables.table.SkinConfs) {
            return new LogicSkinConfData(instancePointer);
        }
        if (classId === LogicDataTables.table.Emotes) {
            return new LogicEmoteData(instancePointer);
        }
        if (classId === LogicDataTables.table.Cards) {
            return new LogicCardData(instancePointer);
        }
        if (classId === LogicDataTables.table.RandomRewardContainers) {
            return new LogicRandomRewardContainerData(instancePointer);
        }
        if (classId === LogicDataTables.table.RandomRewards) {
            return new LogicRandomRewardData(instancePointer);
        }
        if (classId === LogicDataTables.table.Sprays) {
            return new LogicSprayData(instancePointer);
        }
        if (classId === LogicDataTables.table.ColorGradients) {
            return new LogicColorGradientData(instancePointer);
        }
        if (classId === LogicDataTables.table.Effects) {
            return new LogicEffectData(instancePointer);
        }
        if (classId === LogicDataTables.table.PlayerTitles) {
            return new LogicPlayerTitleData(instancePointer);
        }
        if (classId === LogicDataTables.table.LocationThemes) {
            return new LogicLocationThemeData(instancePointer);
        }
        if (classId === LogicDataTables.table.GameModeVariations) {
            return new LogicGameModeVariationData(instancePointer);
        }
        if (classId === LogicDataTables.table.Locations) {
            return new LogicLocationData(instancePointer);
        }
        return new LogicData(instancePointer);
    }
    static lookupDataPointer(classId, instanceId) {
        if (classId < 1 || classId > MAX_CLASS_ID) {
            return null;
        }
        if (instanceId < 0) {
            return null;
        }
        var table = LogicDataTables.getTable(classId);
        if (table.instance.isNull()) {
            return null;
        }
        return table.getItemPointerAt(instanceId);
    }
    static getSkinByName(name) {
        return LogicDataTables.getTableItemByName(LogicDataTables.table.Skins, name);
    }
    static getCharacterByName(name) {
        return LogicDataTables.getTableItemByName(LogicDataTables.table.Characters, name);
    }
    static getLocationByName(name) {
        return LogicDataTables.getTableItemByName(LogicDataTables.table.Locations, name);
    }
    static getEffectByName(name) {
        return LogicDataTables.getTableItemByName(LogicDataTables.table.Effects, name);
    }
    static getLocationThemeByName(name) {
        return LogicDataTables.getTableItemByName(LogicDataTables.table.LocationThemes, name);
    }
    static getThemesAvailableForGameModeVariation(variation) {
        var locationTable = LogicDataTables.getTable(LogicDataTables.table.Locations);
        var count = locationTable.getItemCount();
        var themes = [];
        var i = 0;
        while (i < count) {
            var location = locationTable.getItemAt(i);
            if (location) {
                var locVariation = location.gameModeVariation;
                if (locVariation.isPlayedOnVeryLargeMap === variation.isPlayedOnVeryLargeMap) {
                    var theme = location.locationTheme;
                    if (!locVariation.isPlayedOnVeryLargeMap || locVariation.getVariation() === variation.getVariation()) {
                        if (!themes.some(function (t) {
                            return t.getGlobalID() === theme.getGlobalID();
                        })) {
                            themes.push(theme);
                        }
                    }
                }
            }
            i++;
        }
        return themes;
    }
    static initializeData() {
        var initializers = [["StringTable", function () {
            return StringTable.onLanguageSet();
        }], ["ThemeSelector", function () {
            return ThemeSelectorManager.init();
        }], ["LocationData", function () {
            return LogicLocationData.applyConfiguredEnvironments();
        }], ["SlowMode", function () {
            return GameMain.applySlowMode(Config.config.SlowMode);
        }]];
        for (var [name, initialize] of initializers) {
            try {
                initialize();
            } catch (error) {
                Logcat.logError("Data initialization failed (".concat(name, "): ", error));
            }
        }
    }
    static patch() {
        return;
    }
}
LogicDataTables.dataInitDone = false;
LogicDataTables.table = { Locales: 1, BillingPackages: 2, Globals: 3, Sounds: 4, Resources: 5, Projectiles: 6, Effects: 7, AllianceBadges: 8, ClientGlobals: 9, ParticleEmitters: 10, HealthBars: 11, Music: 12, Credits: 13, Region: 14, Locations: 15, Characters: 16, AreaEffects: 17, Items: 18, Maps: 19, Skills: 20, Campaign: 21, Bosses: 22, Cards: 23, Animations: 24, AllianceRoles: 25, Tutorial: 26, Tiles: 27, PlayerThumbnails: 28, Skins: 29, Faces: 30, Hints: 36, Pins: 35, Milestones: 39, Messages: 40, Themes: 41, Links: 42, NameColors: 43, SkinConfs: 44, ShopItems: 45, ColorGradients: 46, LocationThemes: 47, GameModeVariations: 48, Challenges: 49, Accessories: 50, LocalNotifications: 51, Emotes: 52, EmoteBundles: 53, PlayerMapEnvironments: 54, MapTemplates: 55, SeasonalSkinSections: 56, SkinCampaigns: 57, RankedRanks: 58, RankedLocations: 59, Carryables: 60, GearLevels: 61, GearBoosts: 62, AllianceLeagueModes: 63, AllianceLeagueRanks: 64, BPPurchasePopup: 65, LocationFeatures: 66, LoginCalendarItems: 67, Sprays: 68, ShopPanelLayouts: 69, ShopStyleSets: 70, GearRarities: 71, FameTiers: 72, MasteryLevels: 73, MasteryHeroConfs: 74, MasteryPoints: 75, PlayerTitles: 76, CatalogCollections: 77, BattleFeats: 78, RandomRewards: 79, RandomRewardContainers: 80, ClubPiggyWins: 81, ClubPiggyLevels: 82, EnumeratedIdLists: 83, AdPlacements: 84, PlayerFrames: 85, SkinRarities: 86, StatusEffects: 87, RankedStarRewards: 88, Collabs: 89, ClassArchetypes: 90, NightMarketBundles: 91, NightMarketItems: 92, EventSlots: 93, SkinAnimSequences: 94, IntroFlows: 95, TrophySeasonRewardLevels: 96, ClubPiggyTypes: 97, ChronosAssetIds: 98, MasteryRewardTypes: 99, AvailabilityWindow: 100, VisualOfferGroupings: 101, CollabGameModes: 102, CompetitivePassTiers: 103, Pricepoints: 104, ProgressionSkinDetails: 105, StringReplacement: 106, MutationComponents: 108, ContestTypes: 109, SkinAlbums: 110, EventModifiers: 111 };

var capacityOffset = 8;
var itemsCountOffset = 12;

class LogicArrayList {
    constructor(capacity) {
        if (capacity === undefined) {
            capacity = 0;
        }
        if (capacity instanceof NativePointer) {
            this.instance = capacity;
            return;
        }
        this.instance = Libc.malloc(LogicArrayList.allocSize);
        var arrayPtr = Libc.malloc(Process.pointerSize * Math.max(1, capacity));
        this.instance.writePointer(arrayPtr);
        this.instance.add(capacityOffset).writeInt(Math.max(1, capacity));
    }
    addIntElement(element) {
        return this.addElement(element, 4, false);
    }
    addFloatElement(element) {
        return this.addElement(element, 4, true);
    }
    addElement(element, offset, asFloat) {
        if (offset === undefined) {
            offset = Process.pointerSize;
        }
        if (asFloat === undefined) {
            asFloat = false;
        }
        var count = this.getItemsCount();
        if (count === this.getCapacity()) {
            var newCapacity = 2 * count;
            if (newCapacity === 0) {
                newCapacity = 5;
            }
            this.ensureCapacity(newCapacity, offset);
        }
        var elemPtr = this.instance.readPointer().add(offset * count);
        if (typeof element === "number") {
            if (!asFloat) {
                elemPtr.writeInt(element);
            } else {
                elemPtr.writeFloat(element);
            }
        } else {
            elemPtr.writePointer(element);
        }
        this.setCount(count + 1);
        return this;
    }
    getElement(index, offset) {
        if (offset === undefined) {
            offset = Process.pointerSize;
        }
        if (!Number.isInteger(index) || index < 0 || index >= this.getItemsCount()) {
            return NULL;
        }
        return this.instance.readPointer().add(offset * index).readPointer();
    }
    getElementBypassCheck(index, offset) {
        if (offset === undefined) {
            offset = Process.pointerSize;
        }
        return this.instance.readPointer().add(offset * index).readPointer();
    }
    getIntElement(index) {
        if (!Number.isInteger(index) || index < 0 || index >= this.getItemsCount()) {
            return NULL;
        }
        return this.instance.readPointer().add(4 * index).readInt();
    }
    getArray() {
        return this.instance.readPointer();
    }
    setCapacity(capacity) {
        this.instance.add(capacityOffset).writeInt(capacity);
    }
    setCount(count) {
        this.instance.add(itemsCountOffset).writeInt(count);
    }
    getCapacity() {
        return this.instance.add(capacityOffset).readInt();
    }
    getItemsCount() {
        return this.instance.add(itemsCountOffset).readInt();
    }
    writeTo(instance) {
        instance.writePointer(this.instance);
        instance.add(capacityOffset).writeInt(this.getCapacity());
    }
    ensureCapacity(length, elementSize) {
        if (elementSize === undefined) {
            elementSize = Process.pointerSize;
        }
        if (this.getCapacity() < length) {
            var alloc = Libc.malloc(elementSize * length);
            var arrayPtr = this.instance.readPointer();
            var itemsCount = this.getItemsCount();
            if (itemsCount >= 1) {
                Memory.copy(alloc, arrayPtr, itemsCount * elementSize);
            }
            Libc.free(arrayPtr);
            this.instance.writePointer(alloc);
            this.setCapacity(length);
        }
    }
}
LogicArrayList.allocSize = 16;

var lowOffset = LogicMemory.offset(4, 4);

class LogicLong {
    constructor(high, low) {
        var logicLong = Libc.malloc(8);
        if (high instanceof NativePointer) {
            logicLong.writeInt(high.readInt());
            logicLong.add(lowOffset).writeInt(high.add(lowOffset).readInt());
        } else {
            logicLong.writeInt(high);
            logicLong.add(lowOffset).writeInt(low);
        }
        this.instance = logicLong;
    }
    getHigh() {
        return this.instance.readInt();
    }
    getLow() {
        return this.instance.add(lowOffset).readInt();
    }
    equals(long) {
        if (!long) {
            return false;
        }
        if (this.getHigh() === long.getHigh()) {
            return this.getLow() === long.getLow();
        }
    }
    toString() {
        return "LogicLong(".concat(this.getHigh(), ", ", this.getLow(), ")");
    }
}

class LogicRandom {
    static getRandomInRangeExcept(min, max, exceptionArray) {
        if (exceptionArray === undefined) {
            exceptionArray = [];
        }
        var result = GameMain.getRand((max - min) + 1) + min;
        if (exceptionArray.includes(result)) {
            return LogicRandom.getRandomInRangeExcept(min, max, exceptionArray);
        }
        return result;
    }
    static random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
}

class LogicTime {
    static timestampToDate(timestamp) {
        var pad = function (value, length) {
            return String(value).padStart(length === undefined ? 2 : length, "0");
        };
        var d = new Date(timestamp);
        return "".concat(pad(d.getDate()), ".", pad(d.getMonth() + 1), ".", pad(d.getFullYear(), 4), " (dd.mm.yyyy)\n  ", pad(d.getHours()), ":", pad(d.getMinutes()), ":", pad(d.getSeconds()), " (hh:mm:ss)");
    }
    static humanizeTime(sec) {
        var s = sec % 60;
        var m = Math.floor(sec / 60) % 60;
        var h = Math.floor(sec / 3600) % 24;
        var d = Math.floor(sec / 86400);
        var parts = [];
        if (d > 0) {
            parts.push("".concat(d, Localisation.getString("DaysShort")));
        }
        if (h > 0) {
            parts.push("".concat(h, Localisation.getString("HoursShort")));
        }
        if (m > 0 || parts.length > 0) {
            parts.push("".concat(m, Localisation.getString("MinsShort")));
        }
        parts.push("".concat(s, Localisation.getString("SecsShort")));
        return parts.join(" ");
    }
}

var bssSegmentAddr = Libg.offset(18064704, 0);
var bssSegmentSize = 211008;

class LogicMemory {
    static offset(offsetArm64, offsetIOS) {
        if (offsetIOS) {
            if (Process.platform === "darwin") {
                return offsetIOS;
            }
        }
        return offsetArm64;
    }
    static byteLength(text) {
        var utf8Length = text.length;
        var i = text.length - 1;
        while (i >= 0) {
            var codePoint = text.charCodeAt(i);
            if (codePoint > 127 && codePoint <= 2047) {
                utf8Length++;
            }
            if (codePoint > 2047 && codePoint <= 65535) {
                utf8Length = utf8Length + 2;
            }
            if (codePoint >= 56320 && codePoint <= 57343) {
                i--;
            }
            i--;
        }
        return utf8Length;
    }
    static fillWithZeroes(destination, length) {
        return;
    }
    static ensurePointer(value) {
        if (typeof value === "string") {
            return Memory.allocUtf8String(value);
        }
        return value;
    }
    static clearBssSegment(timeout) {
        return;
    }
    static cloneU8Field(destination, source, fieldOffset) {
        destination.add(fieldOffset).writeU8(source.add(fieldOffset).readU8());
    }
    static cloneU32Field(destination, source, fieldOffset) {
        destination.add(fieldOffset).writeU32(source.add(fieldOffset).readU32());
    }
    static clonePointerField(destination, source, fieldOffset) {
        destination.add(fieldOffset).writePointer(source.add(fieldOffset).readPointer());
    }
}

var LogicClientGlobals_createReferencesCustom = new NativeFunction(Libg.offset(14641660, 0), "void", ["pointer"]);
var brawlPassInShopOffset = LogicMemory.offset(917);
var competitivePassInShopOffset = LogicMemory.offset(918);

class LogicClientGlobals extends LogicDataTable {
    constructor(instance) {
        super(instance);
    }
    static patch() {
        return;
    }
}
