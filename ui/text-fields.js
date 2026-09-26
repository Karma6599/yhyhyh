// =============================================================
// TEXT FIELDS
// merged webpack modules: 3015 TextField, 292 TextInput, 3320 InputField, 8674 GameInputField, 8794 DecoratedTextField, 211 TextFieldHelper, 9951 BlingTextField
// =============================================================

// --------------------- MODULE 3015 — TextField ---------------------

// ============================================================ //
// webpack module 3015  —  TextField
// exports: TextField, TextField_setAllowColorCodes
// deps: 1191 (DisplayObject), 1588 (LogicMemory), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3015] = function TextField_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, DisplayObject, StringObject, LogicMemory, TextField_setStringObject, TextField_getTextWidth, TextField_getTextHeight, MovieClipHelper_setTextAndScaleIfNecessary, xOffset, yOffset, textColorOffset, outlineColorOffset, allowColorCodesOffset, allowStringParametersOffset, fontOutlineOffset, alignOffset, fontSizeOffset, textOffset, COLOR_TAG_OPEN_MARKER, TextField, <class_fields_init>, TextField;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TextField_setAllowColorCodes = undefined;
        undefined.TextField = exports;
        Libg = __webpack_require__(9878);
        DisplayObject = __webpack_require__(1191);
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        exports.TextField_setAllowColorCodes = new NativeFunction(((Libg).Libg).offset(5841160, 0), "void", ["pointer", "int"]);
        TextField_setStringObject = new NativeFunction(((Libg).Libg).offset(5840208, 0), "void", ["pointer", "pointer"]);
        TextField_getTextWidth = new NativeFunction(((Libg).Libg).offset(5840664, 0), "float", ["pointer"]);
        TextField_getTextHeight = new NativeFunction(((Libg).Libg).offset(5840848, 0), "float", ["pointer"]);
        MovieClipHelper_setTextAndScaleIfNecessary = new NativeFunction(((Libg).Libg).offset(13916048, 0), "void", ["pointer", "pointer", "int", "int"]);
        xOffset = ((LogicMemory).LogicMemory).offset(32);
        yOffset = ((LogicMemory).LogicMemory).offset(36);
        textColorOffset = ((LogicMemory).LogicMemory).offset(128);
        outlineColorOffset = ((LogicMemory).LogicMemory).offset(132);
        allowColorCodesOffset = ((LogicMemory).LogicMemory).offset(141);
        allowStringParametersOffset = ((LogicMemory).LogicMemory).offset(139);
        fontOutlineOffset = ((LogicMemory).LogicMemory).offset(144);
        alignOffset = ((LogicMemory).LogicMemory).offset(150);
        fontSizeOffset = ((LogicMemory).LogicMemory).offset(176);
        textOffset = ((LogicMemory).LogicMemory).offset(224);
        COLOR_TAG_OPEN_MARKER = "<c";
        static set x (x) {
        return;
};
        static get x () {
        return (((this).instance).add(xOffset)).readFloat();
};
        static set y (y) {
        return;
};
        static get y () {
        return (((this).instance).add(yOffset)).readFloat();
};
        static set color (color) {
        return;
};
        static get color () {
        return (((this).instance).add(textColorOffset)).readU32();
};
        static set outlineColor (color) {
        return;
};
        static get outlineColor () {
        return (((this).instance).add(outlineColorOffset)).readU32();
};
        static set colorTag (bool) {
        return;
};
        static get colorTag () {
        return (((this).instance).add(allowColorCodesOffset)).readU8();
};
        static get textWidth () {
        return TextField_getTextWidth((this).instance);
};
        static get textHeight () {
        return TextField_getTextHeight((this).instance);
};
        static setAllowColorCodes (active) {
        if ((+active)) {
        } /* if 0x7c5e2 */
        /* jump -> 0x7c5e3 */
        (this).instance(1, 0);
        return this;
};
        static set fontOutline (bool) {
        return;
};
        static get fontOutline () {
        return (((this).instance).add(fontOutlineOffset)).readU8();
};
        static set align (align) {
        return;
};
        static get align () {
        return (((this).instance).add(alignOffset)).readU8();
};
        static set fontSize (fontSize) {
        return;
};
        static get fontSize () {
        return (((this).instance).add(fontSizeOffset)).readShort();
};
        static set text (text) {
        return;
};
        static get text () {
        return ((StringObject).StringObject).read(((this).instance).add(textOffset));
};
        static setStringObject (stringObjectPointer) {
        TextField_setStringObject((this).instance, stringObjectPointer);
        return this;
};
        static setTextScaleIfNecessary (text) {
        ((StringObject).StringObject).with(text, function (stringObjectPointer) {
        return MovieClipHelper_setTextAndScaleIfNecessary((this).instance, stringObjectPointer, 0, 0);
});
        return this;
};
        <class_fields_init> = undefined;
        TextField;
        class TextField extends <class_fields_init> = (DisplayObject).DisplayObject {
            constructor (instance) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x7c31c */
        return this;
}
            patch () {
        (Interceptor).attach(TextField_setStringObject, { onEnter (args) {
        return;
} });
        return;
}
            enableColorTagFlagIfTextLooksTagged (textFieldPointer, stringObjectPointer) {
    var text;
        text = ((StringObject).StringObject).read(stringObjectPointer);
        if (text) {
            if ((text).includes(COLOR_TAG_OPEN_MARKER)) {
                ((textFieldPointer).add(allowColorCodesOffset)).writeU8(1);
                return;
            } /* if 0x7c99d (open) */
        } /* if 0x7c99d (open) */
}
        }
        TextField = xOffset = TextField;
        exports.TextField = TextField;
        return;
};

