// =============================================================
// BUTTONS
// merged webpack modules: 5039 GameButton, 6851 CustomButton, 9445 RadioButton, 120 GameSliderComponent
// =============================================================

// --------------------- MODULE 5039 — GameButton ---------------------

// ============================================================ //
// webpack module 5039  —  GameButton
// exports: DEFAULT_TEXT_FIELD_NAME, GameButton, GameButton_buttonPressed
// deps: 1978 (Libc), 6851 (CustomButton), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5039] = function GameButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, CustomButton, Libc, StringObject, GameButton_gameButton, GameButton_setDisabledWithHUDPrint, GameButton_setHighlight, GameButton, <class_fields_init>, GameButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DEFAULT_TEXT_FIELD_NAME = undefined;
        undefined.GameButton_buttonPressed = exports;
        exports.GameButton = undefined;
        Libg = __webpack_require__(9878);
        CustomButton = __webpack_require__(6851);
        Libc = __webpack_require__(1978);
        StringObject = __webpack_require__(7535);
        exports.DEFAULT_TEXT_FIELD_NAME = "txt";
        GameButton_gameButton = new NativeFunction(((Libg).Libg).offset(8943524, 0), "void", ["pointer"]);
        exports.GameButton_buttonPressed = new NativeFunction(((Libg).Libg).offset(8945064, 0), "void", ["pointer"]);
        GameButton_setDisabledWithHUDPrint = new NativeFunction(((Libg).Libg).offset(8946816, 0), "void", ["pointer", "int", "pointer", "int"]);
        GameButton_setHighlight = new NativeFunction(((Libg).Libg).offset(8947056, 0), "void", ["pointer", "int", "int", "int", "float"]);
        static setText (textFieldName, text) {
    var textField;
        textField = ((this).getMovieClip()).getTextFieldByName(textFieldName);
        textField.text = text;
        return;
};
        static getText (textFieldName) {
    var textField;
        textField = ((this).getMovieClip()).getTextFieldByName(textFieldName);
        return (textField).text;
};
        static setHighlight (int, int2, f3, f4) {
        return;
};
        static setDisabledWithHUDPrint (isDisabled, text) {
        return;
};
        <class_fields_init> = undefined;
        GameButton;
        class GameButton extends <class_fields_init> = (CustomButton).CustomButton {
            constructor (instance) {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if (!(!instance)) {
            if ((instance).isNull()) {
                instance = ((Libc).Libc).malloc((GameButton).allocationSize);
                GameButton_gameButton(instance);
                this = super(instance);
                if (<class_fields_init>) {
                } /* if 0x3f710 */
                return this;
            } /* if 0x3f716 */
        } /* if 0x3f6d0 */
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x3f72e */
        return this;
}
        }
        GameButton = <class_fields_init> = GameButton;
        exports.GameButton = GameButton;
        GameButton.allocationSize = 704;
        return;
};

// --------------------- MODULE 6851 — CustomButton ---------------------

