// ============================================================= //
// FEATURE: Map maker extension
// TID prefix: MMHack
// Icon: none
// Implementation: strings only — a planned CustomMod ("MMHack") that
// was never wired in this build. The map maker itself lives in
// features/map-editor/ (map editor suite).
// ============================================================= //

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   MMHack_name        = "Map maker extension"
//   MMHack_descEnabled = "When enabled, map maker will get hidden functionality."
//
// No MMHack config key is registered in core/config.js configStatic and no
// consumer exists — the planned hidden map-maker functionality (extra
// tiles/objects in the editor) was never implemented in this build's JS.
// The map editor features that DID ship are reconstructed in
// features/map-editor/map-editor-suite.js.
