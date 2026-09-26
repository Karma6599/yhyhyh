var initializationRegistry = Symbol.for("BSD.initializedEngineModules");

class InitializationGuard {
    static tryBegin(engineBase) {
        var runtime = globalThis;
        if (runtime[initializationRegistry] == null) {
            runtime[initializationRegistry] = new Set();
        }
        var initializedModules = runtime[initializationRegistry];
        var key = engineBase.toString();
        if (initializedModules.has(key)) {
            return false;
        }
        initializedModules.add(key);
        return true;
    }
}

var Application_openURL = new NativeFunction(Libg.offset(7613460, 0), "void", ["pointer"]);
var CopyString = new NativeFunction(Libg.offset(7614888, 0), "void", ["pointer"]);
var NativePostDialog = new NativeFunction(Libg.offset(7370884, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);

class Application {
    static copyString(str) {
        CopyString(Memory.allocUtf8String(str));
        return;
    }
    static openUrl(url) {
        Application_openURL(Memory.allocUtf8String(url));
        return;
    }
    static openShareDialog(text, title = "Share") {
        NativePostDialog(Memory.allocUtf8String(text), Memory.allocUtf8String(title), NULL, NULL);
        return;
    }
}

var SessionStatics_setMatchContext = new NativeFunction(Libg.offset(14001616, 0), "void", ["pointer", "int", "pointer", "int", "int", "pointer", "pointer"]);
var sessionStaticsGlobal = Libg.offset(19952456, 0);

class SessionStatics {
    static getInstance() {
        return sessionStaticsGlobal;
    }
    static setMatchContext(context) {
        return;
    }
}

var GameStateManager_getInstance = new NativeFunction(Libg.offset(13622772, 0), "pointer", []);
var GameStateManager_changeToStateOffset = Libg.offset(13625944, 0);
var GameStateManager_changeToState = new NativeFunction(GameStateManager_changeToStateOffset, "void", ["pointer"]);
var GameStateManager_clearGameData = new NativeFunction(Libg.offset(13623212, 0), "void", ["pointer"]);
var currentStateOffset = LogicMemory.offset(72);
var currentStateTypeOffset = LogicMemory.offset(80);
var pendingStateTypeOffset = LogicMemory.offset(84);
var playerAvatarOffset = LogicMemory.offset(96);

var GameStateId = {};

class GameStateManager {
    static getInstance() {
        return GameStateManager_getInstance();
    }
    static changeState(stateId) {
        var instance = this.getInstance();
        if (instance.isNull()) {
            return;
        }
        instance.add(pendingStateTypeOffset).writeS32(stateId);
        GameStateManager_changeToState(instance);
        return;
    }
    static changeToState() {
        return;
    }
    static clearGameData() {
        var instance = this.getInstance();
        if (instance.isNull()) {
            return;
        }
        GameStateManager_clearGameData(instance);
        return;
    }
    static getPlayerAvatar() {
        return new LogicClientAvatar(this.getInstance().add(playerAvatarOffset).readPointer());
    }
    static getCurrentState() {
        var instance = this.getInstance();
        if (instance.isNull()) {
            return NULL;
        }
        return instance.add(currentStateOffset).readPointer();
    }
    static getCurrentStateId() {
        var instance = this.getInstance();
        if (instance.isNull()) {
            return null;
        }
        return instance.add(currentStateTypeOffset).readS32();
    }
    static isInState(stateId) {
        return this.getCurrentStateId() === stateId;
    }
}

var GameApp_getSupportedDisplayModes = Libg.offset(6781476, 0);
var GameApp_setDisplayMode = Libg.offset(7667792, 0);
var displayModesEndOffset = LogicMemory.offset(8);
var displayModeRefreshRateOffset = LogicMemory.offset(8);
var displayModeIdOffset = LogicMemory.offset(12);
var DISPLAY_MODE_SIZE = 16;

var Display = {};

class GameApp {
    static patch() {
        if (Process.platform === "darwin") {
            return;
        }
        return;
    }
}

var ConsentUtil_isUsercentricsEnabled = new NativeFunction(Libg.offset(6775080, 0), "bool", []);
var DestroyGame = new NativeFunction(Libg.offset(7455904, 0), "void", []);
var GameMain_draw = Libg.offset(7718808, 0);
var GameMain_getRand = new NativeFunction(Libg.offset(7726596, 0), "int", ["int"]);
var GameMain_initFontsBool = Libg.offset(7714664, 0);
var GameMain_instanceAddr = Libg.offset(19914856, 0);
var GameMain_isLowEndDevice = Libg.offset(7695868, 0);
var GameMain_loadAsset = new NativeFunction(Libg.offset(7722496, 0), "void", ["pointer", "int"]);
var GameMain_openAppRateDialog = Libg.offset(7724664, 0);
var GameMain_openAppRateDialogFn = new NativeFunction(GameMain_openAppRateDialog, "void", ["pointer"]);
var GameMain_reloadGameInternal = Libg.offset(7713392, 0);
var GameMain_setAccountId = Libg.offset(7725036, 0);
var GameMain_setHibernate = new NativeFunction(Libg.offset(7719972, 0), "void", ["pointer", "bool"]);
var GameMain_showIAPInfo = Libg.offset(7722104, 0);
var GameMain_showNativeDialog = new NativeFunction(Libg.offset(7714816, 0), "void", ["pointer", "int", "int", "pointer", "pointer", "pointer"]);
var GameMain_showMaintenanceDialog = new NativeFunction(Libg.offset(7726612, 0), "void", ["pointer", "int", "pointer", "int"]);
var GameMain_updateDeviceProfile = Libg.offset(7694192, 0);
var overlayContainerOffset = LogicMemory.offset(128);
var hibernateStateOffset = LogicMemory.offset(232);
var needReloadGameOffset = LogicMemory.offset(257);
var accountIdOffset = LogicMemory.offset(448);
var gfxCapabilityOffset = LogicMemory.offset(136);
var memoryCapabilityOffset = LogicMemory.offset(140);
var renderDeltaTimeOffset = LogicMemory.offset(152);
var useOnlyLowresAssetsAddr = Libg.offset(19854356, 0);
var slowModeAddr = Libg.offset(19914776, 0);
var GameMain_setSlowMode = Libg.offset(7725648, 0);

class GameMain {
    static get hibernateState() {
        return Boolean(this.getInstance().add(hibernateStateOffset).readU8());
    }
    static getInstance() {
        return GameMain_instanceAddr.readPointer();
    }
    static getOverlayContainer() {
        var instance = GameMain.getInstance();
        if (instance.isNull()) {
            return NULL;
        }
        return instance.add(overlayContainerOffset).readPointer();
    }
    static getAccountId() {
        return new LogicLong(this.getInstance().add(accountIdOffset).readPointer());
    }
    static loadAsset(assetName) {
        return;
    }
    static showNativeDialog(type, errorCode = 0, title = "", message = "", button = "") {
        return;
    }
    static showMaintenanceDialog(mode, message, secondsUntilEnd) {
        GameMain_showMaintenanceDialog(GameMain.getInstance(), mode, StringObject.create(message), secondsUntilEnd);
        return;
    }
    static reloadGame() {
        new NativeFunction(GameMain_reloadGameInternal, "void", [])();
        return;
    }
    static triggerAppReview() {
        GameMain.reviewForceOnce = true;
        return;
    }
    static applyGraphicsConfig() {
        var lowResForced = Config.config.UseLowResGraphics;
        if (lowResForced) {
            useOnlyLowresAssetsAddr.writeU8(1);
        }
        var instance = this.getInstance();
        if (instance.isNull()) {
            return;
        }
        if (lowResForced) {
            instance.add(gfxCapabilityOffset).writeS32(0);
            instance.add(memoryCapabilityOffset).writeS32(0);
            return;
        }
        instance.add(gfxCapabilityOffset).writeS32(Config.config.GfxQualityLevel);
        instance.add(memoryCapabilityOffset).writeS32(Config.config.MemQualityLevel);
        return;
    }
    static applySlowMode(state) {
        if (state) {
            slowModeAddr.writeU8(1);
        } else {
            slowModeAddr.writeU8(0);
        }
        return;
    }
    static isSlowMode() {
        return slowModeAddr.readU8() !== 0;
    }
    static toggleSlowMode() {
        Config.config.SlowMode = !GameMain.isSlowMode();
        GameMain.applySlowMode(Config.config.SlowMode);
        return Config.config.SlowMode;
    }
    static setHibernate(state) {
        GameMain_setHibernate(GameMain.getInstance(), state);
        return;
    }
    static destroy(timeout) {
        setTimeout(function () {
            DestroyGame();
        }, timeout);
        return;
    }
    static getRand(range) {
        return GameMain_getRand(range);
    }
    static openModTelegram(self, index) {
        if (index === 0) {
            Application.openUrl("https://t.me/bsdatamines");
        }
        return;
    }
    static patch() {
        Interceptor.attach(GameMain_reloadGameInternal, {
            onEnter(args) {
                EDebugger.destroy();
                FPSCounter.toggle(false);
                DebugMenuButton.destroy();
                HomeScreen.isEntered = false;
                return;
            }
        });
        Interceptor.attach(GameMain_draw, {
            onEnter(args) {
                this.deltaTime = args[0].add(renderDeltaTimeOffset).readFloat();
                if (!GameMain.isJniReady) {
                    GameMain.isJniReady = true;
                }
                return;
            },
            onLeave(retval) {
                StringTable.updateOverlays();
                MessageManager.updateMatchmakingButton();
                CustomButton.updateHoldListeners();
                EDebugger.update();
                if (CombatHUD.battleChat != null) {
                    if (CombatHUD.battleChat.isCreated()) {
                        CombatHUD.battleChat.update();
                    }
                }
                FPSCounter.update();
                BattleDebugOverlay.update();
                BattleNetStatsOverlay.update();
                UiInspector.update();
                Watermark.update();
                SmoothHud.update();
                HomeScreen.update();
                GUI.update(this.deltaTime);
                BSDPlusManager.updateActivationTimer();
                if (HomeScreen.isEntered) {
                    if (Utils.getCurrentTime() > GameMain.lastKeepAliveSentAt + GameMain.KEEP_ALIVE_INTERVAL_SEC) {
                        GameMain.lastKeepAliveSentAt = Utils.getCurrentTime();
                        BSDMessageManager.sendMessage(new BSDKeepAliveMessage()).then(function (response) {
                            var parsedResponseData, chaCha20, decryptedResponse, parsedResponse;
                            if (response.statusCode === 200) {
                                if (!response.json) {
                                    return;
                                }
                            }
                            parsedResponseData = response.json;
                            chaCha20 = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
                            decryptedResponse = CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
                            parsedResponse = JSON.parse(decryptedResponse);
                            GetBSDOnlineMessage.lastOnline = parsedResponse.online;
                            return;
                        });
                    }
                }
                if (TempValueHolder.getAndForget("CALL_CMP")) {
                    if (ModProperties.isFeatureAvailableInThisBuild(EExperimentalFeature.CATEGORIES)) {
                        var character = TempValueHolder.getAndForget("CMP_CHARACTER");
                        var popup = new CategoryManagementPopup(character);
                        GUI.showPopup(popup, true, true, true);
                        return;
                    }
                }
            }
        });
        Interceptor.replace(GameMain_showNativeDialog, new NativeCallback(function (self, NativeDialogType, ErrorCode, PString1, PString2, PString3) {
            EDebugger.addMessage(EDebugger.INFO, "NativeDialog Type = ".concat(NativeDialogType.toString()));
            if (NativeDialogType === 5) {
                NativeDialog.show(Localisation.getString("UpdateNativeDialogTitle"), Localisation.getString("UpdateNativeDialogDesc"), Localisation.getString("UpdateNativeDialogOurSocialButton"), "", "", GameMain.modUpdateNativeDialogListener.instance);
                return;
            }
            if (NativeDialogType === 31) {
                NativeDialog.show(StringTable.getString("TID_ERROR_POP_UP_LOGIN_BLOCKED_TITLE"), StringTable.getString("TID_LOGIN_RESTRICTED_BY_LOCATION"), "OK", "", Localisation.getString("EnableProxy"), BSDProxy.proxyNativeDialogListener.instance);
                return;
            }
            GameMain_showNativeDialog(self, NativeDialogType, ErrorCode, PString1, PString2, PString3);
            return;
        }, "void", ["pointer", "int", "int", "pointer", "pointer", "pointer"]));
        Interceptor.replace(GameMain_showIAPInfo, new NativeCallback(function () {
            return 0;
        }, "int", []));
        Interceptor.replace(ConsentUtil_isUsercentricsEnabled, new NativeCallback(function () {
            if (Process.platform === "darwin") {
                return 0;
            }
            return 3;
        }, "bool", []));
        Interceptor.replace(GameMain_openAppRateDialog, new NativeCallback(function (self) {
            if (GameMain.reviewForceOnce) {
                GameMain.reviewForceOnce = false;
                GameMain_openAppRateDialogFn(self);
                return;
            }
        }, "void", ["pointer"]));
        Interceptor.attach(GameMain_setAccountId, {
            onLeave() {
                if (ModProperties.environment === "plus") {
                    if (!BSDPlusManager.isBSDPlusEnabled) {
                        if (!BSDPlusManager.activationCaption) {
                            BSDPlusManager.showActivationCaption();
                            return;
                        }
                    }
                }
            }
        });
        Interceptor.attach(GameMain_initFontsBool, function () {
            var context = this.context;
            context.x21 = ptr(1);
            return;
        });
        Interceptor.attach(GameMain_isLowEndDevice, {
            onLeave(retval) {
                return;
            }
        });
        Interceptor.attach(GameMain_updateDeviceProfile, {
            onLeave() {
                GameMain.applyGraphicsConfig();
                return;
            }
        });
        return;
    }
}
if (ModProperties.environment == "dev") {
    GameMain.KEEP_ALIVE_INTERVAL_SEC = 10;
} else {
    GameMain.KEEP_ALIVE_INTERVAL_SEC = 60;
}
GameMain.lastKeepAliveSentAt = Utils.getCurrentTime();
GameMain.isJniReady = false;
GameMain.reviewForceOnce = false;
GameMain.modUpdateNativeDialogListener = new INativeDialogListener(GameMain.openModTelegram);

var contentUpdateProgressOffset = Libg.offset(13651684, 0);
var InitState_initFonts = Libg.offset(13655184, 0);
var InitState_showMaintenancePopup = new NativeFunction(Libg.offset(13652776, 0), "void", ["pointer", "int", "pointer", "int"]);

class InitState {
    static showMaintenancePopup(stateInstance, mode, message, secondsUntilEnd) {
        if (stateInstance.isNull()) {
            return;
        }
        InitState_showMaintenancePopup(stateInstance, mode, StringObject.create(message), secondsUntilEnd);
        return;
    }
    static patch() {
        var updateProgress = -1;
        var contentLoadingTimeout;
        Interceptor.attach(contentUpdateProgressOffset, function () {
            updateProgress = this.context.x21.toInt32();
            if (contentLoadingTimeout) {
                return;
            }
            contentLoadingTimeout = setTimeout(function () {
                if (updateProgress < 5) {
                    GameMain.reloadGame();
                    InitState.useGameAssetsToHost = true;
                    return;
                }
            }, 3000);
            return;
        });
        Interceptor.attach(InitState_initFonts, {
            onEnter() {
                return;
            },
            onLeave() {
                return;
            }
        });
        return;
    }
}
InitState.useGameAssetsToHost = false;

function LaserPatch() {
    ClientPatch();
    return;
}

function ClientPatch() {
    GamePatch();
    return;
}

function GameMainPatch() {
    setInterval(function () {
        FPSCounter.bySecondTrigger = true;
        return;
    }, 1000);
    EnvOverride.patch();
    SentryFilter.patch();
    AllyRespawnTimer.patch();
    ReplayUuidLogger.patch();
    ReplayStringIdLogger.patch();
    SharedReplay.patch();
    BattleLogShareButton.patch();
    GUI.patch();
    return;
}

function GamePatch() {
    FriendsPatch();
    GUIPatch();
    GameMainPatch();
    GameObjectPatch();
    NetworkPatch();
    Renderer3DPatch();
    ScreenPatch();
    StatePatch();
    StreamPatch();
    TextPatch();
    return;
}

function FriendsPatch() {
    PlayerInfo.patch();
    ProfileSkinNames.patch();
    PlayerProfile.patch();
    PlayerDisplayData.patch();
    return;
}

function GameObjectPatch() {
    Character.patch();
    return;
}

function NetworkPatch() {
    MessageManager.patch();
    ServerConnection.patch();
    SCIDConfig.patch();
    LaserBoxManager.patch();
    return;
}

function MessagingPatch() {
    Messaging.patch();
    LoginMessage.patch();
    LoginOkMessage.patch();
    ServerHelloMessage.patch();
    PlayerStatusMessage.patch();
    TeamChatMessage.patch();
    LatencyTestResultMessage.patch();
    LoginFailedMessage.patch();
    StartLoadingMessage.patch();
    return;
}

function GUIPatch() {
    CombatHUD.patch();
    EmoteIcon.patch();
    BattleIntro.patch();
    UiInspector.patch();
    return;
}

function PopupPatch() {
    PopupBase.patch();
    EventDetailsPopup.patch();
    HeroScreenPopup.patch();
    SkinSelectorPopup.patch();
    RewardOpeningPopup.patch();
    BattleEndPopup.patch();
    MapPreview.patch();
    FamePopup.patch();
    MoviePlayerPopup.patch();
    return;
}

function Renderer3DPatch() {
    CameraParameters.patch();
    GLOverlay.patch();
    HitboxRenderer.patch();
    EnemyTracer.patch();
    AttackRangeIndicator.patch();
    TileGridOverlay.patch();
    return;
}

function ScreenPatch() {
    HomePatch();
    BattlePatch();
    return;
}

function StreamPatch() {
    AllianceEventStreamEntry.patch();
    ChatStreamEntry.patch();
    TeamStream.patch();
    return;
}

function UtilsPatch() {
    SkinHelper.patch();
    HashTagCodeGenerator.patch();
    if (Process.platform !== "darwin") {
        LogicDebugButtonMessage.patch();
        return;
    }
}

function HomePatch() {
    TeamManager.patch();
    TeamPopup.patch();
    SettingsScreen.patch();
    HomeScreen.patch();
    Shop.patch();
    TeamEntry.patch();
    TeamMemberItem.patch();
    SnowFall.patch();
    HomePage.patch();
    return;
}

function BattlePatch() {
    BattleScreen.patch();
    ClientInputManager.patch();
    BattleEndReplayScreen.patch();
    TeamMemberEntry.patch();
    return;
}

function StatePatch() {
    return;
}

function TextPatch() {
    TextField.patch();
    DecoratedTextField.patch();
    StringTable.patch();
    return;
}

function LogicPatch() {
    LogicDataPatch();
    return;
}

function LogicBattlePatch() {
    return;
}

function LogicDataPatch() {
    LogicCharacterData.patch();
    LogicClientGlobals.patch();
    LogicClientHome.patch();
    LogicConfData.patch();
    LogicDailyData.patch();
    LogicDataTables.patch();
    LogicEffectData.patch();
    LogicLocationData.patch();
    LogicLocationThemeData.patch();
    LogicSkillData.patch();
    LogicSkinConfData.patch();
    return;
}

function TitanPatch() {
    return;
}

function TitanClientPatch() {
    CommonPatch();
    return;
}

function CommonPatch() {
    HTTPPatch();
    Debugger.patch();
    AnalyticEvent.patch();
    Display.Mode.patch();
    GameApp.patch();
    return;
}

function HTTPPatch() {
    return;
}

function SrcPatch() {
    return;
}

function SuitcaseInit() {
    return;
}

function LogInfo() {
    var args;
    return;
}

function Init() {
    var error;
    if (!InitializationGuard.tryBegin(Libg.libgBeginOffset)) {
        return;
    }
    Logcat.logInfo("--- NEW SESSION ---");
    try {
        new Logcat();
        Config.init();
        ExceptionWorker.init();
        Attestation.patch();
        EccDigest.patch();
        ApkSignature.patch();
        TamperStatus.patch();
        LoadingScreen.patch();
        Localisation.init();
        LogicDataTableResource.patch();
        AndroidArm64Compatibility.patch();
        CallListener.patch();
        if (Config.useDebugLogging) {
            CommandLogger.patch();
        }
        LaserPatch();
        SuitcaseInit();
        Breadcrumbs.initCrashDebug();
        Logcat.logInfo("Successfully initialized");
    } catch (error) {
        Logcat.logError("Error occurred while initializing");
        EDebugger.addMessage(EDebugger.ERROR, "Error occurred while initializing");
        ExceptionWorker.logException("INITERROR", error.stack);
        if (Config.useDebugLogging) {
            Logcat.logError(error.stack);
        }
        throw error;
    }
    return;
}

Init();
