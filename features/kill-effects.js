// =============================================================
// FEATURE: Kill Effects
// config keys: KillEffectType
// Custom kill effect selection (skull, sprite, particles...).
// merged webpack modules: 4915 KillEffectType, 2662 KillEffectSelector, 4179 KillEffectItem, 3627 KillEffectTypeItem
// =============================================================

// --------------------- MODULE 4915 — KillEffectType ---------------------

// ============================================================ //
// webpack module 4915  —  KillEffectType
// exports: KillEffectTypePopup
// deps: 2662 (KillEffectSelector), 3627 (KillEffectTypeItem), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup)
// ============================================================ //

__webpack_modules__[4915] = function KillEffectType_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameButton, KillEffectTypeItem, KillEffectSelector, GUI, KillEffectTypePopup, <class_fields_init>, KillEffectTypePopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.KillEffectTypePopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        KillEffectTypeItem = __webpack_require__(3627);
        KillEffectSelector = __webpack_require__(2662);
        GUI = __webpack_require__(4934);
        static refreshItems () {
    var listContainer, index, killEffectType, killEffectTypeItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        index = 0;
        /* jump -> 0xc844f */
        killEffectType = /*iter*/ (KillEffectTypePopup).KILL_EFFECT_TYPE;
        killEffectTypeItem = new (KillEffectTypeItem).KillEffectTypeItem(killEffectType);
        (killEffectTypeItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("killEffectType_").concat(index));
        killEffectTypeItem.id = index;
        ((this).container).addEntry(killEffectTypeItem);
        index = ((index) + 1);
        (index++);
        } while (!killEffectTypeItem);
        killEffectTypeItem = (KillEffectTypePopup).KILL_EFFECT_TYPE;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(1, (naviHeight * 2.5), 0, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, button) {
    var killEffectTypeButton, killEffectTypeId, killEffectType, killEffectSelector;
        killEffectTypeButton = new (GameButton).GameButton(button);
        killEffectTypeId = (killEffectTypeButton).id;
        killEffectType = (KillEffectTypePopup).KILL_EFFECT_TYPE[killEffectTypeId];
        if ((!killEffectType)) {
            return;
        } /* if 0xc8524 */
        killEffectSelector = new (KillEffectSelector).KillEffectSelectorPopup(killEffectTypeId);
        return;
};
        <class_fields_init> = undefined;
        KillEffectTypePopup;
        class KillEffectTypePopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("KillEffectTypePopup") });
        if (<class_fields_init>) {
        } /* if 0xc8352 */
        (this).adjustPopupHeaderButtons("kill_effect_type_popup");
        (this).refreshItems();
        return this;
}
        }
        KillEffectTypePopup = KillEffectTypePopup = KillEffectTypePopup;
        exports.KillEffectTypePopup = KillEffectTypePopup;
        KillEffectTypePopup.KILL_EFFECT_TYPE = [{ name: "KillEffectTypeCommon" }, { name: "KillEffectTypeCustom" }];
        return;
};

// --------------------- MODULE 2662 — KillEffectSelector ---------------------

// ============================================================ //
// webpack module 2662  —  KillEffectSelector
// exports: KillEffectSelectorPopup
// deps: 699 (FileManager), 4009 (Config), 4179 (KillEffectItem), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup)
// ============================================================ //

