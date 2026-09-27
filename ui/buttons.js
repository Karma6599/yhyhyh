var DEFAULT_TEXT_FIELD_NAME = "txt";
var GameButton_gameButton = new NativeFunction(Libg.offset(8943524, 0), "void", ["pointer"]);
var GameButton_buttonPressed = new NativeFunction(Libg.offset(8945064, 0), "void", ["pointer"]);
var GameButton_setDisabledWithHUDPrint = new NativeFunction(Libg.offset(8946816, 0), "void", ["pointer", "int", "pointer", "int"]);
var GameButton_setHighlight = new NativeFunction(Libg.offset(8947056, 0), "void", ["pointer", "int", "int", "int", "float"]);

class GameButton extends CustomButton {
    constructor(instance) {
        if (instance) {
            if (instance.isNull()) {
                instance = Libc.malloc(GameButton.allocationSize);
                GameButton_gameButton(instance);
            }
        }
        super(instance);
    }
    setText(textFieldName, text) {
        var textField;
        textField = this.getMovieClip().getTextFieldByName(textFieldName);
        textField.text = text;
        return;
    }
    getText(textFieldName) {
        var textField;
        textField = this.getMovieClip().getTextFieldByName(textFieldName);
        return textField.text;
    }
    setHighlight(int, int2, f3, f4) {
        GameButton_setHighlight(this.instance, int, int2, f3, f4);
        return;
    }
    setDisabledWithHUDPrint(isDisabled, text) {
        return;
    }
}
GameButton.allocationSize = 704;

var movieClipOffset = LogicMemory.offset(128);
var listenerOffset = LogicMemory.offset(168);
var customButtonIdOffset = LogicMemory.offset(200);
var currentTouchIdOffset = LogicMemory.offset(164);
var continuousPressFirstDelayOffset = LogicMemory.offset(220);
var continuousPressFreqOffset = LogicMemory.offset(224);
var continuousPressCountOffset = LogicMemory.offset(228);
var continuousPressEnabledOffset = LogicMemory.offset(236);
var buttonNameOffset = LogicMemory.offset(576);
var CustomButton_setMovieClipOffset = LogicMemory.offset(360);
var stringEqualsCString = new NativeFunction(Libg.offset(6730644, 0), "bool", ["pointer", "pointer"]);
var IS_IOS = Process.platform === "darwin";

