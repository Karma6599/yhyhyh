//============================================================================//
// MOD FEATURE: Custom map marks
// Custom map marks / pings.
//============================================================================//

// --------------------- MODULE 7146 — CustomMarks ---------------------


// ============================================================ //
// webpack module 7146  —  CustomMarks
// exports: CustomMarks
// deps: 884 (LogicRandom)
// ============================================================ //

__webpack_modules__[7146] = function CustomMarks_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicRandom, CustomMarks, <class_fields_init>, CustomMarks;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CustomMarks = undefined;
        LogicRandom = __webpack_require__(884);
        <class_fields_init> = undefined;
        CustomMarks;
        class CustomMarks {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9d2b8 (open) */
}
            getMarkDefinitionFor (tag) {
        if (!(CustomMarks).MARK_DEFINITIONS[(tag).replace("#", "")]) {
            (CustomMarks).MARK_DEFINITIONS[(tag).replace("#", "")];
            return null;
        } /* if 0x9d1de (open) */
}
            getTitleDefinitionFor (tag) {
        if (!(CustomMarks).TITLE_DEFINITIONS[(tag).replace("#", "")]) {
            (CustomMarks).TITLE_DEFINITIONS[(tag).replace("#", "")];
            return null;
        } /* if 0x9d218 (open) */
}
            hasMark (tag) {
        return ((CustomMarks).MARK_DEFINITIONS[(tag).replace("#", "")] !== undefined);
}
            hasTitle (tag) {
        return ((CustomMarks).TITLE_DEFINITIONS[(tag).replace("#", "")] !== undefined);
}
        }
        CustomMarks = CustomMarks = CustomMarks;
        exports.CustomMarks = CustomMarks;
        CustomMarks.MARK_DEFINITIONS = { "9P0R2YC2Q": "<cd9adb3>[<cdd9991>m<ce18670>o<ce18670>e<cd89184>]</c>", "2RGGJPLQU": "<c0fc2f0>[<c1eb0f4>D<c2e9ef7>A<c3d8cfb>r<c4d7bff>k<c3d86ff>S<c2e92ff>i<c1e9dff>d<c0fa9ff>e<c04b5ff>]</c>", "8PLVR29JP": "<cb1cde3>[<ca3c7e3>B<c94c1e3>S<c86bbe4>D<c86bbe4>+<c83b3e4>+<c81abe4>]</c>", "8GCQYL2VL": "<cffd5b5>[<cfe9c5f>B<cfea87a>S<cffb98e>D<cffd5b5>+<cffebd4>+<cffd5b5>]</c>", QUJPVU0L: "<cf2e842>[<ce5e93c>L<cd9eb37>V<cd9eb37>1<ce1ef61>]</c>", PQL90VLR9: "<cf2e842>[<ce5e93c>L<cd9eb37>V<cd9eb37>1<ce1ef61>]</c>" };
        CustomMarks.TITLE_DEFINITIONS = { "9P0R2YC2Q": "Анимешка", "2RGGJPLQU": ("Выпил ").concat(((LogicRandom).LogicRandom).random(4000, 9000), " литров пива") };
        return;
};

