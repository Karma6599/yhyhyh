var chatButtonOffset = LogicMemory.LogicMemory.offset(40);

class BattleChatButton extends GameButton.GameButton {
    constructor() {
        super();
        this.X = 60;
        this.Y = 115;
        var chatButtonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        this.setMovieClip(chatButtonMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(chatButtonMovieClip.instance, "txt");
        buttonTextField.fontOutline = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString("BattleChatButton"));
        this.setXY(this.X, this.Y);
        this.setCustomButtonListener(this.buttonPressed.bind(this), "battle_chat_button");
    }

    buttonPressed(self, button) {
    }
}

class BattleChat {
    constructor(fontSize, maxMessagesPerScreen) {
        if (fontSize === undefined) {
            fontSize = 12;
        }
        if (maxMessagesPerScreen === undefined) {
            maxMessagesPerScreen = 10;
        }
        this.fontSize = fontSize;
        this.maxMessagesPerScreen = maxMessagesPerScreen;
        this.linesOnScreen = 0;
        this.text = "";
        CombatHUD.CombatHUD.battleChat = this;
    }

    addMessage(author, message, isOwnPlayer) {
        message = this.wrapWords(message, author);
        var color = isOwnPlayer ? "16c73c" : "80f6f2";
        this.text += "<c" + color + ">[" + author + "]:</c> " + message + "\n";
        this.linesOnScreen = this.text.split("\n").length - 1;
    }

    clear() {
        this.linesOnScreen = 0;
        this.text = "";
    }

    create(baseSprite) {
        this.baseSprite = baseSprite;
        this.battleChatTextField = MovieClip.MovieClip.getTextFieldByName(StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left").instance, "text");
        this.battleChatTextField.x = 20;
        this.battleChatTextField.y = 150;
        this.battleChatTextField.color = 4294967295.0;
        this.battleChatTextField.colorTag = true;
        this.battleChatTextField.fontOutline = true;
        this.battleChatTextField.fontSize = this.fontSize;
        this.baseSprite.addChild(this.battleChatTextField);
    }

    destroy() {
        if (this.battleChatTextField) {
            if (this.baseSprite != null) {
                this.baseSprite.removeChild(this.battleChatTextField);
            }
            this.baseSprite = null;
            this.battleChatTextField = null;
        }
    }

    isCreated() {
        return !!this.battleChatTextField;
    }

    update() {
        if (this.isCreated()) {
            if (this.linesOnScreen > this.maxMessagesPerScreen) {
                var splitted = this.text.split("\n");
                this.text = splitted.slice(1, splitted.length).join("\n");
                this.linesOnScreen--;
            }
            this.battleChatTextField.text = this.text;
        }
    }

    wrapWords(message, senderName) {
        var words = message.split(" ");
        var lines = [];
        var maxLineLength = 32;
        var currentLine = "";
        var currentLength = 0;
        maxLineLength = maxLineLength - (senderName.length + 4);
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var wordLength = word.length;
            var newLineLength = currentLength > 0 ? currentLength + 1 + wordLength : wordLength;
            if (newLineLength <= maxLineLength) {
                if (currentLength > 0) {
                    currentLine = currentLine + " " + word;
                } else {
                    currentLine = word;
                }
                currentLength = newLineLength;
            } else {
                lines.push(currentLine);
                currentLine = word;
                currentLength = wordLength;
                if (lines.length === 1) {
                    if (maxLineLength < 32) {
                        maxLineLength = maxLineLength + (senderName.length + 4);
                    }
                }
            }
        }
        if (currentLine.length > 0) {
            lines.push(currentLine);
        }
        return lines.join("\n");
    }
}

class BattleClearChatButton extends GameButton.GameButton {
    constructor(battleChat) {
        super();
        this.X = 150;
        this.Y = 115;
        this.battleChat = battleChat;
        var clearButtonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        this.setMovieClip(clearButtonMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(clearButtonMovieClip.instance, "txt");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString("BattleChatClearButton"));
        this.setXY(this.X, this.Y);
        this.setCustomButtonListener(this.buttonPressed.bind(this), "battle_chat_clear_button");
    }

    buttonPressed(self, button) {
        this.battleChat.clear();
    }
}
