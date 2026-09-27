class HostRewriter {
    static rewrite(url) {
        HostRewriter.maybeBreadcrumbGameAssets(url);
        for (const rule of HostRewriter.rules) {
            if (url.includes(rule.from)) {
                if (rule.conditional) {
                    if (rule.conditional()) {
                        if (rule.showReserveDialog) {
                            HostRewriter.showReserveDialogOnce();
                        }
                        return undefined;
                    }
                }
            }
        }
        return null;
    }
    static maybeBreadcrumbGameAssets(url) {
        if (!url.includes("game-assets.brawlstarsgame.com")) {
            return;
        }
        return;
    }
    static showReserveDialogOnce() {
        if (HostRewriter.reserveDialogShown) {
            return;
        }
        HostRewriter.reserveDialogShown = true;
        return;
    }
}
HostRewriter.reserveDialogShown = false;
HostRewriter.conditional = { from: "game-assets.brawlstarsgame.com", to: "game-assets.meowfox.net" };
HostRewriter.showReserveDialog = true;
HostRewriter.rules = [HostRewriter, { from: "event-assets.brawlstars.com", to: "event-assets.meowfox.net" }, { from: "brawlstars.inbox.supercell.com", to: "inbox.bsd.meowfox.net" }, { from: "inventory.mtech.supercell.com", to: "inventory.bsd.meowfox.net" }];
