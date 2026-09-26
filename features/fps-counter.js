// =============================================================
// FEATURE: FPS Counter
// config keys: ShowFPSCounter
// On-screen FPS counter overlay.
// merged webpack modules: 9786 FPSCounter
// =============================================================

// --------------------- MODULE 9786 — FPSCounter ---------------------

// ============================================================ //
// webpack module 9786  —  FPSCounter
// exports: FPSCounter
// deps: 612 (MovieClip), 699 (FileManager), 3020 (LogicColor), 4009 (Config), 8632 (Stage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9786] = function FPSCounter_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicColor, MovieClip, StringTable, Stage, Config, FileManager, FPSCounter, <class_fields_init>, FPSCounter;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FPSCounter = undefined;
        LogicColor = __webpack_require__(3020);
        MovieClip = __webpack_require__(612);
        StringTable = __webpack_require__(9250);
        Stage = __webpack_require__(8632);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        <class_fields_init> = undefined;
        FPSCounter;
        class FPSCounter {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xbae71 (open) */
}
            toggleEnabled () {
        ((Config).Config).config.ShowFPSCounter = (!(((Config).Config).config).ShowFPSCounter);
        ((FileManager).FileManager).updateConfigFile();
        (FPSCounter).toggle((((Config).Config).config).ShowFPSCounter);
        return (((Config).Config).config).ShowFPSCounter;
}
            isEnabled () {
        return Boolean((((Config).Config).config).ShowFPSCounter);
}
            toggle (cond) {
    var textField;
        if (cond) {
            if ((!(this).fpsTextField)) {
                textField = ((MovieClip).MovieClip).getTextFieldByName((((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left")).instance, "text");
                if (!(!textField)) {
                    if (((textField).instance).isNull()) {
                        return;
                    } /* if 0xbacd4 */
                } /* if 0xbacd1 */
                this.fpsTextField = textField;
                (this).fpsTextField.x = 20;
                (this).fpsTextField.y = 5;
                (this).fpsTextField.fontOutline = true;
                /* CATCH -> 0xbad28 (try region) */
                ((Stage).Stage).addChild(((this).fpsTextField).instance);
                return;
                /* CATCH -> 0xbad30 (try region) */
                return;
                throw this;
                if ((!cond)) {
                    if ((this).fpsTextField) {
                        if ((!(((this).fpsTextField).instance).isNull())) {
                            /* CATCH -> 0xbad77 (try region) */
                            ((Stage).Stage).removeChild(((this).fpsTextField).instance);
                            textField = <underflow>;
                        } /* if 0xbad7e */
                        /* jump -> 0xbad7e */
                        /* CATCH -> 0xbad80 (try region) */
                        /* jump -> 0xbad7e */
                        throw <underflow>;
                        this.fpsTextField = null;
                        return;
                    } /* if 0xbad85 (open) */
                } /* if 0xbad85 (open) */
            } /* if 0xbad31 (open) */
        } /* if 0xbad31 (open) */
}
            update () {
    var fpsColor;
        if ((this).fpsTextField) {
            if ((this).bySecondTrigger) {
                if (((this).framecounter < 60)) {
                } /* if 0xbade7 */
                /* jump -> 0xbadec */
                fpsColor = 3329330;
                (this).fpsTextField.color = (3489660928.0 + fpsColor);
                (this).fpsTextField.text = ("FPS: ").concat((this).framecounter);
                this.bySecondTrigger = false;
                this.framecounter = 0;
            } /* if 0xbae2a */
            this.framecounter = (++(this).framecounter);
            return;
        } /* if 0xbae36 (open) */
}
        }
        FPSCounter = FPSCounter = FPSCounter;
        exports.FPSCounter = FPSCounter;
        FPSCounter.bySecondTrigger = false;
        FPSCounter.fpsGradientArray = (((LogicColor).LogicColor).generateColorArray(16776960, 16711680, 30)).concat(((LogicColor).LogicColor).generateColorArray(3329330, 16776960, 30));
        FPSCounter.framecounter = 0;
        return;
};

