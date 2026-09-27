// ============================================================= //
// FEATURE: Movement based auto shoot (for Mortis)
// TID prefix: MovementBasedAutoshoot
// Icon: none
// Implementation: strings only — the toggle was planned but never
// wired in this build (no config key, no consumer).
// ============================================================= //

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   MovementBasedAutoshoot_name        = "Movement based auto shoot (for Mortis)"
//   MovementBasedAutoshoot_descEnabled = "When enabled, Mortis auto attack will be based on his movement."
//
// No MovementBasedAutoshoot config key is registered in core/config.js
// configStatic and nothing consumes such a name — the movement-based
// auto-attack for Mortis was never implemented in this build's JS.
