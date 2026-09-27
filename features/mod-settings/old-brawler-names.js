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
