//============================================================================//
// DEBUG MENU BUTTON: ADD_1_WINSTREAK
// In-game label: "ADD_1_WINSTREAK"
// Menu: Debug Menu → ACCOUNT category
// Visibility: always visible
// Action: sends debug action #210 (int param 1) to the server via LogicDebugButtonMessage (messages/game-protocol.js#8087)
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   { label: "ADD_1_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 210, intParameter: 1, 48: { label: "ADD_10_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 210, intParameter: 10, 47: { label: "ADD_100_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 210, intParameter: 100, 46: { label: "REMOVE_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 211, intParameter: -1, 44: [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }], 45: { label: "CLAIM_TROPHY_ROAD", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 129, intParameter: 1000 }, callback: { label: "BRAWL_TV", category: ((DebugMenuCategory).EDebugCategory).UTILS } }, callback: { label: "PREV_THEME", category: ((DebugMenuCategory).EDebugCategory).UTILS } }, callback: { label: "NEXT_THEME", category: ((DebugMenuCategory).EDebugCategory).UTILS } }, callback: { label: "SET_CUSTOM_BACKGROUND", category: ((DebugMenuCategory).EDebugCategory).UTILS }, mode: "home" }
