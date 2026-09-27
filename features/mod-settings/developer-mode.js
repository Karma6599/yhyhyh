// ============================================================= //
// FEATURE: Developer mode
// Config key: DevModeEnabled (default false)
// TID prefix: DevModeToggle
// Icon: none (questionmark fallback in the settings popup)
// Wiring: Validation.isDevAvailable (utils/misc.js) + the Debug
// subheading gating in ModConfigurationPopup.createItems
// (menu/mod-configuration.js, module 6893)
// ============================================================= //

Config.configStatic.DevModeEnabled = false;

LocalisationOverrides.overrides.en.DevModeToggle_name = "Developer mode";
LocalisationOverrides.overrides.en.DevModeToggle_descEnabled = "Switches environment to dev.";
LocalisationOverrides.overrides.ru.DevModeToggle_name = "Режим разработчика";
LocalisationOverrides.overrides.ru.DevModeToggle_descEnabled = "Переключает окружение на dev.";

// Validation (utils/misc.js): the developer item set is available in dev
// builds out of the box; in other builds the toggle unlocks it for tagged
// developers only.
function isDevAvailable() {
    if (ModProperties.ModProperties.isDev()) {
        return true;
    }
    if (Config.Config.config.DevModeEnabled) {
        return Validation.Validation.developersList.includes(PlayerInfo.PlayerInfo.tag);
    }
    return false;
}

// Validation statics (utils/misc.js):
//   Validation.developersList = ["9P0R2YC2Q", "2RGGJPLQU", "8PLVR29JP", "8GCQYL2VL", "QUJPVU0L", "PQL90P7R9"];
//   Validation.testersList    = ["9P0R2YC2Q"];
//   Validation.betaList       = ["9P0R2YC2Q"];
//
// Config.useDebugLoggingVersions = ["dev", "integration", "beta"] (core/config.js)
// is the related environment gate used by ModConfigurationPopup.createItems:
// the Debug subheading (where the dev-mode item lives) is only rendered when
// the environment is not a debug-logging one and the player is a tagged
// developer (menu/mod-configuration.js#6893).
