function SHOW_BSD_API_RESPONSE_callback() {
    Config.Config.config.ShowBSDApiResponse = !Config.Config.config.ShowBSDApiResponse;
    FileManager.FileManager.updateConfigFile();
    var btn = new DebugGameButton.DebugGameButton(button);
    var checkbox = btn.getCheckbox();
    if (!checkbox.isNull()) {
        btn.switchCheckbox(Config.Config.config.ShowBSDApiResponse);
    }
    var message = Config.Config.config.ShowBSDApiResponse ? "ON" : "OFF";
    EDebugger.EDebugger.addMessage(EDebugger.EDebugger.INFO, message);
}

function SHOW_BSD_API_RESPONSE_getState() {
    return Config.Config.config.ShowBSDApiResponse === true;
}
