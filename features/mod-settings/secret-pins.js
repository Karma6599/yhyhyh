// ============================================================= //
// FEATURE: Secret pins
// TID prefix: SecretPinsMod
// Icon: none
// Implementation: strings only — a planned CustomMod ("SecretPinsMod")
// that was never wired in this build.
// ============================================================= //

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   SecretPinsMod_name        = "Secret pins"
//   SecretPinsMod_descEnabled = "When enabled, pins from skin bundles will become available to send in chat."
//
// No SecretPinsMod config key is registered in core/config.js configStatic
// and nothing consumes such a name — unlocking the skin-bundle pins in chat
// was never implemented in this build's JS.
