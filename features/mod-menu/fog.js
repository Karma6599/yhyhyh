//============================================================================//
// MOD FEATURE: Fog
// In-game name: "Fog"  (TID: FogSelector)
// Menu: Mod Menu — inside Environment tab(s) (menu/mod-menu.js#8203)
// Fog type selector (Config.FogType) + fog rendering override.
//============================================================================//

// --------------------- MODULE 4769 — FogSelector ---------------------


// ============================================================ //
// webpack module 4769  —  FogSelector
// exports: FogSelectorPopup
// deps: 699 (FileManager), 4009 (Config), 5039 (GameButton), 5222 (FogItem), 7265 (Localisation), 8261 (ListContainerPopup), 8944 (EffectRegistry)
// ============================================================ //

__webpack_modules__[4769] = function FogSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameButton, FogItem, Config, FileManager, EffectRegistry, FogSelectorPopup, <class_fields_init>, FogSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FogSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        FogItem = __webpack_require__(5222);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        EffectRegistry = __webpack_require__(8944);
        static refreshItems () {
    var listContainer, fog, fogItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        /* jump -> 0xc414f */
        fog = /*iter*/ (FogSelectorPopup).FOG_TYPE;
        if (!(fog).disabled) {
            if (((fog).effect_name === "")) {
                if (!((((Config).Config).config).FogType === "")) {
                    /* jump -> 0xc40e4 */
                    if (!(!((EffectRegistry).EffectRegistry).hasEffect((fog).effect_name))) {
                        fogItem = new (FogItem).FogItem(fog);
                        (fogItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("fog_").concat((fog).id, "_button"));
                        fogItem.id = (fog).id;
                        ((this).container).addEntry(fogItem);
                    } /* if 0xc414e */
                    } while (!fogItem);
                } /* if 0xc4151 */
            } /* if 0xc40c9 */
        } /* if 0xc4151 */
        fogItem = (FogSelectorPopup).FOG_TYPE;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, button) {
    var fogButton, fogId, fog;
        fogButton = new (GameButton).GameButton(button);
        fogId = (fogButton).id;
        fog = ((FogSelectorPopup).FOG_TYPE).find(function (e) {
        return ((e).id === fogId);
});
        if (!(!fog)) {
            if ((fog).disabled) {
                return;
            } /* if 0xc4235 */
        } /* if 0xc4232 */
        if (((fog).effect_name !== "")) {
            if ((!((EffectRegistry).EffectRegistry).hasEffect((fog).effect_name))) {
                return;
            } /* if 0xc425d */
        } /* if 0xc425d */
        ((Config).Config).config.FogType = (fog).effect_name;
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        <class_fields_init> = undefined;
        FogSelectorPopup;
        class FogSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("FogSelectorPopup") });
        if (<class_fields_init>) {
        } /* if 0xc3ffc */
        (this).adjustPopupHeaderButtons("fog_popup");
        (this).refreshItems();
        return this;
}
        }
        FogSelectorPopup = <class_fields_init> = FogSelectorPopup;
        exports.FogSelectorPopup = FogSelectorPopup;
        FogSelectorPopup.FOG_TYPE = [{ name: "FogReset", id: 0, disabled: false, effect_name: "" }, { name: "FogDefault", id: 1, disabled: false, effect_name: "poison_fog" }, { name: "FogCN", id: 2, disabled: false, effect_name: "poison_fog_cn" }, { name: "FogStrangerForest", id: 3, disabled: false, effect_name: "poison_fog_stranger_forest" }, { name: "FogStrangerLair", id: 4, disabled: false, effect_name: "poison_fog_stranger_lair" }, { name: "FogBSDWhiteClouds", id: 5, disabled: false, effect_name: "bsd_white_clouds" }, { name: "FogBSDSmallDust", id: 6, disabled: false, effect_name: "bsd_small_dust" }, { name: "FogBSDMagicClouds", id: 7, disabled: false, effect_name: "bsd_magic_clouds" }, { name: "FogBSDOvercharge", id: 8, disabled: true, effect_name: "bsd_overcharge" }];
        return;
};

// --------------------- MODULE 5222 — FogItem ---------------------


// ============================================================ //
// webpack module 5222  —  FogItem
// exports: FogItem
// deps: 612 (MovieClip), 4009 (Config), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[5222] = function FogItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, MovieClip, GameButton, Config, Localisation, FogItem, <class_fields_init>, FogItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FogItem = undefined;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        Config = __webpack_require__(4009);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        FogItem;
        class FogItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (fog) {
    var fogMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb2d3d */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        fogMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((fogMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((fogMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((fog).name));
        if (((fog).name == "FogReset")) {
            (fogMovieClip).gotoAndStopFrameIndex(1);
            return this;
        } /* if 0xb2df0 */
        (fogMovieClip).gotoAndStopFrameIndex((+(!((fog).effect_name === (((Config).Config).config).FogType))));
        return this;
}
        }
        FogItem = FogItem = FogItem;
        exports.FogItem = FogItem;
        return;
};

