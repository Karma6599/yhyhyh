//============================================================================//
// MOD FEATURE: Brawler Menu
// In-game name: "Brawler Menu"  (TID: BrawlerMenuPopup)
// Menu: Mod Menu — via Gatcha tab(s) (menu/mod-menu.js#8203)
// The 'animations menu' (BRAWLERS / SKINS / POWER POINTS / GADGETS / STAR POWERS / HYPERCHARGES / PRESTIGE tabs) — visual unlocks + drop animation previews. See the in-game DISCLAIMER: it does NOT give real brawlers/skins.
//============================================================================//

// --------------------- MODULE 819 — BrawlerMenu ---------------------


// ============================================================ //
// webpack module 819  —  BrawlerMenu
// exports: BrawlerMenuPopup
// deps: 366 (PrestigeSelectorPopup), 1018 (HomeMode), 4934 (GUI), 5039 (GameButton), 6139 (LogicDataTables), 6153 (LogicClientAvatar), 7265 (Localisation), 8156 (_), 8261 (ListContainerPopup), 8394 (SkinMenu), 8569 (HomeScreen), 9573 (BrawlerItem)
// ============================================================ //

__webpack_modules__[819] = function BrawlerMenu_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, LogicDataTables, BrawlerItem, GUI, GameButton, SkinMenu, HomeScreen, LogicClientAvatar, HomeMode, _, PrestigeSelectorPopup, BrawlerMenuPopup, <class_fields_init>, BrawlerMenuPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlerMenuPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        LogicDataTables = __webpack_require__(6139);
        BrawlerItem = __webpack_require__(9573);
        GUI = __webpack_require__(4934);
        GameButton = __webpack_require__(5039);
        SkinMenu = __webpack_require__(8394);
        HomeScreen = __webpack_require__(8569);
        LogicClientAvatar = __webpack_require__(6153);
        HomeMode = __webpack_require__(1018);
        _ = __webpack_require__(8156);
        PrestigeSelectorPopup = __webpack_require__(366);
        static refreshItems () {
    var charactersTable, brawlerItemIndex, characterItem, characterName, brawlerItem, naviHeight;
        ((this).container).clearEntries();
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        this.brawlerItemsCount = (charactersTable).getItemCount();
        brawlerItemIndex = 0;
        while ((brawlerItemIndex < (this).brawlerItemsCount)) {
            characterItem = (charactersTable).getItemAt(brawlerItemIndex);
            characterName = (characterItem).getName();
            if ((!(characterItem).isDisabled())) {
                if (((characterItem).getTID() !== "")) {
                    if (!(characterItem).isHero()) {
                        (characterItem).isHero();
                        if ((characterName === "Lightyear")) {
                            if ((!(["MechaDudeBig", "CannonGirlSmall", "Godzilla", "DiggerDrill", "GeishaTransformed"]).includes(characterName))) {
                                brawlerItem = new (BrawlerItem).BrawlerItem(characterItem);
                                (brawlerItem).setCustomButtonListener(((this).buttonPressed).bind(this));
                                ((this).container).addEntry(brawlerItem);
                            } /* if 0xdd75c */
                        } /* if 0xdd75c */
                    } /* if 0xdd6ec */
                } /* if 0xdd75f */
            } /* if 0xdd75f */
            brawlerItemIndex = ((brawlerItemIndex) + 1);
            (brawlerItemIndex++);
        } /* while 0xdd76a */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var brawlerButton, charactersTable, character, e, clientAvatar, characterPowerPoints, popup;
        brawlerButton = new (GameButton).GameButton(button);
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        character = (charactersTable).getItemAt((brawlerButton).id);
        if ((this).onPick) {
            return;
        } /* if 0xdd885 */
        if ((this).isForSkins) {
            /* CATCH -> 0xdd8c2 (try region) */
            ((GUI).GUI).showPopup(new (SkinMenu).SkinMenuPopup(character, (this).isForSkinChanger), true, true, false);
            (this).onPick(character);
            return;
            e = brawlerButton = charactersTable = character = <underflow>;
            /* CATCH -> 0xdd8da (try region) */
            (_).LogInfo((e).stack);
            return;
            throw <underflow>;
        } /* if 0xdd8d8 */
        if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).Character)) {
            ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Character, character);
        } /* if 0xdd927 */
        /* jump -> 0xdda87 */
        if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).PowerPoints)) {
            clientAvatar = ((HomeMode).HomeMode).getPlayerAvatar();
            characterPowerPoints = (clientAvatar).getHeroPower(character);
            if ((characterPowerPoints !== ((LogicClientAvatar).LogicClientAvatar).maxHeroPowerPoints)) {
                ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).PowerPoints, character);
                /* jump -> 0xdda87 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).Gadget)) {
                    ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Gadget, character);
                } /* if 0xdd9dd */
                /* jump -> 0xdda87 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).StarPower)) {
                    ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).StarPower, character);
                } /* if 0xdda1b */
                /* jump -> 0xdda86 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).Hypercharge)) {
                    ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Hypercharge, character);
                } /* if 0xdda59 */
                /* jump -> 0xdda86 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === -1)) {
                    popup = new (PrestigeSelectorPopup).PrestigeSelectorPopup(character);
                    ((GUI).GUI).showPopup(popup, true, true, false);
                    clientAvatar = characterPowerPoints = popup = (this).gatchaType;
                } /* if 0xdda86 */
                return;
            } /* if 0xdda89 (open) */
        } /* if 0xdd99e (open) */
};
        <class_fields_init> = undefined;
        BrawlerMenuPopup;
        class BrawlerMenuPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var isForSkins, gatchaType, isForSkinChanger, onPick, isForSkins, gatchaType, isForSkinChanger, onPick, title, this.active_func, new.target;
        gatchaType = /*special:2*/;
        isForSkinChanger = /*special:3*/;
        if (((isForSkins) === undefined)) {
            isForSkins = isForSkins = false;
        } /* if 0xdd429 */
        gatchaType = gatchaType;
        if (((isForSkinChanger) === undefined)) {
            isForSkinChanger = isForSkinChanger = false;
        } /* if 0xdd434 */
        onPick = onPick;
        isForSkins = undefined;
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).Character)) {
            isForSkins = ((Localisation).Localisation).getString("BrawlerMenuPopupTitle");
        } /* if 0xdd471 */
        /* jump -> 0xdd55b */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).PowerPoints)) {
            isForSkins = ((Localisation).Localisation).getString("PowerPointsMenuPopupTitle");
        } /* if 0xdd4a4 */
        /* jump -> 0xdd55b */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).Gadget)) {
            isForSkins = ((Localisation).Localisation).getString("GadgetMenuPopupTitle");
        } /* if 0xdd4d7 */
        /* jump -> 0xdd55b */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).StarPower)) {
            isForSkins = ((Localisation).Localisation).getString("StarPowerMenuPopupTitle");
        } /* if 0xdd509 */
        /* jump -> 0xdd55a */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).Hypercharge)) {
            isForSkins = ((Localisation).Localisation).getString("HyperchargeMenuPopupTitle");
        } /* if 0xdd53b */
        /* jump -> 0xdd55a */
        if ((gatchaType === -1)) {
            isForSkins = ((Localisation).Localisation).getString("PrestigeMenuPopupTitle");
        } /* if 0xdd55a */
        onPick = super({ Title: isForSkins });
        if (<class_fields_init>) {
        } /* if 0xdd57d */
        (onPick).adjustPopupHeaderButtons("brawler_menu");
        (onPick).refreshItems();
        onPick.isForSkins = isForSkins;
        onPick.gatchaType = gatchaType;
        onPick.isForSkinChanger = isForSkinChanger;
        onPick.brawlerItemsCount = 0;
        onPick.onPick = onPick;
        return onPick;
}
        }
        BrawlerMenuPopup = LogicClientAvatar = BrawlerMenuPopup;
        exports.BrawlerMenuPopup = BrawlerMenuPopup;
        return;
};

