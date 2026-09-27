class FPSLimitPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("FPSLimitTitle") });
        this.maxValue = 145;
        if (Process.platform === "darwin") {
            this.maxValue = 121;
        }
        this.adjustPopupHeaderButtons("fps_limit");
        this.refreshItems();
        GUI.GUI.popupStorage.push(this);
    }

    refreshItems() {
        var slider = GameSliderComponent.GameSliderComponent.createDefaultSlider("fps_limit");
        slider.setValueBounds(1, this.maxValue);
        slider.y = 200;
        if (Config.Config.config.FPSLimit === -1) {
            slider.setValue(this.maxValue);
        } else {
            slider.setValue(Config.Config.config.FPSLimit);
        }
        slider.setMaxValueLabel("∞");
        slider.setCurrentValueToTextField();
        this.slider = slider;
        var popoverTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var fpsLimitTextField = popoverTextLeftClip.getTextFieldByName("text");
        fpsLimitTextField.x = -110;
        fpsLimitTextField.y = 230;
        fpsLimitTextField.color = 4294967295.0;
        fpsLimitTextField.colorTag = true;
        fpsLimitTextField.fontOutline = true;
        fpsLimitTextField.align = 2;
        fpsLimitTextField.text = Localisation.Localisation.getString("FPSLimitNote");
        var saveButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var saveButton = new GameButton.GameButton();
        saveButton.setMovieClip(saveButtonClip, 1);
        saveButton.setCustomButtonListener(this.saveButtonPressed.bind(this), "fps_limit_save_button");
        var saveLabelTxt = saveButtonClip.getTextFieldByName("label_txt");
        saveLabelTxt.colorTag = true;
        saveLabelTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("SaveButton"));
        saveButtonClip.gotoAndStopFrameIndex(1);
        saveButton.setXY(-110, 400);
        this.saveButton = saveButton;
        var resetButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var resetButton = new GameButton.GameButton();
        resetButton.setMovieClip(resetButtonClip, 1);
        resetButton.setCustomButtonListener(this.resetButtonPressed.bind(this), "fps_limit_reset_button");
        var labelTxt = resetButtonClip.getTextFieldByName("label_txt");
        labelTxt.colorTag = true;
        labelTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("ResetButton"));
        resetButtonClip.gotoAndStopFrameIndex(1);
        resetButton.setXY(110, 400);
        this.resetButton = resetButton;
        var popupClip = this.getMovieClip();
        popupClip.addChild(slider);
        popupClip.addChild(fpsLimitTextField);
        popupClip.addChild(saveButton);
        popupClip.addChild(resetButton);
    }

    saveButtonPressed() {
        var currentFpsSliderValue = this.slider.getValue();
        if (currentFpsSliderValue === this.maxValue) {
            Config.Config.config.FPSLimit = -1;
        } else {
            Config.Config.config.FPSLimit = currentFpsSliderValue;
        }
        FileManager.FileManager.updateConfigFile();
        if (Process.platform === "darwin") {
            FramerateManager.FramerateManager.setFrameRate(Config.Config.config.FPSLimit);
        }
    }

    resetButtonPressed() {
        Config.Config.config.FPSLimit = -1;
        FileManager.FileManager.updateConfigFile();
        this.slider.setValue(this.maxValue);
        this.slider.setCurrentValueToTextField();
        this.saveButton.setDisabledWithHUDPrint(true, Localisation.Localisation.getString("FPSLimitAlreadySaved"));
        this.resetButton.setDisabledWithHUDPrint(true, Localisation.Localisation.getString("FPSLimitAlreadyReset"));
        if (Process.platform === "darwin") {
            FramerateManager.FramerateManager.setFrameRate(Config.Config.config.FPSLimit);
        }
    }

    updateElements(deltaTime) {
        if (this.slider) {
            var sliderValueBefore = this.slider.getValue();
            this.slider.update(deltaTime);
            var sliderValueAfter = this.slider.getValue();
            if (sliderValueBefore !== sliderValueAfter) {
                this.saveButton.setDisabledWithHUDPrint(false, "");
                this.resetButton.setDisabledWithHUDPrint(false, "");
            }
        }
    }
}

var FramerateManager_getInstance = new NativeFunction(Libg.Libg.offset(0, 0), "pointer", []);
var FramerateManager_setSegment = new NativeFunction(Libg.Libg.offset(0, 0), "void", ["pointer", "int"]);

class FramerateManager {
    constructor(instance) {
        this.instance = instance;
    }

    get frameRate() {
        return this.instance.readDouble();
    }

    set frameRate(framerate) {
        this.instance.writeDouble(framerate);
    }

    get frameRates() {
        return [this.instance.add(8).readDouble(), this.instance.add(16).readDouble(), this.instance.add(24).readDouble()];
    }

    set frameRates(vals) {
        this.instance.add(8).writeDouble(vals[0]);
        this.instance.add(16).writeDouble(vals[1]);
        this.instance.add(24).writeDouble(vals[2]);
    }

    get frameTime() {
        return this.instance.add(32).readFloat();
    }

    set frameTime(frameTime) {
        this.instance.add(32).writeFloat(frameTime);
    }

    get initialized() {
        return this.instance.add(36).readU8() !== 0;
    }

    set initialized(v) {
        this.instance.add(36).writeU8(+v);
    }

    get bestFrameRateIndex() {
        var rates = this.frameRates;
        return rates.indexOf(Math.max(rates[0], rates[1], rates[2]));
    }

    static patch() {
    }

    static setSegment(segment) {
        var inst = FramerateManager_getInstance();
        var rate = inst.add(8 + segment * 8).readDouble();
        inst.writeDouble(rate);
    }

    static setFrameRate(rate) {
        var manager = new FramerateManager(FramerateManager_getInstance());
        manager.frameRates = [rate, rate, rate];
        manager.frameRate = rate;
        manager.frameTime = 1 / rate;
    }
}
