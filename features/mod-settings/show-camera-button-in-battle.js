class BattleCameraButton extends GameButton.GameButton {
    constructor() {
        super();
        var cameraButtonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        this.setMovieClip(cameraButtonMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(cameraButtonMovieClip.instance, "txt");
        buttonTextField.fontOutline = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString("CameraModesButton"));
        this.setXY(60, 60);
        this.setCustomButtonListener(this.buttonClicked.bind(this), "battle_camera_button");
    }

    buttonClicked(self, button) {
        BattleCamera.BattleCamera.setNextMode();
    }
}

class BattleCamera {
    static setNextMode() {
        this.mode = (this.mode + 1) % 4;
    }

    static toggleZoom() {
        if (this.zoomMultiplier === 1) {
            this.zoomMultiplier = 0.6;
        } else {
            this.zoomMultiplier = 1;
        }
    }

    static reset() {
        this.zoomMultiplier = 1;
        this.cameraXOffset = 0;
        this.cameraYOffset = 0;
        this.cameraZOffset = 0;
        this.targetXOffset = 0;
        this.targetYOffset = 0;
        this.tiltOffset = 0;
    }
}

BattleCamera.mode = 0;
BattleCamera.zoomMultiplier = 1;
BattleCamera.cameraXOffset = 0;
BattleCamera.cameraYOffset = 0;
BattleCamera.cameraZOffset = 0;
BattleCamera.targetXOffset = 0;
BattleCamera.targetYOffset = 0;
BattleCamera.tiltOffset = 0;

var BattleCamera_method = Libg.Libg.offset(11702444, 0);
var MirrorPlayfieldAddr = Libg.Libg.offset(19935056, 0);
var ownPlayerXOffset = LogicMemory.LogicMemory.offset(48);
var ownPlayerYOffset = LogicMemory.LogicMemory.offset(52);
var mapWidthOffset = LogicMemory.LogicMemory.offset(204);
var mapHeightOffset = LogicMemory.LogicMemory.offset(208);
var cameraPersonOffset = LogicMemory.LogicMemory.offset(2348);

class CameraParameters {
    static patch() {
    }

    static applyZoomToCameraZ(battleScreen) {
        if (BattleCamera.BattleCamera.zoomMultiplier === 1) {
            return;
        }
        var z = battleScreen.add(CameraParameters.fields[2]).readFloat();
    }

    static addFloatField(battleScreen, fieldIndex, delta) {
        if (delta === 0) {
            return;
        }
        var ptr = battleScreen.add(CameraParameters.fields[fieldIndex]);
        ptr.writeFloat(ptr.readFloat() + delta);
    }

    static applyCameraOffsets(battleScreen) {
        if (BattleCamera.BattleCamera.mode === 1) {
            CameraParameters.addFloatField(battleScreen, 0, BattleCamera.BattleCamera.cameraXOffset);
            CameraParameters.addFloatField(battleScreen, 1, BattleCamera.BattleCamera.cameraYOffset);
            CameraParameters.addFloatField(battleScreen, 2, BattleCamera.BattleCamera.cameraZOffset);
            CameraParameters.addFloatField(battleScreen, 3, BattleCamera.BattleCamera.cameraXOffset);
            CameraParameters.addFloatField(battleScreen, 4, BattleCamera.BattleCamera.cameraYOffset);
        } else {
            CameraParameters.addFloatField(battleScreen, 0, BattleCamera.BattleCamera.cameraXOffset);
            CameraParameters.addFloatField(battleScreen, 1, BattleCamera.BattleCamera.cameraYOffset);
            CameraParameters.addFloatField(battleScreen, 2, BattleCamera.BattleCamera.cameraZOffset);
            CameraParameters.addFloatField(battleScreen, 3, BattleCamera.BattleCamera.targetXOffset);
            CameraParameters.addFloatField(battleScreen, 4, BattleCamera.BattleCamera.targetYOffset);
        }
    }
}

CameraParameters.fields = [2280, 2284, 2288, 2292, 2296, 2300];
