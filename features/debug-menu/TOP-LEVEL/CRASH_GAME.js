//============================================================================//
// DEBUG MENU BUTTON: CRASH_GAME
// In-game label: "CRASH_GAME"
// Menu: Debug Menu → TOP-LEVEL category
// Visibility: always visible
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Nulls a native pointer to crash the client on purpose (exception-report testing).
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   GameMain.getInstance().writePointer(NULL)
