//============================================================================//
// MOD FEATURE: Text chat in battle
// In-game name: "Text chat in battle"  (TID: BattleTextChat_name)
// Description: "When enabled, the battle chat interface will be displayed if you're in a team."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: BattleTextChat  (default false)
// Implementation below:
//============================================================================//

// --------------------- MODULE 7944 — BattleChatButton ---------------------


// ============================================================ //
// webpack module 7944  —  BattleChatButton
// exports: BattleChatButton
// deps: 612 (MovieClip), 1588 (LogicMemory), 3341 (TeamStream), 5039 (GameButton), 7265 (Localisation), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7944] = function BattleChatButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, GameButton, StringTable, MovieClip, Localisation, TeamStream, chatButtonOffset, BattleChatButton, <class_fields_init>, BattleChatButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleChatButton = undefined;
        LogicMemory = __webpack_require__(1588);
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        Localisation = __webpack_require__(7265);
        TeamStream = __webpack_require__(3341);
        chatButtonOffset = ((LogicMemory).LogicMemory).offset(40);
        static buttonPressed (self, button) {
        return;
};
        <class_fields_init> = undefined;
        BattleChatButton;
        class BattleChatButton extends <class_fields_init> = (GameButton).GameButton {
            constructor () {
    var chatButtonMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xaf225 */
        this.X = 60;
        this.Y = 115;
        chatButtonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        (this).setMovieClip((chatButtonMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((chatButtonMovieClip).instance, "txt");
        buttonTextField.fontOutline = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString("BattleChatButton"));
        (this).setXY((this).X, (this).Y);
        (this).setCustomButtonListener(((this).buttonPressed).bind(this), "battle_chat_button");
        return this;
}
        }
        BattleChatButton = <class_fields_init> = BattleChatButton;
        exports.BattleChatButton = BattleChatButton;
        return;
};

// --------------------- MODULE 4551 — BattleChat ---------------------


