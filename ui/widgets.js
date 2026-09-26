//============================================================================//// MISC WIDGETS// merged webpack modules: 7535 StringObject, 7556 TempValueHolder, 6156 EmoteIcon, 1248 DeviceLinkWindow, 9298 InputItem, 9391 StatsTrackerItem//============================================================================//
// --------------------- MODULE 7535 — StringObject ---------------------


// ============================================================ //
// webpack module 7535  —  StringObject
// exports: StringObject
// deps: 1588 (LogicMemory), 1978 (Libc), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7535] = function StringObject_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, Libc, Libg, String_constructorFromCString, String_dtor, String_assignCString, stringObjectSize, byteLengthOffset, inlineStorageOffset, ssoMaxBytes, StringObject, <class_fields_init>, StringObject;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StringObject = undefined;
        LogicMemory = __webpack_require__(1588);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        String_constructorFromCString = new NativeFunction(((Libg).Libg).offset(6728200, 0), "void", ["pointer", "pointer"]);
        String_dtor = new NativeFunction(((Libg).Libg).offset(6727928, 0), "void", ["pointer"]);
        String_assignCString = new NativeFunction(((Libg).Libg).offset(6729164, 0), "pointer", ["pointer", "pointer"]);
        stringObjectSize = 16;
        byteLengthOffset = ((LogicMemory).LogicMemory).offset(4);
        inlineStorageOffset = ((LogicMemory).LogicMemory).offset(8);
        ssoMaxBytes = 7;
        static read () {
        return (StringObject).read((this).instance);
};
        <class_fields_init> = undefined;
        StringObject;
        class StringObject {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x80939 */
        this.instance = instance;
        return;
}
            createNative (text) {
        return (StringObject).create(text);
}
            create (text) {
    var at, text, at, stringObjectPtr, cStringPointer;
        at = text;
        if (((at) === undefined)) {
            text = at = NULL;
        } /* if 0x809be */
        if ((at).isNull()) {
        } /* if 0x809e5 */
        /* jump -> 0x809e6 */
        at = at;
        stringObjectPtr = (Memory).allocUtf8String(text);
        String_constructorFromCString(at, stringObjectPtr);
        return at;
}
            read (stringObject) {
    var byteLength, dataPointer;
        byteLength = ((stringObject).add(byteLengthOffset)).readU32();
        if ((byteLength > ssoMaxBytes)) {
        } /* if 0x80a6f */
        /* jump -> 0x80a7b */
        dataPointer = (stringObject).add(inlineStorageOffset);
        if ((((dataPointer).readUtf8String(byteLength)) == null)) {
            (dataPointer).readUtf8String(byteLength);
            return "";
        } /* if 0x80a90 (open) */
}
            assign (stringObject, text) {
        return;
}
            clear () {
    var stringObjects, stringObject;
        stringObjects = ...<underflow>;
        /* jump -> 0x80b16 */
        stringObjects = /*iter*/ stringObjects;
        String_dtor(stringObjects);
        ((Libc).Libc).free(stringObjects);
        } while (!stringObjects);
        stringObjects = <underflow>;
        return;
}
            with (text, callback) {
    var stringObject;
        stringObject = (StringObject).create(text);
        /* CATCH -> 0x80b6a (try region) */
        /* gosub 0x80b70 (finally) */
        return callback(stringObject);
        /* gosub 0x80b70 (finally) */
        throw stringObject = <underflow>;
        (StringObject).clear(stringObject);
        /* end finally */
}
            withMany (texts, callback) {
    var stringObjects;
        stringObjects = (texts).map(function (text) {
        return (StringObject).create(text);
});
        /* CATCH -> 0x80bca (try region) */
        /* gosub 0x80bd0 (finally) */
        return callback(stringObjects);
        /* gosub 0x80bd0 (finally) */
        throw stringObjects = <underflow>;
        (StringObject).clear.apply(0, []);
        /* end finally */
}
        }
        StringObject = inlineStorageOffset = StringObject;
        exports.StringObject = StringObject;
        return;
};

// --------------------- MODULE 7556 — TempValueHolder ---------------------


// ============================================================ //
// webpack module 7556  —  TempValueHolder
// exports: TempValueHolder
// ============================================================ //

