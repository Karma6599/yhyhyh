// ============================================================= //
// FEATURE: Remove keyboard emoji in text chat
// TID prefix: EmojiRemoveMod
// Icon: none
// Implementation: strings only — the toggle was planned but never
// wired in this build (no config key, no consumer).
// ============================================================= //

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   EmojiRemoveMod_name        = "Remove keyboard emoji in text chat"
//   EmojiRemoveMod_descEnabled = "When enabled, all keyboard emoji in text chat won't render so it will prevent spam crashes."
//
// No EmojiRemoveMod config key is registered in core/config.js configStatic
// and nothing consumes such a name — the emoji-stripping was never
// implemented in this build's JS.
