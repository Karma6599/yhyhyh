// ============================================================= //
// FEATURE: Disable auto shoot for Super
// TID prefix: BlockSuperAutoshoot
// Icon: none
// Implementation: strings only — the toggle was planned but never
// wired in this build (no config key, no consumer).
// ============================================================= //

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   BlockSuperAutoshoot_name        = "Disable auto shoot for Super"
//   BlockSuperAutoshoot_descEnabled = "When enabled, you will NOT be able to use auto attack for Super."
//
// The mod registers no BlockSuperAutoshoot config key in core/config.js
// configStatic and nothing consumes such a name — the Super auto-attack
// block was never implemented in this build's JS.