class CustomButton extends Sprite {
    constructor(instance) {
        super(instance);
    }
    setCustomButtonListener(callback, name) {
        var listener;
        if (name === undefined) {
            name = "";
        }
        listener = new IButtonListener(function (selfPtr, buttonPtr) {
            return callback(selfPtr, buttonPtr);
        });
        this._listener = listener;
        if (name) {
            CustomButton.store(this, name);
        }
        return;
    }
    set listener(func) {
        this._listener = new IButtonListener(function (listener, button) {
            return func(listener, button);
        });
        return;
    }
    setMovieClip(movieClip, animation) {
        if (movieClip.instance == null) {
            return;
        }
        this.instance.add(CustomButton_setMovieClipOffset).writePointer(movieClip.instance);
        return;
    }
    getMovieClip() {
        return new MovieClip(this.instance.add(movieClipOffset).readPointer());
    }
    set id(id) {
        this.instance.add(customButtonIdOffset).writeInt(id);
        return;
    }
    get id() {
        return this.instance.add(customButtonIdOffset).readInt();
    }
    isNameEqualsTo(name) {
        return stringEqualsCString(this.instance.add(buttonNameOffset), name);
    }
    enableContinuousPresses(firstDelay, repeatDelay) {
        this.instance.add(continuousPressEnabledOffset).writeU8(1);
        this.instance.add(continuousPressFirstDelayOffset).writeFloat(firstDelay);
        this.instance.add(continuousPressFreqOffset).writeFloat(repeatDelay);
        return;
    }
    get isContinuousPressesEnabled() {
        return this.instance.add(continuousPressEnabledOffset).readU8() !== 0;
    }
    set continuousPressEnabled(value) {
        this.instance.add(continuousPressEnabledOffset).writeU8(value ? 1 : 0);
        return;
    }
    get continuousPressCount() {
        return this.instance.add(continuousPressCountOffset).readInt();
    }
    set continuousPressCount(value) {
        this.instance.add(continuousPressCountOffset).writeInt(value);
        return;
    }
    suppressNextReleaseClick() {
        this.continuousPressEnabled = true;
        this.continuousPressCount = 1;
        return;
    }
    get isPressed() {
        return this.instance.add(currentTouchIdOffset).readInt() !== -1;
    }
    setCustomButtonHoldListener(callback, holdTimeMs) {
        var key, vtable;
        key = this.instance.toString();
        vtable = undefined;
        try {
            if (this.instance.isNull()) {
                return undefined;
            }
            if (!IS_IOS) {
                if (!CustomButton._isButtonAlive(this.instance)) {
                    return undefined;
                }
            }
            vtable = this.instance.readPointer();
            if (vtable.isNull()) {
                return undefined;
            }
            CustomButton._holdListeners.set(key, {
                button: this,
                vtable: vtable,
                callback: callback,
                holdTimeMs: holdTimeMs,
                pressStartedAtMs: 0,
                hasFired: false
            });
        } catch (e) {
            return undefined;
        }
        return;
    }
    static store(button, name) {
        CustomButton._buttonMap.set(name, button);
        return;
    }
    static get(name) {
        return CustomButton._buttonMap.get(name);
    }
    static clearAllHoldListeners() {
        CustomButton._holdListeners.clear();
        return;
    }
    static updateHoldListeners() {
        var stale, key, holdEntry;
        if (CustomButton._holdListeners.size === 0) {
            return;
        }
        stale = [];
        for (const [key, holdEntry] of CustomButton._holdListeners.entries()) {
            try {
                if (!holdEntry.button.instance.readPointer().equals(holdEntry.vtable)) {
                    stale.push(key);
                } else if (!holdEntry.button.isPressed) {
                    if (holdEntry.hasFired) {
                        holdEntry.button.continuousPressEnabled = false;
                        holdEntry.button.continuousPressCount = 0;
                    }
                    holdEntry.pressStartedAtMs = 0;
                    holdEntry.hasFired = false;
                } else {
                    if (holdEntry.pressStartedAtMs === 0) {
                        holdEntry.pressStartedAtMs = Date.now();
                    }
                    if (!holdEntry.hasFired) {
                        if (Date.now() - holdEntry.pressStartedAtMs >= holdEntry.holdTimeMs) {
                            holdEntry.hasFired = true;
                            holdEntry.callback(holdEntry.button);
                        }
                    }
                }
            } catch (e) {
                stale.push(key);
            }
        }
        for (const key of stale) {
            CustomButton._holdListeners.delete(key);
            CustomButton._buttonMap.forEach(function (value, mapKey) {
                if (value.instance.toString() === key) {
                    CustomButton._buttonMap.delete(mapKey);
                    return;
                }
            });
        }
        return;
    }
    static _isButtonAlive(instance) {
        var vtable;
        if (instance.isNull()) {
            return false;
        }
        if (!Process.findRangeByAddress(instance)) {
            return false;
        }
        vtable = instance.readPointer();
        if (vtable.isNull()) {
            return false;
        }
        if (!Process.findRangeByAddress(vtable)) {
            return false;
        }
        return true;
    }
}
CustomButton._buttonMap = new Map();
CustomButton._holdListeners = new Map();

var RadioButton_createButton = new NativeFunction(Libg.offset(8988492, 0), "pointer", ["pointer", "pointer", "pointer"]);
var RadioButton_setRadioButtonState = new NativeFunction(Libg.offset(8987696, 0), "void", ["pointer", "int"]);

class RadioButton extends GameButton {
    constructor(movieClip, childName) {
        var radioButtonPtr;
        radioButtonPtr = StringObject.with(childName, function (childNameSO) {
            return RadioButton_createButton(movieClip.instance, childNameSO, NULL);
        });
        super(radioButtonPtr);
        this.state = 1;
    }
    setRadioButtonState(state) {
        this.state = state;
        return RadioButton_setRadioButtonState(this.instance, state);
    }
    getRadioButtonState() {
        return this.state;
    }
    nextState() {
        var current, next;
        current = this.getRadioButtonState();
        next = current === 1 ? 0 : 1;
        this.setRadioButtonState(next);
        this.state = next;
        return;
    }
}

