Config.configStatic.ColoredDamage = true;

LocalisationOverrides.overrides.en.ColoredDamage_name = "Colored damage";
LocalisationOverrides.overrides.en.ColoredDamage_descEnabled = "When enabled, Ulti, Gadget and massive Attack damage numbers will become colored.";

function ColoredDamageCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_club_quest_damage");
}
