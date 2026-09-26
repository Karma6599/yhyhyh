class Config {
    static init() {
        FileManager.init();
        this.config = Object.assign({}, this.configStatic);
        if (ModProperties.environment !== "release") {
            this.modVersionInfo = "".concat(ModProperties.version, " (", ModProperties.environment, ")");
        } else {
            this.modVersionInfo = ModProperties.version;
        }
        this._lobbyInfo = "BSD Brawl v".concat(Config.modVersionInfo, "{jointModName}\n");
        var tempConfig = JSON.parse(FileManager.readFile(FileManager.modSaveFilePath, "r"));
        for (var tempConfigProperty in tempConfig) {
            if (!this.config.hasOwnProperty(tempConfigProperty)) {
                delete tempConfig[tempConfigProperty];
            }
        }
        FileManager.writeToFile(FileManager.modSaveFilePath, "w", Json.formatJSONString(Object.assign(this.config, tempConfig)));
        this.config = Object.assign(this.config, tempConfig);
        if (FileManager.isFilepath(FileManager.logFilePath)) {
            EDebugger.logsObject = JSON.parse(FileManager.readFile(FileManager.logFilePath, "r"));
        }
        if (this.config.ThemeBackgroundID >= 0) {
            ThemeSelectorManager.themeID = this.config.ThemeBackgroundID;
        }
        Outline.outlineColor = this.config.OutlineColor;
        var irreplaceableUpdateFilesJSONString = FileManager.readAAsset("bsd/doNotPatch.json", "r");
        if (irreplaceableUpdateFilesJSONString) {
            var irreplaceableUpdateFiles = JSON.parse(irreplaceableUpdateFilesJSONString);
            for (var file of irreplaceableUpdateFiles) {
                var path;
                if (Process.platform === "darwin") {
                    path = "".concat(FileManager.rootDirPath, "/", file);
                } else {
                    path = "".concat(FileManager.rootDirPath, "/update/", file);
                }
                if (FileManager.isFilepath(path)) {
                    Libc.unlink(Memory.allocUtf8String(path));
                }
            }
        }
        var cryptor = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
        var configTempFilePath = FileManager.saveDirPath + "/config.json.temp";
        FileManager.writeToFile(configTempFilePath, "wb", cryptor.decrypt(new Uint8Array(FileManager.readAAsset("bsd/internal/config.json.crypt", "rb"))).buffer);
        this.config = Object.assign(this.config, JSON.parse(FileManager.readFile(configTempFilePath, "r")));
        SkinSelector.skinDataMap = { /* 168KB skin data map — spliced VERBATIM from the decompile in the file; elided here for chat display */ };
        Libc.unlink(Memory.allocUtf8String(configTempFilePath));
        return;
    }
    static reset(self, index) {
        if (index === 0) {
            return;
        }
        this.config = Object.assign({}, this.configStatic);
        FileManager.updateConfigFile();
        return;
    }
}
Config.useDebugLoggingVersions = ["dev", "integration", "beta"];
Config.useDebugLogging = Config.useDebugLoggingVersions.includes(ModProperties.environment);
Config.isRussian = false;
Config.resetNativeDialogListener = new INativeDialogListener(Config.reset.bind(Config));
Config.config = {};
Config.configStatic = { FPSLimit: -1, ThemeBackgroundID: -1, ThemeMusicID: -1, AntiAfkKick: false, AttackRangeIndicator: false, DevModeEnabled: false, ShowDebugMenuButton: false, DebugMenuButtonWarningShown: false, ShowBSDApiResponse: false, AutoPlayAgain: false, BackgroundMatchmaking: false, BSDProxy: false, BSDApiUseAltHost: null, BattleEndInstantExit: true, BattleTextChat: false, BetterRange: false, ChromaticName: false, ColoredDamage: true, DisablePinAnimation: false, DisableShake: false, DoNotShowBattleHighlight: false, EnemyTracer: false, EnforceBattleChatButton: true, EnforceOldFriendsList: false, ExtendedTrajectory: false, HitboxRenderer: false, TileGrid: false, FriendListOptimization: false, DisableSkins: false, DefaultEnvironments: false, HideBattleBlackBars: true, HideBattlingStatusFromOthers: false, HideHomeScreenText: false, HideSuperAim: true, HighlightLeonClone: false, InstantStarrDropOpening: false, LegacyBackgrounds: false, LegacyNames: false, OldGlowbertName: false, ShamePlayersWithThumbsdownPin: false, SharedBackground: false, ShowAutoPlayAgainRadioButton: false, ShowBattleCameraButton: false, ShowSpectateButton: false, ShowBattleConnectionIndicator: false, ShowDPS: false, ShowCharactersInNames: false, ShowEnemyAmmoStatus: true, ShowTrophiesAboveHead: true, ShowFPSCounter: false, ShowFastPlayAgainButton: true, ShowFriendlyRoomOpponents: true, ShowAllianceMembersInBattle: false, ShowBlacklistedPlayersInBattle: false, ShowLaserLogs: true, ShowMuteButton: false, ShowOwnPlayerCoordinates: false, ShowSkinNamesInProfile: false, AllyRespawnTimer: true, HighlightDuoQuizAnswers: true, SlowMode: false, SoundMuted: false, TeamChatAnticensor: false, UseLowResGraphics: false, GfxQualityLevel: 3, MemQualityLevel: 3, WasBattleServerChanged: false, WasProxyReset: false, LocationThemeOverrides: {}, SkinOverrides: {}, CustomMods: [], BSDPlusKeys: [], OutlineColor: [0, 0, 0, 100], RandomLocalization: false, ShowTidKeys: false, RandomThemeMask: [false, false, false], PlayerNameOverride: "", CustomThemeName: "", FogType: "", KillEffectType: "", ParticleAnimationDisabled: false, ParticleFileName: "", ParticleExportName: "", ParticleStyle: "", ParticleCount: 200, ParticleScale: 100, ParticleSpeed: 500, UseBattleProxy: false, RegionId: -1, Font: -1 };
Config.PatchNotes = { "66.263-1": { EN: "Update!", RU: "Обновление!" } };
Config.updatedItems = [];

