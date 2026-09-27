Config.configStatic.HideHomeScreenText = false;

LocalisationOverrides.overrides.en.HideLobbyInfo_name = "Hide text in lobby";
LocalisationOverrides.overrides.en.HideLobbyInfo_descEnabled = "When enabled, lobby information (mod authors and ping) will NOT be displayed.";

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

class LobbyInfo {
    constructor(page) {
        this.x = 120;
        this.y = 90;
        this.fontSize = 14;
        this.useFontOutline = true;
        this.color = 4294967295.0;
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

var HomePage_constructor = new NativeFunction(Libg.Libg.offset(13033040, 0), "void", ["pointer"]);

function patchHideTextInLobby() {
    Interceptor.attach(HomePage_constructor, {
        onEnter(args) {
            this.homePage = args[0];
        },
        onLeave() {
            var page = new HomePage.HomePage(this.homePage);
            HomeScreen.HomeScreen.lobbyInfo = new LobbyInfo(page);
            HomeScreen.HomeScreen.lobbyInfo.update();
        }
    });
}

function updateHomeScreen() {
    if (HomeScreen.HomeScreen.lobbyInfo) {
        HomeScreen.HomeScreen.lobbyInfo.update();
    }
}
