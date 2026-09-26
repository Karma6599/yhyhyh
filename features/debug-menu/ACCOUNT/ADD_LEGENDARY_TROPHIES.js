//============================================================================//
// DEBUG MENU BUTTON: ADD_LEGENDARY_TROPHIES
// In-game label: "ADD_LEGENDARY_TROPHIES"
// Menu: Debug Menu → ACCOUNT category
// Visibility: always visible
// Action: sends EDebugAction.ADD_SCORE with int param 100 via LogicDebugButtonMessage (module 8087)
// Native debug action ADD_SCORE with a resource floater (type 28).
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   LogicDebugButtonMessage.executeNativeWithFloater(EDebugAction.ADD_SCORE, 100, 28)