// ============================================================ //
// webpack module 6851  —  CustomButton
// exports: CustomButton
// deps: 612 (MovieClip), 1588 (LogicMemory), 3217 (Sprite), 8402 (IButtonListener), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6851] = function CustomButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Sprite, IButtonListener, MovieClip, LogicMemory, Libg, movieClipOffset, listenerOffset, customButtonIdOffset, currentTouchIdOffset, continuousPressFirstDelayOffset, continuousPressFreqOffset, continuousPressCountOffset, continuousPressEnabledOffset, buttonNameOffset, setMovieClipOffset, stringEqualsCString, IS_IOS, CustomButton, <class_fields_init>, CustomButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CustomButton = undefined;
        Sprite = __webpack_require__(3217);
        IButtonListener = __webpack_require__(8402);
        MovieClip = __webpack_require__(612);
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        movieClipOffset = ((LogicMemory).LogicMemory).offset(128);
        listenerOffset = ((LogicMemory).LogicMemory).offset(168);
        customButtonIdOffset = ((LogicMemory).LogicMemory).offset(200);
        currentTouchIdOffset = ((LogicMemory).LogicMemory).offset(164);
        continuousPressFirstDelayOffset = ((LogicMemory).LogicMemory).offset(220);
        continuousPressFreqOffset = ((LogicMemory).LogicMemory).offset(224);
        continuousPressCountOffset = ((LogicMemory).LogicMemory).offset(228);
        continuousPressEnabledOffset = ((LogicMemory).LogicMemory).offset(236);
        buttonNameOffset = ((LogicMemory).LogicMemory).offset(576);
        setMovieClipOffset = ((LogicMemory).LogicMemory).offset(360);
        stringEqualsCString = new NativeFunction(((Libg).Libg).offset(6730644, 0), "bool", ["pointer", "pointer"]);
        IS_IOS = ((Process).platform === "darwin");
        static setCustomButtonListener (callback) {
    var name, callback, name, listener;
        listener = this;
        name = callback;
        if (((name) === undefined)) {
            callback = name = "";
        } /* if 0x745a4 */
        name = new (IButtonListener).IButtonListener(function (selfPtr, buttonPtr) {
        return;
});
        listener._listener = name;
        if (name) {
            (CustomButton).store(listener, name);
        } /* if 0x745d1 */
        return;
};
        static set listener (func) {
        this._listener = new (IButtonListener).IButtonListener(function (listener, button) {
        return;
});
        return;
};
        static setMovieClip (movieClip, animation) {
        if ((((movieClip).instance) == null)) {
        } /* if 0x7471f */
        return;
};
        static getMovieClip () {
        return new (MovieClip).MovieClip((((this).instance).add(movieClipOffset)).readPointer());
};
        static set id (id) {
        return;
};
        static get id () {
        return (((this).instance).add(customButtonIdOffset)).readInt();
};
        static isNameEqualsTo (name) {
        return stringEqualsCString(((this).instance).add(buttonNameOffset), name);
};
        static enableContinuousPresses (firstDelay, repeatDelay) {
        (((this).instance).add(continuousPressEnabledOffset)).writeU8(1);
        (((this).instance).add(continuousPressFirstDelayOffset)).writeFloat(firstDelay);
        return;
};
        static get isContinuousPressesEnabled () {
        return ((((this).instance).add(continuousPressEnabledOffset)).readU8() !== 0);
};
        static set continuousPressEnabled (value) {
        if (value) {
        } /* if 0x74912 */
        /* jump -> 0x74913 */
        return;
};
        static get continuousPressCount () {
        return (((this).instance).add(continuousPressCountOffset)).readInt();
};
        static set continuousPressCount (value) {
        return;
};
        static suppressNextReleaseClick () {
        this.continuousPressEnabled = true;
        this.continuousPressCount = 1;
        return;
};
        static get isPressed () {
        return ((((this).instance).add(currentTouchIdOffset)).readInt() !== -1);
};
        static setCustomButtonHoldListener (callback, holdTimeMs) {
    var key, vtable;
        key = ((this).instance).toString();
        vtable = undefined;
        /* CATCH -> 0x74a95 (try region) */
        if (((this).instance).isNull()) {
            return undefined;
        } /* if 0x74a4f */
        if ((!IS_IOS)) {
            if ((!(CustomButton)._isButtonAlive((this).instance))) {
                return undefined;
            } /* if 0x74a6c */
        } /* if 0x74a6c */
        vtable = ((this).instance).readPointer();
        if ((vtable).isNull()) {
            return undefined;
            key = vtable = <underflow>;
        } /* if 0x74a8f */
        /* jump -> 0x74a9c */
        /* CATCH -> 0x74a9e (try region) */
        return undefined;
        throw <underflow>;
        return;
};
        <class_fields_init> = undefined;
        CustomButton;
        class CustomButton extends <class_fields_init> = (Sprite).Sprite {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x74e26 */
        return this;
}
            store (button, name) {
        return;
}
            get (name) {
        return ((this)._buttonMap)["get"](name);
}
            clearAllHoldListeners () {
        ((CustomButton)._holdListeners).clear();
        return;
}
            updateHoldListeners () {
    var stale, key, holdEntry, key;
        if ((((CustomButton)._holdListeners).size === 0)) {
            return;
        } /* if 0x74b67 */
        stale = [];
        /* jump -> 0x74ca5 */
        /*iter*/ /*iter*/ ((CustomButton)._holdListeners).entries();
        key = /*iter*/ ((CustomButton)._holdListeners).entries();
        ((CustomButton)._holdListeners).entries();
        holdEntry = key = holdEntry = stale = <underflow>;
        /* CATCH -> 0x74c8e (try region) */
        if ((!((((holdEntry).button).instance).readPointer()).equals((holdEntry).vtable))) {
            (stale).push(key);
        } /* if 0x74bcf */
        /* jump -> 0x74ca5 */
        if ((!((holdEntry).button).isPressed)) {
            if ((holdEntry).hasFired) {
                (holdEntry).button.continuousPressEnabled = false;
                (holdEntry).button.continuousPressCount = 0;
            } /* if 0x74c05 */
            holdEntry.pressStartedAtMs = 0;
            holdEntry.hasFired = false;
        } /* if 0x74c1b */
        /* jump -> 0x74ca5 */
        if (((holdEntry).pressStartedAtMs === 0)) {
            holdEntry.pressStartedAtMs = (Date).now();
        } /* if 0x74c3f */
        /* jump -> 0x74ca4 */
        if ((!(holdEntry).hasFired)) {
            if ((((Date).now() - (holdEntry).pressStartedAtMs) >= (holdEntry).holdTimeMs)) {
                holdEntry.hasFired = true;
                (holdEntry).callback((holdEntry).button);
            } /* if 0x74c88 */
        } /* if 0x74c88 */
        /* jump -> 0x74ca4 */
        /* CATCH -> 0x74ca6 (try region) */
        (stale).push(key);
        /* jump -> 0x74ca4 */
        throw (holdEntry).button;
        } while (!<underflow>);
        /* jump -> 0x74ce4 */
        key = /*iter*/ stale;
        ((CustomButton)._holdListeners)["delete"](key);
        ((CustomButton)._buttonMap).forEach(function (value, mapKey) {
        if ((((value).instance).toString() === key)) {
            ((CustomButton)._buttonMap)["delete"](mapKey);
            return;
        } /* if 0x74d57 (open) */
});
        } while (!stale);
        key = <underflow>;
        return;
}
            _isButtonAlive (instance) {
    var vtable;
        if ((instance).isNull()) {
            return false;
        } /* if 0x74d86 */
        /* is_null  */
        if ((Process).findRangeByAddress(instance)) {
            return false;
        } /* if 0x74d99 */
        vtable = (instance).readPointer();
        if ((vtable).isNull()) {
            return false;
        } /* if 0x74db2 */
        /* is_null  */
        if ((Process).findRangeByAddress(vtable)) {
            return false;
        } /* if 0x74dc7 */
        return true;
}
        }
        CustomButton = currentTouchIdOffset = CustomButton;
        exports.CustomButton = CustomButton;
        CustomButton._buttonMap = new Map();
        CustomButton._holdListeners = new Map();
        return;
};

