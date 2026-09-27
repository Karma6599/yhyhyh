// ============================================================= //
// FEATURE: Old brawler names
// Config keys: LegacyNames (default false), OldGlowbertName (default false)
// TID prefix: LegacyNames
// Icon: LegacyNamesCallback (menu/icons.js, module 2120)
// Implementation: the old-name table ships in the JS localisation
// overrides (module 6528) as standalone keys; the swap itself has no
// JS consumer in this build (applied through the localisation layer).
// ============================================================= //

Config.configStatic.LegacyNames = false;
Config.configStatic.OldGlowbertName = false;

LocalisationOverrides.overrides.en.LegacyNames_name = "Old brawler names";
LocalisationOverrides.overrides.en.LegacyNames_descEnabled = "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.";
LocalisationOverrides.overrides.en.LegacyNames_Ruffs = "COLONEL RUFFS";
LocalisationOverrides.overrides.en.LegacyNames_Rico = "RICOCHET";
LocalisationOverrides.overrides.en.LegacyNames_Glowbert = "GLOWBERT";
LocalisationOverrides.overrides.ru.LegacyNames_name = "Старые имена бойцов";
LocalisationOverrides.overrides.ru.LegacyNames_descEnabled = "Когда включено: меняет имена у Рико, Гавса и Глоуи на их старые варианты.";
LocalisationOverrides.overrides.ru.LegacyNames_Ruffs = "ГЕНЕРАЛ ГАВС";
LocalisationOverrides.overrides.ru.LegacyNames_Rico = "РИКОШЕТ";
LocalisationOverrides.overrides.ru.LegacyNames_Glowbert = "ГЛОУБЕРТ";

function LegacyNamesCallback() {
    var clip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_rico_classic_old");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(160);
    return clip;
}

// The three override values above are the complete old-name table from
// module 6528 (core/localisation.js). Nothing in this build's JS reads
// Config.config.LegacyNames to install the swap — the name replacement is
// resolved through the localisation/string-table layer (the values are
// standalone keys, not TID redirects), so no hook is reproduced here.
// OldGlowbertName is a related leftover key from the same family.
