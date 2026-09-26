// =============================================================
// FEATURE: Particle Styles
// config keys: ParticleStyle, ParticleCount, ParticleScale, ParticleSpeed, ParticleAnimationDisabled
// Custom particle styles/effects + editor preview and registry.
// merged webpack modules: 5291 ParticleStyle, 7545 ParticleStyleItem, 3041 ParticleSelector, 280 ParticleItem, 4367 ParticleAnimationRadioButton, 7820 ParticleParameters, 6030 EffectPreview, 8944 EffectRegistry
// =============================================================

// --------------------- MODULE 5291 — ParticleStyle ---------------------

// ============================================================ //
// webpack module 5291  —  ParticleStyle
// exports: ParticleStylePopup
// deps: 699 (FileManager), 3041 (ParticleSelector), 4009 (Config), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 7545 (ParticleStyleItem), 8261 (ListContainerPopup)
// ============================================================ //

__webpack_modules__[5291] = function ParticleStyle_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameButton, GUI, ParticleSelector, Config, ParticleStyleItem, FileManager, ParticleStylePopup, <class_fields_init>, ParticleStylePopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ParticleStylePopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        GUI = __webpack_require__(4934);
        ParticleSelector = __webpack_require__(3041);
        Config = __webpack_require__(4009);
        ParticleStyleItem = __webpack_require__(7545);
        FileManager = __webpack_require__(699);
        static refreshItems () {
    var listContainer, index, particleStyle, particleStyleItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        index = 0;
        /* jump -> 0xce09f */
        particleStyle = /*iter*/ (ParticleStylePopup).PARTICLE_TYPE;
        particleStyleItem = new (ParticleStyleItem).ParticleStyleItem(particleStyle);
        (particleStyleItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("particleStyle_").concat(index));
        particleStyleItem.id = index;
        ((this).container).addEntry(particleStyleItem);
        index = ((index) + 1);
        (index++);
        } while (!particleStyleItem);
        particleStyleItem = (ParticleStylePopup).PARTICLE_TYPE;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(1, (naviHeight * 2.5), 0, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, button) {
    var particleStyleButton, particleStyleId, particleStyle;
        particleStyleButton = new (GameButton).GameButton(button);
        particleStyleId = (particleStyleButton).id;
        particleStyle = (ParticleStylePopup).PARTICLE_TYPE[particleStyleId];
        if ((!particleStyle)) {
            return;
        } /* if 0xce174 */
        if ((((ParticleStylePopup).PARTICLE_TYPE[particleStyleId]).style !== (((Config).Config).config).ParticleStyle)) {
            (ParticleSelector).ParticleSelectorPopup.needsReload = true;
        } /* if 0xce1a8 */
        ((Config).Config).config.ParticleStyle = (particleStyle).style;
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        <class_fields_init> = undefined;
        ParticleStylePopup;
        class ParticleStylePopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("ParticleStylePopup") });
        if (<class_fields_init>) {
        } /* if 0xcdfa2 */
        (this).adjustPopupHeaderButtons("particle_type_popup");
        (this).refreshItems();
        return this;
}
        }
        ParticleStylePopup = ParticleStylePopup = ParticleStylePopup;
        exports.ParticleStylePopup = ParticleStylePopup;
        ParticleStylePopup.PARTICLE_TYPE = [{ name: "ParticleStyleSnow", style: "Snow" }, { name: "ParticleStyleEmber", style: "Ember" }];
        return;
};

// --------------------- MODULE 7545 — ParticleStyleItem ---------------------