var GameSliderComponent_ctor = new NativeFunction(Libg.offset(8949272, 0), "void", ["pointer", "pointer", "pointer", "pointer", "int"]);
var GameSliderComponent_setCurrentValueToTextField = new NativeFunction(Libg.offset(8950332, 0), "void", ["pointer"]);
var currentValueOffset = LogicMemory.offset(232);
var minValueBoundOffset = LogicMemory.offset(236);
var maxValueBoundOffset = LogicMemory.offset(240);
var maxValueLabelOffset = LogicMemory.offset(264);
var bubbleOffset = LogicMemory.offset(304);
var boundsRectOffset = LogicMemory.offset(312);
var updateOffset = LogicMemory.offset(53 * Process.pointerSize);

class GameSliderComponent extends DropGUIContainer {
    constructor(name, sliderBg, slider, bubble, allowTrackTap) {
        var instance;
        if (allowTrackTap === undefined) {
            allowTrackTap = false;
        }
        instance = Libc.malloc(GameSliderComponent.allocationSize);
        GameSliderComponent_ctor(instance, sliderBg.instance, slider.instance, bubble ? bubble.instance : NULL, +allowTrackTap);
        super(instance);
    }
    static createDefaultSlider(name, shouldShowBubble) {
        var dialog, sliderParent, sliderBg, sliderClip;
        if (shouldShowBubble === undefined) {
            shouldShowBubble = true;
        }
        dialog = StringTable.getMovieClip("sc/ui.sc", "age_gate_dialog");
        sliderParent = dialog.getMovieClipByName("slider_bg");
        sliderBg = dialog.getMovieClipByName("slider");
        sliderClip = undefined;
        return new GameSliderComponent(name, sliderParent, sliderBg, sliderClip);
    }
    static createCompactSlider(name) {
        var editControlsUi, sliderTemplate, sliderBg, sliderClip, knobWidth, boundsChild, effectiveKnobWidth, slider, correction, boundsPtr;
        editControlsUi = StringTable.getMovieClip("sc/ui.sc", "edit_controls_ui");
        sliderTemplate = editControlsUi.getMovieClipByName("slider_scale");
        sliderBg = sliderTemplate.getMovieClipByName("slider_bg");
        sliderClip = sliderTemplate.getMovieClipByName("slider_button");
        sliderBg.x = 0;
        sliderBg.y = 0;
        sliderClip.x = 0;
        sliderClip.y = 0;
        knobWidth = sliderClip.width;
        boundsChild = sliderClip.getChildByName("bounds");
        if (boundsChild) {
            effectiveKnobWidth = boundsChild.width;
        } else {
            effectiveKnobWidth = knobWidth;
        }
        slider = new GameSliderComponent(name, sliderBg, sliderClip, undefined, true);
        if (boundsChild) {
            if (knobWidth !== effectiveKnobWidth) {
                correction = (knobWidth - effectiveKnobWidth) / 2;
                boundsPtr = slider.instance.add(boundsRectOffset).readPointer();
                boundsPtr.writeFloat(boundsPtr.readFloat() - correction);
            }
        }
        return slider;
    }
    setValue(value) {
        this.instance.add(currentValueOffset).writeInt(value);
        return;
    }
    getValue() {
        return this.instance.add(currentValueOffset).readInt();
    }
    setCurrentValueToTextField() {
        return GameSliderComponent_setCurrentValueToTextField(this.instance);
    }
    setMinValueBound(min) {
        this.instance.add(minValueBoundOffset).writeInt(min);
        return;
    }
    setMaxValueBound(max) {
        this.instance.add(maxValueBoundOffset).writeInt(max);
        return;
    }
    setValueBounds(min, max) {
        this.instance.add(minValueBoundOffset).writeInt(min);
        this.instance.add(maxValueBoundOffset).writeInt(max);
        return;
    }
    setMaxValueLabel(text) {
        return;
    }
    setBubblePixelSnappedXY(x, y) {
        this.getBubble().setPixelSnappedXY(x, y);
        return;
    }
    setBubbleScale(scale) {
        this.getBubble().scale = scale;
        return;
    }
    getBubble() {
        return new MovieClip(this.instance.add(bubbleOffset).readPointer());
    }
    getMinValueBound() {
        return this.instance.add(minValueBoundOffset).readInt();
    }
    getMaxValueBound() {
        return this.instance.add(maxValueBoundOffset).readInt();
    }
    update(deltaTime) {
        return new NativeFunction(this.instance.readPointer().add(updateOffset).readPointer(), "int", ["pointer", "float"])(this.instance, deltaTime);
    }
    store(name) {
        GameSliderComponent._sliderMap.set(name, this);
        return;
    }
}
GameSliderComponent.allocationSize = 376;
GameSliderComponent._sliderMap = new Map();
