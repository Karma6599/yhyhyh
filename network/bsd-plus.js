// =============================================================
// BSD+ SUBSCRIPTION
// merged webpack modules: 2556 BSDPlusManager, 7906 BSDPlusManagementPopup, 7508 LinkBSDPlusMessage
// =============================================================

// --------------------- MODULE 2556 — BSDPlusManager ---------------------

// ============================================================ //
// webpack module 2556  —  BSDPlusManager
// exports: BSDPlusManager
// deps: 612 (MovieClip), 1588 (LogicMemory), 1978 (Libc), 3902 (NativeDialog), 4109 (BASE64), 5485 (LoginOkMessage), 6046 (Application), 7265 (Localisation), 8632 (Stage), 9025 (INativeDialogListener), 9250 (StringTable), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2556] = function BSDPlusManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BASE64, LoginOkMessage, NativeDialog, Localisation, INativeDialogListener, Application, PlayerInfo, Stage, StringTable, MovieClip, Libc, LogicMemory, Libg, ACTIVATION_TIMEOUT_SECONDS, NS_PER_SECOND, BSDPlusManager_getNativeTime, BSDPlusManager, <class_fields_init>, BSDPlusManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDPlusManager = undefined;
        BASE64 = __webpack_require__(4109);
        LoginOkMessage = __webpack_require__(5485);
        NativeDialog = __webpack_require__(3902);
        Localisation = __webpack_require__(7265);
        INativeDialogListener = __webpack_require__(9025);
        Application = __webpack_require__(6046);
        PlayerInfo = __webpack_require__(9518);
        Stage = __webpack_require__(8632);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        ACTIVATION_TIMEOUT_SECONDS = 80;
        NS_PER_SECOND = 1000000000;
        BSDPlusManager_getNativeTime = new NativeFunction(((Libg).Libg).offset(7483504, 0), "uint64", []);
        <class_fields_init> = undefined;
        BSDPlusManager;
        class BSDPlusManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xe2981 (open) */
}
            isTelegramLinked () {
        return ((this).telegramData !== undefined);
}
            telegramToString () {
    var tdata;
        tdata = (BSDPlusManager).telegramData;
        if (tdata) {
            if ((((tdata).username) == null)) {
            } /* if 0xe20c4 */
            return ("").concat((tdata).name, " (", (tdata).id, ")");
        } /* if 0xe20cd */
        return "";
}
            decrypt (str, key) {
    var result, decoded, i, e;
        /* CATCH -> 0xe2182 (try region) */
        result = "";
        decoded = ((BASE64).BASE64).decode(str);
        i = 0;
        while ((i < decoded.length)) {
            if (decoded[i]) {
                result = (result + (String).fromCharCode(((decoded[i] - (key).charCodeAt((i % key.length))) % 255)));
            } /* if 0xe2170 */
            i = ((i) + 1);
            (i++);
        } /* while 0xe217a */
        return result;
        e = i = result = decoded = <underflow>;
        /* CATCH -> 0xe218b (try region) */
        return "";
        throw <underflow>;
}
            encrypt (plain, key) {
    var modified, i, e;
        /* CATCH -> 0xe222d (try region) */
        modified = [];
        i = 0;
        while ((i < plain.length)) {
            (modified).push((((plain).charCodeAt(i) + (key).charCodeAt((i % key.length))) % 255));
            i = ((i) + 1);
            (i++);
        } /* while 0xe2215 */
        return ((BASE64).BASE64).encode(modified);
        e = i = modified = <underflow>;
        /* CATCH -> 0xe2236 (try region) */
        return "";
        throw <underflow>;
}
            compareCurrentAccount (enc) {
    var playerTagString, dec;
        playerTagString = ((PlayerInfo).PlayerInfo).tag;
        dec = (this).decrypt(enc, (this).KEY);
        return (playerTagString === dec);
}
            verify (key) {
    var keyEncryptionKey, keyBase, decrypted, keyParts, tag, endTimestamp, type, crc32Code, playerTagString, crc32, endTimeStampInt;
        if (!(!(key).startsWith("~bsda"))) {
            (!(key).startsWith("~bsda"));
            if (!((this).forceRevokedKeys).includes(key)) {
                ((this).forceRevokedKeys).includes(key);
                if ((key.length < 9)) {
                    return ((this).STATUSES).BAD_KEY;
                } /* if 0xe235e */
            } /* if 0xe234f */
        } /* if 0xe234f */
        keyEncryptionKey = (key).slice(5, 9);
        keyBase = (key).slice(9);
        decrypted = (this).decrypt(keyBase, (this).encrypt((this).NEWKEY, keyEncryptionKey));
        keyParts = (decrypted).split(":");
        if ((keyParts.length !== 4)) {
            return ((this).STATUSES).BAD_KEY;
        } /* if 0xe23bf */
        tag = keyParts[0];
        endTimestamp = keyParts[1];
        type = keyParts[2];
        crc32Code = keyParts[3];
        playerTagString = ((PlayerInfo).PlayerInfo).tag;
        if ((tag !== playerTagString)) {
            return ((this).STATUSES).WRONG_ACCOUNT;
        } /* if 0xe2400 */
        if (isNaN(Number(endTimestamp))) {
            return ((this).STATUSES).WRONG_TS;
        } /* if 0xe241e */
        if ((type !== "1")) {
            return ((this).STATUSES).WRONG_TYPE;
        } /* if 0xe2433 */
        crc32 = keyEncryptionKey = keyBase = decrypted = keyParts = tag = endTimestamp = type = crc32Code = playerTagString = crc32 = endTimeStampInt = <underflow>;
        (keyParts).pop();
        if (((crc32((keyParts).join("/"))).toString(16) !== crc32Code)) {
            return ((this).STATUSES).CRC_VALIDATION_FAILED;
        } /* if 0xe2479 */
        endTimeStampInt = parseInt(endTimestamp);
        endTimeStampInt = (endTimeStampInt + 23587200);
        if ((endTimeStampInt < ((LoginOkMessage).LoginOkMessage).serverTime)) {
            return ((this).STATUSES).EXPIRED;
        } /* if 0xe24b2 */
        this.EXPIRES_TS = endTimeStampInt;
        return ((this).STATUSES).SUCCESS;
}
            showActivationCaption () {
    var caption;
        if ((this).activationCaption) {
            return;
        } /* if 0xe261c */
        caption = ((MovieClip).MovieClip).getTextFieldByName((((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left")).instance, "text");
        caption.x = 200;
        caption.y = 5;
        caption.fontOutline = true;
        caption.color = 4294951424.0;
        caption.fontSize = 25;
        caption.text = ("Please activate BSD+: ").concat(ACTIVATION_TIMEOUT_SECONDS);
        ((Stage).Stage).addChild((caption).instance);
        this.activationCaption = caption;
        this.activationStartedAtNs = null;
        return;
}
            get expired () {
        return ((this).expiresIn <= 0);
}
            get expiresIn () {
        return ((BSDPlusManager).EXPIRES_TS - (Math).floor(((Date).now() / 1000)));
}
            updateActivationTimer () {
    var gameTimeNs, diffNs, elapsedSeconds, remaining;
        if ((this).activationKilled) {
            return;
        } /* if 0xe279f */
        if ((!(this).activationCaption)) {
            return;
        } /* if 0xe27aa */
        if ((this).isBSDPlusEnabled) {
            ((Stage).Stage).removeChild(((this).activationCaption).instance);
            this.activationCaption = null;
            return;
        } /* if 0xe27d9 */
        gameTimeNs = BSDPlusManager_getNativeTime();
        if ((gameTimeNs).equals(uint64(0))) {
            return;
        } /* if 0xe27f3 */
        /* is_null  */
        if ((this).activationStartedAtNs) {
            this.activationStartedAtNs = gameTimeNs;
        } /* if 0xe2807 */
        diffNs = ((gameTimeNs).sub((this).activationStartedAtNs)).toNumber();
        elapsedSeconds = (Math).floor((diffNs / NS_PER_SECOND));
        remaining = (Math).max(0, (ACTIVATION_TIMEOUT_SECONDS - elapsedSeconds));
        (this).activationCaption.text = ("Please activate BSD+: ").concat(remaining);
        if ((remaining <= 0)) {
            this.activationKilled = true;
            ((Libc).Libc).kill(((Libc).Libc).getpid(), 15);
            ((LogicMemory).LogicMemory).clearBssSegment(0);
            return;
        } /* if 0xe28ad (open) */
}
            showBSDPlusOnlyNativeDialog () {
        return;
}
        }
        BSDPlusManager = StringTable = BSDPlusManager;
        exports.BSDPlusManager = BSDPlusManager;
        BSDPlusManager.isBSDPlusEnabled = false;
        BSDPlusManager.activationCaption = null;
        BSDPlusManager.activationStartedAtNs = null;
        BSDPlusManager.activationKilled = false;
        BSDPlusManager.KEY = "270MNG0IX8";
        BSDPlusManager.NEWKEY = "LU516E987Q";
        BSDPlusManager.STATUSES = { SUCCESS: 0, BAD_KEY: 1, WRONG_ACCOUNT: 2, WRONG_TS: 3, WRONG_TYPE: 4, CRC_VALIDATION_FAILED: 5, EXPIRED: 6 };
        BSDPlusManager.EXPIRES_TS = 0;
        BSDPlusManager.forceRevokedKeys = [];
        BSDPlusManager.bsdPlusDialogListener = new (INativeDialogListener).INativeDialogListener(function (self, index) {
    var tag;
        if ((index === 1)) {
            if (!((PlayerInfo).PlayerInfo).tag) {
                tag = "";
            } /* if 0xe29c5 */
            ((Application).Application).openUrl(("https://t.me/bsdbrawlbot?start=tag").concat(tag));
            return;
        } /* if 0xe29e7 (open) */
});
        return;
};

// --------------------- MODULE 7906 — BSDPlusManagementPopup ---------------------

// ============================================================ //
// webpack module 7906  —  BSDPlusManagementPopup
// exports: BSDPlusManagementPopup
// deps: 68 (UniItem), 1994 (LogicTime), 2141 (TSChaCha20), 2556 (BSDPlusManager), 4272 (EDebugger), 4934 (GUI), 5281 (BSDMessageManager), 6012 (InputPopup), 6046 (Application), 6139 (LogicDataTables), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable), 9518 (PlayerInfo), 9622 (UnlinkTelegramAccountMessage), 9724 (CustomTextEncoder), 9951 (BlingTextField)
// ============================================================ //

__webpack_modules__[7906] = function BSDPlusManagementPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PlayerInfo, GUI, StringTable, LogicDataTables, Application, BlingTextField, CustomTextEncoder, TSChaCha20, EDebugger, Localisation, LogicTime, InputPopup, BSDMessageManager, UnlinkTelegramAccountMessage, BSDPlusManager, UniItem, ListContainerPopup, EButtonID, BSDPlusManagementPopup, <class_fields_init>, BSDPlusManagementPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDPlusManagementPopup = undefined;
        PlayerInfo = __webpack_require__(9518);
        GUI = __webpack_require__(4934);
        StringTable = __webpack_require__(9250);
        LogicDataTables = __webpack_require__(6139);
        Application = __webpack_require__(6046);
        BlingTextField = __webpack_require__(9951);
        CustomTextEncoder = __webpack_require__(9724);
        TSChaCha20 = __webpack_require__(2141);
        EDebugger = __webpack_require__(4272);
        Localisation = __webpack_require__(7265);
        LogicTime = __webpack_require__(1994);
        InputPopup = __webpack_require__(6012);
        BSDMessageManager = __webpack_require__(5281);
        UnlinkTelegramAccountMessage = __webpack_require__(9622);
        BSDPlusManager = __webpack_require__(2556);
        UniItem = __webpack_require__(68);
        ListContainerPopup = __webpack_require__(8261);
        if (!EButtonID) {
        } /* if 0xb07dd */
        function (EButtonID) {
        EButtonID["TELEGRAM"] = 0;
        EButtonID[0] = "TELEGRAM";
        EButtonID["PURCHASE_BSDP"] = 1;
        EButtonID[1] = "PURCHASE_BSDP";
        return;
}(EDebugger = {});
        static createItems () {
    var popoverTextLeftClip, textField, gradient, bling, textField, telegramTextField, buttons, naviHeight;
        ((this).container).clearEntries();
        popoverTextLeftClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        textField = (this).getNewTextField();
        if ((!((BSDPlusManager).BSDPlusManager).expired)) {
            gradient = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).ColorGradients, 1);
            bling = ((BlingTextField).BlingTextField).create(popoverTextLeftClip, "text", 0, gradient);
            textField = bling;
        } /* if 0xb0a84 */
        textField.text = ((Localisation).Localisation).getString(("ManageBSDPlus_Status_" + (!((BSDPlusManager).BSDPlusManager).expired)));
        textField.align = 2;
        textField.x = -120;
        textField.y = -170;
        textField.fontSize = 32;
        textField.fontOutline = true;
        textField.visibility = true;
        this.haveBSDPlusTextField = textField;
        (this).addChild(textField);
        if ((!((BSDPlusManager).BSDPlusManager).expired)) {
            textField = (this).getNewTextField();
            textField.text = (((Localisation).Localisation).getString("ManageBSDPlus_TillEnds")).replace("{time}", ((LogicTime).LogicTime).humanizeTime(((BSDPlusManager).BSDPlusManager).expiresIn));
            textField.align = 2;
            textField.x = -120;
            textField.y = -120;
            textField.fontSize = 24;
            textField.fontOutline = true;
            textField.visibility = true;
            textField.color = 4294967295.0;
            this.bsdPlusCountdownTextField = textField;
            (this).addChild(textField);
        } /* if 0xb0bc9 */
        telegramTextField = (this).getNewTextField();
        telegramTextField.text = (((Localisation).Localisation).getString(("ManageBSDPlus_AccountLink_" + ((BSDPlusManager).BSDPlusManager).isTelegramLinked()))).replace("{telegram}", ((BSDPlusManager).BSDPlusManager).telegramToString());
        telegramTextField.align = 34;
        telegramTextField.x = -120;
        telegramTextField.y = -80;
        telegramTextField.fontSize = 24;
        telegramTextField.fontOutline = true;
        telegramTextField.visibility = true;
        telegramTextField.color = 4281569516.0;
        (this).addChild(telegramTextField);
        buttons = (this).getButtons();
        this.currentButtons = buttons;
        (buttons).forEach(function (b) {
        return ((this).container).addEntry(b);
});
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(buttons.length, (naviHeight * 4), 0, 0, 0, 0, -1);
        return;
};
        static getNewTextField () {
    var popoverTextLeftClip;
        popoverTextLeftClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        return (popoverTextLeftClip).getTextFieldByName("text");
};
        static getButtons () {
    var buttonsArr, telegramButton, purchaseBsdPlusButton;
        buttonsArr = [];
        telegramButton = new (UniItem).UniItem(((Localisation).Localisation).getString(("ManageBSDPlus_LinkButton_" + ((BSDPlusManager).BSDPlusManager).isTelegramLinked())));
        if (((BSDPlusManager).BSDPlusManager).isTelegramLinked()) {
            if (((((BSDPlusManager).BSDPlusManager).telegramData) == null)) {
            } /* if 0xb0e2c */
            /* jump -> 0xb0e31 */
            if ((undefined).unlinkingInProcess) {
                (telegramButton).setText(((Localisation).Localisation).getString("ManageBSDPlus_LinkButton_cancel"));
            } /* if 0xb0e54 */
        } /* if 0xb0e54 */
        telegramButton.id = (EButtonID).TELEGRAM;
        (telegramButton).setCustomButtonListener(((this).onTelegramButtonPressed).bind(this));
        (buttonsArr).push(telegramButton);
        purchaseBsdPlusButton = new (UniItem).UniItem(((Localisation).Localisation).getString(("ManageBSDPlus_PurchaseButton_" + ((BSDPlusManager).BSDPlusManager).expired)));
        telegramButton.id = (EButtonID).PURCHASE_BSDP;
        (purchaseBsdPlusButton).setCustomButtonListener(((this).onPurchaseBSDPlusButtonPressed).bind(this));
        (buttonsArr).push(purchaseBsdPlusButton);
        return buttonsArr;
};
        static getTelegramButton () {
        return ((this).currentButtons).find(function (e) {
        return ((e).id === (EButtonID).TELEGRAM);
});
};
        static getPurchaseBSDPlusButton () {
        return ((this).currentButtons).find(function (e) {
        return ((e).id === (EButtonID).PURCHASE_BSDP);
});
};
        static onTelegramButtonPressed (self, buttonPtr) {
        if ((!((BSDPlusManager).BSDPlusManager).telegramData)) {
            return;
        } /* if 0xb1041 */
        if (((((BSDPlusManager).BSDPlusManager).telegramData) == null)) {
        } /* if 0xb106c */
        /* jump -> 0xb1071 */
        return;
};
        static onPurchaseBSDPlusButtonPressed (self, buttonPtr) {
    var tag;
        if (!((PlayerInfo).PlayerInfo).tag) {
            tag = "";
        } /* if 0xb1370 */
        return;
};
        static updateTelegramButton () {
    var button;
        button = (this).getTelegramButton();
        if ((!button)) {
            return;
        } /* if 0xb13cf */
        if ((!((BSDPlusManager).BSDPlusManager).telegramData)) {
            return (button).setText(((Localisation).Localisation).getString("ManageBSDPlus_LinkButton_false"));
        } /* if 0xb13ff */
        if ((((BSDPlusManager).BSDPlusManager).telegramData).unlinkingInProcess) {
            return (button).setText(((Localisation).Localisation).getString("ManageBSDPlus_LinkButton_cancel"));
        } /* if 0xb1433 */
        if (((BSDPlusManager).BSDPlusManager).telegramData) {
            return (button).setText(((Localisation).Localisation).getString("ManageBSDPlus_LinkButton_true"));
            return;
        } /* if 0xb1462 (open) */
};
        static onAccountLinked () {
    var managementPopup;
        (this).close();
        managementPopup = new BSDPlusManagementPopup();
        return;
};
        static updateElements (deltaTime) {
    var bsdPlusButton;
        if ((!((BSDPlusManager).BSDPlusManager).expired)) {
            if ((this).bsdPlusCountdownTextField) {
                (this).bsdPlusCountdownTextField.text = (((Localisation).Localisation).getString("ManageBSDPlus_TillEnds")).replace("{time}", ((LogicTime).LogicTime).humanizeTime(((BSDPlusManager).BSDPlusManager).expiresIn));
                return;
                if ((this).bsdPlusCountdownTextField) {
                    (this).bsdPlusCountdownTextField.text = "";
                } /* if 0xb156f */
                if ((!(this).isBSDPlusButtonUpdated)) {
                    bsdPlusButton = (this).getPurchaseBSDPlusButton();
                    this.isBSDPlusButtonUpdated = true;
                    if (((bsdPlusButton) == null)) {
                    } /* if 0xb1597 */
                    /* jump -> 0xb15b4 */
                    (undefined).setText(((Localisation).Localisation).getString("ManageBSDPlus_PurchaseButton_true"));
                } /* if 0xb15b5 */
                (this).haveBSDPlusTextField.text = ((Localisation).Localisation).getString("ManageBSDPlus_Status_false");
                return;
            } /* if 0xb15d8 (open) */
        } /* if 0xb155b (open) */
};
        <class_fields_init> = undefined;
        BSDPlusManagementPopup;
        class BSDPlusManagementPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("ManageBSDPlus_Title"), ExportName: "country_popup" });
        if (<class_fields_init>) {
        } /* if 0xb0940 */
        this.isBSDPlusButtonUpdated = false;
        this.currentButtons = [];
        (this).adjustPopupHeaderButtons("bsdp_management");
        (this).createItems();
        return this;
}
        }
        BSDPlusManagementPopup = EDebugger = BSDPlusManagementPopup;
        exports.BSDPlusManagementPopup = BSDPlusManagementPopup;
        return;
};

