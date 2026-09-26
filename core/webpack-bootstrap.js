// ============================================================ //
// BSD Brawl plus-channel main script — RECONSTRUCTED bootstrap
// Module bodies: ./modules/*.js (433 webpack modules)
// Port/network analysis: see MODULES.md
// ============================================================ //

(function IIFE() {
    var __webpack_modules__ = {};   // populated by modules/*.js
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = (__webpack_module_cache__[moduleId] = { exports: {} });
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }

    // expose require for module files (concatenation order: modules first)
    var __webpack_exports__ = __webpack_require__(8156);   // entry: 8156 (Init)
})();
