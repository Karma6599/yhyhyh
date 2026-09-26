// =============================================================
// LOGIC CORE FRAMEWORK
// merged webpack modules: 6794 LogicData, 9366 LogicDataSlot, 1612 LogicDataTable, 1724 LogicDataTableResource, 6139 LogicDataTables, 5417 LogicArrayList, 2743 LogicLong, 884 LogicRandom, 1994 LogicTime, 1588 LogicMemory, 1777 LogicClientGlobals
// =============================================================

// --------------------- MODULE 6794 — LogicData ---------------------

// ============================================================ //
// webpack module 6794  —  LogicData
// exports: LogicData
// deps: 1588 (LogicMemory), 5603 (CSVRow), 7535 (StringObject), 8341 (GlobalID)
// ============================================================ //

__webpack_modules__[6794] = function LogicData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, StringObject, CSVRow, GlobalID, csvRowOffset, globalIdOffset, tidColumnIndexOffset, LogicData, <class_fields_init>, LogicData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicData = undefined;
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        CSVRow = __webpack_require__(5603);
        GlobalID = __webpack_require__(8341);
        csvRowOffset = ((LogicMemory).LogicMemory).offset(8);
        globalIdOffset = ((LogicMemory).LogicMemory).offset(32);
        tidColumnIndexOffset = ((LogicMemory).LogicMemory).offset(36);
        static getName () {
        return (LogicData).getName((this).instance);
};
        static getValueAt (index) {
        return (LogicData).getValueAt((this).instance, index);
};
        static getBooleanValueAt (index) {
        return (LogicData).getBooleanValueAt((this).instance, index);
};
        static getIntValueAt (index) {
        return (LogicData).getIntValueAt((this).instance, index);
};
        static getStringValueAt (index) {
        return ((StringObject).StringObject).read((this).getValueAt(index));
};
        static getTID () {
        return (LogicData).getTID((this).instance);
};
        static getTIDPointer () {
        return (LogicData).getTIDPointer((this).instance);
};
        static getGlobalID () {
        return (LogicData).getGlobalID((this).instance);
};
        static getClassID () {
        return (LogicData).getClassID((this).instance);
};
        static getInstanceID () {
        return (LogicData).getInstanceID((this).instance);
};
        static equals (logicData) {
        return (LogicData).equals(this, logicData);
};
        static readU8 (fieldOffset) {
        return (((this).instance).add(fieldOffset)).readU8();
};
        static readU16 (fieldOffset) {
        return (((this).instance).add(fieldOffset)).readU16();
};
        static readU32 (fieldOffset) {
        return (((this).instance).add(fieldOffset)).readU32();
};
        static readS32 (fieldOffset) {
        return (((this).instance).add(fieldOffset)).readS32();
};
        static readFloat (fieldOffset) {
        return (((this).instance).add(fieldOffset)).readFloat();
};
        static readPointer (fieldOffset) {
        return (((this).instance).add(fieldOffset)).readPointer();
};
        static readString (fieldOffset) {
        return ((StringObject).StringObject).read(((this).instance).add(fieldOffset));
};
        static readWrappedPointer (fieldOffset, factory) {
    var fieldPointer;
        fieldPointer = (this).readPointer(fieldOffset);
        if ((fieldPointer).isNull()) {
            return null;
        } /* if 0x67757 */
        return factory(fieldPointer);
};
        static readBoolByte (fieldOffset) {
        return Boolean((this).readU8(fieldOffset));
};
        static writePointer (fieldOffset, value) {
        return;
};
        <class_fields_init> = undefined;
        LogicData;
        class LogicData {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x67381 */
        this.instance = instance;
        return;
}
            getName (logicData) {
        return ((StringObject).StringObject).read(((CSVRow).CSVRow).getName((LogicData).getCsvRow(logicData)));
}
            getValueAt (logicData, index) {
        return ((CSVRow).CSVRow).getValueAt((LogicData).getCsvRow(logicData), index);
}
            getBooleanValueAt (data, index) {
        return ((CSVRow).CSVRow).getBooleanValueAt((LogicData).getCsvRow(data), index);
}
            getIntValueAt (logicData, index) {
        return ((CSVRow).CSVRow).getIntValueAt((LogicData).getCsvRow(logicData), index);
}
            getStringValueAt (logicData, index) {
        return ((StringObject).StringObject).read((LogicData).getValueAt(logicData, index));
}
            getTID (logicData) {
        return ((StringObject).StringObject).read((LogicData).getTIDPointer(logicData));
}
            getTIDPointer (logicData) {
    var columnIndex;
        columnIndex = ((logicData).add(tidColumnIndexOffset)).readS32();
        return ((CSVRow).CSVRow).getValueAt((LogicData).getCsvRow(logicData), columnIndex);
}
            getGlobalID (logicData) {
        return ((logicData).add(globalIdOffset)).readInt();
}
            getClassID (logicData) {
    var globalId;
        globalId = (this).getGlobalID(logicData);
        return ((GlobalID).GlobalID).getClassID(globalId);
}
            getInstanceID (logicData) {
    var globalId;
        globalId = (this).getGlobalID(logicData);
        return ((GlobalID).GlobalID).getInstanceID(globalId);
}
            equals (instance, logicData) {
        if ((((instance).instance) == null)) {
        } /* if 0x67aa1 */
        if ((((logicData).instance) == null)) {
            return (instance = instance).equals(instance);
        } /* if 0x67ab3 (open) */
}
            getCsvRow (logicData) {
        return ((logicData).add(csvRowOffset)).readPointer();
}
        }
        LogicData = <class_fields_init> = LogicData;
        exports.LogicData = LogicData;
        return;
};

