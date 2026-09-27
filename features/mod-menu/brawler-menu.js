class BrawlerMenuPopup extends ListContainerPopup.ListContainerPopup {
    constructor(gatchaType, isForSkins, isForSkinChanger, onPick) {
        if (isForSkins === undefined) {
            isForSkins = false;
        }
        if (isForSkinChanger === undefined) {
            isForSkinChanger = false;
        }
        var title;
        if (gatchaType === HomeMode.HomeMode.gatchaType.Character) {
            title = Localisation.Localisation.getString("BrawlerMenuPopupTitle");
        } else if (gatchaType === HomeMode.HomeMode.gatchaType.PowerPoints) {
            title = Localisation.Localisation.getString("PowerPointsMenuPopupTitle");
        } else if (gatchaType === HomeMode.HomeMode.gatchaType.Gadget) {
            title = Localisation.Localisation.getString("GadgetMenuPopupTitle");
        } else if (gatchaType === HomeMode.HomeMode.gatchaType.StarPower) {
            title = Localisation.Localisation.getString("StarPowerMenuPopupTitle");
        } else if (gatchaType === HomeMode.HomeMode.gatchaType.Hypercharge) {
            title = Localisation.Localisation.getString("HyperchargeMenuPopupTitle");
        } else if (gatchaType === -1) {
            title = Localisation.Localisation.getString("PrestigeMenuPopupTitle");
        }
        super({ Title: title });
        this.adjustPopupHeaderButtons("brawler_menu");
        this.refreshItems();
        this.isForSkins = isForSkins;
        this.gatchaType = gatchaType;
        this.isForSkinChanger = isForSkinChanger;
        this.brawlerItemsCount = 0;
        this.onPick = onPick;
    }

    refreshItems() {
        this.container.clearEntries();
        var charactersTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Characters);
        this.brawlerItemsCount = charactersTable.getItemCount();
        var brawlerItemIndex = 0;
        while (brawlerItemIndex < this.brawlerItemsCount) {
            var characterItem = charactersTable.getItemAt(brawlerItemIndex);
            var characterName = characterItem.getName();
            if (!characterItem.isDisabled()) {
                if (characterItem.getTID() !== "") {
                    if (characterItem.isHero() || characterName === "Lightyear") {
                        if (!["MechaDudeBig", "CannonGirlSmall", "Godzilla", "DiggerDrill", "GeishaTransformed"].includes(characterName)) {
                            var brawlerItem = new BrawlerItem.BrawlerItem(characterItem);
                            brawlerItem.setCustomButtonListener(this.buttonPressed.bind(this));
                            this.container.addEntry(brawlerItem);
                        }
                    }
                }
            }
            brawlerItemIndex++;
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var brawlerButton = new GameButton.GameButton(button);
        var charactersTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Characters);
        var character = charactersTable.getItemAt(brawlerButton.id);
        if (this.isForSkins) {
            try {
                GUI.GUI.showPopup(new SkinMenuPopup(character, this.isForSkinChanger), true, true, false);
                if (this.onPick) {
                    this.onPick(character);
                }
            } catch (e) {
                LogInfo(e.stack);
            }
            return;
        }
        if (this.onPick) {
            this.onPick(character);
            return;
        }
        if (this.gatchaType === HomeMode.HomeMode.gatchaType.Character) {
            HomeScreen.HomeScreen.doOfflineGatcha(HomeMode.HomeMode.gatchaType.Character, character);
            return;
        }
        if (this.gatchaType === HomeMode.HomeMode.gatchaType.PowerPoints) {
            var clientAvatar = HomeMode.HomeMode.getPlayerAvatar();
            var characterPowerPoints = clientAvatar.getHeroPower(character);
            if (characterPowerPoints !== LogicClientAvatar.LogicClientAvatar.maxHeroPowerPoints) {
                HomeScreen.HomeScreen.doOfflineGatcha(HomeMode.HomeMode.gatchaType.PowerPoints, character);
            }
            return;
        }
        if (this.gatchaType === HomeMode.HomeMode.gatchaType.Gadget) {
            HomeScreen.HomeScreen.doOfflineGatcha(HomeMode.HomeMode.gatchaType.Gadget, character);
            return;
        }
        if (this.gatchaType === HomeMode.HomeMode.gatchaType.StarPower) {
            HomeScreen.HomeScreen.doOfflineGatcha(HomeMode.HomeMode.gatchaType.StarPower, character);
            return;
        }
        if (this.gatchaType === HomeMode.HomeMode.gatchaType.Hypercharge) {
            HomeScreen.HomeScreen.doOfflineGatcha(HomeMode.HomeMode.gatchaType.Hypercharge, character);
            return;
        }
        if (this.gatchaType === -1) {
            var popup = new PrestigeSelectorPopup.PrestigeSelectorPopup(character);
            GUI.GUI.showPopup(popup, true, true, false);
        }
    }
}
