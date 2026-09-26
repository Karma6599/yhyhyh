//============================================================================//
// MOD FEATURE: Hashtag code generator
// Player hashtag code generator tool.
//============================================================================//

// --------------------- MODULE 4541 — HashTagCodeGenerator ---------------------


// ============================================================ //
// webpack module 4541  —  HashTagCodeGenerator
// exports: HashTagCodeGenerator
// deps: 2743 (LogicLong), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4541] = function HashTagCodeGenerator_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicLong, StringObject, HashTagCodeGenerator_toCode, HashTagCodeGenerator, <class_fields_init>, HashTagCodeGenerator;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HashTagCodeGenerator = undefined;
        Libg = __webpack_require__(9878);
        LogicLong = __webpack_require__(2743);
        StringObject = __webpack_require__(7535);
        HashTagCodeGenerator_toCode = new NativeFunction(((Libg).Libg).offset(16573488, 0), "pointer", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        HashTagCodeGenerator;
        class HashTagCodeGenerator {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5f76f (open) */
}
            convertLongToPlayerTag (logicLong) {
    var highID, lowID, fullID, tag, conversionCharIndex;
        if ((logicLong instanceof (LogicLong).LogicLong)) {
        } /* if 0x5f505 */
        /* jump -> 0x5f50e */
        highID = (logicLong).readInt();
        if ((logicLong instanceof (LogicLong).LogicLong)) {
        } /* if 0x5f526 */
        /* jump -> 0x5f538 */
        lowID = ((logicLong).add(4)).readInt();
        fullID = (((int64(lowID)).shl(8)).add(highID)).toNumber();
        tag = "";
        while ((fullID > 0)) {
            conversionCharIndex = (fullID % (this).CONVERSION_CHARS.length);
            tag = (tag + (this).CONVERSION_CHARS[conversionCharIndex]);
            fullID = (fullID - conversionCharIndex);
            fullID = (fullID / (this).CONVERSION_CHARS.length);
        } /* while 0x5f5ad */
        return (((tag).split("")).reverse()).join("");
}
            convertPlayerTagToLong (tag) {
    var tagArray, id, i, character, charIndex;
        tagArray = ((tag).toUpperCase()).split("");
        id = 0;
        if ((tagArray[0] === "#")) {
            (tagArray).shift();
        } /* if 0x5f644 */
        i = 0;
        while ((i < tagArray.length)) {
            character = tagArray[i];
            charIndex = ((this).CONVERSION_CHARS).indexOf(character);
            id = (id * (this).CONVERSION_CHARS.length);
            id = (id + charIndex);
            i = ((i) + 1);
            (i++);
        } /* while 0x5f69c */
        return new (LogicLong).LogicLong((id % 256), ((id - (id % 256)) / 256));
}
            patch () {
        return;
}
        }
        HashTagCodeGenerator = v8 = HashTagCodeGenerator;
        exports.HashTagCodeGenerator = HashTagCodeGenerator;
        HashTagCodeGenerator.CONVERSION_CHARS = "0289PYLQGRJCUV";
        return;
};