__webpack_modules__[7556] = function TempValueHolder_factory(__unused_webpack_module, exports) {
    var TempValueHolder, <class_fields_init>, TempValueHolder;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TempValueHolder = undefined;
        <class_fields_init> = undefined;
        TempValueHolder;
        class TempValueHolder {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xe1d63 (open) */
}
            set (key, value) {
        return;
}
            getAndForget (key) {
    var v;
        v = ((this).values)["get"](key);
        ((this).values)["delete"](key);
        return v;
}
        }
        TempValueHolder = TempValueHolder = TempValueHolder;
        exports.TempValueHolder = TempValueHolder;
        TempValueHolder.values = new Map();
        return;
};

// --------------------- MODULE 6156 — EmoteIcon ---------------------


// ============================================================ //
// webpack module 6156  —  EmoteIcon
// exports: EmoteIcon
// deps: 4009 (Config), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6156] = function EmoteIcon_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, EmoteIcon_playAnim, EmoteIcon, <class_fields_init>, EmoteIcon;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EmoteIcon = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        EmoteIcon_playAnim = new NativeFunction(((Libg).Libg).offset(12271864, 0), "void", ["pointer", "int", "int", "float"]);
        <class_fields_init> = undefined;
        EmoteIcon;
        class EmoteIcon {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3e48b (open) */
}
            patch () {
        return;
}
        }
        EmoteIcon = EmoteIcon = EmoteIcon;
        exports.EmoteIcon = EmoteIcon;
        return;
};

// --------------------- MODULE 1248 — DeviceLinkWindow ---------------------


// ============================================================ //
// webpack module 1248  —  DeviceLinkWindow
// exports: DeviceLinkWindow
// deps: 1978 (Libc), 4934 (GUI), 8581 (PopupBase), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1248] = function DeviceLinkWindow_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, PopupBase, GUI, DeviceLinkWindow_ctor, ALLOCATION_SIZE, AVAILABLE_FROM_SETTINGS, SHOW_NETWORK_ITEMS, DeviceLinkWindow, <class_fields_init>, DeviceLinkWindow;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DeviceLinkWindow = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        PopupBase = __webpack_require__(8581);
        GUI = __webpack_require__(4934);
        DeviceLinkWindow_ctor = new NativeFunction(((Libg).Libg).offset(11327972, 0), "void", ["pointer", "bool", "bool"]);
        ALLOCATION_SIZE = 480;
        AVAILABLE_FROM_SETTINGS = 1;
        SHOW_NETWORK_ITEMS = 1;
        <class_fields_init> = undefined;
        DeviceLinkWindow;
        class DeviceLinkWindow extends <class_fields_init> = (PopupBase).PopupBase {
            constructor () {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        instance = ((Libc).Libc).calloc(ALLOCATION_SIZE, 1);
        DeviceLinkWindow_ctor(instance, AVAILABLE_FROM_SETTINGS, SHOW_NETWORK_ITEMS);
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x58dfc */
        return this;
}
            show () {
    var window;
        window = new DeviceLinkWindow();
        return;
}
        }
        DeviceLinkWindow = DeviceLinkWindow = DeviceLinkWindow;
        exports.DeviceLinkWindow = DeviceLinkWindow;
        return;
};

// --------------------- MODULE 9298 — InputItem ---------------------


// ============================================================ //
// webpack module 9298  —  InputItem
// exports: InputItem
// deps: 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9298] = function InputItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, Localisation, InputItem, <class_fields_init>, InputItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InputItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        InputItem;
        class InputItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (conf) {
    var buttonMovieClip, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb3673 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        buttonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((buttonMovieClip).instance, 1);
        textField = (buttonMovieClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(((Localisation).Localisation).getString((conf).name));
        (buttonMovieClip).gotoAndStopFrameIndex(1);
        this.id = (conf).id;
        return this;
}
        }
        InputItem = v8 = InputItem;
        exports.InputItem = InputItem;
        return;
};

// --------------------- MODULE 9391 — StatsTrackerItem ---------------------


// ============================================================ //
// webpack module 9391  —  StatsTrackerItem
// exports: StatsTrackerItem
// deps: 612 (MovieClip), 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9391] = function StatsTrackerItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, MovieClip, StatsTrackerItem, <class_fields_init>, StatsTrackerItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StatsTrackerItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        <class_fields_init> = undefined;
        StatsTrackerItem;
        class StatsTrackerItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (statsTracker) {
    var statsTrackerMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb5991 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        statsTrackerMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((statsTrackerMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((statsTrackerMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary((statsTracker).name);
        (statsTrackerMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        StatsTrackerItem = v8 = StatsTrackerItem;
        exports.StatsTrackerItem = StatsTrackerItem;
        return;
};

