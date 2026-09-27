var TextField_setAllowColorCodes = new NativeFunction(Libg.offset(5841160, 0), "void", ["pointer", "int"]);
var TextField_setStringObject = new NativeFunction(Libg.offset(5840208, 0), "void", ["pointer", "pointer"]);
var TextField_getTextWidth = new NativeFunction(Libg.offset(5840664, 0), "float", ["pointer"]);
var TextField_getTextHeight = new NativeFunction(Libg.offset(5840848, 0), "float", ["pointer"]);
var MovieClipHelper_setTextAndScaleIfNecessary = new NativeFunction(Libg.offset(13916048, 0), "void", ["pointer", "pointer", "int", "int"]);
var TextField_xOffset = LogicMemory.offset(32);
var TextField_yOffset = LogicMemory.offset(36);
var textColorOffset = LogicMemory.offset(128);
var outlineColorOffset = LogicMemory.offset(132);
var allowColorCodesOffset = LogicMemory.offset(141);
var allowStringParametersOffset = LogicMemory.offset(139);
var fontOutlineOffset = LogicMemory.offset(144);
var alignOffset = LogicMemory.offset(150);
var fontSizeOffset = LogicMemory.offset(176);
var textOffset = LogicMemory.offset(224);
var COLOR_TAG_OPEN_MARKER = "<c";

class TextField extends DisplayObject {
    constructor(instance) {
        super(instance);
    }
    static patch() {
        Interceptor.attach(TextField_setStringObject, {
            onEnter(args) {
                return TextField.enableColorTagFlagIfTextLooksTagged(args[0], args[1]);
            }
        });
        return;
    }
    static enableColorTagFlagIfTextLooksTagged(textFieldPointer, stringObjectPointer) {
        var text;
        text = StringObject.read(stringObjectPointer);
        if (text) {
            if (text.includes(COLOR_TAG_OPEN_MARKER)) {
                textFieldPointer.add(allowColorCodesOffset).writeU8(1);
                return;
            }
        }
    }
    get x() {
        return this.instance.add(TextField_xOffset).readFloat();
    }
    set x(x) {
        this.instance.add(TextField_xOffset).writeFloat(x);
        return;
    }
    get y() {
        return this.instance.add(TextField_yOffset).readFloat();
    }
    set y(y) {
        this.instance.add(TextField_yOffset).writeFloat(y);
        return;
    }
    get color() {
        return this.instance.add(textColorOffset).readU32();
    }
    set color(color) {
        this.instance.add(textColorOffset).writeU32(color);
        return;
    }
    get outlineColor() {
        return this.instance.add(outlineColorOffset).readU32();
    }
    set outlineColor(color) {
        this.instance.add(outlineColorOffset).writeU32(color);
        return;
    }
    get colorTag() {
        return this.instance.add(allowColorCodesOffset).readU8();
    }
    set colorTag(bool) {
        this.instance.add(allowColorCodesOffset).writeU8(bool ? 1 : 0);
        return;
    }
    get textWidth() {
        return TextField_getTextWidth(this.instance);
    }
    get textHeight() {
        return TextField_getTextHeight(this.instance);
    }
    setAllowColorCodes(active) {
        TextField_setAllowColorCodes(this.instance, +active ? 1 : 0);
        return this;
    }
    get fontOutline() {
        return this.instance.add(fontOutlineOffset).readU8();
    }
    set fontOutline(bool) {
        this.instance.add(fontOutlineOffset).writeU8(bool ? 1 : 0);
        return;
    }
    get align() {
        return this.instance.add(alignOffset).readU8();
    }
    set align(align) {
        this.instance.add(alignOffset).writeU8(align);
        return;
    }
    get fontSize() {
        return this.instance.add(fontSizeOffset).readShort();
    }
    set fontSize(fontSize) {
        this.instance.add(fontSizeOffset).writeShort(fontSize);
        return;
    }
    get text() {
        return StringObject.read(this.instance.add(textOffset));
    }
    set text(text) {
        StringObject.with(text, (stringObjectPointer) => {
            return TextField_setStringObject(this.instance, stringObjectPointer);
        });
        return;
    }
    setStringObject(stringObjectPointer) {
        TextField_setStringObject(this.instance, stringObjectPointer);
        return this;
    }
    setTextScaleIfNecessary(text) {
        StringObject.with(text, (stringObjectPointer) => {
            return MovieClipHelper_setTextAndScaleIfNecessary(this.instance, stringObjectPointer, 0, 0);
        });
        return this;
    }
}

