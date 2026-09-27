class FPSCounter {
    static toggleEnabled() {
        Config.Config.config.ShowFPSCounter = !Config.Config.config.ShowFPSCounter;
        FileManager.FileManager.updateConfigFile();
        FPSCounter.toggle(Config.Config.config.ShowFPSCounter);
        return Config.Config.config.ShowFPSCounter;
    }

    static isEnabled() {
        return Boolean(Config.Config.config.ShowFPSCounter);
    }

    static toggle(cond) {
        if (cond) {
            if (!this.fpsTextField) {
                var textField = MovieClip.MovieClip.getTextFieldByName(StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left").instance, "text");
                if (!textField || textField.instance.isNull()) {
                    return;
                }
                this.fpsTextField = textField;
                this.fpsTextField.x = 20;
                this.fpsTextField.y = 5;
                this.fpsTextField.fontOutline = true;
                try {
                    Stage.Stage.addChild(this.fpsTextField.instance);
                } catch (e) {
                    return;
                }
            }
        } else if (this.fpsTextField) {
            if (!this.fpsTextField.instance.isNull()) {
                try {
                    Stage.Stage.removeChild(this.fpsTextField.instance);
                } catch (e) {
                }
            }
            this.fpsTextField = null;
            return;
        }
    }

    static update() {
        if (this.fpsTextField) {
            if (this.bySecondTrigger) {
                var fpsColor = this.framecounter < 60 ? this.fpsGradientArray[this.framecounter] : 3329330;
                this.fpsTextField.color = 3489660928.0 + fpsColor;
                this.fpsTextField.text = "FPS: ".concat(this.framecounter);
                this.bySecondTrigger = false;
                this.framecounter = 0;
            }
            this.framecounter++;
        }
    }
}

FPSCounter.bySecondTrigger = false;
FPSCounter.fpsGradientArray = LogicColor.LogicColor.generateColorArray(16776960, 16711680, 30).concat(LogicColor.LogicColor.generateColorArray(3329330, 16776960, 30));
FPSCounter.framecounter = 0;
