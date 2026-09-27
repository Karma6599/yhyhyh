// ============================================================= //
// FEATURE: Hide text in lobby
// Config key: HideHomeScreenText (default false)
// TID prefix: HideLobbyInfo
// Icon: HideHomeScreenTextCallback (menu/icons.js, module 2120)
// Wiring: LobbyInfo (core/config.js, module 4009 file) is created by
// the HomePage constructor hook (ui/screens.js, module 2757) and
// re-evaluated by HomeScreen.update (module 8569).
// ============================================================= //

Config.configStatic.HideHomeScreenText = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   HideLobbyInfo_name        = "Hide text in lobby"
//   HideLobbyInfo_descEnabled = "When enabled, lobby information (mod authors and ping) will NOT be displayed."

function HideHomeScreenTextCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var textField = getTextField();
    textField.fontSize = 96;
    textField.text = "A";
    textField.x = -(textField.textWidth / 2);
    textField.y = -(textField.textHeight / 2);
    var deniedClip = StringTable.StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(textField.textWidth / 2, textField.textHeight / 2);
    deniedClip.scale = 1.1;
    iconSprite.addChild(textField);
    iconSprite.addChild(deniedClip);
    iconSprite.scale = 1.2;
    return iconSprite;
}

// LobbyInfo (core/config.js) — the lobby caption widget. The HideHomeScreenText
// check lives in update(); visibility and text are both driven by the toggle:
class LobbyInfo {
    constructor(page) {
        this.x = 120;
        this.y = 90;
        this.fontSize = 14;
        this.useFontOutline = true;
        this.color = 0xffffffff;
        var popoverTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var textField = popoverTextLeftClip.getTextFieldByName("text");
        if (BSDPlusManager.BSDPlusManager.isBSDPlusEnabled) {
            var gradient = LogicDataTables.LogicDataTables.getDataById(LogicDataTables.LogicDataTables.table.ColorGradients, 1);
            var bling = BlingTextField.BlingTextField.create(popoverTextLeftClip, "text", 0, gradient);
            textField = bling;
        }
        this.textField = textField;
        this.textField.x = this.x;
        this.textField.y = this.y;
        this.textField.fontSize = this.fontSize;
        this.textField.fontOutline = this.useFontOutline;
        this.textField.color = this.color;
        this.textField.text = LobbyInfo.text;
        if (page) {
            page.getMovieClip().addChild(this.textField);
            return;
        }
        HomeScreen.HomeScreen.getHomePage().getMovieClip().addChild(this.textField);
    }

    static toggle(state) {
        this.textField.visibility = state;
    }

    static setText(text) {
        this.textField.text = text;
    }

    static update() {
        if (!HomeScreen.HomeScreen.lobbyInfo) {
            return;
        }
        this.toggle(!Config.Config.config.HideHomeScreenText);
        var modName = "BSD Brawl";
        if (!Config.Config.config.HideHomeScreenText) {
            LobbyInfo.text = "".concat(modName, " v", ModProperties.ModProperties.version, " (", ModProperties.ModProperties.environment, ")\nTelegram: @bsdatamines\n", Localisation.Localisation.getString("BestPing"), ": ", Latency.Latency.parseBestLatency());
            if (GetBSDOnlineMessage.GetBSDOnlineMessage.lastOnline !== 0) {
                LobbyInfo.text = LobbyInfo.text + "\n".concat(Localisation.Localisation.getString("CurrentModOnline"), ": ", GetBSDOnlineMessage.GetBSDOnlineMessage.lastOnline);
            }
        }
    }
}
LobbyInfo.text = "";

// Created by the HomePage constructor hook (ui/screens.js#2757):
//
//     Interceptor.attach(HomePage_constructor, {
//         onLeave() {
//             ...
//             HomeScreen.HomeScreen.lobbyInfo = new LobbyInfo(page);
//             HomeScreen.HomeScreen.lobbyInfo.update();
//             ...
//         }
//     });
//
// Refreshed every frame by HomeScreen.update (module 8569):
//
//     update() {
//         if (this.lobbyInfo) {
//             this.lobbyInfo.update();
//         }
//     }
