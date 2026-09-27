// ============================================================= //
// FEATURE: Random theme after every battle
// Config key: RandomThemeMask[2] (default false)
// TID prefix: RandomThemesAfterBattle
// Icon: RandomThemesAfterBattleCallback (menu/icons.js, module 2120)
// Wiring: BattleScreen exit hook (ui/screens.js, module 7835) re-rolls
// the theme every time a battle ends
// ============================================================= //

Config.configStatic.RandomThemeMask = [false, false, false];

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   RandomThemesAfterBattle_name        = "Random theme after every battle"
//   RandomThemesAfterBattle_descEnabled = "When enabled, theme will be changed to random every time you enter and exit battle."

function RandomThemesAfterBattleCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var battleClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    iconRandom.x = iconBg.width / 3;
    iconRandom.y = iconBg.height / 3.5;
    iconRandom.scale = 0.7;
    battleClip.x = -iconRandom.x;
    battleClip.y = -iconRandom.y;
    battleClip.scale = 0.7;
    iconSprite.addChild(iconBg);
    iconSprite.addChild(iconRandom);
    iconSprite.addChild(battleClip);
    return iconSprite;
}

// BattleScreen native (module 7835, ui/screens.js):
var BattleScreen_exit = new NativeFunction(Libg.Libg.offset(11703448, 0), "void", ["pointer"]);

function patchRandomThemeAfterBattle() {
    // Installed as the tail of the BattleScreen exit replacement: after the
    // HUD is torn down, bit 2 triggers a fresh random theme for the menu.
    Interceptor.replace(BattleScreen_exit, new NativeCallback(function (self) {
        BattleScreen.BattleScreen.dispatchListeners(BattleScreen.BattleScreen.exitListeners);
        var combatHUD = BattleScreen.BattleScreen.getCombatHUD();
        if (!combatHUD.isNull()) {
            // (HUD cleanup — coordinates / latency / chat teardown — is owned
            // by the respective battle-UI features)
        }
        BattleScreen_exit(self);
        Breadcrumbs.Breadcrumbs.push("BattleScreen::exit");
        if (Config.Config.config.RandomThemeMask[2]) {
            ThemeSelector.ThemeSelectorManager.setRandomTheme();
        }
    }, "void", ["pointer"]));
}

// The mask is reset (all bits cleared) whenever a concrete theme choice is
// made — ThemeSelectorManager.cycleTheme and
// ThemeSelectorPopup.applyCustomBackgroundWithMusic (module 9244):
//
//     Config.Config.config.RandomThemeMask[2] = false;
//     Config.Config.config.RandomThemeMask[1] = false;
//     Config.Config.config.RandomThemeMask[0] = false;
//     FileManager.FileManager.updateConfigFile();