var TextInput_setMaxTextLength = new NativeFunction(Libg.offset(7454752, 0), "void", ["pointer", "int"]);

class TextInput {
    constructor(instance) {
        this.instance = instance;
        this.vtable = this.instance.readPointer();
    }
    setMaxTextLength(length) {
        TextInput_setMaxTextLength(this.instance, length);
        return;
    }
}

var inputTextOffset = LogicMemory.offset(72, 32);
var updateVtableOffset = LogicMemory.offset(11 * Process.pointerSize);
var activateVtableOffset = 7 * Process.pointerSize;

class InputField extends TextInput {
    constructor(instance, textField) {
        super(instance);
        this.disposed = false;
        this.updateFunc = new NativeFunction(this.vtable.add(updateVtableOffset).readPointer(), "void", ["pointer", "float"]);
    }
    destruct() {
        var InputField_dtor;
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        InputField_dtor = new NativeFunction(this.vtable.readPointer(), "void", ["pointer"]);
        try {
            InputField_dtor(this.instance);
        } finally {
            this.instance = NULL;
        }
        return;
    }
    get isDisposed() {
        return this.disposed;
    }
    activate(state) {
        var activateFunc;
        if (this.disposed) {
            return;
        }
        activateFunc = new NativeFunction(this.vtable.add(activateVtableOffset).readPointer(), "void", ["pointer", "bool"]);
        activateFunc(this.instance, state);
        return;
    }
    getInputText() {
        if (this.disposed) {
            return "";
        }
        return StringObject.read(this.instance.add(inputTextOffset));
    }
    setInputText(text) {
        if (this.disposed) {
            return;
        }
        return;
    }
    update(deltaTime) {
        if (this.disposed) {
            return;
        }
        this.updateFunc(this.instance, deltaTime);
        return;
    }
}

var GameInputField_ctor = new NativeFunction(Libg.offset(9028340, 0), "void", ["pointer", "pointer", "pointer"]);
var GameInputField_setScaleTextIfNeed = new NativeFunction(Libg.offset(9029188, 0), "void", ["pointer", "bool"]);
var cachedTextOffset = LogicMemory.offset(168, 128);

class GameInputField extends InputField {
    constructor(textField, inputCaller) {
        var instance;
        instance = Libc.malloc(GameInputField.allocationSize);
        GameInputField_ctor(instance, textField.instance, inputCaller);
        super(instance, textField);
    }
    setScaleTextIfNeeded(state) {
        if (this.isDisposed) {
            return;
        }
        GameInputField_setScaleTextIfNeed(this.instance, state);
        return;
    }
    destruct() {
        if (this.isDisposed) {
            return;
        }
        super.destruct();
    }
    clearCachedText() {
        if (this.isDisposed) {
            return;
        }
        return;
    }
}
GameInputField.allocationSize = 200;

var DecoratedTextField_setupPlayerNameText = Libg.offset(8893712, 0);
var decoratedTypeTagOffset = LogicMemory.offset(68);
var DECORATED_TAG = 726355;

class DecoratedTextField extends TextField {
    constructor() {
    }
    static patch() {
        Interceptor.attach(DecoratedTextField_setupPlayerNameText, {
            onEnter(args) {
                var instance;
                instance = args[0];
                this.tf = null;
                if (!instance.isNull()) {
                    if (instance.add(decoratedTypeTagOffset).readU32() === DECORATED_TAG) {
                        this.tf = new TextField(instance);
                    }
                }
                return;
            },
            onLeave() {
                if (!this.tf) {
                    return;
                }
                this.tf.colorTag = true;
                return;
            }
        });
        return;
    }
}

class TextFieldHelper {
    constructor() {
    }
    static createTextTextField() {
        var popoverTextLeftMovieClip;
        popoverTextLeftMovieClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        return MovieClip.getTextFieldByName(popoverTextLeftMovieClip.instance, "text");
    }
}

var BlingTextField_create = new NativeFunction(Libg.offset(8896700, 0), "pointer", ["pointer", "pointer", "int", "pointer", "bool", "bool", "bool"]);

class BlingTextField extends TextField {
    constructor(instance) {
        super(instance);
    }
    static create(clip, fieldName, blingStyle, gradient) {
        var blingField;
        blingField = StringObject.with(fieldName, function (field) {
            return BlingTextField_create(clip.instance, field, blingStyle, gradient.instance, 1, 0, 0);
        });
        if (blingField.isNull()) {
            return null;
        }
        return new BlingTextField(blingField);
    }
}