var AAssetManager_instanceAddr = Libg.offset(19833352, 0);
var androidRootDirStringObjectAddr = Libg.offset(19875176, 0);

class FileManager {
    static get rootDirPath() {
        if (this._rootDir === "") {
            if (Process.platform == "darwin") {
                this._rootDir = Process.getHomeDir() + "/Documents/updated";
            } else {
                this._rootDir = StringObject.read(androidRootDirStringObjectAddr);
            }
        }
        return this._rootDir;
    }
    static set rootDirPath(value) {
        this._rootDir = value;
        return;
    }
    static init() {
        if (this.rootDirPath == null) {
            return;
        }
        if (this.rootDirPath.endsWith("/")) {
            this.rootDirPath = this.rootDirPath.substring(0, this.rootDirPath.length - 1);
        }
        if (Process.platform === "darwin") {
            this.saveDirPath = "".concat(this.rootDirPath.replace("/updated", ""), "/saved");
        } else {
            this.saveDirPath = "".concat(this.rootDirPath, "/save");
        }
        this.logFilePath = "".concat(this.saveDirPath, "/debugger_log.txt");
        this.modSaveFilePath = "".concat(this.saveDirPath, "/bsd_save.json");
        if (!this.isFilepath(this.saveDirPath)) {
            this.createDirectory(this.saveDirPath);
        }
        if (!this.isFilepath(this.modSaveFilePath)) {
            FileManager.updateConfigFile();
        }
        if (this.readFile(this.modSaveFilePath, "r") === "") {
            FileManager.updateConfigFile();
            return;
        }
    }
    static updateConfigFile() {
        this.writeToFile(this.modSaveFilePath, "w", Json.formatJSONString(Config.config));
        return;
    }
    static writeToFile(filepath, mode, content) {
        var fileToWrite = new File(filepath, mode);
        fileToWrite.write(content);
        return;
    }
    static readFile(filepath, mode = "text/html") {
        try {
            if (mode === "r") {
                return File.readAllText(filepath);
            }
            return File.readAllBytes(filepath);
        } catch (e) {
            if (mode === "r") {
                return "";
            }
            return new ArrayBuffer(0);
        }
    }
    static isFilepath(filepath) {
        return Libc.access(Memory.allocUtf8String(filepath), 0) === 0;
    }
    static createDirectory(path) {
        try {
            if (path === "") {
                return;
            }
            if (path === "/") {
                return;
            }
            var segments = path.split("/").filter(function (s) {
                return s.length > 0;
            });
            var current = path.startsWith("/") ? "/" : "";
            for (var seg of segments) {
                current = current + "/" + seg;
                if (!this.isFilepath(current)) {
                    Libc.mkdir(Memory.allocUtf8String(current), 504);
                }
            }
        } catch (e) {
        }
        return;
    }
    static readAAsset(path, mode = "text/html") {
        if (Process.platform == "darwin") {
            path = FileManager.getFilePath(path);
            if (!FileManager.isFilepath(path)) {
                if (mode === "r") {
                    return "";
                }
                return new ArrayBuffer(0);
            }
            if (mode === "r") {
                return File.readAllText(path);
            }
            return File.readAllBytes(path);
        }
        var e = AAsset.open(AAssetManager_instanceAddr.readPointer(), Memory.allocUtf8String(path), 0);
        if (!e.isNull()) {
            var aasset = AAsset.getLength64(e);
            var size = Libc.malloc(aasset);
            var buffer = AAsset.read(e, size, aasset);
            if (buffer > 0) {
                var bytesRead = size.readByteArray(buffer);
                Libc.free(size);
                if (mode === "r") {
                    var result = "";
                    var u8 = new Uint8Array(bytesRead);
                    for (var i = 0; i < u8.length; i++) {
                        result += String.fromCharCode(u8[i]);
                    }
                    return result;
                }
                return bytesRead;
            }
            AAsset.close(e);
            return;
        }
    }
    static getResourcePath() {
        if (this._resourcePath) {
            return this._resourcePath;
        }
        var mainModule = Process.getModuleByName("laser");
        var lastSlash = mainModule.path.lastIndexOf("/");
        if (lastSlash > 0) {
            this._resourcePath = mainModule.path.substring(0, lastSlash);
        } else {
            this._resourcePath = "";
        }
        return this._resourcePath;
    }
    static getFilePath(path) {
        if (Process.platform != "darwin") {
            return path;
        }
        var resPath = this.getResourcePath() + "/res/" + path;
        if (FileManager.isFilepath(resPath)) {
            return resPath;
        }
        return FileManager.rootDirPath + "/" + path;
    }
}
FileManager._rootDir = "";
FileManager._resourcePath = null;

