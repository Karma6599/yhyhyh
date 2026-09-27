class ParticleStylePopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("ParticleStylePopup") });
        this.adjustPopupHeaderButtons("particle_type_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        var index = 0;
        for (var particleStyle of ParticleStylePopup.PARTICLE_TYPE) {
            var particleStyleItem = new ParticleStyleItem(particleStyle);
            particleStyleItem.setCustomButtonListener(this.buttonClicked.bind(this), "particleStyle_".concat(index));
            particleStyleItem.id = index;
            this.container.addEntry(particleStyleItem);
            index++;
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(1, naviHeight * 2.5, 0, 0, 0, 0, -1);
    }

    buttonClicked(self, button) {
        var particleStyleButton = new GameButton.GameButton(button);
        var particleStyleId = particleStyleButton.id;
        var particleStyle = ParticleStylePopup.PARTICLE_TYPE[particleStyleId];
        if (!particleStyle) {
            return;
        }
        if (ParticleStylePopup.PARTICLE_TYPE[particleStyleId].style !== Config.Config.config.ParticleStyle) {
            ParticleSelectorPopup.needsReload = true;
        }
        Config.Config.config.ParticleStyle = particleStyle.style;
        FileManager.FileManager.updateConfigFile();
    }
}

ParticleStylePopup.PARTICLE_TYPE = [{ name: "ParticleStyleSnow", style: "Snow" }, { name: "ParticleStyleEmber", style: "Ember" }];

class ParticleStyleItem extends GameButton.GameButton {
    constructor(particleStyle) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var particleStyleMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(particleStyleMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(particleStyleMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(particleStyle.name));
        particleStyleMovieClip.gotoAndStopFrameIndex(+(!(particleStyle.style === Config.Config.config.ParticleStyle)));
    }
}

class ParticleSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("ParticleSelectorPopup") });
        this.adjustPopupHeaderButtons("particle_selector_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        var index = 0;
        var particles = this.getParticles();
        for (var particle of particles) {
            if (!particle.disabled) {
                if (particle.name !== "ParticleReset" || Config.Config.config.ParticleExportName !== "") {
                    var particleItem = new ParticleItem(particle);
                    particleItem.setCustomButtonListener(this.buttonClicked.bind(this), "particleitem_".concat(particle.export_name, "_button"));
                    particleItem.id = index;
                    this.container.addEntry(particleItem);
                    index++;
                }
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonClicked(self, button) {
        var particleItemButton = new GameButton.GameButton(button);
        var particleItemId = particleItemButton.id;
        var relativeParticleItemId = particleItemId;
        if (Config.Config.config.ParticleExportName === "") {
            relativeParticleItemId = relativeParticleItemId + 1;
        }
        var particles = this.getParticles();
        var particle = particles[relativeParticleItemId];
        if (!particle) {
            return;
        }
        if (ParticleSelectorPopup.PARTICLE[particleItemId].export_name !== Config.Config.config.ParticleExportName) {
            ParticleSelectorPopup.needsReload = true;
        }
        Config.Config.config.ParticleExportName = particle.export_name;
        Config.Config.config.ParticleFileName = particle.file_name;
        FileManager.FileManager.updateConfigFile();
    }

    getParticles() {
        return ParticleSelectorPopup.PARTICLE;
    }
}

ParticleSelectorPopup.PARTICLE = [{ name: "ParticleReset", disabled: false, file_name: "", export_name: "" }, { name: "ParticleJanetSnow", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "janet_006_lobby_snow_particle_2" }, { name: "ParticleSnowParticle", disabled: false, file_name: "sc/ui.sc", export_name: "particle_snow_2" }, { name: "ParticleAmberSnowflakeParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "amber_003_snowflake" }, { name: "ParticleStuStarParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "stu_def_oc_atk_star_particle" }, { name: "ParticleJanetStarParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "janet_def_lobby_star" }, { name: "ParticleStarParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "particle_star_gold" }, { name: "ParticleHeartSmallParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "particle_heart_small_05" }, { name: "ParticleColleteHeartBodyParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "colette_004_heart_body_red" }, { name: "ParticleColleteHeartUltiParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "colette_007_ulti_heart_01_red" }, { name: "ParticleBoHeartParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "bo_008_lobby_heart_anim_01" }, { name: "ParticleMelodieTrailParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "melodie_def_atk_trail_note_pink_01" }, { name: "ParticleJanetTrailParticle", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "janet_006_atk_trail_note_02" }, { name: "ParticleGusImpactBubble", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "gus_004_atk_impact_bubble_02" }, { name: "ParticleStickyBubble", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "sticky_def_oc_particle_bubbleGround_2" }, { name: "ParticleBuzzBubble", disabled: false, file_name: "sc/effects_brawler.sc", export_name: "buzz_008_lobby_bubble" }, { name: "ParticleThumbsdown", disabled: false, file_name: "sc/emoji.sc", export_name: "emoji_thumbsdown" }];
ParticleSelectorPopup.needsReload = false;

class ParticleItem extends GameButton.GameButton {
    constructor(particle) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var particleMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(particleMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(particleMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(particle.name));
        particleMovieClip.gotoAndStopFrameIndex(+(!(particle.export_name === Config.Config.config.ParticleExportName)));
    }
}

class ParticleAnimationRadioButton extends RadioButton.RadioButton {
    constructor() {
        var parentMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
        super(parentMovieClip, "locked_movement_controls_button");
        this.buttonScale = 0.75;
        this.textFieldX = -100;
        this.textFieldY = 100;
        this.setCustomButtonListener(this.buttonPressed.bind(this), "disable_particle_animation_radiobutton");
        this.scale = this.buttonScale;
        this.textField = TextFieldHelper.TextFieldHelper.createTextTextField();
        this.textField.text = Localisation.Localisation.getString("DisableParticleAnimation");
        this.textField.fontSize = 18;
        this.textField.color = 4294967295.0;
        this.textField.fontOutline = true;
        this.textField.x = -77.5;
        this.textField.y = 414.25;
    }

    buttonPressed(self, button) {
        Config.Config.config.ParticleAnimationDisabled = !Config.Config.config.ParticleAnimationDisabled;
        FileManager.FileManager.updateConfigFile();
    }
}

class ParticleParametersPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("ParticleParametersPopup") });
        this.sliders = [];
        this.adjustPopupHeaderButtons("particle_parameters_popup");
        this.refreshItems();
        GUI.GUI.popupStorage.push(this);
    }

    refreshItems() {
        var sliders = [
            { name: "scale", minValue: 1, maxValue: 1000, currentValue: Config.Config.config.ParticleScale, y: 150 },
            { name: "speed", minValue: 0, maxValue: 10000, currentValue: Config.Config.config.ParticleSpeed, y: 250 },
            { name: "count", minValue: 1, maxValue: 10000, currentValue: Config.Config.config.ParticleCount, y: 350 }
        ];
        var popupClip = this.getMovieClip();
        for (var sliderData of sliders) {
            var slider = GameSliderComponent.GameSliderComponent.createDefaultSlider("particle_parameters_" + sliderData.name, false);
            slider.x = 0;
            slider.y = sliderData.y;
            slider.setValue(sliderData.currentValue);
            slider.setValueBounds(sliderData.minValue, sliderData.maxValue);
            this.sliders.push(slider);
            popupClip.addChild(slider);
        }
        var popoverScaleTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var popoverSpeedTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var popoverCountTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        this.scaleTextField = popoverScaleTextLeftClip.getTextFieldByName("text");
        this.scaleTextField.x = -110;
        this.scaleTextField.y = sliders[0].y - 60;
        this.scaleTextField.color = 4294967295.0;
        this.scaleTextField.colorTag = true;
        this.scaleTextField.fontOutline = true;
        this.scaleTextField.align = 2;
        this.speedTextField = popoverSpeedTextLeftClip.getTextFieldByName("text");
        this.speedTextField.x = -110;
        this.speedTextField.y = sliders[1].y - 60;
        this.speedTextField.color = 4294967295.0;
        this.speedTextField.colorTag = true;
        this.speedTextField.fontOutline = true;
        this.speedTextField.align = 2;
        this.countTextField = popoverCountTextLeftClip.getTextFieldByName("text");
        this.countTextField.x = -110;
        this.countTextField.y = sliders[2].y - 60;
        this.countTextField.color = 4294967295.0;
        this.countTextField.colorTag = true;
        this.countTextField.fontOutline = true;
        this.countTextField.align = 2;
        this.updateTextField();
        var saveButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var saveButton = new GameButton.GameButton();
        saveButton.setMovieClip(saveButtonClip, 1);
        saveButton.setCustomButtonListener(this.saveButtonPressed.bind(this), "particle_parameters_save_button");
        var textField = saveButtonClip.getTextFieldByName("label_txt");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(Localisation.Localisation.getString("SaveButton"));
        saveButtonClip.gotoAndStopFrameIndex(1);
        saveButton.setXY(-110, 500);
        this.saveButton = saveButton;
        var resetButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var resetButton = new GameButton.GameButton();
        resetButton.setMovieClip(resetButtonClip, 1);
        resetButton.setCustomButtonListener(this.resetButtonPressed.bind(this), "particle_parameters_reset_button");
        var resetLTxt = resetButtonClip.getTextFieldByName("label_txt");
        resetLTxt.colorTag = true;
        resetLTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("ResetButton"));
        resetButtonClip.gotoAndStopFrameIndex(1);
        resetButton.setXY(110, 500);
        this.resetButton = resetButton;
        var disableAnimationRadioButton = new ParticleAnimationRadioButton();
        disableAnimationRadioButton.x = -100;
        disableAnimationRadioButton.y = 425;
        disableAnimationRadioButton.textField.scale = 1;
        popupClip.addChild(this.scaleTextField);
        popupClip.addChild(this.speedTextField);
        popupClip.addChild(this.countTextField);
        popupClip.addChild(saveButton);
        popupClip.addChild(resetButton);
        popupClip.addChild(disableAnimationRadioButton);
    }

    saveButtonPressed() {
        Config.Config.config.ParticleScale = this.sliders[0].getValue();
        Config.Config.config.ParticleSpeed = this.sliders[1].getValue();
        Config.Config.config.ParticleCount = this.sliders[2].getValue();
        FileManager.FileManager.updateConfigFile();
        this.saveButton.setDisabledWithHUDPrint(true, Localisation.Localisation.getString("ParticleParametersAlreadySaved"));
        if (ParticleSelectorPopup.needsReload) {
            GameMain.GameMain.reloadGame();
        }
        ParticleSelectorPopup.needsReload = false;
    }

    resetButtonPressed() {
        this.sliders[0].setValue(100);
        this.sliders[1].setValue(100);
        this.sliders[2].setValue(200);
        Config.Config.config.ParticleScale = this.sliders[0].getValue();
        Config.Config.config.ParticleSpeed = this.sliders[1].getValue();
        Config.Config.config.ParticleCount = this.sliders[2].getValue();
        FileManager.FileManager.updateConfigFile();
        this.saveButton.setDisabledWithHUDPrint(true, Localisation.Localisation.getString("ParticleParametersAlreadySaved"));
    }

    updateTextField() {
        this.scaleTextField.text = "".concat(Localisation.Localisation.getString("ScaleParticleText"), ": ", this.getFormattedSize());
        this.speedTextField.text = "".concat(Localisation.Localisation.getString("SpeedParticleText"), ": ", this.getFormattedSpeed());
        this.countTextField.text = "".concat(Localisation.Localisation.getString("CountParticleText"), ": ", this.getFormattedCount());
    }

    updateElements(deltaTime) {
        if (this.sliders[0]) {
            var sliderScaleValueBefore = this.sliders[0].getValue();
            var sliderSpeedValueBefore = this.sliders[1].getValue();
            var sliderCountValueBefore = this.sliders[2].getValue();
            this.sliders[0].update(deltaTime);
            this.sliders[1].update(deltaTime);
            this.sliders[2].update(deltaTime);
            var sliderScaleValueAfter = this.sliders[0].getValue();
            var sliderSpeedValueAfter = this.sliders[1].getValue();
            var sliderCountValueAfter = this.sliders[2].getValue();
            this.updateTextField();
            if (sliderScaleValueBefore !== sliderScaleValueAfter || sliderSpeedValueBefore !== sliderSpeedValueAfter || sliderCountValueBefore !== sliderCountValueAfter) {
                this.saveButton.setDisabledWithHUDPrint(false, "");
                this.resetButton.setDisabledWithHUDPrint(false, "");
                if (sliderCountValueBefore !== sliderCountValueAfter) {
                    ParticleSelectorPopup.needsReload = true;
                }
            }
        }
    }

    getFormattedSize() {
        var beautifiedValue = this.sliders[0].getValue() / 100;
        if (beautifiedValue > 1) {
            return beautifiedValue.toFixed(1);
        }
        return beautifiedValue;
    }

    getFormattedSpeed() {
        var beautifiedValue = this.sliders[1].getValue() / 100;
        if (beautifiedValue > 1) {
            return Math.round(beautifiedValue);
        }
        return beautifiedValue;
    }

    getFormattedCount() {
        var value = this.sliders[2].getValue();
        var color = this.getGradientColorForValue(value);
        this.countTextField.color = color;
        return value;
    }

    getGradientColorForValue(valueRaw) {
        if (valueRaw === undefined) {
            valueRaw = 255;
        }
        var alpha = Math.max(0, Math.min(10000, valueRaw));
        var value = 16777215;
        var WHITE = 10145074;
        var YELLOW_GREEN = 16776960;
        var YELLOW = 16711680;
        var RED;
        if (alpha < 2400) {
            RED = value;
        } else if (alpha <= 2500) {
            var rgb = (alpha - 2400) / 100;
            RED = LogicColor.LogicColor.lerpColor(value, WHITE, rgb);
        } else if (alpha <= 5000) {
            var t = (alpha - 2500) / 2500;
            RED = LogicColor.LogicColor.lerpColor(WHITE, YELLOW_GREEN, t);
        } else if (alpha <= 8000) {
            var t = (alpha - 5000) / 3000;
            RED = LogicColor.LogicColor.lerpColor(YELLOW_GREEN, YELLOW, t);
        } else {
            RED = YELLOW;
        }
        var t = ((alpha & 255) << 24) | (RED & 16777215);
        return t >>> 0;
    }
}

var EffectRegistry_getEffectId = new NativeFunction(Libg.Libg.offset(16585480, 0), "uint", ["pointer"]);

class EffectRegistry {
    static hasEffect(name) {
        if (name === "") {
            return false;
        }
        return StringObject.StringObject.with(name, function (namePointer) {
            return EffectRegistry_getEffectId(namePointer) !== 0;
        });
    }
}
