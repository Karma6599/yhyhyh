// ============================================================= //
// FEATURE: Colored damage
// Config key: ColoredDamage (default true)
// TID prefix: ColoredDamage
// Icon: ColoredDamageCallback (menu/icons.js, module 2120)
// Implementation: config key only — the colored damage numbers
// (Ulti / Gadget / massive Attack) are applied in the native
// rendering layer; no JS consumer in this build's source.
// ============================================================= //

Config.configStatic.ColoredDamage = true;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   ColoredDamage_name        = "Colored damage"
//   ColoredDamage_descEnabled = "When enabled, Ulti, Gadget and massive Attack damage numbers will become colored."

function ColoredDamageCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_club_quest_damage");
}