__webpack_modules__[2662] = function KillEffectSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, Config, KillEffectItem, GameButton, FileManager, KillEffectSelectorPopup, <class_fields_init>, KillEffectSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.KillEffectSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        KillEffectItem = __webpack_require__(4179);
        GameButton = __webpack_require__(5039);
        FileManager = __webpack_require__(699);
        static refreshItems () {
    var listContainer, index, effects, killEffect, killEffectItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        index = 0;
        effects = (this).getEffects();
        /* jump -> 0xc8051 */
        killEffect = /*iter*/ effects;
        if (!(killEffect).disabled) {
            if (((killEffect).name === "KillEffectReset")) {
                if (!((((Config).Config).config).KillEffectType === "")) {
                    killEffectItem = new (KillEffectItem).KillEffectItem(killEffect);
                    (killEffectItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("killEffect_").concat((killEffect).effect_name, "_button"));
                    killEffectItem.id = index;
                    ((this).container).addEntry(killEffectItem);
                    index = ((index) + 1);
                    (index++);
                } /* if 0xc8050 */
            } /* if 0xc7fe2 */
            } while (!killEffectItem);
        } /* if 0xc8053 */
        killEffectItem = effects;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, button) {
    var killEffectButton, killEffectId, effects, killEffect;
        killEffectButton = new (GameButton).GameButton(button);
        killEffectId = (killEffectButton).id;
        if (((((Config).Config).config).KillEffectType === "")) {
            killEffectId = (killEffectId + 1);
        } /* if 0xc8132 */
        effects = (this).getEffects();
        killEffect = effects[killEffectId];
        if ((!killEffect)) {
            return;
        } /* if 0xc814c */
        ((Config).Config).config.KillEffectType = (killEffect).effect_name;
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        static getEffects () {
        if (((this).effectType === 0)) {
            return (KillEffectSelectorPopup).KILL_EFFECT_TYPE_COMMON;
        } /* if 0xc81be */
        return (KillEffectSelectorPopup).KILL_EFFECT_TYPE_CUSTOM;
};
        <class_fields_init> = undefined;
        KillEffectSelectorPopup;
        class KillEffectSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var effectType, effectType, this.active_func, new.target;
        effectType = /*special:2*/;
        this.active_func = /*special:3*/;
        if (((effectType) === undefined)) {
            effectType = effectType = 0;
        } /* if 0xc7ec9 */
        new.target = super({ Title: ((Localisation).Localisation).getString("KillEffectSelectorPopup") });
        if (<class_fields_init>) {
        } /* if 0xc7efc */
        new.target.effectType = effectType;
        (new.target).adjustPopupHeaderButtons("kill_effect_popup");
        (new.target).refreshItems();
        return new.target;
}
        }
        KillEffectSelectorPopup = KillEffectSelectorPopup = KillEffectSelectorPopup;
        exports.KillEffectSelectorPopup = KillEffectSelectorPopup;
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][32] = { name: "KillEffectHalloweenTick", disabled: false, effect_name: "tick_009_kill" };
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][33] = { name: "KillEffectStreetPoco", disabled: false, effect_name: "poco_010_kill" };
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][34] = { name: "KillEffectPorcelainSurge", disabled: false, effect_name: "surge_010_kill_k2" };
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][35] = { name: "KillEffectStNita", disabled: false, effect_name: "nita_012_kill" };
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][36] = { name: "KillEffectMechPiper", disabled: false, effect_name: "piper_010_kill" };
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][37] = { name: "KillEffectMechJessie", disabled: false, effect_name: "jessie_011_kill" };
        [...{ name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" }][38] = { name: "KillEffectTigerLeon", disabled: false, effect_name: "leon_010_kill" };
        KillEffectSelectorPopup.KILL_EFFECT_TYPE_CUSTOM = [{ name: "KillEffectReset", disabled: false, effect_name: "" }, { name: "KillEffectGoal", disabled: false, effect_name: "mode_gift_goal" }, { name: "KillEffectOverchargedExplosion", disabled: false, effect_name: "buzz_overcharged_ulti_explosion" }, { name: "KillEffectUno", disabled: false, effect_name: "chester_005_ulti_explode" }, { name: "KillEffectDynamikeExplosion", disabled: false, effect_name: "dynamike_009_ulti_explosion" }, { name: "KillEffectBonnieHit", disabled: false, effect_name: "bonnie_004_atk_small_hit" }, { name: "KillEffectGromUlti", disabled: false, effect_name: "grom_005_ulti2_reached" }, { name: "KillEffectConfettiShield", disabled: false, effect_name: "rosa_006_ulti" }, { name: "KillEffectTickExplosion", disabled: false, effect_name: "tick_005_atk1_explode" }, { name: "KillEffectBats", disabled: false, effect_name: "mortuary_themed_explo" }, { name: "KillEffectBrawlUpgrade", disabled: false, effect_name: "brawler_upgrade_effect" }, { name: "KillEffectFleaLanding", disabled: false, effect_name: "flea_002_ulti_landing" }, { name: "KillEffectGrayFinger", disabled: false, effect_name: "gray_def_oc_ulti_ready" }, { name: "KillEffectPearlUlti", disabled: false, effect_name: "pearl_004_ulti_k2" }, { name: "KillEffectDracoNotes", disabled: false, effect_name: "draco_003_atk_hit" }, { name: "KillEffectMeteor", disabled: false, effect_name: "mico_def_ulti_landing" }];
        return;
};

// --------------------- MODULE 4179 — KillEffectItem ---------------------

// ============================================================ //
// webpack module 4179  —  KillEffectItem
// exports: KillEffectItem
// deps: 612 (MovieClip), 4009 (Config), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[4179] = function KillEffectItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, MovieClip, GameButton, Config, Localisation, KillEffectItem, <class_fields_init>, KillEffectItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.KillEffectItem = undefined;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        Config = __webpack_require__(4009);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        KillEffectItem;
        class KillEffectItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (effect) {
    var effectMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb387c */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        effectMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((effectMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((effectMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((effect).name));
        if (((effect).name == "EffectReset")) {
            (effectMovieClip).gotoAndStopFrameIndex(1);
            return this;
        } /* if 0xb392f */
        (effectMovieClip).gotoAndStopFrameIndex((+(!((effect).effect_name === (((Config).Config).config).KillEffectType))));
        return this;
}
        }
        KillEffectItem = KillEffectItem = KillEffectItem;
        exports.KillEffectItem = KillEffectItem;
        return;
};

// --------------------- MODULE 3627 — KillEffectTypeItem ---------------------

// ============================================================ //
// webpack module 3627  —  KillEffectTypeItem
// exports: KillEffectTypeItem
// deps: 612 (MovieClip), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[3627] = function KillEffectTypeItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, MovieClip, GameButton, Localisation, KillEffectTypeItem, <class_fields_init>, KillEffectTypeItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.KillEffectTypeItem = undefined;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        KillEffectTypeItem;
        class KillEffectTypeItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (effect) {
    var effectMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb3aab */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        effectMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((effectMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((effectMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((effect).name));
        (effectMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        KillEffectTypeItem = v8 = KillEffectTypeItem;
        exports.KillEffectTypeItem = KillEffectTypeItem;
        return;
};

