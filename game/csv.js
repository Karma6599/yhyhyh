class CSVTable {
    static getValueAt(csvTable, index) {
        return csvTable.add(8).readPointer().add(16 * index);
    }
}

var csvRowIndexOffset = 8;
var csvTableColumnsArrayOffset = 56;
var csvColumnBoolArrayOffset = 40;
var csvColumnIntArrayOffset = 24;
var intColumnStride = 4;
var negativeIndexSentinel = 2147483648;
var intSentinelValue = 2147483647;
var u32MaxSentinel = 4294967295;

class CSVRow {
    static getName(csvRow) {
        return CSVTable.getValueAt(csvRow.readPointer().add(csvTableColumnsArrayOffset).readPointer().readPointer(), csvRow.add(csvRowIndexOffset).readU32());
    }
    static getValueAt(csvRow, index) {
        var csvIndex = csvRow.add(csvRowIndexOffset).readU32();
        var csvRowPtr = csvRow.readPointer();
        if ((index & negativeIndexSentinel) != 0) {
            return u32MaxSentinel;
        }
        return CSVTable.getValueAt(csvRowPtr.add(csvTableColumnsArrayOffset).readPointer().add(index * Process.pointerSize).readPointer(), csvIndex);
    }
    static getBooleanValueAt(csvRow, index) {
        var csvIndex = csvRow.add(csvRowIndexOffset).readU32();
        var csvRowPtr = csvRow.readPointer();
        if ((index & negativeIndexSentinel) === 0) {
            return csvRowPtr.add(csvTableColumnsArrayOffset).readPointer().add(index * Process.pointerSize).readPointer().add(csvColumnBoolArrayOffset).readPointer().add(csvIndex).readU8() === 1;
        }
    }
    static getIntValueAt(csvRow, index) {
        var csvIndex, csvRowPtr, intColumnArray, value;
        if ((index & negativeIndexSentinel) != 0) {
            return 0;
        }
        csvIndex = csvRow.add(csvRowIndexOffset).readU32();
        csvRowPtr = csvRow.readPointer();
        intColumnArray = csvRowPtr.add(csvTableColumnsArrayOffset).readPointer().add(index * Process.pointerSize).readPointer().add(csvColumnIntArrayOffset).readPointer();
        value = intColumnArray.add(intColumnStride * csvIndex).readU32();
        if (value === intSentinelValue) {
            return 0;
        }
        return value;
    }
}

var logicBattleEmotesArrayListOffset = LogicMemory.offset(16);
var logicSkinData = LogicMemory.offset(32);

class LogicHeroSetup {
    constructor(instance) {
        this.instance = instance;
    }
    getEntry(id) {
        if (!id) {
            return this.instance.readPointer();
        }
        return this.instance.add(id * Process.pointerSize).readPointer();
    }
    getSkin(id) {
        if (!id) {
            return new LogicSkinData(this.getEntry(0).add(logicSkinData).readPointer());
        }
        return new LogicSkinData(this.getEntry(id).add(logicSkinData).readPointer());
    }
    setSkin(skin, id) {
        this.getEntry(id).add(logicSkinData).writePointer(skin.instance);
    }
    getLogicCharacterData(id) {
        if (id === undefined) {
            id = 0;
        }
        if (this.instance.isNull()) {
            return null;
        }
        var entry = this.getEntry(id);
        if (entry.isNull()) {
            return null;
        }
        var data = entry.readPointer();
        if (data.isNull()) {
            return null;
        }
        return new LogicCharacterData(data);
    }
    getLogicBattleEmotes() {
        if (this.instance.isNull()) {
            return;
        }
        if (this.getEntry().isNull()) {
            return;
        }
        var logicBattleEmotesArrayListPtr = this.getEntry().add(logicBattleEmotesArrayListOffset).readPointer();
        if (logicBattleEmotesArrayListPtr.isNull()) {
            return;
        }
        return new LogicBattleEmotes(logicBattleEmotesArrayListPtr.readPointer());
    }
}
