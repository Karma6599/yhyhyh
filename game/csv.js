//============================================================================//// CSV TABLES// merged webpack modules: 3235 CSVTable, 5603 CSVRow, 5151 LogicHeroSetup//============================================================================//
// --------------------- MODULE 3235 — CSVTable ---------------------


// ============================================================ //
// webpack module 3235  —  CSVTable
// exports: CSVTable
// ============================================================ //

__webpack_modules__[3235] = function CSVTable_factory(__unused_webpack_module, exports) {
    var CSVTable, <class_fields_init>, CSVTable;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CSVTable = undefined;
        <class_fields_init> = undefined;
        CSVTable;
        class CSVTable {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5f24a (open) */
}
            getValueAt (csvTable, index) {
        return (((csvTable).add(8)).readPointer()).add((16 * index));
}
        }
        CSVTable = CSVTable = CSVTable;
        exports.CSVTable = CSVTable;
        return;
};

// --------------------- MODULE 5603 — CSVRow ---------------------


// ============================================================ //
// webpack module 5603  —  CSVRow
// exports: CSVRow
// deps: 3235 (CSVTable)
// ============================================================ //

__webpack_modules__[5603] = function CSVRow_factory(__unused_webpack_module, exports, __webpack_require__) {
    var CSVTable, csvRowIndexOffset, csvTableColumnsArrayOffset, csvColumnBoolArrayOffset, csvColumnIntArrayOffset, intColumnStride, negativeIndexSentinel, intSentinelValue, u32MaxSentinel, CSVRow, <class_fields_init>, CSVRow;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CSVRow = undefined;
        CSVTable = __webpack_require__(3235);
        csvRowIndexOffset = 8;
        csvTableColumnsArrayOffset = 56;
        csvColumnBoolArrayOffset = 40;
        csvColumnIntArrayOffset = 24;
        intColumnStride = 4;
        negativeIndexSentinel = 2147483648.0;
        intSentinelValue = 2147483647;
        u32MaxSentinel = 4294967295.0;
        <class_fields_init> = undefined;
        CSVRow;
        class CSVRow {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5f164 (open) */
}
            getName (csvRow) {
        return ((CSVTable).CSVTable).getValueAt(((((csvRow).readPointer()).add(csvTableColumnsArrayOffset)).readPointer()).readPointer(), ((csvRow).add(csvRowIndexOffset)).readU32());
}
            getValueAt (csvRow, index) {
    var csvIndex, csvRowPtr;
        csvIndex = ((csvRow).add(csvRowIndexOffset)).readU32();
        csvRowPtr = (csvRow).readPointer();
        if (((index & negativeIndexSentinel) != 0)) {
            return u32MaxSentinel;
        } /* if 0x5ef33 */
        return ((CSVTable).CSVTable).getValueAt(((((csvRowPtr).add(csvTableColumnsArrayOffset)).readPointer()).add((index * (Process).pointerSize))).readPointer(), csvIndex);
}
            getBooleanValueAt (csvRow, index) {
    var csvIndex, csvRowPtr;
        csvIndex = ((csvRow).add(csvRowIndexOffset)).readU32();
        csvRowPtr = (csvRow).readPointer();
        if (((index & negativeIndexSentinel) === 0)) {
            ((index & negativeIndexSentinel) === 0);
            return (((((((((csvRowPtr).add(csvTableColumnsArrayOffset)).readPointer()).add((index * (Process).pointerSize))).readPointer()).add(csvColumnBoolArrayOffset)).readPointer()).add(csvIndex)).readU8() === 1);
        } /* if 0x5f03e (open) */
}
            getIntValueAt (csvRow, index) {
    var csvIndex, csvRowPtr, intColumnArray, value;
        if (((index & negativeIndexSentinel) != 0)) {
            return 0;
        } /* if 0x5f0a2 */
        csvIndex = ((csvRow).add(csvRowIndexOffset)).readU32();
        csvRowPtr = (csvRow).readPointer();
        intColumnArray = ((((((csvRowPtr).add(csvTableColumnsArrayOffset)).readPointer()).add((index * (Process).pointerSize))).readPointer()).add(csvColumnIntArrayOffset)).readPointer();
        value = ((intColumnArray).add((intColumnStride * csvIndex))).readU32();
        if ((value === intSentinelValue)) {
            return 0;
        } /* if 0x5f12d */
        return value;
}
        }
        CSVRow = u32MaxSentinel = CSVRow;
        exports.CSVRow = CSVRow;
        return;
};

// --------------------- MODULE 5151 — LogicHeroSetup ---------------------


// ============================================================ //
// webpack module 5151  —  LogicHeroSetup
// exports: LogicHeroSetup
// deps: 1588 (LogicMemory), 3555 (LogicSkinData), 6823 (LogicBattleEmotes), 7171 (LogicCharacterData)
// ============================================================ //

__webpack_modules__[5151] = function LogicHeroSetup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicBattleEmotes, LogicCharacterData, LogicSkinData, logicBattleEmotesArrayListOffset, logicSkinData, LogicHeroSetup, <class_fields_init>, LogicHeroSetup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicHeroSetup = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicBattleEmotes = __webpack_require__(6823);
        LogicCharacterData = __webpack_require__(7171);
        LogicSkinData = __webpack_require__(3555);
        logicBattleEmotesArrayListOffset = ((LogicMemory).LogicMemory).offset(16);
        logicSkinData = ((LogicMemory).LogicMemory).offset(32);
        static getEntry (id) {
        if ((!id)) {
            return ((this).instance).readPointer();
        } /* if 0x61f62 */
        return (((this).instance).add((id * (Process).pointerSize))).readPointer();
};
        static getSkin (id) {
        if ((!id)) {
            return new (LogicSkinData).LogicSkinData((((this).getEntry(0)).add(logicSkinData)).readPointer());
        } /* if 0x61fd9 */
        return new (LogicSkinData).LogicSkinData((((this).getEntry(id)).add(logicSkinData)).readPointer());
};
        static setSkin (skin, id) {
        return;
};
        static getLogicCharacterData () {
    var id, id, entry, character;
        character = this;
        if (((id) === undefined)) {
            id = id = 0;
        } /* if 0x6208f */
        if (((character).instance).isNull()) {
            return null;
        } /* if 0x620a8 */
        id = (character).getEntry(id);
        if ((id).isNull()) {
            return null;
        } /* if 0x620c2 */
        entry = (id).readPointer();
        if ((entry).isNull()) {
            return null;
        } /* if 0x620dd */
        return new (LogicCharacterData).LogicCharacterData(entry);
};
        static getLogicBattleEmotes () {
    var logicBattleEmotesArrayListPtr;
        if (((this).instance).isNull()) {
            return;
        } /* if 0x6212c */
        if (((this).getEntry()).isNull()) {
            return;
        } /* if 0x62140 */
        logicBattleEmotesArrayListPtr = (((this).getEntry()).add(logicBattleEmotesArrayListOffset)).readPointer();
        if ((logicBattleEmotesArrayListPtr).isNull()) {
            return;
        } /* if 0x6216b */
        return new (LogicBattleEmotes).LogicBattleEmotes((logicBattleEmotesArrayListPtr).readPointer());
};
        <class_fields_init> = undefined;
        LogicHeroSetup;
        class LogicHeroSetup {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x61f29 */
        this.instance = instance;
        return;
}
        }
        LogicHeroSetup = LogicHeroSetup = LogicHeroSetup;
        exports.LogicHeroSetup = LogicHeroSetup;
        return;
};

