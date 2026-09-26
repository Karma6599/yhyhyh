//============================================================================//
// MOD FEATURE: FPS Limit
// In-game name: "FPS Limit"  (TID: FPSLimitButton)
// Menu: game Settings screen (ui/screens.js#7591)
// Config key: FPSLimit
// FPS limit popup from the game Settings screen; includes the framerate manager. Saved to Config.FPSLimit (-1 = unlimited).
//============================================================================//

// --------------------- MODULE 1580 — FPSLimit ---------------------


// ============================================================ //
// webpack module 1580  —  FPSLimit
// exports: FPSLimitPopup
// deps: 120 (GameSliderComponent), 699 (FileManager), 2660 (FramerateManager), 4009 (Config), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[1580] = function FPSLimit_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameSliderComponent, Config, FileManager, GameButton, StringTable, GUI, FramerateManager, FPSLimitPopup, <class_fields_init>, FPSLimitPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FPSLimitPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameSliderComponent = __webpack_require__(120);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        GUI = __webpack_require__(4934);
        FramerateManager = __webpack_require__(2660);
        static refreshItems () {
    var slider, popoverTextLeftClip, fpsLimitTextField, saveButtonClip, saveButton, saveLabelTxt, resetButtonClip, resetButton, labelTxt, popupClip;
        slider = ((GameSliderComponent).GameSliderComponent).createDefaultSlider("fps_limit");
        (slider).setValueBounds(1, (this).maxValue);
        slider.y = 200;
        if (((((Config).Config).config).FPSLimit === -1)) {
        } /* if 0xc3826 */
        /* jump -> 0xc3838 */
        (this).maxValue((((Config).Config).config).FPSLimit);
        (slider).setMaxValueLabel("∞");
        (slider).setCurrentValueToTextField();
        this.slider = slider;
        popoverTextLeftClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        fpsLimitTextField = (popoverTextLeftClip).getTextFieldByName("text");
        fpsLimitTextField.x = -110;
        fpsLimitTextField.y = 230;
        fpsLimitTextField.color = 4294967295.0;
        fpsLimitTextField.colorTag = true;
        fpsLimitTextField.fontOutline = true;
        fpsLimitTextField.align = 2;
        fpsLimitTextField.text = ((Localisation).Localisation).getString("FPSLimitNote");
        saveButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        saveButton = new (GameButton).GameButton();
        (saveButton).setMovieClip(saveButtonClip, 1);
        (saveButton).setCustomButtonListener(((this).saveButtonPressed).bind(this), "fps_limit_save_button");
        saveLabelTxt = (saveButtonClip).getTextFieldByName("label_txt");
        saveLabelTxt.colorTag = true;
        (saveLabelTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("SaveButton"));
        (saveButtonClip).gotoAndStopFrameIndex(1);
        (saveButton).setXY(-110, 400);
        this.saveButton = saveButton;
        resetButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        resetButton = new (GameButton).GameButton();
        (resetButton).setMovieClip(resetButtonClip, 1);
        (resetButton).setCustomButtonListener(((this).resetButtonPressed).bind(this), "fps_limit_reset_button");
        labelTxt = (resetButtonClip).getTextFieldByName("label_txt");
        labelTxt.colorTag = true;
        (labelTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("ResetButton"));
        (resetButtonClip).gotoAndStopFrameIndex(1);
        (resetButton).setXY(110, 400);
        this.resetButton = resetButton;
        popupClip = (this).getMovieClip();
        (popupClip).addChild(slider);
        (popupClip).addChild(fpsLimitTextField);
        (popupClip).addChild(saveButton);
        return;
};
        static saveButtonPressed () {
    var currentFpsSliderValue;
        currentFpsSliderValue = ((this).slider).getValue();
        if ((currentFpsSliderValue === (this).maxValue)) {
        } /* if 0xc3b3f */
        /* jump -> 0xc3b42 */
        -1.FPSLimit = currentFpsSliderValue;
        ((FileManager).FileManager).updateConfigFile();
        if (((Process).platform === "darwin")) {
            ((FramerateManager).FramerateManager).setFrameRate((((Config).Config).config).FPSLimit);
        } /* if 0xc3b8d */
        return;
};
        static resetButtonPressed () {
        ((Config).Config).config.FPSLimit = -1;
        ((FileManager).FileManager).updateConfigFile();
        ((this).slider).setValue((this).maxValue);
        ((this).slider).setCurrentValueToTextField();
        ((this).saveButton).setDisabledWithHUDPrint(true, ((Localisation).Localisation).getString("FPSLimitAlreadySaved"));
        ((this).resetButton).setDisabledWithHUDPrint(true, ((Localisation).Localisation).getString("FPSLimitAlreadyReset"));
        if (((Process).platform === "darwin")) {
            ((FramerateManager).FramerateManager).setFrameRate((((Config).Config).config).FPSLimit);
            return;
        } /* if 0xc3ca9 (open) */
};
        static updateElements (deltaTime) {
    var sliderValueBefore, sliderValueAfter;
        if ((this).slider) {
            sliderValueBefore = ((this).slider).getValue();
            ((this).slider).update(deltaTime);
            sliderValueAfter = ((this).slider).getValue();
            if ((sliderValueBefore !== sliderValueAfter)) {
                ((this).saveButton).setDisabledWithHUDPrint(false, "");
                ((this).resetButton).setDisabledWithHUDPrint(false, "");
                return;
            } /* if 0xc3d43 (open) */
        } /* if 0xc3d43 (open) */
};
        <class_fields_init> = undefined;
        FPSLimitPopup;
        class FPSLimitPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("FPSLimitTitle") });
        if (<class_fields_init>) {
        } /* if 0xc36d7 */
        this.maxValue = 145;
        if (((Process).platform === "darwin")) {
            this.maxValue = 121;
        } /* if 0xc3700 */
        (this).adjustPopupHeaderButtons("fps_limit");
        (this).refreshItems();
        (((GUI).GUI).popupStorage).push(this);
        return this;
}
        }
        FPSLimitPopup = FramerateManager = FPSLimitPopup;
        exports.FPSLimitPopup = FPSLimitPopup;
        return;
};