// ============================================================ //
// webpack module 7545  —  ParticleStyleItem
// exports: ParticleStyleItem
// deps: 612 (MovieClip), 4009 (Config), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7545] = function ParticleStyleItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, MovieClip, GameButton, Localisation, Config, ParticleStyleItem, <class_fields_init>, ParticleStyleItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ParticleStyleItem = undefined;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        <class_fields_init> = undefined;
        ParticleStyleItem;
        class ParticleStyleItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (particleStyle) {
    var particleStyleMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb54b1 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        particleStyleMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((particleStyleMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((particleStyleMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((particleStyle).name));
        (particleStyleMovieClip).gotoAndStopFrameIndex((+(!((particleStyle).style === (((Config).Config).config).ParticleStyle))));
        return this;
}
        }
        ParticleStyleItem = ParticleStyleItem = ParticleStyleItem;
        exports.ParticleStyleItem = ParticleStyleItem;
        return;
};

// --------------------- MODULE 3041 — ParticleSelector ---------------------

// ============================================================ //
// webpack module 3041  —  ParticleSelector
// exports: ParticleSelectorPopup
// deps: 280 (ParticleItem), 699 (FileManager), 4009 (Config), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 7820 (ParticleParameters), 8261 (ListContainerPopup)
// ============================================================ //

__webpack_modules__[3041] = function ParticleSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, Config, GameButton, FileManager, ParticleItem, ParticleParameters, GUI, ParticleSelectorPopup, <class_fields_init>, ParticleSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ParticleSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        GameButton = __webpack_require__(5039);
        FileManager = __webpack_require__(699);
        ParticleItem = __webpack_require__(280);
        ParticleParameters = __webpack_require__(7820);
        GUI = __webpack_require__(4934);
        static refreshItems () {
    var listContainer, index, particles, particle, particleItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        index = 0;
        particles = (this).getParticles();
        /* jump -> 0xcdc08 */
        particle = /*iter*/ particles;
        if (!(particle).disabled) {
            if (((particle).name === "ParticleReset")) {
                if (!((((Config).Config).config).ParticleExportName === "")) {
                    particleItem = new (ParticleItem).ParticleItem(particle);
                    (particleItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("particleitem_").concat((particle).export_name, "_button"));
                    particleItem.id = index;
                    ((this).container).addEntry(particleItem);
                    index = ((index) + 1);
                    (index++);
                } /* if 0xcdc07 */
            } /* if 0xcdb99 */
            } while (!particleItem);
        } /* if 0xcdc0a */
        particleItem = particles;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, button) {
    var particleItemButton, particleItemId, relativeParticleItemId, particles, particle;
        particleItemButton = new (GameButton).GameButton(button);
        particleItemId = (particleItemButton).id;
        relativeParticleItemId = particleItemId;
        if (((((Config).Config).config).ParticleExportName === "")) {
            relativeParticleItemId = (relativeParticleItemId + 1);
        } /* if 0xcdd04 */
        particles = (this).getParticles();
        particle = particles[relativeParticleItemId];
        if ((!particle)) {
            return;
        } /* if 0xcdd1f */
        if ((((ParticleSelectorPopup).PARTICLE[particleItemId]).export_name !== (((Config).Config).config).ParticleExportName)) {
            ParticleSelectorPopup.needsReload = true;
        } /* if 0xcdd4e */
        ((Config).Config).config.ParticleExportName = (particle).export_name;
        ((Config).Config).config.ParticleFileName = (particle).file_name;
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        static getParticles () {
        return (ParticleSelectorPopup).PARTICLE;
};
        <class_fields_init> = undefined;
        ParticleSelectorPopup;
        class ParticleSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("ParticleSelectorPopup") });
        if (<class_fields_init>) {
        } /* if 0xcdabd */
        (this).adjustPopupHeaderButtons("particle_selector_popup");
        (this).refreshItems();
        return this;
}
        }
        ParticleSelectorPopup = ParticleSelectorPopup = ParticleSelectorPopup;
        exports.ParticleSelectorPopup = ParticleSelectorPopup;
        ParticleSelectorPopup.PARTICLE = [{ name: "ParticleReset", disabled: false, file_name: "", export_name: "" }, { name: "ParticleJanetSnow", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "janet_006_lobby_snow_particle_2" }, { name: "ParticleSnowParticle", disabled: false, file_name: "sc/ui.sc", export_name: "particle_snow_2" }, { name: "ParticleAmberSnowflakeParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "amber_003_snowflake" }, { name: "ParticleStuStarParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "stu_def_oc_atk_star_particle" }, { name: "ParticleJanetStarParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "janet_def_lobby_star" }, { name: "ParticleStarParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "particle_star_gold" }, { name: "ParticleHeartSmallParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "particle_heart_small_05" }, { name: "ParticleColleteHeartBodyParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "colette_004_heart_body_red" }, { name: "ParticleColleteHeartUltiParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "colette_007_ulti_heart_01_red" }, { name: "ParticleBoHeartParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "bo_008_lobby_heart_anim_01" }, { name: "ParticleMelodieTrailParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "melodie_def_atk_trail_note_pink_01" }, { name: "ParticleJanetTrailParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "janet_006_atk_trail_note_02" }, { name: "ParticleGusImpactBubble", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "gus_004_atk_impact_bubble_02" }, { name: "ParticleStickyBubble", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "sticky_def_oc_particle_bubbleGround_2" }, { name: "ParticleBuzzBubble", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "buzz_008_lobby_bubble" }, { name: "ParticleThumbsdown", disabled: false, file_name: "sc/emoji.sc", export_name: "emoji_thumbsdown" }];
        ParticleSelectorPopup.needsReload = false;
        return;
};