// --------------------- MODULE 9366 — LogicDataSlot ---------------------

// ============================================================ //
// webpack module 9366  —  LogicDataSlot
// exports: LogicDataSlot
// deps: 1588 (LogicMemory), 6794 (LogicData)
// ============================================================ //

__webpack_modules__[9366] = function LogicDataSlot_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicData, dataOffset, LogicDataSlot, <class_fields_init>, LogicDataSlot;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicDataSlot = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        dataOffset = ((LogicMemory).LogicMemory).offset(8);
        static getData () {
        return new (LogicData).LogicData((((this).instance).add(dataOffset)).readPointer());
};
        <class_fields_init> = undefined;
        LogicDataSlot;
        class LogicDataSlot {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x67bd6 */
        this.instance = instance;
        return;
}
        }
        LogicDataSlot = LogicDataSlot = LogicDataSlot;
        exports.LogicDataSlot = LogicDataSlot;
        return;
};

// --------------------- MODULE 1612 — LogicDataTable ---------------------

// ============================================================ //
// webpack module 1612  —  LogicDataTable
// exports: LogicDataTable
// deps: 1588 (LogicMemory), 6139 (LogicDataTables), 7535 (StringObject)
// ============================================================ //

__webpack_modules__[1612] = function LogicDataTable_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringObject, LogicMemory, LogicDataTables, entriesPointerOffset, itemCountOffset, tableIndexOffset, getItemByNameVtableOffset, LogicDataTable, <class_fields_init>, LogicDataTable;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicDataTable = undefined;
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        LogicDataTables = __webpack_require__(6139);
        entriesPointerOffset = ((LogicMemory).LogicMemory).offset(8);
        itemCountOffset = ((LogicMemory).LogicMemory).offset(20);
        tableIndexOffset = ((LogicMemory).LogicMemory).offset(80);
        getItemByNameVtableOffset = ((LogicMemory).LogicMemory).offset(48);
        static getItemAt (itemId) {
    var itemPointer;
        itemPointer = (this).getItemPointerAt(itemId);
        if (!(!itemPointer)) {
            if ((itemPointer).isNull()) {
                return null;
            } /* if 0x67e08 */
        } /* if 0x67e04 */
        return ((LogicDataTables).LogicDataTables).wrapDataForTable((this).getTableIndex(), itemPointer);
};
        static getItemPointerAt (itemId) {
    var entriesPointer;
        if (!(itemId < 0)) {
            if ((itemId >= (this).getItemCount())) {
                return null;
            } /* if 0x67e66 */
        } /* if 0x67e62 */
        entriesPointer = (((this).instance).add(entriesPointerOffset)).readPointer();
        if ((entriesPointer).isNull()) {
            return null;
        } /* if 0x67e8f */
        return ((entriesPointer).add((itemId * 8))).readPointer();
};
        static getItemCount () {
        if (((this).instance).isNull()) {
            return 0;
        } /* if 0x67ed9 */
        return (((this).instance).add(itemCountOffset)).readU32();
};
        static getItemByName (name) {
    var ptr, name, ptr;
        ptr = this;
        ptr = name;
        if (((ptr) === undefined)) {
            name = ptr = NULL;
        } /* if 0x67f40 */
        if (((ptr).instance).isNull()) {
            return null;
        } /* if 0x67f53 */
        return ((StringObject).StringObject).with(name, function (stringObjectPointer) {
        return ((LogicDataTables).LogicDataTables).getDataByPtr((this).callGetItemByNameNative(stringObjectPointer, ptr));
});
};
        static getTableIndex () {
        return (((this).instance).add(tableIndexOffset)).readInt();
};
        static callGetItemByNameNative (stringObjectPointer, contextPointer) {
    var vtablePointer, nativeFunction;
        vtablePointer = ((this).instance).readPointer();
        nativeFunction = new NativeFunction(((vtablePointer).add(getItemByNameVtableOffset)).readPointer(), "pointer", ["pointer", "pointer", "pointer"]);
        return nativeFunction((this).instance, stringObjectPointer, contextPointer);
};
        <class_fields_init> = undefined;
        LogicDataTable;
        class LogicDataTable {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x67db3 */
        this.instance = instance;
        return;
}
        }
        LogicDataTable = <class_fields_init> = LogicDataTable;
        exports.LogicDataTable = LogicDataTable;
        return;
};

// --------------------- MODULE 1724 — LogicDataTableResource ---------------------

