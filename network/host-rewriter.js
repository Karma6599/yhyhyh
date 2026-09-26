// =============================================================
// HOST REWRITER
// merged webpack modules: 5294 HostRewriter
// =============================================================

// --------------------- MODULE 5294 — HostRewriter ---------------------

// ============================================================ //
// webpack module 5294  —  HostRewriter
// exports: HostRewriter
// deps: 3888 (InitState), 3902 (NativeDialog), 4974 (Breadcrumbs)
// ============================================================ //

__webpack_modules__[5294] = function HostRewriter_factory(__unused_webpack_module, exports, __webpack_require__) {
    var InitState, NativeDialog, Breadcrumbs, HostRewriter, <class_fields_init>, HostRewriter;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HostRewriter = undefined;
        InitState = __webpack_require__(3888);
        NativeDialog = __webpack_require__(3902);
        Breadcrumbs = __webpack_require__(4974);
        <class_fields_init> = undefined;
        HostRewriter;
        class HostRewriter {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7d93e (open) */
}
            rewrite (url) {
    var rule;
        (this).maybeBreadcrumbGameAssets(url);
        /* jump -> 0x7d842 */
        rule = /*iter*/ (this).rules;
        if (!(!(url).includes((rule).from))) {
            if ((rule).conditional) {
                if (!(!(rule).conditional())) {
                    if ((rule).showReserveDialog) {
                        (this).showReserveDialogOnce();
                    } /* if 0x7d824 */
                    return undefined;
                } /* if 0x7d842 */
            } /* if 0x7d810 */
        } /* if 0x7d842 */
        } while (!(this).rules);
        rule = <underflow>;
        return null;
}
            maybeBreadcrumbGameAssets (url) {
        if ((!(url).includes("game-assets.brawlstarsgame.com"))) {
            return;
        } /* if 0x7d885 */
        return;
}
            showReserveDialogOnce () {
        if ((this).reserveDialogShown) {
            return;
        } /* if 0x7d8eb */
        this.reserveDialogShown = true;
        return;
}
        }
        HostRewriter = HostRewriter = HostRewriter;
        exports.HostRewriter = HostRewriter;
        HostRewriter.reserveDialogShown = false;
        HostRewriter.conditional = { from: "game-assets.brawlstarsgame.com", to: "game-assets.meowfox.net" };
        HostRewriter.showReserveDialog = true;
        HostRewriter.rules = [HostRewriter, { from: "event-assets.brawlstars.com", to: "event-assets.meowfox.net" }, { from: "brawlstars.inbox.supercell.com", to: "inbox.bsd.meowfox.net" }, { from: "inventory.mtech.supercell.com", to: "inventory.bsd.meowfox.net" }];
        return;
};

