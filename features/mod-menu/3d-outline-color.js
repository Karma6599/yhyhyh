//============================================================================//
// MOD FEATURE: 3D Outline Color
// In-game name: "3D Outline Color"  (TID: OutlineColorPopupButton)
// Menu: Mod Menu — Lobby + Battle tab(s) (menu/mod-menu.js#8203)
// Outline color picker popup + text outline renderer (Config.OutlineColor = [r,g,b,a]).
//============================================================================//

// --------------------- MODULE 3309 — OutlineColorPopup ---------------------


// ============================================================ //
// webpack module 3309  —  OutlineColorPopup
// exports: OutlineColorPopup
// deps: 120 (GameSliderComponent), 699 (FileManager), 1056 (SimpleWebView), 3020 (LogicColor), 4009 (Config), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 8852 (Outline), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[3309] = function OutlineColorPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameSliderComponent, Outline, StringTable, LogicColor, GameButton, GUI, SimpleWebView, Config, FileManager, OutlineColorPopup, <class_fields_init>, OutlineColorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.OutlineColorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameSliderComponent = __webpack_require__(120);
        Outline = __webpack_require__(8852);
        StringTable = __webpack_require__(9250);
        LogicColor = __webpack_require__(3020);
        GameButton = __webpack_require__(5039);
        GUI = __webpack_require__(4934);
        SimpleWebView = __webpack_require__(1056);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        static saveButtonPressed (self, button) {
        (Outline).Outline.outlineColor = ((this).tempOutlineColor).slice();
        ((Config).Config).config.OutlineColor = (((Outline).Outline).outlineColor).slice();
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        static resetButtonPressed (self, button) {
    var slider, hexColor;
        ((Config).Config).config.OutlineColor = ((((Config).Config).configStatic).OutlineColor).slice();
        (Outline).Outline.outlineColor = ((((Config).Config).config).OutlineColor).slice();
        this.tempOutlineColor = (((Outline).Outline).outlineColor).slice();
        ((FileManager).FileManager).updateConfigFile();
        /* jump -> 0xcc3a4 */
        slider = /*iter*/ (this).sliders;
        (slider).setValue(0);
        } while (!(this).sliders);
        slider = this;
        ((this).sliders[0]).setValue(100);
        hexColor = ((LogicColor).LogicColor).argbToIntString(((Outline).Outline).outlineColor);
        (this).hexColorTextField.color = parseInt(hexColor, 16);
        (this).hexColorTextField.text = ("#").concat((hexColor).substring(2));
        ((this).saveButton).setDisabledWithHUDPrint(true, ((Localisation).Localisation).getString("OutlineColorAlreadySaved"));
        return;
};
        static colorPickerButtonClicked (self, button) {
    var webView;
        webView = ((SimpleWebView).SimpleWebView).create();
        (webView).setTitleTid(((Localisation).Localisation).getString("ColorPicker"));
        (webView).loadURL("https://bsd.meowfox.net/colorpicker");
        (webView).setDisallowModalTap(true);
        return;
};
        static updateElements (deltaTime) {
    var index, slider, valueBeforeUpdate, valueAfterUpdate, outlineOffset, hexColor;
        index = 0;
        /* jump -> 0xcc662 */
        slider = /*iter*/ (this).sliders;
        if ((!(slider).isNull())) {
            valueBeforeUpdate = (slider).getValue();
            (slider).update(deltaTime);
            valueAfterUpdate = (slider).getValue();
            if ((valueBeforeUpdate !== valueAfterUpdate)) {
                outlineOffset = (OutlineColorPopup).offsetMappings[index];
                (this).tempOutlineColor[outlineOffset] = valueAfterUpdate;
                ((this).saveButton).setDisabledWithHUDPrint(false, "");
                ((this).resetButton).setDisabledWithHUDPrint(false, "");
                hexColor = ((LogicColor).LogicColor).argbToIntString((this).tempOutlineColor);
                (this).hexColorTextField.color = parseInt(hexColor, 16);
                (this).hexColorTextField.text = ("#").concat((hexColor).substring(2));
            } /* if 0xcc651 */
        } /* if 0xcc651 */
        index = (index + (1 % (this).tempOutlineColor.length));
        } while (!(this).hexColorTextField);
        return;
};
        <class_fields_init> = undefined;
        OutlineColorPopup;
        class OutlineColorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var popupClip, sliders, sliderData, slider, popoverTextLeft, hexColorTextField, hexColor, saveButtonClip, saveButton, saveLbTxt, resetButtonClip, resetButton, lbTxt, colorPickerButtonClip, colorPickerButton, labelTxt, caption, captionClip, captionTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("OutlineColorPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xcbc43 */
        this.tempOutlineColor = [];
        this.sliders = [];
        (this).adjustPopupHeaderButtons("outline_settings");
        this.tempOutlineColor = ((Outline).Outline).outlineColor;
        popupClip = (this).getMovieClip();
        sliders = [{ currentValueOffset: 3, maxValue: 100, y: 150 }, { currentValueOffset: 0, maxValue: 100, y: 250 }, { currentValueOffset: 1, maxValue: 100, y: 350 }, { currentValueOffset: 2, maxValue: 100, y: 450 }];
        /* jump -> 0xcbd8d */
        sliderData = /*iter*/ sliders;
        slider = ((GameSliderComponent).GameSliderComponent).createDefaultSlider(("outline" + (sliderData).currentValueOffset), false);
        slider.x = -150;
        slider.y = (sliderData).y;
        (slider).setValue(((Outline).Outline).outlineColor[(sliderData).currentValueOffset]);
        (slider).setValueBounds(0, (sliderData).maxValue);
        ((this).sliders).push(slider);
        (popupClip).addChild(slider);
        } while (!slider);
        popoverTextLeft = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        hexColorTextField = (popoverTextLeft).getTextFieldByName("text");
        hexColor = ((LogicColor).LogicColor).argbToIntString(((Outline).Outline).outlineColor);
        hexColorTextField.x = 140;
        hexColorTextField.y = 130;
        hexColorTextField.color = parseInt(hexColor, 16);
        hexColorTextField.fontOutline = true;
        hexColorTextField.align = 2;
        hexColorTextField.fontSize = 40;
        hexColorTextField.text = ("#").concat((hexColor).substring(2));
        this.hexColorTextField = hexColorTextField;
        saveButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        saveButton = new (GameButton).GameButton();
        (saveButton).setMovieClip(saveButtonClip, 1);
        (saveButton).setCustomButtonListener(((this).saveButtonPressed).bind(this), "outline_save_button");
        saveLbTxt = (saveButtonClip).getTextFieldByName("label_txt");
        saveLbTxt.colorTag = true;
        (saveLbTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("SaveButton"));
        (saveButtonClip).gotoAndStopFrameIndex(1);
        (saveButton).setXY(250, 350);
        this.saveButton = saveButton;
        resetButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        resetButton = new (GameButton).GameButton();
        (resetButton).setMovieClip(resetButtonClip, 1);
        (resetButton).setCustomButtonListener(((this).resetButtonPressed).bind(this), "outline_reset_button");
        lbTxt = (resetButtonClip).getTextFieldByName("label_txt");
        lbTxt.colorTag = true;
        (lbTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("ResetButton"));
        (resetButtonClip).gotoAndStopFrameIndex(1);
        (resetButton).setXY(250, 450);
        this.resetButton = resetButton;
        colorPickerButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        colorPickerButton = new (GameButton).GameButton();
        (colorPickerButton).setMovieClip(colorPickerButtonClip, 1);
        (colorPickerButton).setCustomButtonListener(((this).colorPickerButtonClicked).bind(this), "outline_reset_button");
        labelTxt = (colorPickerButtonClip).getTextFieldByName("label_txt");
        labelTxt.colorTag = true;
        (labelTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("ColorPicker"));
        (colorPickerButtonClip).gotoAndStopFrameIndex(1);
        (colorPickerButton).setXY(250, 250);
        this.colorPickerButton = colorPickerButton;
        /* jump -> 0xcc156 */
        caption = /*iter*/ (OutlineColorPopup).CAPTIONS;
        captionClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        captionTextField = (captionClip).getTextFieldByName("text");
        (captionTextField).setXY(-260, (caption).y);
        captionTextField.color = (caption).color;
        captionTextField.colorTag = true;
        captionTextField.fontOutline = true;
        captionTextField.align = 2;
        captionTextField.text = ((Localisation).Localisation).getString((caption).text);
        (popupClip).addChild(captionTextField);
        } while (!captionTextField);
        (popupClip).addChild(saveButton);
        (popupClip).addChild(resetButton);
        (popupClip).addChild(colorPickerButton);
        (popupClip).addChild(hexColorTextField);
        (((GUI).GUI).popupStorage).push(this);
        return this;
}
        }
        OutlineColorPopup = SimpleWebView = OutlineColorPopup;
        exports.OutlineColorPopup = OutlineColorPopup;
        OutlineColorPopup.CAPTIONS = [{ text: "ColorAlpha", y: 180, color: 0 }, { text: "ColorRed", y: 280, color: 4294901760.0 }, { text: "ColorGreen", y: 380, color: 4278255360.0 }, { text: "ColorBlue", y: 480, color: 4278190335.0 }];
        OutlineColorPopup.offsetMappings = [3, 0, 1, 2];
        return;
};

// --------------------- MODULE 8852 — Outline ---------------------


// ============================================================ //
// webpack module 8852  —  Outline
// exports: Outline
// deps: 3378 (SceneRenderer), 4009 (Config), 6551 (EnvironmentRenderer)
// ============================================================ //

__webpack_modules__[8852] = function Outline_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Config, EnvironmentRenderer, SceneRenderer, Outline, <class_fields_init>, Outline;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Outline = undefined;
        Config = __webpack_require__(4009);
        EnvironmentRenderer = __webpack_require__(6551);
        SceneRenderer = __webpack_require__(3378);
        <class_fields_init> = undefined;
        Outline;
        class Outline {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4f5b2 (open) */
}
            init () {
        this.outlineColor = ((((Config).Config).config).OutlineColor).slice();
        ((EnvironmentRenderer).EnvironmentRenderer).patch();
        return;
}
        }
        Outline = Outline = Outline;
        exports.Outline = Outline;
        return;
};