// ============================================================ //
// webpack module 1724  —  LogicDataTableResource
// exports: LogicDataTableResource
// deps: 699 (FileManager), 2214 (ModProperties), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1724] = function LogicDataTableResource_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, ModProperties, FileManager, StringObject, LogicDataTableResource_getFileName, isIOS, allowedReturnAddrs, LogicDataTableResource, <class_fields_init>, LogicDataTableResource;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicDataTableResource = undefined;
        Libg = __webpack_require__(9878);
        ModProperties = __webpack_require__(2214);
        FileManager = __webpack_require__(699);
        StringObject = __webpack_require__(7535);
        LogicDataTableResource_getFileName = ((Libg).Libg).offset(14776164, 0);
        isIOS = ((Process).platform === "darwin");
        if (isIOS) {
        } /* if 0x68177 */
        /* jump -> 0x68178 */
        allowedReturnAddrs = null;
        <class_fields_init> = undefined;
        LogicDataTableResource;
        class LogicDataTableResource {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x683bd (open) */
}
            patch () {
    var bsdCsvPatchPath, csvFiles, mods;
        bsdCsvPatchPath = "bsd/mods/BSDCsvPatches/";
        csvFiles = new Set(["csv_logic/themes.csv", "csv_client/effects.csv", "csv_client/music.csv"]);
        bsdCsvPatchPath = csvFiles = mods = <underflow>.path = { file: "csv_logic/milestones.csv", mod: ((ModProperties).CustomModNames).oldRankMod };
        mods = [bsdCsvPatchPath = csvFiles = mods = <underflow>];
        return;
}
        }
        LogicDataTableResource = <class_fields_init> = LogicDataTableResource;
        exports.LogicDataTableResource = LogicDataTableResource;
        return;
};

// --------------------- MODULE 6139 — LogicDataTables ---------------------

// ============================================================ //
// webpack module 6139  —  LogicDataTables
// exports: LogicDataTables, isTablesLoadedOffset
// deps: 944 (LogicLocationThemeData), 1612 (LogicDataTable), 2118 (LogicResourceData), 2202 (LogicRandomRewardData), 2567 (LogicEffectData), 3311 (LogicRandomRewardContainerData), 3380 (Logcat), 3503 (LogicMusicData), 3555 (LogicSkinData), 4009 (Config), 4325 (LogicLocationData), 4629 (LogicPlayerTitleData), 5257 (LogicSkinConfData), 6253 (LogicThemeData), 6292 (LogicCardData), 6794 (LogicData), 7171 (LogicCharacterData), 7269 (LogicFameTierData), 7493 (LogicSprayData), 7559 (LogicColorGradientData) ...
// ============================================================ //

