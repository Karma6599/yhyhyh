//============================================================================//
// MOD FEATURE: Environment
// In-game name: "Environment"  (TID: EnvironmentPopupButton)
// Menu: Mod Menu — Battle tab(s) (menu/mod-menu.js#8203)
// Environment editor popup hosting the Fog and Kill Effect selectors.
//============================================================================//

// --------------------- MODULE 5240 — EnvironmentEditor ---------------------


// ============================================================ //
// webpack module 5240  —  EnvironmentEditor
// exports: EnvironmentEditorPopup
// deps: 4769 (FogSelector), 4915 (KillEffectType), 4934 (GUI), 5039 (GameButton), 6994 (EnvironmentEditorItem), 7265 (Localisation), 8261 (ListContainerPopup)
// ============================================================ //

__webpack_modules__[5240] = function EnvironmentEditor_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameButton, GUI, EnvironmentEditorItem, FogSelector, KillEffectType, EnvironmentEditorPopup, <class_fields_init>, EnvironmentEditorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EnvironmentEditorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        GUI = __webpack_require__(4934);
        EnvironmentEditorItem = __webpack_require__(6994);
        FogSelector = __webpack_require__(4769);
        KillEffectType = __webpack_require__(4915);
        static refreshItems () {
    var listContainer, element, elementItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        /* jump -> 0xc3404 */
        element = /*iter*/ (EnvironmentEditorPopup).ELEMENTS;
        if (!(element).disabled) {
            elementItem = new (EnvironmentEditorItem).EnvironmentEditorItem(element);
            (elementItem).setCustomButtonListener((EnvironmentEditorPopup).buttonPressed, ("element_").concat((element).id, "_button"));
            elementItem.id = (element).id;
            ((this).container).addEntry(elementItem);
        } /* if 0xc3404 */
        } while (!elementItem);
        elementItem = (EnvironmentEditorPopup).ELEMENTS;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(1, (naviHeight * 2.5), 0, 0, 0, 0, -1);
        return;
};
        <class_fields_init> = undefined;
        EnvironmentEditorPopup;
        class EnvironmentEditorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("EnvironmentEditorPopup") });
        if (<class_fields_init>) {
        } /* if 0xc330a */
        (this).adjustPopupHeaderButtons("environment_popup");
        (this).refreshItems();
        return this;
}
            buttonPressed (self, button) {
    var environmentButton;
        environmentButton = new (GameButton).GameButton(button);
        return;
}
            openFogSelectorPopup () {
        return;
}
            openKillEffectSelectorPopup () {
        return;
}
        }
        EnvironmentEditorPopup = <class_fields_init> = EnvironmentEditorPopup;
        exports.EnvironmentEditorPopup = EnvironmentEditorPopup;
        EnvironmentEditorPopup.ELEMENTS = [{ name: "FogSelector", id: 0, disabled: false, callback: (EnvironmentEditorPopup).openFogSelectorPopup }, { name: "KillEffectSelector", id: 1, disabled: false, callback: (EnvironmentEditorPopup).openKillEffectSelectorPopup }];
        return;
};