// --------------------- MODULE 9445 — RadioButton ---------------------

// ============================================================ //
// webpack module 9445  —  RadioButton
// exports: RadioButton
// deps: 5039 (GameButton), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9445] = function RadioButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GameButton, StringObject, RadioButton_createButton, RadioButton_setRadioButtonState, RadioButton, <class_fields_init>, RadioButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RadioButton = undefined;
        Libg = __webpack_require__(9878);
        GameButton = __webpack_require__(5039);
        StringObject = __webpack_require__(7535);
        RadioButton_createButton = new NativeFunction(((Libg).Libg).offset(8988492, 0), "pointer", ["pointer", "pointer", "pointer"]);
        RadioButton_setRadioButtonState = new NativeFunction(((Libg).Libg).offset(8987696, 0), "void", ["pointer", "int"]);
        static setRadioButtonState (state) {
        this.state = state;
        return RadioButton_setRadioButtonState((this).instance, state);
};
        static getRadioButtonState () {
        return (this).state;
};
        static nextState () {
    var current, next;
        current = (this).getRadioButtonState();
        if ((current === 1)) {
        } /* if 0x7ab0c */
        /* jump -> 0x7ab0d */
        next = 1;
        (this).setRadioButtonState(next);
        this.state = next;
        return;
};
        <class_fields_init> = undefined;
        RadioButton;
        class RadioButton extends <class_fields_init> = (GameButton).GameButton {
            constructor (movieClip, childName) {
    var radioButtonPtr, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        radioButtonPtr = ((StringObject).StringObject).with(childName, function (childNameSO) {
        return RadioButton_createButton((movieClip).instance, childNameSO, NULL);
});
        this = super(radioButtonPtr);
        if (<class_fields_init>) {
        } /* if 0x7aa39 */
        this.state = 1;
        return this;
}
        }
        RadioButton = v8 = RadioButton;
        exports.RadioButton = RadioButton;
        return;
};

