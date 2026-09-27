// ============================================================= //
// FEATURE: Disable auto shoot
// TID prefix: BlockAttackAutoshoot
// Icon: none
// Implementation: strings only — the toggle was planned but never
// wired in this build (no config key, no consumer).
// ============================================================= //

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   BlockAttackAutoshoot_name        = "Disable auto shoot"
//   BlockAttackAutoshoot_descEnabled = "When enabled, you will NOT be able to use auto attack."
//
// The mod registers no BlockAttackAutoshoot config key in core/config.js
// configStatic and nothing consumes such a name — the auto-attack block
// was never implemented in this build's JS.
