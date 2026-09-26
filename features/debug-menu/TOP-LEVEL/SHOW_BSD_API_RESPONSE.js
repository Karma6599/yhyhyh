//============================================================================//
// DEBUG MENU BUTTON: SHOW_BSD_API_RESPONSE
// In-game label: "SHOW_BSD_API_RESPONSE"
// Menu: Debug Menu → TOP-LEVEL category
// Visibility: always visible  (checkbox — state persists)
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Checkbox: dump every BSD+ API response to the debug log. Config key ShowBSDApiResponse, default false. Implementation: network/bsd-api.js (module 7474).
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   DebugMenu.createTopLevelButtons() — checkbox bound to Config.config.ShowBSDApiResponse (debug logging builds only)
