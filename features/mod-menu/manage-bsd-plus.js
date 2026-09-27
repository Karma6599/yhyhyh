var EButtonID;
(function (EButtonID) {
    EButtonID["TELEGRAM"] = 0;
    EButtonID[0] = "TELEGRAM";
    EButtonID["PURCHASE_BSDP"] = 1;
    EButtonID[1] = "PURCHASE_BSDP";
})(EButtonID || (EButtonID = {}));

class BSDPlusManagementPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("ManageBSDPlus_Title"), ExportName: "country_popup" });
        this.isBSDPlusButtonUpdated = false;
        this.currentButtons = [];
        this.adjustPopupHeaderButtons("bsdp_management");
        this.createItems();
    }

    createItems() {
        this.container.clearEntries();
        var popoverTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var textField = this.getNewTextField();
        if (!BSDPlusManager.BSDPlusManager.expired) {
            var gradient = LogicDataTables.LogicDataTables.getDataById(LogicDataTables.LogicDataTables.table.ColorGradients, 1);
            var bling = BlingTextField.BlingTextField.create(popoverTextLeftClip, "text", 0, gradient);
            textField = bling;
        }
        textField.text = Localisation.Localisation.getString("ManageBSDPlus_Status_" + !BSDPlusManager.BSDPlusManager.expired);
        textField.align = 2;
        textField.x = -120;
        textField.y = -170;
        textField.fontSize = 32;
        textField.fontOutline = true;
        textField.visibility = true;
        this.haveBSDPlusTextField = textField;
        this.addChild(textField);
        if (!BSDPlusManager.BSDPlusManager.expired) {
            textField = this.getNewTextField();
            textField.text = Localisation.Localisation.getString("ManageBSDPlus_TillEnds").replace("{time}", LogicTime.LogicTime.humanizeTime(BSDPlusManager.BSDPlusManager.expiresIn));
            textField.align = 2;
            textField.x = -120;
            textField.y = -120;
            textField.fontSize = 24;
            textField.fontOutline = true;
            textField.visibility = true;
            textField.color = 4294967295.0;
            this.bsdPlusCountdownTextField = textField;
            this.addChild(textField);
        }
        var telegramTextField = this.getNewTextField();
        telegramTextField.text = Localisation.Localisation.getString("ManageBSDPlus_AccountLink_" + BSDPlusManager.BSDPlusManager.isTelegramLinked()).replace("{telegram}", BSDPlusManager.BSDPlusManager.telegramToString());
        telegramTextField.align = 34;
        telegramTextField.x = -120;
        telegramTextField.y = -80;
        telegramTextField.fontSize = 24;
        telegramTextField.fontOutline = true;
        telegramTextField.visibility = true;
        telegramTextField.color = 4281569516.0;
        this.addChild(telegramTextField);
        var buttons = this.getButtons();
        this.currentButtons = buttons;
        buttons.forEach((b) => this.container.addEntry(b));
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(buttons.length, naviHeight * 4, 0, 0, 0, 0, -1);
    }

    getNewTextField() {
        var popoverTextLeftClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        return popoverTextLeftClip.getTextFieldByName("text");
    }

    getButtons() {
        var buttonsArr = [];
        var telegramButton = new UniItem.UniItem(Localisation.Localisation.getString("ManageBSDPlus_LinkButton_" + BSDPlusManager.BSDPlusManager.isTelegramLinked()));
        if (BSDPlusManager.BSDPlusManager.isTelegramLinked()) {
            if (BSDPlusManager.BSDPlusManager.telegramData.unlinkingInProcess) {
                telegramButton.setText(Localisation.Localisation.getString("ManageBSDPlus_LinkButton_cancel"));
            }
        }
        telegramButton.id = EButtonID.TELEGRAM;
        telegramButton.setCustomButtonListener(this.onTelegramButtonPressed.bind(this));
        buttonsArr.push(telegramButton);
        var purchaseBsdPlusButton = new UniItem.UniItem(Localisation.Localisation.getString("ManageBSDPlus_PurchaseButton_" + BSDPlusManager.BSDPlusManager.expired));
        purchaseBsdPlusButton.id = EButtonID.PURCHASE_BSDP;
        purchaseBsdPlusButton.setCustomButtonListener(this.onPurchaseBSDPlusButtonPressed.bind(this));
        buttonsArr.push(purchaseBsdPlusButton);
        return buttonsArr;
    }

    getTelegramButton() {
        return this.currentButtons.find(function (e) {
            return e.id === EButtonID.TELEGRAM;
        });
    }

    getPurchaseBSDPlusButton() {
        return this.currentButtons.find(function (e) {
            return e.id === EButtonID.PURCHASE_BSDP;
        });
    }

    onTelegramButtonPressed(self, buttonPtr) {
        if (!BSDPlusManager.BSDPlusManager.telegramData) {
            return;
        }
        if (BSDPlusManager.BSDPlusManager.telegramData.unlinkingInProcess) {
            return;
        }
        BSDMessageManager.BSDMessageManager.sendMessage(new UnlinkTelegramAccountMessage.UnlinkTelegramAccountMessage());
    }

    onPurchaseBSDPlusButtonPressed(self, buttonPtr) {
        var tag = PlayerInfo.PlayerInfo.tag;
        if (!tag) {
            tag = "";
        }
        Application.Application.openUrl("https://t.me/bsdbrawlbot?start=tag".concat(tag));
    }

    updateTelegramButton() {
        var button = this.getTelegramButton();
        if (!button) {
            return;
        }
        if (!BSDPlusManager.BSDPlusManager.telegramData) {
            return button.setText(Localisation.Localisation.getString("ManageBSDPlus_LinkButton_false"));
        }
        if (BSDPlusManager.BSDPlusManager.telegramData.unlinkingInProcess) {
            return button.setText(Localisation.Localisation.getString("ManageBSDPlus_LinkButton_cancel"));
        }
        if (BSDPlusManager.BSDPlusManager.telegramData) {
            return button.setText(Localisation.Localisation.getString("ManageBSDPlus_LinkButton_true"));
        }
    }

    onAccountLinked() {
        this.close();
        var managementPopup = new BSDPlusManagementPopup();
        GUI.GUI.showPopup(managementPopup, true, true, false);
    }

    updateElements(deltaTime) {
        if (!BSDPlusManager.BSDPlusManager.expired) {
            if (this.bsdPlusCountdownTextField) {
                this.bsdPlusCountdownTextField.text = Localisation.Localisation.getString("ManageBSDPlus_TillEnds").replace("{time}", LogicTime.LogicTime.humanizeTime(BSDPlusManager.BSDPlusManager.expiresIn));
            }
            return;
        }
        if (this.bsdPlusCountdownTextField) {
            this.bsdPlusCountdownTextField.text = "";
        }
        if (!this.isBSDPlusButtonUpdated) {
            var bsdPlusButton = this.getPurchaseBSDPlusButton();
            this.isBSDPlusButtonUpdated = true;
            if (bsdPlusButton != null) {
                bsdPlusButton.setText(Localisation.Localisation.getString("ManageBSDPlus_PurchaseButton_true"));
            }
        }
        this.haveBSDPlusTextField.text = Localisation.Localisation.getString("ManageBSDPlus_Status_false");
    }
}

