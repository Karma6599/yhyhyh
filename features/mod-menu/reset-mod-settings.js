class ResetModSettings {
    static showResetConfigPrompt() {
        NativeDialog.NativeDialog.show(
            Localisation.Localisation.getString("ResetConfig"),
            Localisation.Localisation.getString("ResetConfigDescription"),
            Localisation.Localisation.getString("Cancel"),
            Localisation.Localisation.getString("ResetButton"),
            "",
            Config.Config.resetNativeDialogListener.instance
        );
    }
}
