class OutlineColorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("OutlineColorPopupTitle") });
        this.tempOutlineColor = [];
        this.sliders = [];
        this.adjustPopupHeaderButtons("outline_settings");
        this.tempOutlineColor = Outline.outlineColor;
        var popupClip = this.getMovieClip();
        var sliders = [
            { currentValueOffset: 3, maxValue: 100, y: 150 },
            { currentValueOffset: 0, maxValue: 100, y: 250 },
            { currentValueOffset: 1, maxValue: 100, y: 350 },
            { currentValueOffset: 2, maxValue: 100, y: 450 }
        ];
        for (var sliderData of sliders) {
            var slider = GameSliderComponent.GameSliderComponent.createDefaultSlider("outline" + sliderData.currentValueOffset, false);
            slider.x = -150;
            slider.y = sliderData.y;
            slider.setValue(Outline.outlineColor[sliderData.currentValueOffset]);
            slider.setValueBounds(0, sliderData.maxValue);
            this.sliders.push(slider);
            popupClip.addChild(slider);
        }
        var popoverTextLeft = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var hexColorTextField = popoverTextLeft.getTextFieldByName("text");
        var hexColor = LogicColor.LogicColor.argbToIntString(Outline.outlineColor);
        hexColorTextField.x = 140;
        hexColorTextField.y = 130;
        hexColorTextField.color = parseInt(hexColor, 16);
        hexColorTextField.fontOutline = true;
        hexColorTextField.align = 2;
        hexColorTextField.fontSize = 40;
        hexColorTextField.text = "#" + hexColor.substring(2);
        this.hexColorTextField = hexColorTextField;
        var saveButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var saveButton = new GameButton.GameButton();
        saveButton.setMovieClip(saveButtonClip, 1);
        saveButton.setCustomButtonListener(this.saveButtonPressed.bind(this), "outline_save_button");
        var saveLbTxt = saveButtonClip.getTextFieldByName("label_txt");
        saveLbTxt.colorTag = true;
        saveLbTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("SaveButton"));
        saveButtonClip.gotoAndStopFrameIndex(1);
        saveButton.setXY(250, 350);
        this.saveButton = saveButton;
        var resetButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var resetButton = new GameButton.GameButton();
        resetButton.setMovieClip(resetButtonClip, 1);
        resetButton.setCustomButtonListener(this.resetButtonPressed.bind(this), "outline_reset_button");
        var lbTxt = resetButtonClip.getTextFieldByName("label_txt");
        lbTxt.colorTag = true;
        lbTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("ResetButton"));
        resetButtonClip.gotoAndStopFrameIndex(1);
        resetButton.setXY(250, 450);
        this.resetButton = resetButton;
        var colorPickerButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        var colorPickerButton = new GameButton.GameButton();
        colorPickerButton.setMovieClip(colorPickerButtonClip, 1);
        colorPickerButton.setCustomButtonListener(this.colorPickerButtonClicked.bind(this), "outline_reset_button");
        var labelTxt = colorPickerButtonClip.getTextFieldByName("label_txt");
        labelTxt.colorTag = true;
        labelTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("ColorPicker"));
        colorPickerButtonClip.gotoAndStopFrameIndex(1);
        colorPickerButton.setXY(250, 250);
        this.colorPickerButton = colorPickerButton;
        for (var caption of OutlineColorPopup.CAPTIONS) {
            var captionClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
            var captionTextField = captionClip.getTextFieldByName("text");
            captionTextField.setXY(-260, caption.y);
            captionTextField.color = caption.color;
            captionTextField.colorTag = true;
            captionTextField.fontOutline = true;
            captionTextField.align = 2;
            captionTextField.text = Localisation.Localisation.getString(caption.text);
            popupClip.addChild(captionTextField);
        }
        popupClip.addChild(saveButton);
        popupClip.addChild(resetButton);
        popupClip.addChild(colorPickerButton);
        popupClip.addChild(hexColorTextField);
        GUI.GUI.popupStorage.push(this);
    }

    saveButtonPressed(self, button) {
        Outline.outlineColor = this.tempOutlineColor.slice();
        Config.Config.config.OutlineColor = Outline.outlineColor.slice();
        FileManager.FileManager.updateConfigFile();
    }

    resetButtonPressed(self, button) {
        Config.Config.config.OutlineColor = Config.Config.configStatic.OutlineColor.slice();
        Outline.outlineColor = Config.Config.config.OutlineColor.slice();
        this.tempOutlineColor = Outline.outlineColor.slice();
        FileManager.FileManager.updateConfigFile();
        for (var slider of this.sliders) {
            slider.setValue(0);
        }
        this.sliders[0].setValue(100);
        var hexColor = LogicColor.LogicColor.argbToIntString(Outline.outlineColor);
        this.hexColorTextField.color = parseInt(hexColor, 16);
        this.hexColorTextField.text = "#" + hexColor.substring(2);
        this.saveButton.setDisabledWithHUDPrint(true, Localisation.Localisation.getString("OutlineColorAlreadySaved"));
    }

    colorPickerButtonClicked(self, button) {
        var webView = SimpleWebView.SimpleWebView.create();
        webView.setTitleTid(Localisation.Localisation.getString("ColorPicker"));
        webView.loadURL("https://bsd.meowfox.net/colorpicker");
        webView.setDisallowModalTap(true);
    }

    updateElements(deltaTime) {
        var index = 0;
        for (var slider of this.sliders) {
            if (!slider.isNull()) {
                var valueBeforeUpdate = slider.getValue();
                slider.update(deltaTime);
                var valueAfterUpdate = slider.getValue();
                if (valueBeforeUpdate !== valueAfterUpdate) {
                    var outlineOffset = OutlineColorPopup.offsetMappings[index];
                    this.tempOutlineColor[outlineOffset] = valueAfterUpdate;
                    this.saveButton.setDisabledWithHUDPrint(false, "");
                    this.resetButton.setDisabledWithHUDPrint(false, "");
                    var hexColor = LogicColor.LogicColor.argbToIntString(this.tempOutlineColor);
                    this.hexColorTextField.color = parseInt(hexColor, 16);
                    this.hexColorTextField.text = "#" + hexColor.substring(2);
                }
            }
            index = index + 1 % this.tempOutlineColor.length;
        }
    }
}

OutlineColorPopup.CAPTIONS = [
    { text: "ColorAlpha", y: 180, color: 0 },
    { text: "ColorRed", y: 280, color: 0xffff0000 },
    { text: "ColorGreen", y: 380, color: 0xff00ff00 },
    { text: "ColorBlue", y: 480, color: 0xff0000ff }
];

OutlineColorPopup.offsetMappings = [3, 0, 1, 2];

class Outline {
    init() {
        this.outlineColor = Config.Config.config.OutlineColor.slice();
        EnvironmentRenderer.EnvironmentRenderer.patch();
    }
}