// --------------------- MODULE 292 — TextInput ---------------------

// ============================================================ //
// webpack module 292  —  TextInput
// exports: TextInput
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[292] = function TextInput_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, TextInput_setMaxTextLength, TextInput, <class_fields_init>, TextInput;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TextInput = undefined;
        Libg = __webpack_require__(9878);
        TextInput_setMaxTextLength = new NativeFunction(((Libg).Libg).offset(7454752, 0), "void", ["pointer", "int"]);
        static setMaxTextLength (length) {
        return;
};
        <class_fields_init> = undefined;
        TextInput;
        class TextInput {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x5ecd2 */
        this.instance = instance;
        this.vtable = ((this).instance).readPointer();
        return;
}
        }
        TextInput = TextInput = TextInput;
        exports.TextInput = TextInput;
        return;
};

// --------------------- MODULE 3320 — InputField ---------------------

// ============================================================ //
// webpack module 3320  —  InputField
// exports: InputField
// deps: 292 (TextInput), 1588 (LogicMemory), 7535 (StringObject)
// ============================================================ //

__webpack_modules__[3320] = function InputField_factory(__unused_webpack_module, exports, __webpack_require__) {
    var TextInput, LogicMemory, StringObject, inputTextOffset, updateVtableOffset, activateVtableOffset, InputField, <class_fields_init>, InputField;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InputField = undefined;
        TextInput = __webpack_require__(292);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        inputTextOffset = ((LogicMemory).LogicMemory).offset(72, 32);
        updateVtableOffset = ((LogicMemory).LogicMemory).offset((11 * (Process).pointerSize));
        activateVtableOffset = (7 * (Process).pointerSize);
        static destruct () {
    var InputField_dtor;
        if ((this).disposed) {
            return;
        } /* if 0x78290 */
        this.disposed = true;
        InputField_dtor = new NativeFunction(((this).vtable).readPointer(), "void", ["pointer"]);
        /* CATCH -> 0x782d8 (try region) */
        InputField_dtor((this).instance);
        /* gosub 0x782de (finally) */
        return;
        /* gosub 0x782de (finally) */
        throw InputField_dtor = <underflow>;
        this.instance = NULL;
        /* end finally */
        return;
};
        static get isDisposed () {
        return (this).disposed;
};
        static activate (state) {
    var activateFunc;
        if ((this).disposed) {
            return;
        } /* if 0x78341 */
        activateFunc = new NativeFunction((((this).vtable).add(activateVtableOffset)).readPointer(), "void", ["pointer", "bool"]);
        return;
};
        static getInputText () {
        if ((this).disposed) {
            return "";
        } /* if 0x783b3 */
        return ((StringObject).StringObject).read(((this).instance).add(inputTextOffset));
};
        static setInputText (text) {
        if ((this).disposed) {
            return;
        } /* if 0x78404 */
        return;
};
        static update (deltaTime) {
        if ((this).disposed) {
            return;
        } /* if 0x78450 */
        return;
};
        <class_fields_init> = undefined;
        InputField;
        class InputField extends <class_fields_init> = (TextInput).TextInput {
            constructor (instance, textField) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x78215 */
        this.disposed = false;
        this.updateFunc = new NativeFunction((((this).vtable).add(updateVtableOffset)).readPointer(), "void", ["pointer", "float"]);
        return this;
}
        }
        InputField = InputField = InputField;
        exports.InputField = InputField;
        return;
};

// --------------------- MODULE 8674 — GameInputField ---------------------

