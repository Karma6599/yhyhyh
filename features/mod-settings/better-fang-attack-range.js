// ============================================================= //
// FEATURE: Better Fang attack range
// Config key: BetterRange (default false)
// TID prefix: BetterRangeMod
// Icon: none — the toggle was planned but never wired in this build
// ============================================================= //

Config.configStatic.BetterRange = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   BetterRangeMod_name        = "Better Fang attack range"
//   BetterRangeMod_descEnabled = "When enabled, attack range will become extended for Fang."
//
// The config key is registered (core/config.js configStatic) and the strings
// exist, but no consumer reads BetterRange anywhere in this build's JS —
// the extended-range logic is not wired.