__webpack_modules__[6139] = function LogicDataTables_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicDataTable, GlobalID, LogicThemeData, LogicData, LogicCharacterData, LogicMusicData, LogicSkinData, LogicSkinConfData, LogicResourceData, LogicEmoteData, LogicCardData, LogicRandomRewardContainerData, LogicRandomRewardData, LogicSprayData, LogicColorGradientData, ThemeSelector, StringTable, LogicEffectData, LogicPlayerTitleData, LogicLocationThemeData, LogicGameModeVariationData, LogicLocationData, LogicFameTierData, Config, GameMain, Logcat, LogicDataTables_getCardForMetaType, LogicDataTables_getFameTierByFame, loginStateUpdateOffset, LogicDataTables_isLoaded, LogicDataTables_TABLES, heroLvlUpMaterial, fameData, TRAINING_LOCATION_NAME, MAX_CLASS_ID, LogicDataTables, <class_fields_init>, LogicDataTables;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.isTablesLoadedOffset = undefined;
        undefined.LogicDataTables = exports;
        Libg = __webpack_require__(9878);
        LogicDataTable = __webpack_require__(1612);
        GlobalID = __webpack_require__(8341);
        LogicThemeData = __webpack_require__(6253);
        LogicData = __webpack_require__(6794);
        LogicCharacterData = __webpack_require__(7171);
        LogicMusicData = __webpack_require__(3503);
        LogicSkinData = __webpack_require__(3555);
        LogicSkinConfData = __webpack_require__(5257);
        LogicResourceData = __webpack_require__(2118);
        LogicEmoteData = __webpack_require__(8040);
        LogicCardData = __webpack_require__(6292);
        LogicRandomRewardContainerData = __webpack_require__(3311);
        LogicRandomRewardData = __webpack_require__(2202);
        LogicSprayData = __webpack_require__(7493);
        LogicColorGradientData = __webpack_require__(7559);
        ThemeSelector = __webpack_require__(9244);
        StringTable = __webpack_require__(9250);
        LogicEffectData = __webpack_require__(2567);
        LogicPlayerTitleData = __webpack_require__(4629);
        LogicLocationThemeData = __webpack_require__(944);
        LogicGameModeVariationData = __webpack_require__(9822);
        LogicLocationData = __webpack_require__(4325);
        LogicFameTierData = __webpack_require__(7269);
        Config = __webpack_require__(4009);
        GameMain = __webpack_require__(8775);
        Logcat = __webpack_require__(3380);
        LogicDataTables_getCardForMetaType = new NativeFunction(((Libg).Libg).offset(14788276, 0), "pointer", ["pointer", "int"]);
        LogicDataTables_getFameTierByFame = new NativeFunction(((Libg).Libg).offset(14820200, 0), "pointer", ["int"]);
        loginStateUpdateOffset = ((Libg).Libg).offset(11419676, 0);
        LogicDataTables_isLoaded = new NativeFunction(((Libg).Libg).offset(14802728, 0), "bool", []);
        exports.isTablesLoadedOffset = ((Libg).Libg).offset(19955344, 0);
        LogicDataTables_TABLES = ((Libg).Libg).offset(19955352, 0);
        heroLvlUpMaterial = ((Libg).Libg).offset(19955384, 0);
        fameData = ((Libg).Libg).offset((19955512 + 8), 0);
        TRAINING_LOCATION_NAME = "Training";
        MAX_CLASS_ID = 156;
        <class_fields_init> = undefined;
        LogicDataTables;
        class LogicDataTables {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x69655 (open) */
}
            getTableItemByName (tableID, name) {
    var table;
        table = (LogicDataTables).getTable(tableID);
        return (table).getItemByName(name);
}
            getTable (id) {
    var tableArrayIndex;
        if (((Process).platform === "darwin")) {
        } /* if 0x68c23 */
        /* jump -> 0x68c27 */
        tableArrayIndex = (id + 38);
        return new (LogicDataTable).LogicDataTable(((LogicDataTables_TABLES).add((tableArrayIndex * 8))).readPointer());
}
            getLvlUpMaterialData () {
        return new (LogicResourceData).LogicResourceData((heroLvlUpMaterial).readPointer());
}
            getFameData () {
        return new (LogicResourceData).LogicResourceData((fameData).readPointer());
}
            getFameTierByFame (fame) {
    var tier;
        tier = LogicDataTables_getFameTierByFame(fame);
        if ((tier).isNull()) {
            return null;
        } /* if 0x68cef */
        return new (LogicFameTierData).LogicFameTierData(tier);
}
            getCardForMetaType (character, metaType) {
    var card;
        card = LogicDataTables_getCardForMetaType((character).instance, metaType);
        if ((card).isNull()) {
            return null;
        } /* if 0x68d49 */
        return new (LogicCardData).LogicCardData(card);
}
            getTrainingLocationData () {
    var location;
        location = (LogicDataTables).getLocationByName(TRAINING_LOCATION_NAME);
        if (!(!location)) {
            if (((location).instance).isNull()) {
                return null;
            } /* if 0x68da7 */
        } /* if 0x68da3 */
        return location;
}
            getDataByPtr (ptr) {
    var tmpData;
        if ((ptr).isNull()) {
            return null;
        } /* if 0x68de2 */
        tmpData = new (LogicData).LogicData(ptr);
        return (LogicDataTables).getDataById((tmpData).getGlobalID());
}
            getDataById (tableId, instanceId) {
    var globalId, classId, instancePointer;
        if ((instanceId !== undefined)) {
        } /* if 0x68e63 */
        /* jump -> 0x68e64 */
        globalId = tableId;
        classId = ((GlobalID).GlobalID).getClassID(globalId);
        instancePointer = (LogicDataTables).lookupDataPointer(classId, ((GlobalID).GlobalID).getInstanceID(globalId));
        if (!(!instancePointer)) {
            if ((instancePointer).isNull()) {
                return null;
            } /* if 0x68eb2 */
        } /* if 0x68eae */
        return (LogicDataTables).wrapDataForTable(classId, instancePointer);
}
            wrapDataForTable (classId, instancePointer) {
        if ((classId === ((LogicDataTables).table).Music)) {
            return new (LogicMusicData).LogicMusicData(instancePointer);
        } /* if 0x68f4f */
        if ((classId === ((LogicDataTables).table).Characters)) {
            return new (LogicCharacterData).LogicCharacterData(instancePointer);
        } /* if 0x68f6e */
        if ((classId === ((LogicDataTables).table).Themes)) {
            return new (LogicThemeData).LogicThemeData(instancePointer);
        } /* if 0x68f8d */
        if ((classId === ((LogicDataTables).table).Skins)) {
            return new (LogicSkinData).LogicSkinData(instancePointer);
        } /* if 0x68fac */
        if ((classId === ((LogicDataTables).table).SkinConfs)) {
            return new (LogicSkinConfData).LogicSkinConfData(instancePointer);
        } /* if 0x68fcb */
        if ((classId === ((LogicDataTables).table).Emotes)) {
            return new (LogicEmoteData).LogicEmoteData(instancePointer);
        } /* if 0x68fea */
        if ((classId === ((LogicDataTables).table).Cards)) {
            return new (LogicCardData).LogicCardData(instancePointer);
        } /* if 0x69009 */
        if ((classId === ((LogicDataTables).table).RandomRewardContainers)) {
            return new (LogicRandomRewardContainerData).LogicRandomRewardContainerData(instancePointer);
        } /* if 0x69028 */
        if ((classId === ((LogicDataTables).table).RandomRewards)) {
            return new (LogicRandomRewardData).LogicRandomRewardData(instancePointer);
        } /* if 0x69047 */
        if ((classId === ((LogicDataTables).table).Sprays)) {
            return new (LogicSprayData).LogicSprayData(instancePointer);
        } /* if 0x69066 */
        if ((classId === ((LogicDataTables).table).ColorGradients)) {
            return new (LogicColorGradientData).LogicColorGradientData(instancePointer);
        } /* if 0x69085 */
        if ((classId === ((LogicDataTables).table).Effects)) {
            return new (LogicEffectData).LogicEffectData(instancePointer);
        } /* if 0x690a4 */
        if ((classId === ((LogicDataTables).table).PlayerTitles)) {
            return new (LogicPlayerTitleData).LogicPlayerTitleData(instancePointer);
        } /* if 0x690c3 */
        if ((classId === ((LogicDataTables).table).LocationThemes)) {
            return new (LogicLocationThemeData).LogicLocationThemeData(instancePointer);
        } /* if 0x690e2 */
        if ((classId === ((LogicDataTables).table).GameModeVariations)) {
            return new (LogicGameModeVariationData).LogicGameModeVariationData(instancePointer);
        } /* if 0x69101 */
        if ((classId === ((LogicDataTables).table).Locations)) {
            return new (LogicLocationData).LogicLocationData(instancePointer);
        } /* if 0x69120 */
        return new (LogicData).LogicData(instancePointer);
}
            lookupDataPointer (classId, instanceId) {
    var table;
        if (!(classId < 1)) {
            if ((classId > MAX_CLASS_ID)) {
                return null;
            } /* if 0x6918d */
        } /* if 0x69189 */
        if ((instanceId < 0)) {
            return null;
        } /* if 0x69194 */
        table = (LogicDataTables).getTable(classId);
        if (((table).instance).isNull()) {
            return null;
        } /* if 0x691b5 */
        return (table).getItemPointerAt(instanceId);
}
            getSkinByName (name) {
        return (LogicDataTables).getTableItemByName(((LogicDataTables).table).Skins, name);
}
            getCharacterByName (name) {
        return (LogicDataTables).getTableItemByName(((LogicDataTables).table).Characters, name);
}
            getLocationByName (name) {
        return (LogicDataTables).getTableItemByName(((LogicDataTables).table).Locations, name);
}
            getEffectByName (name) {
        return (LogicDataTables).getTableItemByName(((LogicDataTables).table).Effects, name);
}
            getLocationThemeByName (name) {
        return (LogicDataTables).getTableItemByName(((LogicDataTables).table).LocationThemes, name);
}
            getThemesAvailableForGameModeVariation (variation) {
    var locationTable, count, themes, i, location, locVariation, theme;
        locationTable = (LogicDataTables).getTable(((LogicDataTables).table).Locations);
        count = (locationTable).getItemCount();
        themes = [];
        i = 0;
        while ((i < count)) {
            location = (locationTable).getItemAt(i);
            if (!(!location)) {
                locVariation = (location).gameModeVariation;
                if (((locVariation).isPlayedOnVeryLargeMap === (variation).isPlayedOnVeryLargeMap)) {
                    theme = (location).locationTheme;
                    if ((locVariation).isPlayedOnVeryLargeMap) {
                        if (((locVariation).getVariation() !== (variation).getVariation())) {
                        } /* if 0x693b8 */
                    } /* if 0x693b8 */
                } /* if 0x693da */
            } /* if 0x693da */
            /* jump -> 0x693da */
            if ((!(themes).some(function (t) {
        return ((t).getGlobalID() === (theme).getGlobalID());
}))) {
                (themes).push(theme);
            } /* if 0x693d7 */
            i = ((i) + 1);
            (i++);
            return themes;
        } /* while 0x693e8 (open) */
}
            initializeData () {
    var initializers, name, initialize, error;
        initializers = [["StringTable", function () {
        return ((StringTable).StringTable).onLanguageSet();
}], ["ThemeSelector", function () {
        return ((ThemeSelector).ThemeSelectorManager).init();
}], ["LocationData", function () {
        return ((LogicLocationData).LogicLocationData).applyConfiguredEnvironments();
}], ["SlowMode", function () {
        return ((GameMain).GameMain).applySlowMode((((Config).Config).config).SlowMode);
}]];
        /* jump -> 0x694eb */
        name = /*iter*/ initializers;
        initialize = name = initialize = initializers = <underflow>;
        /* CATCH -> 0x694bd (try region) */
        initialize();
        /* jump -> 0x694eb */
        error = <underflow>;
        /* CATCH -> 0x694ed (try region) */
        ((Logcat).Logcat).logError(("Data initialization failed (").concat(name, "): ", error));
        /* jump -> 0x694eb */
        throw <underflow>;
        } while (!<underflow>);
        return;
}
            patch () {
        return;
}
        }
        LogicDataTables = LogicSkinConfData = LogicDataTables;
        exports.LogicDataTables = LogicDataTables;
        LogicDataTables.dataInitDone = false;
        LogicDataTables.table = { Locales: 1, BillingPackages: 2, Globals: 3, Sounds: 4, Resources: 5, Projectiles: 6, Effects: 7, AllianceBadges: 8, ClientGlobals: 9, ParticleEmitters: 10, HealthBars: 11, Music: 12, Credits: 13, Region: 14, Locations: 15, Characters: 16, AreaEffects: 17, Items: 18, Maps: 19, Skills: 20, Campaign: 21, Bosses: 22, Cards: 23, Animations: 24, AllianceRoles: 25, Tutorial: 26, Tiles: 27, PlayerThumbnails: 28, Skins: 29, Faces: 30, Hints: 36, Pins: 35, Milestones: 39, Messages: 40, Themes: 41, Links: 42, NameColors: 43, SkinConfs: 44, ShopItems: 45, ColorGradients: 46, LocationThemes: 47, GameModeVariations: 48, Challenges: 49, Accessories: 50, LocalNotifications: 51, Emotes: 52, EmoteBundles: 53, PlayerMapEnvironments: 54, MapTemplates: 55, SeasonalSkinSections: 56, SkinCampaigns: 57, RankedRanks: 58, RankedLocations: 59, Carryables: 60, GearLevels: 61, GearBoosts: 62, AllianceLeagueModes: 63, AllianceLeagueRanks: 64, BPPurchasePopup: 65, LocationFeatures: 66, LoginCalendarItems: 67, Sprays: 68, ShopPanelLayouts: 69, ShopStyleSets: 70, GearRarities: 71, FameTiers: 72, MasteryLevels: 73, MasteryHeroConfs: 74, MasteryPoints: 75, PlayerTitles: 76, CatalogCollections: 77, BattleFeats: 78, RandomRewards: 79, RandomRewardContainers: 80, ClubPiggyWins: 81, ClubPiggyLevels: 82, EnumeratedIdLists: 83, AdPlacements: 84, PlayerFrames: 85, SkinRarities: 86, StatusEffects: 87, RankedStarRewards: 88, Collabs: 89, ClassArchetypes: 90, NightMarketBundles: 91, NightMarketItems: 92, EventSlots: 93, SkinAnimSequences: 94, IntroFlows: 95, TrophySeasonRewardLevels: 96, ClubPiggyTypes: 97, ChronosAssetIds: 98, MasteryRewardTypes: 99, AvailabilityWindow: 100, VisualOfferGroupings: 101, CollabGameModes: 102, CompetitivePassTiers: 103, Pricepoints: 104, ProgressionSkinDetails: 105, StringReplacement: 106, MutationComponents: 108, ContestTypes: 109, SkinAlbums: 110, EventModifiers: 111 };
        return;
};

