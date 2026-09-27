class ToggleDebugMenuButton extends DebugGameButton.DebugGameButton {
    constructor() {
        super();
        this.setCustomButtonListener(this.callback.bind(this));
    }

    callback() {
        if (DebugMenuButton.DebugMenuButton.getDebugMenu() == null) {
            DebugMenuButton.DebugMenuButton.getDebugMenu();
        }
    }
}