var ACTIVATION_TIMEOUT_SECONDS = 80;
var NS_PER_SECOND = 1000000000;
var BSDPlusManager_getNativeTime = new NativeFunction(Libg.Libg.offset(7483504, 0), "uint64", []);

class BSDPlusManager {
    static isTelegramLinked() {
        return BSDPlusManager.telegramData !== undefined;
    }

    static telegramToString() {
        var tdata = BSDPlusManager.telegramData;
        if (tdata) {
            return "".concat(tdata.name, " (", tdata.id, ")");
        }
        return "";
    }

    static decrypt(str, key) {
        var result = "";
        try {
            var decoded = BASE64.BASE64.decode(str);
            for (var i = 0; i < decoded.length; i++) {
                if (decoded[i]) {
                    result = result + String.fromCharCode((decoded[i] - key.charCodeAt(i % key.length)) % 255);
                }
            }
            return result;
        } catch (e) {
            return "";
        }
    }

    static encrypt(plain, key) {
        try {
            var modified = [];
            for (var i = 0; i < plain.length; i++) {
                modified.push((plain.charCodeAt(i) + key.charCodeAt(i % key.length)) % 255);
            }
            return BASE64.BASE64.encode(modified);
        } catch (e) {
            return "";
        }
    }

    static compareCurrentAccount(enc) {
        var playerTagString = PlayerInfo.PlayerInfo.tag;
        var dec = BSDPlusManager.decrypt(enc, BSDPlusManager.KEY);
        return playerTagString === dec;
    }

    static verify(key) {
        if (!key.startsWith("~bsda") || BSDPlusManager.forceRevokedKeys.includes(key) || key.length < 9) {
            return BSDPlusManager.STATUSES.BAD_KEY;
        }
        var keyEncryptionKey = key.slice(5, 9);
        var keyBase = key.slice(9);
        var decrypted = BSDPlusManager.decrypt(keyBase, BSDPlusManager.encrypt(BSDPlusManager.NEWKEY, keyEncryptionKey));
        var keyParts = decrypted.split(":");
        if (keyParts.length !== 4) {
            return BSDPlusManager.STATUSES.BAD_KEY;
        }
        var tag = keyParts[0];
        var endTimestamp = keyParts[1];
        var type = keyParts[2];
        var crc32Code = keyParts[3];
        var playerTagString = PlayerInfo.PlayerInfo.tag;
        if (tag !== playerTagString) {
            return BSDPlusManager.STATUSES.WRONG_ACCOUNT;
        }
        if (isNaN(Number(endTimestamp))) {
            return BSDPlusManager.STATUSES.WRONG_TS;
        }
        if (type !== "1") {
            return BSDPlusManager.STATUSES.WRONG_TYPE;
        }
        keyParts.pop();
        if (crc32(keyParts.join("/")).toString(16) !== crc32Code) {
            return BSDPlusManager.STATUSES.CRC_VALIDATION_FAILED;
        }
        var endTimeStampInt = parseInt(endTimestamp);
        endTimeStampInt = endTimeStampInt + 23587200;
        if (endTimeStampInt < LoginOkMessage.LoginOkMessage.serverTime) {
            return BSDPlusManager.STATUSES.EXPIRED;
        }
        BSDPlusManager.EXPIRES_TS = endTimeStampInt;
        return BSDPlusManager.STATUSES.SUCCESS;
    }

