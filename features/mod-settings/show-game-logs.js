// ============================================================= //
// FEATURE: Show game logs
// Config key: ShowLaserLogs (default true)
// TID prefix: ShowLaserLogs
// Icon: none (questionmark fallback in the settings popup)
// Implementation: config key only (default true) — the log window is
// the native Laser overlay; no JS consumer in this build's source.
// ============================================================= //

Config.configStatic.ShowLaserLogs = true;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   ShowLaserLogs_name        = "Show game logs"
//   ShowLaserLogs_descEnabled = "When enabled, game logs will be shown."
//
// "Laser" is the mod's native on-screen log window (see also the LaserBox
// memory regions referenced by the webview feature). The JS layer only
// carries the toggle's default — the window itself is driven natively.