// --------------------- MODULE 280 — ParticleItem ---------------------

// ============================================================ //
// webpack module 280  —  ParticleItem
// exports: ParticleItem
// deps: 612 (MovieClip), 4009 (Config), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[280] = function ParticleItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, MovieClip, GameButton, Config, Localisation, ParticleItem, <class_fields_init>, ParticleItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ParticleItem = undefined;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        Config = __webpack_require__(4009);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        ParticleItem;
        class ParticleItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (particle) {
    var particleMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb528f */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        particleMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((particleMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((particleMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((particle).name));
        (particleMovieClip).gotoAndStopFrameIndex((+(!((particle).export_name === (((Config).Config).config).ParticleExportName))));
        return this;
}
        }
        ParticleItem = ParticleItem = ParticleItem;
        exports.ParticleItem = ParticleItem;
        return;
};

// --------------------- MODULE 4367 — ParticleAnimationRadioButton ---------------------

// ============================================================ //
// webpack module 4367  —  ParticleAnimationRadioButton
// exports: ParticleAnimationRadioButton
// deps: 211 (TextFieldHelper), 699 (FileManager), 4009 (Config), 7265 (Localisation), 9250 (StringTable), 9445 (RadioButton)
// ============================================================ //

__webpack_modules__[4367] = function ParticleAnimationRadioButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var RadioButton, StringTable, Config, FileManager, Localisation, TextFieldHelper, ParticleAnimationRadioButton, <class_fields_init>, ParticleAnimationRadioButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ParticleAnimationRadioButton = undefined;
        RadioButton = __webpack_require__(9445);
        StringTable = __webpack_require__(9250);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        Localisation = __webpack_require__(7265);
        TextFieldHelper = __webpack_require__(211);
        static buttonPressed (self, button) {
        ((Config).Config).config.ParticleAnimationDisabled = (!(((Config).Config).config).ParticleAnimationDisabled);
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        <class_fields_init> = undefined;
        ParticleAnimationRadioButton;
        class ParticleAnimationRadioButton extends <class_fields_init> = (RadioButton).RadioButton {
            constructor () {
    var parentMovieClip, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        parentMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
        this = super(parentMovieClip, "locked_movement_controls_button");
        if (<class_fields_init>) {
        } /* if 0xb04d2 */
        this.buttonScale = 0.75;
        this.textFieldX = -100;
        this.textFieldY = 100;
        (this).setCustomButtonListener(((this).buttonPressed).bind(this), "disable_particle_animation_radiobutton");
        this.scale = (this).buttonScale;
        if ((((Config).Config).config).ParticleAnimationDisabled) {
        } /* if 0xb0545 */
        /* jump -> 0xb0546 */
        this.textField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
        (this).textField.text = ((Localisation).Localisation).getString("DisableParticleAnimation");
        (this).textField.fontSize = 18;
        (this).textField.color = 4294967295.0;
        (this).textField.fontOutline = true;
        (this).textField.x = (-77.5);
        (this).textField.y = 414.25;
        return this;
}
        }
        ParticleAnimationRadioButton = ParticleAnimationRadioButton = ParticleAnimationRadioButton;
        exports.ParticleAnimationRadioButton = ParticleAnimationRadioButton;
        return;
};

// --------------------- MODULE 7820 — ParticleParameters ---------------------

// ============================================================ //
// webpack module 7820  —  ParticleParameters
// exports: ParticleParametersPopup
// deps: 120 (GameSliderComponent), 699 (FileManager), 3020 (LogicColor), 3041 (ParticleSelector), 4009 (Config), 4367 (ParticleAnimationRadioButton), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 8775 (GameMain), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7820] = function ParticleParameters_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameSliderComponent, Config, FileManager, GameButton, StringTable, GUI, LogicColor, GameMain, ParticleAnimationRadioButton, ParticleSelector, ParticleParametersPopup, <class_fields_init>, ParticleParametersPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ParticleParametersPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameSliderComponent = __webpack_require__(120);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        GUI = __webpack_require__(4934);
        LogicColor = __webpack_require__(3020);
        GameMain = __webpack_require__(8775);
        ParticleAnimationRadioButton = __webpack_require__(4367);
        ParticleSelector = __webpack_require__(3041);
        static refreshItems () {
    var sliders, popupClip, sliderData, slider, popoverScaleTextLeftClip, popoverSpeedTextLeftClip, popoverCountTextLeftClip, saveButtonClip, saveButton, textField, resetButtonClip, resetButton, resetLTxt, disableAnimationRadioButton;
        sliders = [{ name: "scale", minValue: 1, maxValue: 1000, currentValue: (((Config).Config).config).ParticleScale, y: 150 }, { name: "speed", minValue: 0, maxValue: 10000, currentValue: (((Config).Config).config).ParticleSpeed, y: 250 }, { name: "count", minValue: 1, maxValue: 10000, currentValue: (((Config).Config).config).ParticleCount, y: 350 }];
        popupClip = (this).getMovieClip();
        /* jump -> 0xccaf6 */
        sliderData = /*iter*/ sliders;
        slider = ((GameSliderComponent).GameSliderComponent).createDefaultSlider(("particle_parameters_" + (sliderData).name), false);
        slider.x = 0;
        slider.y = (sliderData).y;
        (slider).setValue((sliderData).currentValue);
        (slider).setValueBounds((sliderData).minValue, (sliderData).maxValue);
        ((this).sliders).push(slider);
        (popupClip).addChild(slider);
        } while (!slider);
        popoverScaleTextLeftClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        popoverSpeedTextLeftClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        popoverCountTextLeftClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        this.scaleTextField = (popoverScaleTextLeftClip).getTextFieldByName("text");
        (this).scaleTextField.x = -110;
        (this).scaleTextField.y = ((sliders[0]).y - 60);
        (this).scaleTextField.color = 4294967295.0;
        (this).scaleTextField.colorTag = true;
        (this).scaleTextField.fontOutline = true;
        (this).scaleTextField.align = 2;
        this.speedTextField = (popoverSpeedTextLeftClip).getTextFieldByName("text");
        (this).speedTextField.x = -110;
        (this).speedTextField.y = ((sliders[1]).y - 60);
        (this).speedTextField.color = 4294967295.0;
        (this).speedTextField.colorTag = true;
        (this).speedTextField.fontOutline = true;
        (this).speedTextField.align = 2;
        this.countTextField = (popoverCountTextLeftClip).getTextFieldByName("text");
        (this).countTextField.x = -110;
        (this).countTextField.y = ((sliders[2]).y - 60);
        (this).countTextField.color = 4294967295.0;
        (this).countTextField.colorTag = true;
        (this).countTextField.fontOutline = true;
        (this).countTextField.align = 2;
        (this).updateTextField();
        saveButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        saveButton = new (GameButton).GameButton();
        (saveButton).setMovieClip(saveButtonClip, 1);
        (saveButton).setCustomButtonListener(((this).saveButtonPressed).bind(this), "particle_parameters_save_button");
        textField = (saveButtonClip).getTextFieldByName("label_txt");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(((Localisation).Localisation).getString("SaveButton"));
        (saveButtonClip).gotoAndStopFrameIndex(1);
        (saveButton).setXY(-110, 500);
        this.saveButton = saveButton;
        resetButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        resetButton = new (GameButton).GameButton();
        (resetButton).setMovieClip(resetButtonClip, 1);
        (resetButton).setCustomButtonListener(((this).resetButtonPressed).bind(this), "particle_parameters_reset_button");
        resetLTxt = (resetButtonClip).getTextFieldByName("label_txt");
        resetLTxt.colorTag = true;
        (resetLTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("ResetButton"));
        (resetButtonClip).gotoAndStopFrameIndex(1);
        (resetButton).setXY(110, 500);
        this.resetButton = resetButton;
        disableAnimationRadioButton = new (ParticleAnimationRadioButton).ParticleAnimationRadioButton();
        disableAnimationRadioButton.x = -100;
        disableAnimationRadioButton.y = 425;
        (disableAnimationRadioButton).textField.scale = 1;
        (popupClip).addChild((this).scaleTextField);
        (popupClip).addChild((this).speedTextField);
        (popupClip).addChild((this).countTextField);
        (popupClip).addChild(saveButton);
        (popupClip).addChild(resetButton);
        (popupClip).addChild(disableAnimationRadioButton);
        return;
};
        static saveButtonPressed () {
        ((Config).Config).config.ParticleScale = ((this).sliders[0]).getValue();
        ((Config).Config).config.ParticleSpeed = ((this).sliders[1]).getValue();
        ((Config).Config).config.ParticleCount = ((this).sliders[2]).getValue();
        ((FileManager).FileManager).updateConfigFile();
        ((this).saveButton).setDisabledWithHUDPrint(true, ((Localisation).Localisation).getString("ParticleParametersAlreadySaved"));
        if (((ParticleSelector).ParticleSelectorPopup).needsReload) {
            ((GameMain).GameMain).reloadGame();
        } /* if 0xcd03d */
        (ParticleSelector).ParticleSelectorPopup.needsReload = false;
        return;
};
        static resetButtonPressed () {
        ((this).sliders[0]).setValue(100);
        ((this).sliders[1]).setValue(100);
        ((this).sliders[2]).setValue(200);
        ((Config).Config).config.ParticleScale = ((this).sliders[0]).getValue();
        ((Config).Config).config.ParticleSpeed = ((this).sliders[1]).getValue();
        ((Config).Config).config.ParticleCount = ((this).sliders[2]).getValue();
        ((FileManager).FileManager).updateConfigFile();
        ((this).saveButton).setDisabledWithHUDPrint(true, ((Localisation).Localisation).getString("ParticleParametersAlreadySaved"));
        return;
};
        static updateTextField () {
        (this).scaleTextField.text = ("").concat(((Localisation).Localisation).getString("ScaleParticleText"), ": ", (this).getFormattedSize());
        (this).speedTextField.text = ("").concat(((Localisation).Localisation).getString("SpeedParticleText"), ": ", (this).getFormattedSpeed());
        (this).countTextField.text = ("").concat(((Localisation).Localisation).getString("CountParticleText"), ": ", (this).getFormattedCount());
        return;
};
        static updateElements (deltaTime) {
    var sliderScaleValueBefore, sliderSpeedValueBefore, sliderCountValueBefore, sliderScaleValueAfter, sliderSpeedValueAfter, sliderCountValueAfter;
        if ((this).sliders[0]) {
            sliderScaleValueBefore = ((this).sliders[0]).getValue();
            sliderSpeedValueBefore = ((this).sliders[1]).getValue();
            sliderCountValueBefore = ((this).sliders[2]).getValue();
            ((this).sliders[0]).update(deltaTime);
            ((this).sliders[1]).update(deltaTime);
            ((this).sliders[2]).update(deltaTime);
            sliderScaleValueAfter = ((this).sliders[0]).getValue();
            sliderSpeedValueAfter = ((this).sliders[1]).getValue();
            sliderCountValueAfter = ((this).sliders[2]).getValue();
            (this).updateTextField();
            if (!(sliderScaleValueBefore !== sliderScaleValueAfter)) {
                (sliderScaleValueBefore !== sliderScaleValueAfter);
                if (!(sliderSpeedValueBefore !== sliderSpeedValueAfter)) {
                    (sliderSpeedValueBefore !== sliderSpeedValueAfter);
                    if ((sliderCountValueBefore !== sliderCountValueAfter)) {
                        ((this).saveButton).setDisabledWithHUDPrint(false, "");
                        ((this).resetButton).setDisabledWithHUDPrint(false, "");
                        if ((sliderCountValueBefore !== sliderCountValueAfter)) {
                            (ParticleSelector).ParticleSelectorPopup.needsReload = true;
                            return;
                        } /* if 0xcd3c0 (open) */
                    } /* if 0xcd3c0 (open) */
                } /* if 0xcd383 (open) */
            } /* if 0xcd383 (open) */
        } /* if 0xcd3c3 (open) */
};
        static getFormattedSize () {
    var beautifiedValue;
        beautifiedValue = (((this).sliders[0]).getValue() / 100);
        if ((beautifiedValue > 1)) {
            return (beautifiedValue).toFixed(1);
        } /* if 0xcd41a */
        return beautifiedValue;
};
        static getFormattedSpeed () {
    var beautifiedValue;
        beautifiedValue = (((this).sliders[1]).getValue() / 100);
        if ((beautifiedValue > 1)) {
            return (Math).round(beautifiedValue);
        } /* if 0xcd46e */
        return beautifiedValue;
};
        static getFormattedCount () {
    var value, color;
        value = ((this).sliders[2]).getValue();
        color = (this).getGradientColorForValue(value);
        (this).countTextField.color = color;
        return value;
};
        static getGradientColorForValue (valueRaw) {
    var alpha, valueRaw, alpha, value, WHITE, YELLOW_GREEN, YELLOW, RED, rgb, t, t, t, argb;
        alpha = valueRaw;
        if (((alpha) === undefined)) {
            valueRaw = alpha = 255;
        } /* if 0xcd54e */
        alpha = (Math).max(0, (Math).min(10000, valueRaw));
        value = 16777215;
        WHITE = 10145074;
        YELLOW_GREEN = 16776960;
        YELLOW = 16711680;
        RED = undefined;
        if ((alpha < 2400)) {
            RED = value;
        } /* if 0xcd5b6 */
        /* jump -> 0xcd669 */
        if ((alpha <= 2500)) {
            rgb = ((alpha - 2400) / 100);
            RED = ((LogicColor).LogicColor).lerpColor(value, WHITE, rgb);
        } /* if 0xcd5ee */
        /* jump -> 0xcd668 */
        if ((alpha <= 5000)) {
            t = ((alpha - 2500) / 2500);
            RED = ((LogicColor).LogicColor).lerpColor(WHITE, YELLOW_GREEN, t);
        } /* if 0xcd627 */
        /* jump -> 0xcd668 */
        if ((alpha <= 8000)) {
            t = ((alpha - 5000) / 3000);
            RED = ((LogicColor).LogicColor).lerpColor(YELLOW_GREEN, YELLOW, t);
        } /* if 0xcd660 */
        /* jump -> 0xcd668 */
        RED = YELLOW;
        t = (((alpha & 255) << 24) | (RED & 16777215));
        return (t >>> 0);
};
        <class_fields_init> = undefined;
        ParticleParametersPopup;
        class ParticleParametersPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("ParticleParametersPopup") });
        if (<class_fields_init>) {
        } /* if 0xcc8ad */
        this.sliders = [];
        (this).adjustPopupHeaderButtons("particle_parameters_popup");
        (this).refreshItems();
        (((GUI).GUI).popupStorage).push(this);
        return this;
}
        }
        ParticleParametersPopup = LogicColor = ParticleParametersPopup;
        exports.ParticleParametersPopup = ParticleParametersPopup;
        return;
};