    static showActivationCaption() {
        if (BSDPlusManager.activationCaption) {
            return;
        }
        var caption = MovieClip.MovieClip.getTextFieldByName(StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left").instance, "text");
        caption.x = 200;
        caption.y = 5;
        caption.fontOutline = true;
        caption.color = 4294951424.0;
        caption.fontSize = 25;
        caption.text = "Please activate BSD+: ".concat(ACTIVATION_TIMEOUT_SECONDS);
        Stage.Stage.addChild(caption.instance);
        BSDPlusManager.activationCaption = caption;
        BSDPlusManager.activationStartedAtNs = null;
    }

    static get expired() {
        return BSDPlusManager.expiresIn <= 0;
    }

    static get expiresIn() {
        return BSDPlusManager.EXPIRES_TS - Math.floor(Date.now() / 1000);
    }

    static updateActivationTimer() {
        if (BSDPlusManager.activationKilled) {
            return;
        }
        if (!BSDPlusManager.activationCaption) {
            return;
        }
        if (BSDPlusManager.isBSDPlusEnabled) {
            Stage.Stage.removeChild(BSDPlusManager.activationCaption.instance);
            BSDPlusManager.activationCaption = null;
            return;
        }
        var gameTimeNs = BSDPlusManager_getNativeTime();
        if (gameTimeNs.equals(uint64(0))) {
            return;
        }
        if (!BSDPlusManager.activationStartedAtNs) {
            BSDPlusManager.activationStartedAtNs = gameTimeNs;
        }
        var diffNs = gameTimeNs.sub(BSDPlusManager.activationStartedAtNs).toNumber();
        var elapsedSeconds = Math.floor(diffNs / NS_PER_SECOND);
        var remaining = Math.max(0, ACTIVATION_TIMEOUT_SECONDS - elapsedSeconds);
        BSDPlusManager.activationCaption.text = "Please activate BSD+: ".concat(remaining);
        if (remaining <= 0) {
            BSDPlusManager.activationKilled = true;
            Libc.Libc.kill(Libc.Libc.getpid(), 15);
            LogicMemory.LogicMemory.clearBssSegment(0);
        }
    }

    static showBSDPlusOnlyNativeDialog() {
        return;
    }
}

BSDPlusManager.isBSDPlusEnabled = false;
BSDPlusManager.activationCaption = null;
BSDPlusManager.activationStartedAtNs = null;
BSDPlusManager.activationKilled = false;
BSDPlusManager.KEY = "270MNG0IX8";
BSDPlusManager.NEWKEY = "LU516E987Q";
BSDPlusManager.STATUSES = { SUCCESS: 0, BAD_KEY: 1, WRONG_ACCOUNT: 2, WRONG_TS: 3, WRONG_TYPE: 4, CRC_VALIDATION_FAILED: 5, EXPIRED: 6 };
BSDPlusManager.EXPIRES_TS = 0;
BSDPlusManager.forceRevokedKeys = [];
BSDPlusManager.bsdPlusDialogListener = new INativeDialogListener.INativeDialogListener(function (self, index) {
    if (index === 1) {
        var tag = PlayerInfo.PlayerInfo.tag;
        if (!tag) {
            tag = "";
        }
        Application.Application.openUrl("https://t.me/bsdbrawlbot?start=tag".concat(tag));
    }
});

class LinkBSDPlusMessage extends BSDMessage.BSDMessage {
    constructor(telegramTag) {
        var route = BSDApi.BSDApi.v1ApiRoute + BSDApi.BSDApi.linkTagRoute;
        var secondsLeft = MessageSignatureManager.MessageSignatureManager.getMagicalNumberWithoutMultiplier();
        var requestBody = {
            tg: LinkBSDPlusMessage.formatTelegramTag(telegramTag),
            tag: "#".concat(PlayerInfo.PlayerInfo.tag),
            trophies: LogicDailyData.LogicDailyData.getCurrentTrophies(),
            name: Player.Player.ownName,
            magic_number: secondsLeft,
            signature: ""
        };
        super(requestBody, route);
        requestBody.magic_number = requestBody.magic_number * MessageSignatureManager.MessageSignatureManager.requestMagicalNumberMultiplier;
    }

    static formatTelegramTag(telegramTag) {
        if (telegramTag.startsWith("@")) {
            return telegramTag;
        }
        if (telegramTag.includes("t.me/")) {
            telegramTag = telegramTag.replace(new RegExp("http[s]?:\\/\\/", "g"), "").replace("t.me", "").replaceAll("/", "");
        }
        return "@".concat(telegramTag);
    }
}
