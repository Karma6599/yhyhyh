//============================================================================//
// DEBUG MENU BUTTON: UNLOCK_ACCOUNT_SCREEN
// In-game label: "UNLOCK_ACCOUNT_SCREEN"
// Menu: Debug Menu → PREVIEW category
// Visibility: home screen only
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Account unlock menu — module 9510.
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   { label: "UNLOCK_ACCOUNT_SCREEN", category: ((DebugMenuCategory).EDebugCategory).PREVIEW }
// --------------------- MODULE 9510 — UnlockAccountMenu ---------------------


// ============================================================ //
// webpack module 9510  —  UnlockAccountMenu
// exports: UnlockAccountMenu
// deps: 1978 (Libc), 4934 (GUI), 8581 (PopupBase), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9510] = function UnlockAccountMenu_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, PopupBase, GUI, UnlockAccountMenu_ctor, UnlockAccountMenu, <class_fields_init>, UnlockAccountMenu;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.UnlockAccountMenu = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        PopupBase = __webpack_require__(8581);
        GUI = __webpack_require__(4934);
        UnlockAccountMenu_ctor = new NativeFunction(((Libg).Libg).offset(13671608, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        UnlockAccountMenu;
        class UnlockAccountMenu extends <class_fields_init> = (PopupBase).PopupBase {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((UnlockAccountMenu).allocationSize, 1);
        UnlockAccountMenu_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x45ca2 */
        return this;
}
            show () {
    var popup;
        popup = new UnlockAccountMenu();
        return;
}
        }
        UnlockAccountMenu = v8 = UnlockAccountMenu;
        exports.UnlockAccountMenu = UnlockAccountMenu;
        UnlockAccountMenu.allocationSize = 472;
        return;
};