// ============================================================ //
// webpack module 4551  —  BattleChat
// exports: BattleChat
// deps: 612 (MovieClip), 2476 (CombatHUD), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[4551] = function BattleChat_factory(__unused_webpack_module, exports, __webpack_require__) {
    var MovieClip, StringTable, CombatHUD, BattleChat, <class_fields_init>, BattleChat;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleChat = undefined;
        MovieClip = __webpack_require__(612);
        StringTable = __webpack_require__(9250);
        CombatHUD = __webpack_require__(2476);
        static addMessage (author, message, isOwnPlayer) {
        message = (this).wrapWords(message, author);
        if (isOwnPlayer) {
        } /* if 0xba2c7 */
        /* jump -> 0xba2cc */
        (this).text.text = ("<c" + "16c73c"("80f6f2", ">[", author, "]:</c> ", message, "\n"));
        this.linesOnScreen = (((this).text).split("\n").length - 1);
        return;
};
        static clear () {
        this.linesOnScreen = 0;
        this.text = "";
        return;
};
        static create (baseSprite) {
        this.baseSprite = baseSprite;
        this.battleChatTextField = ((MovieClip).MovieClip).getTextFieldByName((((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left")).instance, "text");
        (this).battleChatTextField.x = 20;
        (this).battleChatTextField.y = 150;
        (this).battleChatTextField.color = 4294967295.0;
        (this).battleChatTextField.colorTag = true;
        (this).battleChatTextField.fontOutline = true;
        (this).battleChatTextField.fontSize = (this).fontSize;
        return;
};
        static destroy () {
        if ((this).battleChatTextField) {
            if ((((this).baseSprite) == null)) {
            } /* if 0xba43f */
            /* jump -> 0xba44d */
            (undefined).removeChild((this).battleChatTextField);
            this.baseSprite = null;
            this.battleChatTextField = null;
            return;
        } /* if 0xba45c (open) */
};
        static isCreated () {
        return (!(!(this).battleChatTextField));
};
        static update () {
    var splitted;
        if ((this).isCreated()) {
            if (((this).linesOnScreen > (this).maxMessagesPerScreen)) {
                splitted = ((this).text).split("\n");
                this.text = ((splitted).slice(1, splitted.length)).join("\n");
                this.linesOnScreen = (--(this).linesOnScreen);
            } /* if 0xba502 */
            (this).battleChatTextField.text = (this).text;
            return;
        } /* if 0xba513 (open) */
};
        static wrapWords (message, senderName) {
    var words, lines, maxLineLength, currentLine, currentLength, i, word, wordLength, newLineLength;
        words = (message).split(" ");
        lines = [];
        maxLineLength = 32;
        currentLine = "";
        currentLength = 0;
        maxLineLength = (maxLineLength - (senderName.length + 4));
        i = 0;
        while ((i < words.length)) {
            word = words[i];
            wordLength = word.length;
            if ((currentLength > 0)) {
            } /* if 0xba5dd */
            /* jump -> 0xba5de */
            newLineLength = (1 + 0);
            if ((newLineLength <= maxLineLength)) {
                if ((currentLength > 0)) {
                } /* if 0xba5fb */
                /* jump -> 0xba5fc */
                currentLine = (" " + ("" + word));
                currentLength = newLineLength;
            } /* if 0xba610 */
            /* jump -> 0xba62f */
            (lines).push(currentLine);
            currentLine = word;
            currentLength = wordLength;
            if ((lines.length === 1)) {
                if ((maxLineLength < 32)) {
                    maxLineLength = (maxLineLength + (senderName.length + 4));
                } /* if 0xba64c */
            } /* if 0xba64c */
            i = ((i) + 1);
            (i++);
        } /* while 0xba65a */
        if ((currentLine.length > 0)) {
            (lines).push(currentLine);
        } /* if 0xba66e */
        return (lines).join("\n");
};
        <class_fields_init> = undefined;
        BattleChat;
        class BattleChat {
            constructor () {
    var fontSize, maxMessagesPerScreen, fontSize, maxMessagesPerScreen;
        fontSize = this;
        if (<class_fields_init>) {
        } /* if 0xba22e */
        if (((fontSize) === undefined)) {
            fontSize = fontSize = 12;
        } /* if 0xba23e */
        if (((maxMessagesPerScreen) === undefined)) {
            maxMessagesPerScreen = maxMessagesPerScreen = 10;
        } /* if 0xba248 */
        fontSize.fontSize = fontSize;
        fontSize.maxMessagesPerScreen = maxMessagesPerScreen;
        fontSize.linesOnScreen = 0;
        fontSize.text = "";
        (CombatHUD).CombatHUD.battleChat = fontSize;
        return;
}
        }
        BattleChat = BattleChat = BattleChat;
        exports.BattleChat = BattleChat;
        return;
};

// --------------------- MODULE 515 — BattleClearChatButton ---------------------


// ============================================================ //
// webpack module 515  —  BattleClearChatButton
// exports: BattleClearChatButton
// deps: 612 (MovieClip), 5039 (GameButton), 7265 (Localisation), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[515] = function BattleClearChatButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, MovieClip, Localisation, BattleClearChatButton, <class_fields_init>, BattleClearChatButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleClearChatButton = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        Localisation = __webpack_require__(7265);
        static buttonPressed (self, button) {
        return;
};
        <class_fields_init> = undefined;
        BattleClearChatButton;
        class BattleClearChatButton extends <class_fields_init> = (GameButton).GameButton {
            constructor (battleChat) {
    var clearButtonMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xaf473 */
        this.X = 150;
        this.Y = 115;
        this.battleChat = battleChat;
        clearButtonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        (this).setMovieClip((clearButtonMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((clearButtonMovieClip).instance, "txt");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString("BattleChatClearButton"));
        (this).setXY((this).X, (this).Y);
        (this).setCustomButtonListener(((this).buttonPressed).bind(this), "battle_chat_clear_button");
        return this;
}
        }
        BattleClearChatButton = v8 = BattleClearChatButton;
        exports.BattleClearChatButton = BattleClearChatButton;
        return;
};

