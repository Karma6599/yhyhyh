class FogSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("FogSelectorPopup") });
        this.adjustPopupHeaderButtons("fog_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        for (var fog of FogSelectorPopup.FOG_TYPE) {
            if (!fog.disabled) {
                if (fog.effect_name === "") {
                    if (Config.Config.config.FogType !== "") {
                        var fogItem = new FogItem(fog);
                        fogItem.setCustomButtonListener(this.buttonClicked.bind(this), "fog_" + fog.id + "_button");
                        fogItem.id = fog.id;
                        this.container.addEntry(fogItem);
                    }
                } else if (EffectRegistry.EffectRegistry.hasEffect(fog.effect_name)) {
                    var fogItem = new FogItem(fog);
                    fogItem.setCustomButtonListener(this.buttonClicked.bind(this), "fog_" + fog.id + "_button");
                    fogItem.id = fog.id;
                    this.container.addEntry(fogItem);
                }
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonClicked(self, button) {
        var fogButton = new GameButton.GameButton(button);
        var fogId = fogButton.id;
        var fog = FogSelectorPopup.FOG_TYPE.find(function (e) {
            return e.id === fogId;
        });
        if (fog) {
            if (fog.disabled) {
                return;
            }
        }
        if (fog.effect_name !== "") {
            if (!EffectRegistry.EffectRegistry.hasEffect(fog.effect_name)) {
                return;
            }
        }
        Config.Config.config.FogType = fog.effect_name;
        FileManager.FileManager.updateConfigFile();
    }
}

FogSelectorPopup.FOG_TYPE = [
    { name: "FogReset", id: 0, disabled: false, effect_name: "" },
    { name: "FogDefault", id: 1, disabled: false, effect_name: "poison_fog" },
    { name: "FogCN", id: 2, disabled: false, effect_name: "poison_fog_cn" },
    { name: "FogStrangerForest", id: 3, disabled: false, effect_name: "poison_fog_stranger_forest" },
    { name: "FogStrangerLair", id: 4, disabled: false, effect_name: "poison_fog_stranger_lair" },
    { name: "FogBSDWhiteClouds", id: 5, disabled: false, effect_name: "bsd_white_clouds" },
    { name: "FogBSDSmallDust", id: 6, disabled: false, effect_name: "bsd_small_dust" },
    { name: "FogBSDMagicClouds", id: 7, disabled: false, effect_name: "bsd_magic_clouds" },
    { name: "FogBSDOvercharge", id: 8, disabled: true, effect_name: "bsd_overcharge" }
];

class FogItem extends GameButton.GameButton {
    constructor(fog) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var fogMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(fogMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(fogMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(fog.name));
        if (fog.name == "FogReset") {
            fogMovieClip.gotoAndStopFrameIndex(1);
            return this;
        }
        fogMovieClip.gotoAndStopFrameIndex(+(!(fog.effect_name === Config.Config.config.FogType)));
    }
}
