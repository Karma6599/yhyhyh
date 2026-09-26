//============================================================================//
// MOD FEATURE: Debug menu button
// In-game name: "Debug menu button"  (TID: DebugMenuButton_name)
// Description: "Adds a debug menu button to the home screen."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ShowDebugMenuButton  (default false)
// Implementation below:
// Note: Adds the debug-menu toggle button to the home screen.
//============================================================================//

// --------------------- MODULE 8139 — ToggleDebugMenuButton ---------------------


// ============================================================ //
// webpack module 8139  —  ToggleDebugMenuButton
// exports: ToggleDebugMenuButton
// deps: 118 (DebugGameButton), 8892 (DebugMenuButton)
// ============================================================ //

__webpack_modules__[8139] = function ToggleDebugMenuButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DebugGameButton, DebugMenuButton, ToggleDebugMenuButton, <class_fields_init>, ToggleDebugMenuButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ToggleDebugMenuButton = undefined;
        DebugGameButton = __webpack_require__(118);
        DebugMenuButton = __webpack_require__(8892);
        static callback () {
        if (((((DebugMenuButton).DebugMenuButton).getDebugMenu()) == null)) {
            ((DebugMenuButton).DebugMenuButton).getDebugMenu();
        } /* if 0xdd23c */
        /* jump -> 0xdd244 */
        return;
};
        <class_fields_init> = undefined;
        ToggleDebugMenuButton;
        class ToggleDebugMenuButton extends <class_fields_init> = (DebugGameButton).DebugGameButton {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xdd1e6 */
        (this).setCustomButtonListener(((this).callback).bind(this));
        return this;
}
        }
        ToggleDebugMenuButton = ToggleDebugMenuButton = ToggleDebugMenuButton;
        exports.ToggleDebugMenuButton = ToggleDebugMenuButton;
        return;
};

