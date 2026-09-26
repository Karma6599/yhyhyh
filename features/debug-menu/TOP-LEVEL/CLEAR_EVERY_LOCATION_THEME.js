//============================================================================//
// DEBUG MENU BUTTON: CLEAR_EVERY_LOCATION_THEME
// In-game label: "CLEAR_EVERY_LOCATION_THEME"
// Menu: Debug Menu → TOP-LEVEL category
// Visibility: always visible
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Wipes all per-map environment overrides (features/mod-menu/map-environments.js) and reloads.
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   Config.config.LocationThemeOverrides = {} + GameMain.reloadGame()
