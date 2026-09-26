//============================================================================//
// MOD FEATURE: Show camera button in battle
// In-game name: "Show camera button in battle"  (TID: ShowCameraButton_name)
// Description: "When enabled, a button to change camera modes will be displayed in battle."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ShowBattleCameraButton  (default false)
// Implementation below:
// Note: Includes the battle camera engine and camera parameters (shake disable lives here too).
//============================================================================//

// --------------------- MODULE 3625 — BattleCameraButton ---------------------


// ============================================================ //
// webpack module 3625  —  BattleCameraButton
// exports: BattleCameraButton
// deps: 612 (MovieClip), 4188 (BattleCamera), 5039 (GameButton), 7265 (Localisation), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[3625] = function BattleCameraButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, MovieClip, Localisation, BattleCamera, BattleCameraButton, <class_fields_init>, BattleCameraButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleCameraButton = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        Localisation = __webpack_require__(7265);
        BattleCamera = __webpack_require__(4188);
        static buttonClicked (self, button) {
        return;
};
        <class_fields_init> = undefined;
        BattleCameraButton;
        class BattleCameraButton extends <class_fields_init> = (GameButton).GameButton {
            constructor () {
    var cameraButtonMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xaefc8 */
        cameraButtonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        (this).setMovieClip((cameraButtonMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((cameraButtonMovieClip).instance, "txt");
        buttonTextField.fontOutline = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString("CameraModesButton"));
        (this).setXY(60, 60);
        (this).setCustomButtonListener(((this).buttonClicked).bind(this), "battle_camera_button");
        return this;
}
        }
        BattleCameraButton = v8 = BattleCameraButton;
        exports.BattleCameraButton = BattleCameraButton;
        return;
};

// --------------------- MODULE 4188 — BattleCamera ---------------------


// ============================================================ //
// webpack module 4188  —  BattleCamera
// exports: BattleCamera
// ============================================================ //

__webpack_modules__[4188] = function BattleCamera_factory(__unused_webpack_module, exports) {
    var BattleCamera, <class_fields_init>, BattleCamera;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleCamera = undefined;
        <class_fields_init> = undefined;
        BattleCamera;
        class BattleCamera {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9a2dd (open) */
}
            setNextMode () {
        this.mode = (((this).mode + 1) % 4);
        return;
}
            toggleZoom () {
        if (((this).zoomMultiplier === 1)) {
        } /* if 0x9a251 */
        /* jump -> 0x9a252 */
        0.6.zoomMultiplier = 1;
        return;
}
            reset () {
        this.zoomMultiplier = 1;
        this.cameraXOffset = 0;
        this.cameraYOffset = 0;
        this.cameraZOffset = 0;
        this.targetXOffset = 0;
        this.targetYOffset = 0;
        this.tiltOffset = 0;
        return;
}
        }
        BattleCamera = BattleCamera = BattleCamera;
        exports.BattleCamera = BattleCamera;
        BattleCamera.mode = 0;
        BattleCamera.zoomMultiplier = 1;
        BattleCamera.cameraXOffset = 0;
        BattleCamera.cameraYOffset = 0;
        BattleCamera.cameraZOffset = 0;
        BattleCamera.targetXOffset = 0;
        BattleCamera.targetYOffset = 0;
        BattleCamera.tiltOffset = 0;
        return;
};

// --------------------- MODULE 6247 — CameraParameters ---------------------


// ============================================================ //
// webpack module 6247  —  CameraParameters
// exports: CameraParameters
// deps: 1588 (LogicMemory), 2476 (CombatHUD), 4188 (BattleCamera), 5523 (LogicBattleModeClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6247] = function CameraParameters_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicBattleModeClient, BattleCamera, LogicMemory, CombatHUD, BattleCamera_method, MirrorPlayfieldAddr, ownPlayerXOffset, ownPlayerYOffset, mapWidthOffset, mapHeightOffset, cameraPersonOffset, CameraParameters, <class_fields_init>, CameraParameters;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CameraParameters = undefined;
        Libg = __webpack_require__(9878);
        LogicBattleModeClient = __webpack_require__(5523);
        BattleCamera = __webpack_require__(4188);
        LogicMemory = __webpack_require__(1588);
        CombatHUD = __webpack_require__(2476);
        BattleCamera_method = ((Libg).Libg).offset(11702444, 0);
        MirrorPlayfieldAddr = ((Libg).Libg).offset(19935056, 0);
        ownPlayerXOffset = ((LogicMemory).LogicMemory).offset(48);
        ownPlayerYOffset = ((LogicMemory).LogicMemory).offset(52);
        mapWidthOffset = ((LogicMemory).LogicMemory).offset(204);
        mapHeightOffset = ((LogicMemory).LogicMemory).offset(208);
        cameraPersonOffset = ((LogicMemory).LogicMemory).offset(2348);
        <class_fields_init> = undefined;
        CameraParameters;
        class CameraParameters {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4eedd (open) */
}
            patch () {
        return;
}
            applyZoomToCameraZ (battleScreen) {
    var z;
        if ((((BattleCamera).BattleCamera).zoomMultiplier === 1)) {
            return;
        } /* if 0x4ec7e */
        z = ((battleScreen).add((CameraParameters).fields[2])).readFloat();
        return;
}
            addFloatField (battleScreen, fieldIndex, delta) {
    var ptr;
        if ((delta === 0)) {
            return;
        } /* if 0x4ecfe */
        ptr = (battleScreen).add((CameraParameters).fields[fieldIndex]);
        return;
}
            applyCameraOffsets (battleScreen) {
        if ((((BattleCamera).BattleCamera).mode === 1)) {
            (CameraParameters).addFloatField(battleScreen, 0, ((BattleCamera).BattleCamera).cameraXOffset);
            (CameraParameters).addFloatField(battleScreen, 1, ((BattleCamera).BattleCamera).cameraYOffset);
            (CameraParameters).addFloatField(battleScreen, 2, ((BattleCamera).BattleCamera).cameraZOffset);
            (CameraParameters).addFloatField(battleScreen, 3, ((BattleCamera).BattleCamera).cameraXOffset);
            (CameraParameters).addFloatField(battleScreen, 4, ((BattleCamera).BattleCamera).cameraYOffset);
            return;
        } /* if 0x4ee08 */
        (CameraParameters).addFloatField(battleScreen, 0, ((BattleCamera).BattleCamera).cameraXOffset);
        (CameraParameters).addFloatField(battleScreen, 1, ((BattleCamera).BattleCamera).cameraYOffset);
        (CameraParameters).addFloatField(battleScreen, 2, ((BattleCamera).BattleCamera).cameraZOffset);
        (CameraParameters).addFloatField(battleScreen, 3, ((BattleCamera).BattleCamera).targetXOffset);
        (CameraParameters).addFloatField(battleScreen, 4, ((BattleCamera).BattleCamera).targetYOffset);
        return;
}
        }
        CameraParameters = ownPlayerYOffset = CameraParameters;
        exports.CameraParameters = CameraParameters;
        CameraParameters.fields = [2280, 2284, 2288, 2292, 2296, 2300];
        return;
};

