Config.configStatic.DevModeEnabled = false;

LocalisationOverrides.overrides.en.DevModeToggle_name = "Developer mode";
LocalisationOverrides.overrides.en.DevModeToggle_descEnabled = "Switches environment to dev.";
LocalisationOverrides.overrides.ru.DevModeToggle_name = "Режим разработчика";
LocalisationOverrides.overrides.ru.DevModeToggle_descEnabled = "Переключает окружение на dev.";

class Validation {
    static isDevAvailable() {
        if (ModProperties.ModProperties.isDev()) {
            return true;
        }
        if (Config.Config.config.DevModeEnabled) {
            return Validation.developersList.includes(PlayerInfo.PlayerInfo.tag);
        }
        return false;
    }

    static isWhitelisted() {
        if (ModProperties.ModProperties.environment === "dev") {
            return true;
        }
        return Validation.betaList.includes(PlayerInfo.PlayerInfo.tag);
    }
}

Validation.developersList = ["9P0R2YC2Q", "2RGGJPLQU", "8PLVR29JP", "8GCQYL2VL", "QUJPVU0L", "PQL90VLR9"];
Validation.testersList = ["9P0R2YC2Q"];
Validation.betaList = ["9P0R2YC2Q"];