// --------------------- MODULE 5417 — LogicArrayList ---------------------

// ============================================================ //
// webpack module 5417  —  LogicArrayList
// exports: LogicArrayList
// deps: 1978 (Libc)
// ============================================================ //

__webpack_modules__[5417] = function LogicArrayList_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, capacityOffset, itemsCountOffset, LogicArrayList, <class_fields_init>, LogicArrayList;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicArrayList = undefined;
        Libc = __webpack_require__(1978);
        capacityOffset = 8;
        itemsCountOffset = 12;
        static addIntElement (element) {
        return;
};
        static addFloatElement (element) {
        return;
};
        static addElement (element) {
    var offset, asFloat, element, offset, asFloat, count, rawCapacity, newCapacityAmount, newCount, elemPtr;
        newCount = this;
        offset = element;
        if (((offset) === undefined)) {
            asFloat = offset = (Process).pointerSize;
        } /* if 0x64d05 */
        element = asFloat;
        offset = (newCount).getItemsCount();
        if ((offset === (newCount).getCapacity())) {
            asFloat = (2 * offset);
            if ((asFloat !== 0)) {
            } /* if 0x64d45 */
            /* jump -> 0x64d46 */
            count = 5;
            (newCount).ensureCapacity(count, offset);
        } /* if 0x64d57 */
        rawCapacity = (offset + 1);
        newCapacityAmount = (((newCount).instance).readPointer()).add((offset * offset));
        if ((typeof element === "number")) {
            if ((!asFloat)) {
                (newCapacityAmount).writeInt(element);
            } /* if 0x64d99 */
        } /* if 0x64da8 */
        /* jump -> 0x64db5 */
        (newCapacityAmount).writeFloat(element);
        /* jump -> 0x64db5 */
        (newCapacityAmount).writePointer(element);
        (newCount).setCount(rawCapacity);
        return newCount;
};
        static getElement (index) {
    var offset, index, offset;
        offset = this;
        offset = index;
        if (((offset) === undefined)) {
            index = offset = (Process).pointerSize;
        } /* if 0x64e1d */
        if (!(!(Number).isInteger(index))) {
            (!(Number).isInteger(index));
            if (!(index < 0)) {
                if ((index >= (offset).getItemsCount())) {
                    return NULL;
                } /* if 0x64e4b */
            } /* if 0x64e43 */
        } /* if 0x64e43 */
        return ((((offset).instance).readPointer()).add((offset * index))).readPointer();
};
        static getElementBypassCheck (index) {
    var offset, index, offset;
        offset = this;
        offset = index;
        if (((offset) === undefined)) {
            index = offset = (Process).pointerSize;
        } /* if 0x64eb7 */
        return ((((offset).instance).readPointer()).add((offset * index))).readPointer();
};
        static getIntElement (index) {
        if (!(!(Number).isInteger(index))) {
            (!(Number).isInteger(index));
            if (!(index < 0)) {
                if ((index >= (this).getItemsCount())) {
                    return NULL;
                } /* if 0x64f23 */
            } /* if 0x64f1b */
        } /* if 0x64f1b */
        return (((this).instance).readPointer()).add((4 * index));
};
        static getArray () {
        return ((this).instance).readPointer();
};
        static setCapacity (capacity) {
        return;
};
        static setCount (count) {
        return;
};
        static getCapacity () {
        return (((this).instance).add(capacityOffset)).readInt();
};
        static getItemsCount () {
        return (((this).instance).add(itemsCountOffset)).readInt();
};
        static writeTo (instance) {
        (instance).writePointer((this).instance);
        ((instance).add(capacityOffset)).writeInt((this).getCapacity());
        return;
};
        static ensureCapacity (length) {
    var elementSize, length, elementSize, alloc, arrayPtr, itemsCount;
        itemsCount = this;
        elementSize = length;
        if (((elementSize) === undefined)) {
            length = elementSize = (Process).pointerSize;
        } /* if 0x65118 */
        if (((itemsCount).getCapacity() < length)) {
            elementSize = ((Libc).Libc).malloc((elementSize * length));
            alloc = ((itemsCount).instance).readPointer();
            arrayPtr = (itemsCount).getItemsCount();
            if ((arrayPtr >= 1)) {
                (Memory).copy(elementSize, alloc, (arrayPtr * elementSize));
            } /* if 0x65183 */
            ((Libc).Libc).free(alloc);
            ((itemsCount).instance).writePointer(elementSize);
            (itemsCount).setCapacity(length);
            return;
        } /* if 0x651b9 (open) */
};
        <class_fields_init> = undefined;
        LogicArrayList;
        class LogicArrayList {
            constructor () {
    var capacity, capacity, arrayPtr;
        arrayPtr = this;
        if (<class_fields_init>) {
        } /* if 0x64b85 */
        if (((capacity) === undefined)) {
            capacity = capacity = 0;
        } /* if 0x64b91 */
        if ((capacity instanceof NativePointer)) {
            arrayPtr.instance = capacity;
            return;
        } /* if 0x64ba6 */
        arrayPtr.instance = ((Libc).Libc).malloc((LogicArrayList).allocSize);
        capacity = ((Libc).Libc).malloc(((Process).pointerSize * (Math).max(1, capacity)));
        ((arrayPtr).instance).writePointer(capacity);
        (((arrayPtr).instance).add(capacityOffset)).writeInt(capacity);
        return;
}
        }
        LogicArrayList = LogicArrayList = LogicArrayList;
        exports.LogicArrayList = LogicArrayList;
        LogicArrayList.allocSize = 16;
        return;
};