// --------------------- MODULE 7508 — LinkBSDPlusMessage ---------------------

// ============================================================ //
// webpack module 7508  —  LinkBSDPlusMessage
// exports: LinkBSDPlusMessage
// deps: 4330 (Player), 5577 (BSDMessage), 7089 (LogicDailyData), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[7508] = function LinkBSDPlusMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, PlayerInfo, LogicDailyData, Player, MessageSignatureManager, LinkBSDPlusMessage, <class_fields_init>, LinkBSDPlusMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LinkBSDPlusMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        PlayerInfo = __webpack_require__(9518);
        LogicDailyData = __webpack_require__(7089);
        Player = __webpack_require__(4330);
        MessageSignatureManager = __webpack_require__(8286);
        <class_fields_init> = undefined;
        LinkBSDPlusMessage;
        class LinkBSDPlusMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (telegramTag) {
    var route, secondsLeft, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).linkTagRoute);
        secondsLeft = ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier();
        requestBody = { tg: (LinkBSDPlusMessage).formatTelegramTag(telegramTag), tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), trophies: ((LogicDailyData).LogicDailyData).getCurrentTrophies(), name: ((Player).Player).ownName, magic_number: secondsLeft, signature: "" };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe146d */
        requestBody.magic_number = ((requestBody).magic_number * ((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier);
        return this;
}
            formatTelegramTag (telegramTag) {
        if ((telegramTag).startsWith("@")) {
            return telegramTag;
        } /* if 0xe14c5 */
        if ((telegramTag).includes("t.me/")) {
            telegramTag = (((telegramTag).replace(new RegExp("http[s]?:\\/\\/", "\u0002\u0001\u0000>\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u0001H\u0000\u0001T\u0000\u0001T\u0000\u0001P\u0000\u001c\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0015\u0001\u0000S\u0000S\u0000\n\u0001:\u0000\u0001/\u0000\u0001/\u0000\f\u0000\n"), "")).replace("t.me", "")).replaceAll("/", "");
        } /* if 0xe1501 */
        return ("@").concat(telegramTag);
}
        }
        LinkBSDPlusMessage = LinkBSDPlusMessage = LinkBSDPlusMessage;
        exports.LinkBSDPlusMessage = LinkBSDPlusMessage;
        return;
};