var Settings_instanceAddr = Libg.offset(19920800, 0);
var Settings_getLastPlayedEventSlot = new NativeFunction(Libg.offset(8000172, 0), "int", ["pointer"]);
var Settings_getHeroSorting = new NativeFunction(Libg.offset(8000488), "int", []);
var Settings_setHeroSorting = new NativeFunction(Libg.offset(8000360), "void", ["pointer", "int"]);

class Settings {
    static getInstance() {
        return Settings_instanceAddr.readPointer();
    }
    static getLastPlayedEventSlot() {
        var instance = this.getInstance();
        if (instance.isNull()) {
            return 2;
        }
        return Settings_getLastPlayedEventSlot(instance);
    }
    static getHeroSorting() {
        return Settings_getHeroSorting();
    }
    static setHeroSorting(sorting) {
        var instance = this.getInstance();
        Settings_setHeroSorting(instance, sorting);
        return;
    }
}

var GameSettings_isSfxEnabled = new NativeFunction(Libg.offset(13502760, 0), "bool", ["pointer"]);
var GameSettings_isMusicEnabled = new NativeFunction(Libg.offset(13502312, 0), "bool", ["pointer"]);

class GameSettings {
    static patch() {
        Interceptor.replace(GameSettings_isSfxEnabled, new NativeCallback(function (self) {
            if (Config.config.SoundMuted) {
                return 0;
            }
            return GameSettings_isSfxEnabled(self);
        }, "bool", ["pointer"]));
        Interceptor.replace(GameSettings_isMusicEnabled, new NativeCallback(function (self) {
            if (Config.config.SoundMuted) {
                return 0;
            }
            return GameSettings_isMusicEnabled(self);
        }, "bool", ["pointer"]));
        return;
    }
}