// --------------------- MODULE 2743 — LogicLong ---------------------

// ============================================================ //
// webpack module 2743  —  LogicLong
// exports: LogicLong
// deps: 1588 (LogicMemory), 1978 (Libc)
// ============================================================ //

__webpack_modules__[2743] = function LogicLong_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, LogicMemory, lowOffset, LogicLong, <class_fields_init>, LogicLong;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicLong = undefined;
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        lowOffset = ((LogicMemory).LogicMemory).offset(4, 4);
        static getHigh () {
        return ((this).instance).readInt();
};
        static getLow () {
        return (((this).instance).add(lowOffset)).readInt();
};
        static equals (long) {
        if ((!long)) {
            return false;
        } /* if 0x5fc65 */
        if (((this).getHigh() === (long).getHigh())) {
            ((this).getHigh() === (long).getHigh());
            return ((this).getLow() === (long).getLow());
        } /* if 0x5fc8f (open) */
};
        static toString () {
        return ("LogicLong(").concat((this).getHigh(), ", ", (this).getLow(), ")");
};
        <class_fields_init> = undefined;
        LogicLong;
        class LogicLong {
            constructor (high, low) {
    var logicLong;
        if (<class_fields_init>) {
        } /* if 0x5fb4e */
        logicLong = ((Libc).Libc).malloc(8);
        if ((high instanceof NativePointer)) {
            (logicLong).writeInt((high).readInt());
            ((logicLong).add(lowOffset)).writeInt(((high).add(lowOffset)).readInt());
        } /* if 0x5fbb0 */
        /* jump -> 0x5fbd5 */
        (logicLong).writeInt(high);
        ((logicLong).add(lowOffset)).writeInt(low);
        this.instance = logicLong;
        return;
}
        }
        LogicLong = LogicLong = LogicLong;
        exports.LogicLong = LogicLong;
        return;
};

