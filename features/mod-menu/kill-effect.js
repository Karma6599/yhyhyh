class KillEffectSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor(effectType) {
        if (effectType === undefined) {
            effectType = 0;
        }
        super({ Title: Localisation.Localisation.getString("KillEffectSelectorPopup") });
        this.effectType = effectType;
        this.adjustPopupHeaderButtons("kill_effect_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        var index = 0;
        var effects = this.getEffects();
        for (var killEffect of effects) {
            if (!killEffect.disabled) {
                if (killEffect.name !== "KillEffectReset" || Config.Config.config.KillEffectType !== "") {
                    var killEffectItem = new KillEffectItem(killEffect);
                    killEffectItem.setCustomButtonListener(this.buttonClicked.bind(this), "killEffect_" + killEffect.effect_name + "_button");
                    killEffectItem.id = index;
                    this.container.addEntry(killEffectItem);
                    index++;
                }
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonClicked(self, button) {
        var killEffectButton = new GameButton.GameButton(button);
        var killEffectId = killEffectButton.id;
        if (Config.Config.config.KillEffectType === "") {
            killEffectId = killEffectId + 1;
        }
        var effects = this.getEffects();
        var killEffect = effects[killEffectId];
        if (!killEffect) {
            return;
        }
        Config.Config.config.KillEffectType = killEffect.effect_name;
        FileManager.FileManager.updateConfigFile();
    }

    getEffects() {
        if (this.effectType === 0) {
            return KillEffectSelectorPopup.KILL_EFFECT_TYPE_COMMON;
        }
        return KillEffectSelectorPopup.KILL_EFFECT_TYPE_CUSTOM;
    }
}

KillEffectSelectorPopup.KILL_EFFECT_TYPE_COMMON = [
    { name: "KillEffectHypnosSandy", disabled: false, effect_name: "sandy_007_kill" },
    { name: "KillEffectHalloweenTick", disabled: false, effect_name: "tick_009_kill" },
    { name: "KillEffectStreetPoco", disabled: false, effect_name: "poco_010_kill" },
    { name: "KillEffectPorcelainSurge", disabled: false, effect_name: "surge_010_kill_k2" },
    { name: "KillEffectStNita", disabled: false, effect_name: "nita_012_kill" },
    { name: "KillEffectMechPiper", disabled: false, effect_name: "piper_010_kill" },
    { name: "KillEffectMechJessie", disabled: false, effect_name: "jessie_011_kill" },
    { name: "KillEffectTigerLeon", disabled: false, effect_name: "leon_010_kill" }
];

KillEffectSelectorPopup.KILL_EFFECT_TYPE_CUSTOM = [
    { name: "KillEffectReset", disabled: false, effect_name: "" },
    { name: "KillEffectGoal", disabled: false, effect_name: "mode_gift_goal" },
    { name: "KillEffectOverchargedExplosion", disabled: false, effect_name: "buzz_overcharged_ulti_explosion" },
    { name: "KillEffectUno", disabled: false, effect_name: "chester_005_ulti_explode" },
    { name: "KillEffectDynamikeExplosion", disabled: false, effect_name: "dynamike_009_ulti_explosion" },
    { name: "KillEffectBonnieHit", disabled: false, effect_name: "bonnie_004_atk_small_hit" },
    { name: "KillEffectGromUlti", disabled: false, effect_name: "grom_005_ulti2_reached" },
    { name: "KillEffectConfettiShield", disabled: false, effect_name: "rosa_006_ulti" },
    { name: "KillEffectTickExplosion", disabled: false, effect_name: "tick_005_atk1_explode" },
    { name: "KillEffectBats", disabled: false, effect_name: "mortuary_themed_explo" },
    { name: "KillEffectBrawlUpgrade", disabled: false, effect_name: "brawler_upgrade_effect" },
    { name: "KillEffectFleaLanding", disabled: false, effect_name: "flea_002_ulti_landing" },
    { name: "KillEffectGrayFinger", disabled: false, effect_name: "gray_def_oc_ulti_ready" },
    { name: "KillEffectPearlUlti", disabled: false, effect_name: "pearl_004_ulti_k2" },
    { name: "KillEffectDracoNotes", disabled: false, effect_name: "draco_003_atk_hit" },
    { name: "KillEffectMeteor", disabled: false, effect_name: "mico_def_ulti_landing" }
];

class KillEffectTypePopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("KillEffectTypePopup") });
        this.adjustPopupHeaderButtons("kill_effect_type_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        var index = 0;
        for (var killEffectType of KillEffectTypePopup.KILL_EFFECT_TYPE) {
            var killEffectTypeItem = new KillEffectTypeItem(killEffectType);
            killEffectTypeItem.setCustomButtonListener(this.buttonClicked.bind(this), "killEffectType_" + index);
            killEffectTypeItem.id = index;
            this.container.addEntry(killEffectTypeItem);
            index++;
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(1, naviHeight * 2.5, 0, 0, 0, 0, -1);
    }

    buttonClicked(self, button) {
        var killEffectTypeButton = new GameButton.GameButton(button);
        var killEffectTypeId = killEffectTypeButton.id;
        var killEffectType = KillEffectTypePopup.KILL_EFFECT_TYPE[killEffectTypeId];
        if (!killEffectType) {
            return;
        }
        var killEffectSelector = new KillEffectSelectorPopup(killEffectTypeId);
        GUI.GUI.showPopup(killEffectSelector, true, true, false);
    }
}

KillEffectTypePopup.KILL_EFFECT_TYPE = [
    { name: "KillEffectTypeCommon" },
    { name: "KillEffectTypeCustom" }
];

class KillEffectItem extends GameButton.GameButton {
    constructor(effect) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var effectMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(effectMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(effectMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(effect.name));
        if (effect.name == "EffectReset") {
            effectMovieClip.gotoAndStopFrameIndex(1);
            return this;
        }
        effectMovieClip.gotoAndStopFrameIndex(+(!(effect.effect_name === Config.Config.config.KillEffectType)));
    }
}

class KillEffectTypeItem extends GameButton.GameButton {
    constructor(effect) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var effectMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(effectMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(effectMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(effect.name));
        effectMovieClip.gotoAndStopFrameIndex(1);
    }
}