// --------------------- MODULE 6030 — EffectPreview ---------------------

// ============================================================ //
// webpack module 6030  —  EffectPreview
// exports: EffectPreview
// deps: 3380 (Logcat), 4934 (GUI), 5523 (LogicBattleModeClient), 6128 (BattleMode), 6139 (LogicDataTables), 7835 (BattleScreen)
// ============================================================ //

__webpack_modules__[6030] = function EffectPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BattleMode, BattleScreen, LogicBattleModeClient, LogicDataTables, GUI, Logcat, tileSizeInGameUnits, effectSpawnTileOffset, EffectPreview, <class_fields_init>, EffectPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EffectPreview = undefined;
        BattleMode = __webpack_require__(6128);
        BattleScreen = __webpack_require__(7835);
        LogicBattleModeClient = __webpack_require__(5523);
        LogicDataTables = __webpack_require__(6139);
        GUI = __webpack_require__(4934);
        Logcat = __webpack_require__(3380);
        tileSizeInGameUnits = 300;
        effectSpawnTileOffset = -3;
        <class_fields_init> = undefined;
        EffectPreview;
        class EffectPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9e7c4 (open) */
}
            show () {
    var reason;
        reason = (EffectPreview).tryShow();
        /* is_null  */
        if (!reason) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(("EFFECT_PREVIEW: ").concat(reason));
            ((Logcat).Logcat).logDebug(("EffectPreview aborted: ").concat(reason));
            return;
        } /* if 0x9e4fa (open) */
}
            tryShow () {
    var battleScreen, gameObjectManager, effectsTable, count, ownCharacter, index, effect, spawnX, spawnY, effectName;
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return "enter a battle first";
        } /* if 0x9e5ae */
        battleScreen = ((BattleScreen).BattleScreen).getInstance();
        if (!(battleScreen === undefined)) {
            (battleScreen === undefined);
            if ((battleScreen).isNull()) {
                return "BattleScreen not captured";
            } /* if 0x9e5df */
        } /* if 0x9e5d7 */
        gameObjectManager = ((BattleScreen).BattleScreen).getGameObjectManager();
        if ((gameObjectManager).isNull()) {
            return "GameObjectManager null";
        } /* if 0x9e603 */
        effectsTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Effects);
        count = (effectsTable).getItemCount();
        if ((count < 1)) {
            return "effects table empty";
        } /* if 0x9e63f */
        ownCharacter = ((LogicBattleModeClient).LogicBattleModeClient).getOwnCharacter();
        if (((ownCharacter).instance).isNull()) {
            return "own character not spawned";
        } /* if 0x9e669 */
        index = ((EffectPreview).cursor % count);
        EffectPreview.cursor = (((EffectPreview).cursor + 1) % count);
        effect = (effectsTable).getItemAt(index);
        if (!(!effect)) {
            if (((effect).instance).isNull()) {
                return ("effect #").concat(index, " null");
            } /* if 0x9e6cc */
        } /* if 0x9e6b5 */
        spawnX = (ownCharacter).x;
        spawnY = ((ownCharacter).y - (effectSpawnTileOffset * tileSizeInGameUnits));
        (gameObjectManager).playEffect(effect, spawnX, spawnY);
        effectName = (effect).getName();
        ((GUI).GUI).showFloaterTextAtDefaultPosition(("[").concat((index + 1), "/", count, "] ", effectName));
        ((Logcat).Logcat).logDebug(("EffectPreview spawned effect #").concat(index, " \"", effectName, "\" at (", spawnX, ", ", spawnY, ")"));
        return null;
}
        }
        EffectPreview = EffectPreview = EffectPreview;
        exports.EffectPreview = EffectPreview;
        EffectPreview.cursor = 0;
        return;
};

// --------------------- MODULE 8944 — EffectRegistry ---------------------

// ============================================================ //
// webpack module 8944  —  EffectRegistry
// exports: EffectRegistry
// deps: 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8944] = function EffectRegistry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, EffectRegistry_getEffectId, EffectRegistry, <class_fields_init>, EffectRegistry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EffectRegistry = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        EffectRegistry_getEffectId = new NativeFunction(((Libg).Libg).offset(16585480, 0), "uint", ["pointer"]);
        <class_fields_init> = undefined;
        EffectRegistry;
        class EffectRegistry {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x64775 (open) */
}
            hasEffect (name) {
        if ((name === "")) {
            return false;
        } /* if 0x64716 */
        return ((StringObject).StringObject).with(name, function (namePointer) {
        return (EffectRegistry_getEffectId(namePointer) !== 0);
});
}
        }
        EffectRegistry = EffectRegistry = EffectRegistry;
        exports.EffectRegistry = EffectRegistry;
        return;
};