// --------------------- MODULE 884 — LogicRandom ---------------------

// ============================================================ //
// webpack module 884  —  LogicRandom
// exports: LogicRandom
// deps: 8775 (GameMain)
// ============================================================ //

__webpack_modules__[884] = function LogicRandom_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameMain, LogicRandom, <class_fields_init>, LogicRandom;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicRandom = undefined;
        GameMain = __webpack_require__(8775);
        <class_fields_init> = undefined;
        LogicRandom;
        class LogicRandom {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb9bd9 (open) */
}
            getRandomInRangeExcept (min, max) {
    var exceptionArray, min, max, exceptionArray, result;
        result = this;
        exceptionArray = min;
        min = max;
        if (((exceptionArray) === undefined)) {
            max = exceptionArray = [];
        } /* if 0xb9b34 */
        exceptionArray = (((GameMain).GameMain).getRand(((max - min) + 1)) + min);
        if ((exceptionArray).includes(exceptionArray)) {
            return (result).getRandomInRangeExcept(min, max, exceptionArray);
        } /* if 0xb9b6b */
        return exceptionArray;
}
            random (min, max) {
        return ((Math).round(((Math).random() * (max - min))) + min);
}
        }
        LogicRandom = LogicRandom = LogicRandom;
        exports.LogicRandom = LogicRandom;
        return;
};

// --------------------- MODULE 1994 — LogicTime ---------------------

// ============================================================ //
// webpack module 1994  —  LogicTime
// exports: LogicTime
// deps: 7265 (Localisation)
// ============================================================ //

