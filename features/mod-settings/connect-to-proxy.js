//============================================================================//
// MOD FEATURE: Connect to proxy
// In-game name: "Connect to proxy"  (TID: BSDProxy_name)
// Description: "When enabled, you'll be connecting to the game server through proxy (irreplaceable for banned regions)."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: BSDProxy  (default false)
// Implementation below:
//============================================================================//

// --------------------- MODULE 6312 — BSDProxy ---------------------


// ============================================================ //
// webpack module 6312  —  BSDProxy
// exports: BSDProxy
// deps: 699 (FileManager), 4009 (Config), 8775 (GameMain), 9025 (INativeDialogListener)
// ============================================================ //

__webpack_modules__[6312] = function BSDProxy_factory(__unused_webpack_module, exports, __webpack_require__) {
    var _a, INativeDialogListener, Config, FileManager, GameMain, BSDProxy, <class_fields_init>, BSDProxy;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDProxy = undefined;
        INativeDialogListener = __webpack_require__(9025);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GameMain = __webpack_require__(8775);
        <class_fields_init> = undefined;
        BSDProxy;
        class BSDProxy {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xba0f1 (open) */
}
            enable (self, index) {
        if ((index !== 2)) {
            return;
        } /* if 0xba08d */
        ((Config).Config).config.BSDProxy = true;
        ((FileManager).FileManager).updateConfigFile();
        return;
}
        }
        BSDProxy = v8 = BSDProxy;
        exports.BSDProxy = BSDProxy;
        _a = BSDProxy;
        BSDProxy.showProxyDialog = true;
        BSDProxy.proxyNativeDialogListener = new (INativeDialogListener).INativeDialogListener((_a).enable);
        return;
};