// ============================================================ //
// webpack module 8674  —  GameInputField
// exports: GameInputField
// deps: 1588 (LogicMemory), 1978 (Libc), 3320 (InputField), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8674] = function GameInputField_factory(__unused_webpack_module, exports, __webpack_require__) {
    var InputField, Libc, Libg, LogicMemory, StringObject, GameInputField_ctor, GameInputField_setScaleTextIfNeed, cachedTextOffset, GameInputField, <class_fields_init>, GameInputField;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameInputField = undefined;
        InputField = __webpack_require__(3320);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        GameInputField_ctor = new NativeFunction(((Libg).Libg).offset(9028340, 0), "void", ["pointer", "pointer", "pointer"]);
        GameInputField_setScaleTextIfNeed = new NativeFunction(((Libg).Libg).offset(9029188, 0), "void", ["pointer", "bool"]);
        cachedTextOffset = ((LogicMemory).LogicMemory).offset(168, 128);
        static setScaleTextIfNeeded (state) {
        if ((this).isDisposed) {
            return;
        } /* if 0x76fc2 */
        return;
};
        static destruct () {
    var instance, <home_object>;
        <home_object> = /*special:4*/;
        if ((this).isDisposed) {
            return;
        } /* if 0x77007 */
        instance = (this).instance;
        return;
};
        static clearCachedText () {
        if ((this).isDisposed) {
            return;
        } /* if 0x7705d */
        return;
};
        <class_fields_init> = undefined;
        GameInputField;
        class GameInputField extends <class_fields_init> = (InputField).InputField {
            constructor (textField, inputCaller) {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        instance = ((Libc).Libc).malloc((GameInputField).allocationSize);
        GameInputField_ctor(instance, (textField).instance, inputCaller);
        this = super(instance, textField);
        if (<class_fields_init>) {
        } /* if 0x76f8f */
        return this;
}
        }
        GameInputField = GameInputField = GameInputField;
        exports.GameInputField = GameInputField;
        GameInputField.allocationSize = 200;
        return;
};

// --------------------- MODULE 8794 — DecoratedTextField ---------------------

// ============================================================ //
// webpack module 8794  —  DecoratedTextField
// exports: DecoratedTextField
// deps: 1588 (LogicMemory), 3015 (TextField), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8794] = function DecoratedTextField_factory(__unused_webpack_module, exports, __webpack_require__) {
    var TextField, Libg, LogicMemory, DecoratedTextField_setupPlayerNameText, decoratedTypeTagOffset, DECORATED_TAG, DecoratedTextField, <class_fields_init>, DecoratedTextField;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DecoratedTextField = undefined;
        TextField = __webpack_require__(3015);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        DecoratedTextField_setupPlayerNameText = ((Libg).Libg).offset(8893712, 0);
        decoratedTypeTagOffset = ((LogicMemory).LogicMemory).offset(68);
        DECORATED_TAG = 726355;
        <class_fields_init> = undefined;
        DecoratedTextField;
        class DecoratedTextField extends <class_fields_init> = (TextField).TextField {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x750fa */
        return this;
}
            patch () {
        (Interceptor).attach(DecoratedTextField_setupPlayerNameText, { onEnter (args) {
    var instance;
        instance = args[0];
        if ((!(instance).isNull())) {
            if ((((instance).add(decoratedTypeTagOffset)).readU32() === DECORATED_TAG)) {
            } /* if 0x7501b */
        } /* if 0x7501b */
        /* jump -> 0x7501c */
        new (TextField).TextField(instance).tf = null;
        return;
}, onLeave () {
        if ((!(this).tf)) {
            return;
        } /* if 0x75048 */
        (this).tf.colorTag = true;
        return;
} });
        return;
}
        }
        DecoratedTextField = DecoratedTextField = DecoratedTextField;
        exports.DecoratedTextField = DecoratedTextField;
        return;
};

// --------------------- MODULE 211 — TextFieldHelper ---------------------

// ============================================================ //
// webpack module 211  —  TextFieldHelper
// exports: TextFieldHelper
// deps: 612 (MovieClip), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[211] = function TextFieldHelper_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringTable, MovieClip, TextFieldHelper, <class_fields_init>, TextFieldHelper;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TextFieldHelper = undefined;
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        <class_fields_init> = undefined;
        TextFieldHelper;
        class TextFieldHelper {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7cacb (open) */
}
            createTextTextField () {
    var popoverTextLeftMovieClip;
        popoverTextLeftMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        return ((MovieClip).MovieClip).getTextFieldByName((popoverTextLeftMovieClip).instance, "text");
}
        }
        TextFieldHelper = TextFieldHelper = TextFieldHelper;
        exports.TextFieldHelper = TextFieldHelper;
        return;
};

// --------------------- MODULE 9951 — BlingTextField ---------------------

// ============================================================ //
// webpack module 9951  —  BlingTextField
// exports: BlingTextField
// deps: 3015 (TextField), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9951] = function BlingTextField_factory(__unused_webpack_module, exports, __webpack_require__) {
    var TextField, Libg, StringObject, BlingTextField_create, BlingTextField, <class_fields_init>, BlingTextField;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BlingTextField = undefined;
        TextField = __webpack_require__(3015);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        BlingTextField_create = new NativeFunction(((Libg).Libg).offset(8896700, 0), "pointer", ["pointer", "pointer", "int", "pointer", "bool", "bool", "bool"]);
        <class_fields_init> = undefined;
        BlingTextField;
        class BlingTextField extends <class_fields_init> = (TextField).TextField {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x7398b */
        return this;
}
            create (clip, fieldName, blingStyle, gradient) {
    var blingField;
        blingField = ((StringObject).StringObject).with(fieldName, function (field) {
        return BlingTextField_create((clip).instance, field, blingStyle, (gradient).instance, 1, 0, 0);
});
        if ((blingField).isNull()) {
            return null;
        } /* if 0x738ec */
        return new BlingTextField(blingField);
}
        }
        BlingTextField = v8 = BlingTextField;
        exports.BlingTextField = BlingTextField;
        return;
};