// --------------------- MODULE 2660 — FramerateManager ---------------------


// ============================================================ //
// webpack module 2660  —  FramerateManager
// exports: FramerateManager
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[2660] = function FramerateManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, FramerateManager_getInstance, FramerateManager_setSegment, FramerateManager, <class_fields_init>, FramerateManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FramerateManager = undefined;
        Libg = __webpack_require__(9878);
        FramerateManager_getInstance = new NativeFunction(((Libg).Libg).offset(0, 0), "pointer", []);
        FramerateManager_setSegment = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer", "int"]);
        static get frameRate () {
        return ((this).instance).readDouble();
};
        static set frameRate (framerate) {
        return;
};
        static get frameRates () {
        return [(((this).instance).add(8)).readDouble(), (((this).instance).add(16)).readDouble(), (((this).instance).add(24)).readDouble()];
};
        static set frameRates (vals) {
        (((this).instance).add(8)).writeDouble(vals[0]);
        (((this).instance).add(16)).writeDouble(vals[1]);
        return;
};
        static get frameTime () {
        return (((this).instance).add(32)).readFloat();
};
        static set frameTime (frameTime) {
        return;
};
        static get initialized () {
        return ((((this).instance).add(36)).readU8() !== 0);
};
        static set initialized (v) {
        if (v) {
        } /* if 0x80fed */
        /* jump -> 0x80fee */
        return;
};
        static get bestFrameRateIndex () {
    var rates;
        rates = (this).frameRates;
        return (rates).indexOf((Math).max(rates[0], rates[1], rates[2]));
};
        <class_fields_init> = undefined;
        FramerateManager;
        class FramerateManager {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x80de1 */
        this.instance = instance;
        return;
}
            patch () {
        return;
}
            setSegment (segment) {
    var inst, rate;
        inst = FramerateManager_getInstance();
        rate = ((inst).add((8 + (segment * 8)))).readDouble();
        (inst).writeDouble(rate);
        return;
}
            setFrameRate (rate) {
    var manager;
        manager = new FramerateManager(FramerateManager_getInstance());
        manager.frameRates = [rate, rate, rate];
        manager.frameRate = rate;
        manager.frameTime = (1 / rate);
        return;
}
        }
        FramerateManager = FramerateManager = FramerateManager;
        exports.FramerateManager = FramerateManager;
        return;
};

