var CHAT_COMMANDS = [
    { command: "/new-name", usage: "/new-name [name]", action: Commands.executeVisualNameChange },
    { command: "/profile", usage: "/profile <tag>", action: Commands.executeOpenProfile },
    { command: "/bsd+", usage: "/bsd+", action: Commands.executeLinkBSDPlus },
    { command: "~bsda", usage: "~bsda<key>", action: Commands.executeBSDPlusActivation }
];

class Commands {
    static handleChatMessage(text) {
        var trimmed = (text || "").trim();
        if (trimmed === "") {
            return false;
        }
        for (var entry of CHAT_COMMANDS) {
            if (trimmed.startsWith(entry.command)) {
                var argument = trimmed.substring(entry.command.length).trim();
                entry.action(argument);
                return true;
            }
        }
        return false;
    }

    static executeVisualNameChange(name) {
        Config.Config.config.PlayerNameOverride = name;
        FileManager.FileManager.updateConfigFile();
    }

    static executeOpenProfile(tag) {
        GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.OPEN_PROFILE), true, true, false);
    }

    static executeLinkBSDPlus() {
        GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.PLUS_LINK), true, true, false);
    }

    static executeBSDPlusActivation(key) {
        if (BSDPlusManager.BSDPlusManager.verify(key) !== BSDPlusManager.BSDPlusManager.STATUSES.SUCCESS) {
            return;
        }
        BSDPlusManager.BSDPlusManager.isBSDPlusEnabled = true;
    }
}