__webpack_modules__[1994] = function LogicTime_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Localisation, LogicTime, <class_fields_init>, LogicTime;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicTime = undefined;
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        LogicTime;
        class LogicTime {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb9f51 (open) */
}
            timestampToDate (timestamp) {
    var pad, d;
        pad = pad = d = <underflow>;
        d = new Date(timestamp);
        return ("").concat(pad((d).getDate()), ".", pad(((d).getMonth() + 1)), ".", pad((d).getFullYear(), 4), " (dd.mm.yyyy)\n  ", pad((d).getHours()), ":", pad((d).getMinutes()), ":", pad((d).getSeconds()), " (hh:mm:ss)");
}
            humanizeTime (sec) {
    var s, m, h, d, parts;
        s = (sec % 60);
        m = ((Math).floor((sec / 60)) % 60);
        h = ((Math).floor((sec / 3600)) % 24);
        d = (Math).floor((sec / 86400));
        parts = [];
        if ((d > 0)) {
            (parts).push(("").concat(d, ((Localisation).Localisation).getString("DaysShort")));
        } /* if 0xb9e6d */
        if ((h > 0)) {
            (parts).push(("").concat(h, ((Localisation).Localisation).getString("HoursShort")));
        } /* if 0xb9ea1 */
        if (!(m > 0)) {
            if ((parts.length > 0)) {
                (parts).push(("").concat(m, ((Localisation).Localisation).getString("MinsShort")));
            } /* if 0xb9edf */
        } /* if 0xb9eb0 */
        (parts).push(("").concat(s, ((Localisation).Localisation).getString("SecsShort")));
        return (parts).join(" ");
}
        }
        LogicTime = LogicTime = LogicTime;
        exports.LogicTime = LogicTime;
        return;
};

// --------------------- MODULE 1588 — LogicMemory ---------------------

// ============================================================ //
// webpack module 1588  —  LogicMemory
// exports: LogicMemory
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[1588] = function LogicMemory_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, bssSegmentAddr, bssSegmentSize, LogicMemory, <class_fields_init>, LogicMemory;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicMemory = undefined;
        Libg = __webpack_require__(9878);
        bssSegmentAddr = ((Libg).Libg).offset(18064704, 0);
        if (((Process).platform === "linux")) {
        } /* if 0xb9456 */
        /* jump -> 0xb945b */
        bssSegmentSize = 211008;
        <class_fields_init> = undefined;
        LogicMemory;
        class LogicMemory {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb9825 (open) */
}
            offset (offsetArm64, offsetIOS) {
        if (offsetIOS) {
            if (((Process).platform === "darwin")) {
                return offsetIOS;
            } /* if 0xb9522 */
        } /* if 0xb9522 */
        return offsetArm64;
}
            byteLength (text) {
    var utf8Length, i, codePoint;
        utf8Length = text.length;
        i = (text.length - 1);
        while ((i >= 0)) {
            codePoint = (text).charCodeAt(i);
            if ((codePoint > 127)) {
                if ((codePoint <= 2047)) {
                    utf8Length = ((utf8Length) + 1);
                    (utf8Length++);
                } /* if 0xb958e */
            } /* if 0xb958e */
            /* jump -> 0xb95ac */
            if ((codePoint > 2047)) {
                if ((codePoint <= 65535)) {
                    utf8Length = (utf8Length + 2);
                } /* if 0xb95ac */
            } /* if 0xb95ac */
            if ((codePoint >= 56320)) {
                if ((codePoint <= 57343)) {
                    i = ((i) - 1);
                    (i--);
                } /* if 0xb95ca */
            } /* if 0xb95ca */
            i = ((i) - 1);
            (i--);
        } /* while 0xb95d4 */
        return utf8Length;
}
            fillWithZeroes (destination, length) {
        return;
}
            ensurePointer (value) {
        if ((typeof value === "string")) {
            return (Memory).allocUtf8String(value);
        } /* if 0xb9649 */
        return value;
}
            clearBssSegment (timeout) {
        return;
}
            cloneU8Field (destination, source, fieldOffset) {
        return;
}
            cloneU32Field (destination, source, fieldOffset) {
        return;
}
            clonePointerField (destination, source, fieldOffset) {
        return;
}
        }
        LogicMemory = LogicMemory = LogicMemory;
        exports.LogicMemory = LogicMemory;
        return;
};

// --------------------- MODULE 1777 — LogicClientGlobals ---------------------

// ============================================================ //
// webpack module 1777  —  LogicClientGlobals
// exports: LogicClientGlobals
// deps: 1588 (LogicMemory), 1612 (LogicDataTable), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1777] = function LogicClientGlobals_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicDataTable, Libg, LogicMemory, LogicClientGlobals_createReferencesCustom, brawlPassInShopOffset, competitivePassInShopOffset, LogicClientGlobals, <class_fields_init>, LogicClientGlobals;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicClientGlobals = undefined;
        LogicDataTable = __webpack_require__(1612);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LogicClientGlobals_createReferencesCustom = new NativeFunction(((Libg).Libg).offset(14641660, 0), "void", ["pointer"]);
        brawlPassInShopOffset = ((LogicMemory).LogicMemory).offset(917);
        competitivePassInShopOffset = ((LogicMemory).LogicMemory).offset(918);
        <class_fields_init> = undefined;
        LogicClientGlobals;
        class LogicClientGlobals extends <class_fields_init> = (LogicDataTable).LogicDataTable {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x65e48 */
        return this;
}
            patch () {
        return;
}
        }
        LogicClientGlobals = LogicClientGlobals = LogicClientGlobals;
        exports.LogicClientGlobals = LogicClientGlobals;
        return;
};

