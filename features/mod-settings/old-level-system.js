// ============================================================= //
// FEATURE: Old level system
// Config key: CustomMods payload "OldRankMod" (CustomModNames.oldRankMod)
// TID prefix: OldRankMod
// Icon: none — the item ships disabled (disabled: true) in the settings
// popup; behaviour: EBehaviour.CUSTOM_MOD, shouldReloadGame: true
// Wiring: LogicDataTableResource.patch (game/logic-core.js, module 1724)
// applies the milestones.csv patch from the CustomMods payload
// ============================================================= //

// CustomModNames (module 2214, menu/mod-configuration.js):
//   CustomModNames.oldRankMod = "OldRankMod";
//
// The toggle state is membership in the CustomMods array:
//   key: Config.config.CustomMods.includes(CustomModNames.oldRankMod)
//
// Toggling (ModConfigurationItem.buttonPressed, CUSTOM_MOD behaviour)
// adds/removes the payload string from Config.config.CustomMods and flags
// a game reload.

// LogicDataTableResource.patch (module 1724, game/logic-core.js) — the CSV
// patch application. The base patch set always ships; the OldRankMod entry
// maps csv_logic/milestones.csv to its modded copy under
// bsd/mods/BSDCsvPatches/ (levels capped at 35 — the old rank system):
function patchLogicDataTableResource() {
    var bsdCsvPatchPath = "bsd/mods/BSDCsvPatches/";
    var csvFiles = new Set(["csv_logic/themes.csv", "csv_client/effects.csv", "csv_client/music.csv"]);
    var mods = [{ file: "csv_logic/milestones.csv", mod: CustomModNames.CustomModNames.oldRankMod }];
    // The getFileName redirect that swaps in the patched CSVs is lost in the
    // repo's own decompile (patch body truncated) — not invented.
}

// Display side: StringTable.replacedStrings.heroMaxTier = StringObject.create("35")
// (core/localisation.js#9250) hardcodes the old max-tier caption, and
// StringTable.rankNames carries the per-language "RANK" label used by the
// old level display.
