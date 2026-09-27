var String_constructorFromCString = new NativeFunction(Libg.offset(6728200, 0), "void", ["pointer", "pointer"]);
var String_dtor = new NativeFunction(Libg.offset(6727928, 0), "void", ["pointer"]);
var String_assignCString = new NativeFunction(Libg.offset(6729164, 0), "pointer", ["pointer", "pointer"]);
var stringObjectSize = 16;
var byteLengthOffset = LogicMemory.offset(4);
var inlineStorageOffset = LogicMemory.offset(8);
var ssoMaxBytes = 7;

class StringObject {
    constructor(instance) {
        this.instance = instance;
    }
    read() {
        return StringObject.read(this.instance);
    }
    static create(text, at) {
        var cStringPointer;
        if (at == null) {
            at = NULL;
        }
        if (at.isNull()) {
            at = Libc.malloc(stringObjectSize);
        }
        cStringPointer = Memory.allocUtf8String(text);
        String_constructorFromCString(at, cStringPointer);
        return at;
    }
    static createNative(text) {
        return StringObject.create(text);
    }
    static read(stringObject) {
        var byteLength, dataPointer;
        byteLength = stringObject.add(byteLengthOffset).readU32();
        if (byteLength > ssoMaxBytes) {
            dataPointer = stringObject.add(inlineStorageOffset).readPointer();
        } else {
            dataPointer = stringObject.add(inlineStorageOffset);
        }
        if (dataPointer.readUtf8String(byteLength) == null) {
            return "";
        }
        return dataPointer.readUtf8String(byteLength);
    }
    static assign(stringObject, text) {
        var cStringPointer;
        cStringPointer = Memory.allocUtf8String(text);
        return String_assignCString(stringObject, cStringPointer);
    }
    static clear(...stringObjects) {
        var stringObject;
        for (const stringObject of stringObjects) {
            String_dtor(stringObject);
            Libc.free(stringObject);
        }
        return;
    }
    static with(text, callback) {
        var stringObject;
        stringObject = StringObject.create(text);
        try {
            return callback(stringObject);
        } finally {
            StringObject.clear(stringObject);
        }
    }
    static withMany(texts, callback) {
        var stringObjects;
        stringObjects = texts.map(function (text) {
            return StringObject.create(text);
        });
        try {
            return callback(stringObjects);
        } finally {
            StringObject.clear.apply(null, stringObjects);
        }
    }
}

class TempValueHolder {
    constructor() {
    }
    static set(key, value) {
        this.values.set(key, value);
    }
    static getAndForget(key) {
        var v;
        v = this.values.get(key);
        this.values.delete(key);
        return v;
    }
}
TempValueHolder.values = new Map();

var EmoteIcon_playAnim = new NativeFunction(Libg.offset(12271864, 0), "void", ["pointer", "int", "int", "float"]);

class EmoteIcon {
    constructor() {
    }
    static patch() {
        return;
    }
}

var DeviceLinkWindow_ctor = new NativeFunction(Libg.offset(11327972, 0), "void", ["pointer", "bool", "bool"]);
var DeviceLinkWindow_allocationSize = 480;
var AVAILABLE_FROM_SETTINGS = 1;
var SHOW_NETWORK_ITEMS = 1;

class DeviceLinkWindow extends PopupBase {
    constructor() {
        var instance;
        instance = Libc.calloc(DeviceLinkWindow_allocationSize, 1);
        DeviceLinkWindow_ctor(instance, AVAILABLE_FROM_SETTINGS, SHOW_NETWORK_ITEMS);
        super(instance);
    }
    static show() {
        var window;
        window = new DeviceLinkWindow();
        return;
    }
}

class InputItem extends GameButton {
    constructor(conf) {
        var buttonMovieClip, textField;
        super();
        this.instance.writePointer(countryPopupListItemVtableAddr);
        buttonMovieClip = StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(buttonMovieClip.instance, 1);
        textField = buttonMovieClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(Localisation.getString(conf.name));
        buttonMovieClip.gotoAndStopFrameIndex(1);
        this.id = conf.id;
    }
}

class StatsTrackerItem extends GameButton {
    constructor(statsTracker) {
        var statsTrackerMovieClip, buttonTextField;
        super();
        this.instance.writePointer(countryPopupListItemVtableAddr);
        statsTrackerMovieClip = StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(statsTrackerMovieClip.instance, 1);
        buttonTextField = MovieClip.getTextFieldByName(statsTrackerMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(statsTracker.name);
        statsTrackerMovieClip.gotoAndStopFrameIndex(1);
    }
}