class LobbyInfo {
    constructor(page) {
        this.x = 120;
        this.y = 90;
        this.fontSize = 14;
        this.useFontOutline = true;
        this.color = 0xffffffff;
        var popoverTextLeftClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var textField = popoverTextLeftClip.getTextFieldByName("text");
        if (BSDPlusManager.isBSDPlusEnabled) {
            var gradient = LogicDataTables.getDataById(LogicDataTables.table.ColorGradients, 1);
            var bling = BlingTextField.create(popoverTextLeftClip, "text", 0, gradient);
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
        HomeScreen.getHomePage().getMovieClip().addChild(this.textField);
        return;
    }
    static toggle(state) {
        this.textField.visibility = state;
        return;
    }
    static setText(text) {
        this.textField.text = text;
        return;
    }
    static update() {
        if (!HomeScreen.lobbyInfo) {
            return;
        }
        this.toggle(!Config.config.HideHomeScreenText);
        var modName = "BSD Brawl";
        if (!Config.config.HideHomeScreenText) {
            LobbyInfo.text = "".concat(modName, " v", ModProperties.version, " (", ModProperties.environment, ")\nTelegram: @bsdatamines\n", Localisation.getString("BestPing"), ": ", Latency.parseBestLatency());
            if (GetBSDOnlineMessage.lastOnline !== 0) {
                LobbyInfo.text = LobbyInfo.text + "\n".concat(Localisation.getString("CurrentModOnline"), ": ", GetBSDOnlineMessage.lastOnline);
            }
        }
        return;
    }
}
LobbyInfo.text = "";

var SCIDConfig_setStringAddr = Libg.offset(7836276, 0);
var SCIDConfig_setString = new NativeFunction(SCIDConfig_setStringAddr, "void", ["pointer", "pointer", "pointer"]);

class SCIDConfig {
    constructor(instance) {
        this.instance = instance;
        return;
    }
    isNull() {
        return this.instance.isNull();
    }
    setString(key, value) {
        return SCIDConfig_setString(this.instance, Memory.allocUtf8String(key), Memory.allocUtf8String(value));
    }
    setUrl(url) {
        return;
    }
    patch() {
        return;
    }
}

var GameSCIDManager_instanceAddr = Libg.offset(19944160, 0);
var GameSCIDManager_logOut = new NativeFunction(Libg.offset(11628368, 0), "void", ["pointer"]);
var GameSCIDManager_logOutFromAllDevices = new NativeFunction(Libg.offset(11628456, 0), "void", ["pointer"]);
var GameSCIDManager_init = new NativeFunction(Libg.offset(11610388, 0), "void", ["pointer"]);
var GameSCIDManager_debugClearAllData = new NativeFunction(Libg.offset(11618300, 0), "void", ["pointer", "pointer"]);
var SCIDManager_setEnvironment = new NativeFunction(Libg.offset(7812276, 0), "void", ["pointer", "pointer"]);
var GameSCIDManager_sm_forceConnectToProd = Libg.offset(19944168, 0);
var scidConfigOffset = LogicMemory.offset(40);

class GameSCIDManager {
    static getInstance() {
        return GameSCIDManager_instanceAddr.readPointer();
    }
    static getSCIDConfig() {
        var mgr = GameSCIDManager.getInstance();
        if (mgr.isNull()) {
            return NULL;
        }
        return mgr.add(scidConfigOffset).readPointer();
    }
    static logOut() {
        var mgr = GameSCIDManager.getInstance();
        if (mgr.isNull()) {
            return;
        }
        GameSCIDManager_logOut(mgr);
        return;
    }
    static logOutFromAllDevices() {
        var mgr = GameSCIDManager.getInstance();
        if (mgr.isNull()) {
            return;
        }
        GameSCIDManager_logOutFromAllDevices(mgr);
        return;
    }
    static init() {
        var mgr = GameSCIDManager.getInstance();
        if (mgr.isNull()) {
            return;
        }
        GameSCIDManager_init(mgr);
        return;
    }
    static debugClearAllData(dir) {
        var mgr = GameSCIDManager.getInstance();
        if (mgr.isNull()) {
            return;
        }
        GameSCIDManager_debugClearAllData(mgr, Memory.allocUtf8String(dir));
        return;
    }
    static isForceProd() {
        return GameSCIDManager_sm_forceConnectToProd.readU8() !== 0;
    }
    static setForceProd(value) {
        if (value) {
            GameSCIDManager_sm_forceConnectToProd.writeU8(1);
        } else {
            GameSCIDManager_sm_forceConnectToProd.writeU8(0);
        }
        return;
    }
    static setEnvironment(env) {
        var mgr = GameSCIDManager.getInstance();
        if (mgr.isNull()) {
            return;
        }
        SCIDManager_setEnvironment(mgr, Memory.allocUtf8String(env));
        return;
    }
}