// --------------------- MODULE 120 — GameSliderComponent ---------------------

// ============================================================ //
// webpack module 120  —  GameSliderComponent
// exports: GameSliderComponent
// deps: 612 (MovieClip), 1588 (LogicMemory), 1978 (Libc), 7535 (StringObject), 9250 (StringTable), 9407 (DropGUIContainer), 9878 (Libg)
// ============================================================ //

__webpack_modules__[120] = function GameSliderComponent_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, DropGUIContainer, MovieClip, Libc, StringTable, LogicMemory, StringObject, GameSliderComponent_ctor, GameSliderComponent_setCurrentValueToTextField, currentValueOffset, minValueBoundOffset, maxValueBoundOffset, maxValueLabelOffset, bubbleOffset, boundsRectOffset, updateOffset, GameSliderComponent, <class_fields_init>, GameSliderComponent;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameSliderComponent = undefined;
        Libg = __webpack_require__(9878);
        DropGUIContainer = __webpack_require__(9407);
        MovieClip = __webpack_require__(612);
        Libc = __webpack_require__(1978);
        StringTable = __webpack_require__(9250);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        GameSliderComponent_ctor = new NativeFunction(((Libg).Libg).offset(8949272, 0), "void", ["pointer", "pointer", "pointer", "pointer", "int"]);
        GameSliderComponent_setCurrentValueToTextField = new NativeFunction(((Libg).Libg).offset(8950332, 0), "void", ["pointer"]);
        currentValueOffset = ((LogicMemory).LogicMemory).offset(232);
        minValueBoundOffset = ((LogicMemory).LogicMemory).offset(236);
        maxValueBoundOffset = ((LogicMemory).LogicMemory).offset(240);
        maxValueLabelOffset = ((LogicMemory).LogicMemory).offset(264);
        bubbleOffset = ((LogicMemory).LogicMemory).offset(304);
        boundsRectOffset = ((LogicMemory).LogicMemory).offset(312);
        updateOffset = ((LogicMemory).LogicMemory).offset((53 * (Process).pointerSize));
        static setValue (value) {
        return;
};
        static getValue () {
        return (((this).instance).add(currentValueOffset)).readInt();
};
        static setCurrentValueToTextField () {
        return GameSliderComponent_setCurrentValueToTextField((this).instance);
};
        static setMinValueBound (min) {
        return;
};
        static setMaxValueBound (max) {
        return;
};
        static setValueBounds (min, max) {
        (((this).instance).add(minValueBoundOffset)).writeInt(min);
        return;
};
        static setMaxValueLabel (text) {
        return;
};
        static setBubblePixelSnappedXY (x, y) {
        return;
};
        static setBubbleScale (scale) {
        (this).getBubble().scale = scale;
        return;
};
        static getBubble () {
        return new (MovieClip).MovieClip((((this).instance).add(bubbleOffset)).readPointer());
};
        static getMinValueBound () {
        return (((this).instance).add(minValueBoundOffset)).readInt();
};
        static getMaxValueBound () {
        return (((this).instance).add(maxValueBoundOffset)).readInt();
};
        static update (deltaTime) {
        return new NativeFunction(((((this).instance).readPointer()).add(updateOffset)).readPointer(), "int", ["pointer", "float"])((this).instance, deltaTime);
};
        static store (name) {
        return;
};
        <class_fields_init> = undefined;
        GameSliderComponent;
        class GameSliderComponent extends <class_fields_init> = (DropGUIContainer).DropGUIContainer {
            constructor (name, sliderBg, slider, bubble) {
    var allowTrackTap, name, sliderBg, slider, bubble, allowTrackTap, instance, this.active_func, new.target;
        instance = /*special:2*/;
        this.active_func = /*special:3*/;
        allowTrackTap = name;
        name = sliderBg;
        sliderBg = slider;
        slider = bubble;
        if (((allowTrackTap) === undefined)) {
            bubble = allowTrackTap = false;
        } /* if 0x77432 */
        allowTrackTap = ((Libc).Libc).malloc((GameSliderComponent).allocationSize);
        if (bubble) {
        } /* if 0x7746e */
        /* jump -> 0x77473 */
        allowTrackTap((sliderBg).instance, (slider).instance, (bubble).instance, NULL, (+allowTrackTap));
        new.target = super(allowTrackTap);
        if (<class_fields_init>) {
        } /* if 0x77497 */
        return new.target;
}
            createDefaultSlider (name) {
    var shouldShowBubble, name, shouldShowBubble, sliderParent, sliderBg, sliderClip, sliderBubble;
        shouldShowBubble = name;
        if (((shouldShowBubble) === undefined)) {
            name = shouldShowBubble = true;
        } /* if 0x77834 */
        shouldShowBubble = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "age_gate_dialog");
        sliderParent = (shouldShowBubble).getMovieClipByName("slider_bg");
        sliderBg = (shouldShowBubble).getMovieClipByName("slider");
        if (shouldShowBubble) {
        } /* if 0x77894 */
        /* jump -> 0x77899 */
        sliderClip = undefined;
        return new GameSliderComponent(name, sliderParent, sliderBg, sliderClip);
}
            createCompactSlider (name) {
    var editControlsUi, sliderTemplate, sliderBg, sliderClip, knobWidth, boundsChild, effectiveKnobWidth, slider, correction, boundsPtr;
        editControlsUi = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "edit_controls_ui");
        sliderTemplate = (editControlsUi).getMovieClipByName("slider_scale");
        sliderBg = (sliderTemplate).getMovieClipByName("slider_bg");
        sliderClip = (sliderTemplate).getMovieClipByName("slider_button");
        sliderBg.x = 0;
        sliderBg.y = 0;
        sliderClip.x = 0;
        sliderClip.y = 0;
        knobWidth = (sliderClip).width;
        boundsChild = (sliderClip).getChildByName("bounds");
        if (boundsChild) {
        } /* if 0x779bc */
        /* jump -> 0x779bf */
        effectiveKnobWidth = knobWidth;
        slider = new GameSliderComponent(name, sliderBg, sliderClip, undefined, true);
        if (boundsChild) {
            if ((knobWidth !== effectiveKnobWidth)) {
                correction = ((knobWidth - effectiveKnobWidth) / 2);
                boundsPtr = (((slider).instance).add(boundsRectOffset)).readPointer();
                (boundsPtr).writeFloat(((boundsPtr).readFloat() - correction));
            } /* if 0x77a2e */
        } /* if 0x77a2e */
        return slider;
}
        }
        GameSliderComponent = GameSliderComponent_setCurrentValueToTextField = GameSliderComponent;
        exports.GameSliderComponent = GameSliderComponent;
        GameSliderComponent.allocationSize = 376;
        GameSliderComponent._sliderMap = new Map();
        return;
};

