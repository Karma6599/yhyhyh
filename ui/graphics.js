//============================================================================//// GRAPHICS / RENDERING KIT// merged webpack modules: 1191 DisplayObject, 612 MovieClip, 3217 Sprite, 1721 ColorTransform, 602 Matrix2x3, 8632 Stage, 7404 MovieClipHelper, 9878 Libg, 6551 EnvironmentRenderer, 3378 SceneRenderer, 7518 Character3D//============================================================================//
// --------------------- MODULE 1191 — DisplayObject ---------------------


// ============================================================ //
// webpack module 1191  —  DisplayObject
// exports: DisplayObject
// deps: 602 (Matrix2x3), 1588 (LogicMemory), 1721 (ColorTransform), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1191] = function DisplayObject_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Matrix2x3, ColorTransform, DisplayObject_setSize, DisplayObject_removeFromParent, DisplayObject_getBounds, DisplayObject_setWidth, DisplayObject_setHeight, activeOffset, colorOffset, matrix2x3Offset, xOffset, yOffset, parentOffset, setXYOffset, setScaleOffset, setScaleXOffset, setScaleYOffset, getScaleXOffset, getScaleYOffset, setAlphaOffset, getWidthOffset, getHeightOffset, setVisibleRecursiveOffset, isMovieClipOffset, isTextFieldOffset, isSpriteOffset, isShapeOffset, isScrollAreaOffset, isMovieClipModifierOffset, isCustomButtonOffset, isGUIContainerOffset, isSprite3DOffset, DisplayObject, <class_fields_init>, DisplayObject;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DisplayObject = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Matrix2x3 = __webpack_require__(602);
        ColorTransform = __webpack_require__(1721);
        DisplayObject_setSize = new NativeFunction(((Libg).Libg).offset(5853580, 0), "void", ["pointer", "float", "float"]);
        DisplayObject_removeFromParent = new NativeFunction(((Libg).Libg).offset(5853740, 0), "void", ["pointer"]);
        DisplayObject_getBounds = new NativeFunction(((Libg).Libg).offset(5852968, 0), "pointer", ["pointer", "pointer", "pointer", "int"]);
        DisplayObject_setWidth = new NativeFunction(((Libg).Libg).offset(5854268, 0), "void", ["pointer", "float"]);
        DisplayObject_setHeight = new NativeFunction(((Libg).Libg).offset(5854176, 0), "void", ["pointer", "float"]);
        activeOffset = ((LogicMemory).LogicMemory).offset(8);
        colorOffset = ((LogicMemory).LogicMemory).offset(9);
        matrix2x3Offset = ((LogicMemory).LogicMemory).offset(16);
        xOffset = ((LogicMemory).LogicMemory).offset(32);
        yOffset = ((LogicMemory).LogicMemory).offset(36);
        parentOffset = ((LogicMemory).LogicMemory).offset(56, 64);
        setXYOffset = (5 * (Process).pointerSize);
        setScaleOffset = (6 * (Process).pointerSize);
        setScaleXOffset = (7 * (Process).pointerSize);
        setScaleYOffset = (8 * (Process).pointerSize);
        getScaleXOffset = (9 * (Process).pointerSize);
        getScaleYOffset = (10 * (Process).pointerSize);
        setAlphaOffset = (11 * (Process).pointerSize);
        getWidthOffset = (12 * (Process).pointerSize);
        getHeightOffset = (13 * (Process).pointerSize);
        setVisibleRecursiveOffset = (15 * (Process).pointerSize);
        isMovieClipOffset = (16 * (Process).pointerSize);
        isTextFieldOffset = (17 * (Process).pointerSize);
        isSpriteOffset = (18 * (Process).pointerSize);
        isShapeOffset = (19 * (Process).pointerSize);
        isScrollAreaOffset = (20 * (Process).pointerSize);
        isMovieClipModifierOffset = (21 * (Process).pointerSize);
        isCustomButtonOffset = (22 * (Process).pointerSize);
        isGUIContainerOffset = (23 * (Process).pointerSize);
        isSprite3DOffset = (24 * (Process).pointerSize);
        static get vtable () {
        return ((this).instance).readPointer();
};
        static get width () {
        return new NativeFunction(((((this).instance).readPointer()).add(getWidthOffset)).readPointer(), "float", ["pointer"])((this).instance);
};
        static get height () {
        return new NativeFunction(((((this).instance).readPointer()).add(getHeightOffset)).readPointer(), "float", ["pointer"])((this).instance);
};
        static set x (x) {
        return;
};
        static get x () {
        return (((this).instance).add(xOffset)).readFloat();
};
        static set y (y) {
        return;
};
        static get y () {
        return (((this).instance).add(yOffset)).readFloat();
};
        static get matrix2x3 () {
        return new (Matrix2x3).Matrix2x3(((this).instance).add(matrix2x3Offset));
};
        static setXY (x, y) {
        new NativeFunction(((((this).instance).readPointer()).add(setXYOffset)).readPointer(), "void", ["pointer", "float", "float"])((this).instance, x, y);
        return this;
};
        static setWidth (width) {
        return DisplayObject_setWidth((this).instance, width);
};
        static setHeight (height) {
        return DisplayObject_setHeight((this).instance, height);
};
        static shiftX (offset) {
        this.x = ((this).x + offset);
        return;
};
        static shiftY (offset) {
        this.y = ((this).y - offset);
        return;
};
        static set visibility (isVisible) {
        return;
};
        static get visibility () {
        return (((this).instance).add(activeOffset)).readU8();
};
        static set alpha (alpha) {
        (this).colorTransform.alpha = alpha;
        return;
};
        static get colorTransform () {
        if ((!(this)._color)) {
            this._color = new (ColorTransform).ColorTransform(((this).instance).add(colorOffset));
        } /* if 0x75b47 */
        return (this)._color;
};
        static setSize (height, width) {
        DisplayObject_setSize((this).instance, height, width);
        return this;
};
        static setPixelSnappedXY (x, y) {
        return (this).setXY((Math).floor(x), (Math).floor(y));
};
        static rotate (angle) {
    var scaleX, scaleY, angle, scaleX, scaleY;
        scaleX = this;
        scaleX = angle;
        if (((scaleX) === undefined)) {
            scaleY = scaleX = 1;
        } /* if 0x75c1a */
        if (((scaleY) === undefined)) {
            angle = scaleY = 1;
        } /* if 0x75c23 */
        return;
};
        static set scale (scale) {
        (this).matrix2x3.scaleX = scale;
        (this).matrix2x3.scaleY = scale;
        return;
};
        static set scaleX (scale) {
        (this).matrix2x3.scaleX = scale;
        return;
};
        static set scaleY (scale) {
        (this).matrix2x3.scaleY = scale;
        return;
};
        static get scaleX () {
        return ((this).matrix2x3).scaleX;
};
        static get scaleY () {
        return ((this).matrix2x3).scaleY;
};
        static get parent () {
        return (((this).instance).add(parentOffset)).readPointer();
};
        static getBounds (coordSpace, outRect) {
        DisplayObject_getBounds((this).instance, coordSpace, outRect, 0);
        return outRect;
};
        static get type () {
        if ((this).isMovieClip()) {
            return "MovieClip";
        } /* if 0x75da5 */
        if ((this).isTextField()) {
            return "TextField";
        } /* if 0x75db6 */
        if ((this).isSprite()) {
            return "Sprite";
        } /* if 0x75dc7 */
        if ((this).isShape()) {
            return "Shape";
        } /* if 0x75dd8 */
        if ((this).isScrollArea()) {
            return "ScrollArea";
        } /* if 0x75de9 */
        if ((this).isMovieClipModifier()) {
            return "MovieClipModifier";
        } /* if 0x75dfa */
        if ((this).isCustomButton()) {
            return "CustomButton";
        } /* if 0x75e0b */
        if ((this).isGUIContainer()) {
            return "GUIContainer";
        } /* if 0x75e1c */
        if ((this).isSprite3D()) {
            return "Sprite3D";
            return;
        } /* if 0x75e2d (open) */
};
        static isMovieClip () {
    var DisplayObject_isMovieClip;
        DisplayObject_isMovieClip = new NativeFunction(((((this).instance).readPointer()).add(isMovieClipOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isMovieClip((this).instance);
};
        static isTextField () {
    var DisplayObject_isTextField;
        DisplayObject_isTextField = new NativeFunction(((((this).instance).readPointer()).add(isTextFieldOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isTextField((this).instance);
};
        static isSprite () {
    var DisplayObject_isSprite;
        DisplayObject_isSprite = new NativeFunction(((((this).instance).readPointer()).add(isSpriteOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isSprite((this).instance);
};
        static isShape () {
    var DisplayObject_isShape;
        DisplayObject_isShape = new NativeFunction(((((this).instance).readPointer()).add(isShapeOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isShape((this).instance);
};
        static isScrollArea () {
    var DisplayObject_isScrollArea;
        DisplayObject_isScrollArea = new NativeFunction(((((this).instance).readPointer()).add(isScrollAreaOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isScrollArea((this).instance);
};
        static isMovieClipModifier () {
    var DisplayObject_isMovieClipModifier;
        DisplayObject_isMovieClipModifier = new NativeFunction(((((this).instance).readPointer()).add(isMovieClipModifierOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isMovieClipModifier((this).instance);
};
        static isCustomButton () {
    var DisplayObject_isCustomButton;
        DisplayObject_isCustomButton = new NativeFunction(((((this).instance).readPointer()).add(isCustomButtonOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isCustomButton((this).instance);
};
        static isGUIContainer () {
    var DisplayObject_isGUIContainer;
        DisplayObject_isGUIContainer = new NativeFunction(((((this).instance).readPointer()).add(isGUIContainerOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isGUIContainer((this).instance);
};
        static isSprite3D () {
    var DisplayObject_isSprite3D;
        DisplayObject_isSprite3D = new NativeFunction(((((this).instance).readPointer()).add(isSprite3DOffset)).readPointer(), "int", ["pointer"]);
        return DisplayObject_isSprite3D((this).instance);
};
        static isNull () {
        return ((this).instance).isNull();
};
        static removeFromParent () {
        return;
};
        static destruct () {
        return;
};
        <class_fields_init> = undefined;
        DisplayObject;
        class DisplayObject {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x75727 */
        this.instance = instance;
        return;
}
        }
        DisplayObject = DisplayObject_setHeight = DisplayObject;
        exports.DisplayObject = DisplayObject;
        return;
};

// --------------------- MODULE 612 — MovieClip ---------------------


// ============================================================ //
// webpack module 612  —  MovieClip
// exports: MovieClip
// deps: 1191 (DisplayObject), 1588 (LogicMemory), 3015 (TextField), 3210 (GUIContainer), 3217 (Sprite), 3380 (Logcat), 4272 (EDebugger), 6851 (CustomButton), 9878 (Libg)
// ============================================================ //

__webpack_modules__[612] = function MovieClip_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Sprite, EDebugger, DisplayObject, TextField, LogicMemory, Logcat, GUIContainer, CustomButton, MovieClip_gotoAndStopFrameIndex, MovieClip_setInteractiveRecursive, exportNameOffset, childArrayOffset, childNameArrayOffset, totalFramesAmount, childCountOffset, MovieClip, <class_fields_init>, MovieClip;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MovieClip = undefined;
        Libg = __webpack_require__(9878);
        Sprite = __webpack_require__(3217);
        EDebugger = __webpack_require__(4272);
        DisplayObject = __webpack_require__(1191);
        TextField = __webpack_require__(3015);
        LogicMemory = __webpack_require__(1588);
        Logcat = __webpack_require__(3380);
        GUIContainer = __webpack_require__(3210);
        CustomButton = __webpack_require__(6851);
        MovieClip_gotoAndStopFrameIndex = new NativeFunction(((Libg).Libg).offset(6125536, 0), "void", ["pointer", "int"]);
        MovieClip_setInteractiveRecursive = new NativeFunction(((Libg).Libg).offset(6127284, 0), "void", ["pointer", "int"]);
        exportNameOffset = ((LogicMemory).LogicMemory).offset(128);
        childArrayOffset = ((LogicMemory).LogicMemory).offset(144);
        childNameArrayOffset = ((LogicMemory).LogicMemory).offset(152);
        totalFramesAmount = ((LogicMemory).LogicMemory).offset(190);
        childCountOffset = ((LogicMemory).LogicMemory).offset(192);
        static getChildByName (name) {
    var foundIdx, child;
        foundIdx = (MovieClip).findChildIndexByName((this).instance, name);
        if ((foundIdx < 0)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, ("No child with this name! (").concat(name, ")"));
            return null;
        } /* if 0x78cb7 */
        child = (((((this).instance).add(childArrayOffset)).readPointer()).add((foundIdx * (Process).pointerSize))).readPointer();
        if ((child).isNull()) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "MovieClip is null!");
            return null;
        } /* if 0x78d21 */
        return (MovieClip).castInstanceToClass(child);
};
        static get exportName () {
    var exportNamePtr;
        exportNamePtr = (((this).instance).add(exportNameOffset)).readPointer();
        if ((exportNamePtr).isNull()) {
            return "";
        } /* if 0x78d88 */
        return (exportNamePtr).readUtf8String();
};
        static get totalFramesAmount () {
        return (((this).instance).add(totalFramesAmount)).readShort();
};
        static getNameOfChild (child) {
    var childCount, nameList, children, i, currentChildPtr, nameStrPtr, e;
        childCount = (this).getChildCount();
        if ((childCount <= 0)) {
            return "";
        } /* if 0x78e2a */
        nameList = (this).getChildNameList();
        children = (this).getChildArray();
        if (!(nameList).isNull()) {
            (nameList).isNull();
            if ((children).isNull()) {
                return "";
            } /* if 0x78e5e */
        } /* if 0x78e5a */
        i = 0;
        while ((i < childCount)) {
            currentChildPtr = ((children).add((i * (Process).pointerSize))).readPointer();
            if (!(!(currentChildPtr).equals((child).instance))) {
                nameStrPtr = ((nameList).add((i * (Process).pointerSize))).readPointer();
                if (!(nameStrPtr).isNull()) {
                    /* CATCH -> 0x78ef6 (try region) */
                    if (!(nameStrPtr).readUtf8String()) {
                        (nameStrPtr).readUtf8String();
                    } /* if 0x78ef1 */
                    return "";
                    e = currentChildPtr = nameStrPtr = i = childCount = nameList = children = <underflow>;
                    /* CATCH -> 0x78f00 (try region) */
                    return "";
                    throw <underflow>;
                } /* if 0x78efe */
            } /* if 0x78efe */
            i = ((i) + 1);
            (i++);
            return "";
        } /* while 0x78f0c (open) */
};
        static getMovieClipByName (movieClipName) {
        return (MovieClip).getMovieClipByName((this).instance, movieClipName);
};
        static getTextFieldByName (childTextFieldName) {
        return (MovieClip).getTextFieldByName((this).instance, childTextFieldName);
};
        static getChildCount () {
        return (((this).instance).add(childCountOffset)).readS16();
};
        static getChildArray () {
        return (((this).instance).add(childArrayOffset)).readPointer();
};
        static getChildNameList () {
        return (((this).instance).add(childNameArrayOffset)).readPointer();
};
        static gotoAndStopFrameIndex (frameIndex) {
        MovieClip_gotoAndStopFrameIndex((this).instance, frameIndex);
        return this;
};
        static setInteractiveRecursive (int) {
        return MovieClip_setInteractiveRecursive((this).instance, int);
};
        static setText (clipName, text) {
    var textField;
        textField = (this).getTextFieldByName(clipName);
        /* is_null  */
        if (textField) {
            return this;
        } /* if 0x794ff */
        textField.text = text;
        return this;
};
        static getChildById (index) {
    var child;
        child = (((((this).instance).add(childArrayOffset)).readPointer()).add((index * (Process).pointerSize))).readPointer();
        if ((child).isNull()) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Child is null!");
            return null;
        } /* if 0x795a7 */
        return (MovieClip).castInstanceToClass(child);
};
        <class_fields_init> = undefined;
        MovieClip;
        class MovieClip extends <class_fields_init> = (Sprite).Sprite {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x79791 */
        return this;
}
            getMovieClipByName (parentMovieClip, childMovieClipName) {
    var foundIdx, movieClipArray, movieClip;
        foundIdx = (MovieClip).findChildIndexByName(parentMovieClip, childMovieClipName);
        if ((foundIdx < 0)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, ("No child with this name! (").concat(childMovieClipName, ")"));
            return null;
        } /* if 0x78fac */
        movieClipArray = ((parentMovieClip).add(childArrayOffset)).readPointer();
        if ((movieClipArray).isNull()) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "MovieClip List is null!");
            return null;
        } /* if 0x78ff3 */
        movieClip = ((movieClipArray).add((foundIdx * (Process).pointerSize))).readPointer();
        if ((movieClip).isNull()) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "MovieClip is null!");
            return null;
        } /* if 0x79047 */
        if ((!(new (DisplayObject).DisplayObject(movieClip)).isMovieClip())) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Not a MovieClip");
        } /* if 0x79084 */
        return new MovieClip(movieClip);
}
            getTextFieldByName (movieClipPtr, childTextFieldName) {
    var foundIdx, textFieldList, textField, displayObject;
        foundIdx = (MovieClip).findChildIndexByName(movieClipPtr, childTextFieldName);
        if ((foundIdx < 0)) {
            return null;
        } /* if 0x79108 */
        textFieldList = ((movieClipPtr).add(childArrayOffset)).readPointer();
        if ((textFieldList).isNull()) {
            ((Logcat).Logcat).logError("TextField List is null!");
            return null;
        } /* if 0x79142 */
        textField = ((textFieldList).add((foundIdx * (Process).pointerSize))).readPointer();
        if ((textField).isNull()) {
            ((Logcat).Logcat).logError("TextField is null!");
            return null;
        } /* if 0x79189 */
        displayObject = new (DisplayObject).DisplayObject(textField);
        if ((((displayObject).isTextField() & 1) === 0)) {
            ((Logcat).Logcat).logError("Not a TextField");
            return null;
        } /* if 0x791c2 */
        return new (TextField).TextField(textField);
}
            findChildIndexByName (movieClipPtr, name) {
    var childNameList, childCount, normalizedName, i, namePtr, candidate;
        childNameList = ((movieClipPtr).add(childNameArrayOffset)).readPointer();
        if ((childNameList).isNull()) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Child Name List is null");
            return -1;
        } /* if 0x7927b */
        childCount = ((movieClipPtr).add(childCountOffset)).readS16();
        if ((childCount <= 0)) {
            if ((childCount === 0)) {
            } /* if 0x792bf */
            /* jump -> 0x792c4 */
            ((EDebugger).EDebugger).ERROR("Child count equals zero!", "Child count is lower than zero!");
            return -1;
        } /* if 0x792ca */
        normalizedName = (name).toLowerCase();
        i = 0;
        while ((i < childCount)) {
            namePtr = ((childNameList).add((i * (Process).pointerSize))).readPointer();
            if (!(namePtr).isNull()) {
                candidate = (namePtr).readUtf8String();
                /* is_null  */
                if (!candidate) {
                    if (((candidate).toLowerCase() === normalizedName)) {
                        return i;
                    } /* if 0x79340 */
                } /* if 0x79340 */
            } /* if 0x79340 */
            i = ((i) + 1);
            (i++);
        } /* while 0x7934a */
        return -1;
}
            castInstanceToClass (instance) {
    var displayObject;
        displayObject = new (DisplayObject).DisplayObject(instance);
        if (((displayObject).type === "MovieClip")) {
            return new MovieClip((displayObject).instance);
        } /* if 0x79623 */
        if (((displayObject).type === "TextField")) {
            return new (TextField).TextField((displayObject).instance);
        } /* if 0x79641 */
        if (((displayObject).type === "Sprite")) {
            return new (Sprite).Sprite((displayObject).instance);
        } /* if 0x7965f */
        if (((displayObject).type === "Shape")) {
            return new (DisplayObject).DisplayObject((displayObject).instance);
        } /* if 0x7967d */
        if (((displayObject).type === "ScrollArea")) {
            return new (DisplayObject).DisplayObject((displayObject).instance);
        } /* if 0x7969b */
        if (((displayObject).type === "MovieClipModifier")) {
            return new (DisplayObject).DisplayObject((displayObject).instance);
        } /* if 0x796b9 */
        if (((displayObject).type === "CustomButton")) {
            return new (CustomButton).CustomButton((displayObject).instance);
        } /* if 0x796d7 */
        if (((displayObject).type === "GUIContainer")) {
            return new (GUIContainer).GUIContainer((displayObject).instance);
        } /* if 0x796f5 */
        if (((displayObject).type === "Sprite3D")) {
            return new (DisplayObject).DisplayObject((displayObject).instance);
        } /* if 0x79713 */
        return new (DisplayObject).DisplayObject((displayObject).instance);
}
        }
        MovieClip = CustomButton = MovieClip;
        exports.MovieClip = MovieClip;
        return;
};

// --------------------- MODULE 3217 — Sprite ---------------------


// ============================================================ //
// webpack module 3217  —  Sprite
// exports: Sprite, Sprite_removeChild
// deps: 1191 (DisplayObject), 1588 (LogicMemory), 1978 (Libc), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3217] = function Sprite_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Libg, LogicMemory, DisplayObject, Sprite_Sprite, Sprite_addChildAt, childCountOffset, childArrayOffset, allocSize, Sprite, <class_fields_init>, Sprite;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Sprite_removeChild = undefined;
        undefined.Sprite = exports;
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        DisplayObject = __webpack_require__(1191);
        Sprite_Sprite = new NativeFunction(((Libg).Libg).offset(5847748, 0), "void", ["pointer", "int16"]);
        exports.Sprite_removeChild = new NativeFunction(((Libg).Libg).offset(5849028, 0), "void", ["pointer", "pointer"]);
        Sprite_addChildAt = new NativeFunction(((Libg).Libg).offset(5848296, 0), "void", ["pointer", "pointer", "int"]);
        childCountOffset = ((LogicMemory).LogicMemory).offset(78);
        childArrayOffset = ((LogicMemory).LogicMemory).offset(80);
        allocSize = ((LogicMemory).LogicMemory).offset(128);
        static addChild (child) {
        return (Sprite).addChild((this).instance, child);
};
        static get childCount () {
        return (((this).instance).add(childCountOffset)).readU16();
};
        static getChildAt (index) {
    var arrayPtr, childPtr;
        if (((this).childCount === 0)) {
            return null;
        } /* if 0x7b6af */
        arrayPtr = (((this).instance).add(childArrayOffset)).readPointer();
        childPtr = ((arrayPtr).add((index * (Process).pointerSize))).readPointer();
        return childPtr;
};
        static addChildAt (child, at) {
        if ((((child).instance) == null)) {
        } /* if 0x7b791 */
        return;
};
        static removeChild (child) {
        if ((((child).instance) == null)) {
        } /* if 0x7b7ce */
        return;
};
        <class_fields_init> = undefined;
        Sprite;
        class Sprite extends <class_fields_init> = (DisplayObject).DisplayObject {
            constructor (instance) {
    var instPtr, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if ((instance instanceof NativePointer)) {
            this = super(instance);
            if (<class_fields_init>) {
            } /* if 0x7b5c0 */
            return this;
        } /* if 0x7b5c6 */
        instPtr = ((Libc).Libc).malloc(allocSize);
        Sprite_Sprite(instPtr, instance);
        this = super(instPtr);
        if (<class_fields_init>) {
        } /* if 0x7b5fd */
        return this;
}
            addChild (instance, child) {
    var childPointer, childCount;
        if ((((child).instance) == null)) {
            childPointer = child;
        } /* if 0x7b731 */
        childCount = ((instance).add(childCountOffset)).readU16();
        return Sprite_addChildAt(instance, childPointer, childCount);
}
        }
        Sprite = allocSize = Sprite;
        exports.Sprite = Sprite;
        return;
};

// --------------------- MODULE 1721 — ColorTransform ---------------------


// ============================================================ //
// webpack module 1721  —  ColorTransform
// exports: ColorTransform
// deps: 1588 (LogicMemory)
// ============================================================ //

__webpack_modules__[1721] = function ColorTransform_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, color1RedOffset, color1GreenOffset, color1BlueOffset, alphaOffset, color2RedOffset, color2GreenOffset, color2BlueOffset, ColorTransform, <class_fields_init>, ColorTransform;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ColorTransform = undefined;
        LogicMemory = __webpack_require__(1588);
        color1RedOffset = ((LogicMemory).LogicMemory).offset(9);
        color1GreenOffset = ((LogicMemory).LogicMemory).offset(10);
        color1BlueOffset = ((LogicMemory).LogicMemory).offset(11);
        alphaOffset = ((LogicMemory).LogicMemory).offset(12);
        color2RedOffset = ((LogicMemory).LogicMemory).offset(13);
        color2GreenOffset = ((LogicMemory).LogicMemory).offset(14);
        color2BlueOffset = ((LogicMemory).LogicMemory).offset(15);
        static get c1r () {
        return ((this)._instance).readU8();
};
        static set c1r (value) {
        return;
};
        static get c1g () {
        return (((this)._instance).add(1)).readU8();
};
        static set c1g (value) {
        return;
};
        static get c1b () {
        return (((this)._instance).add(2)).readU8();
};
        static set c1b (value) {
        return;
};
        static get alpha () {
        return (((this)._instance).add(3)).readU8();
};
        static set alpha (value) {
        return;
};
        static get c2r () {
        return (((this)._instance).add(4)).readU8();
};
        static set c2r (value) {
        return;
};
        static get c2g () {
        return (((this)._instance).add(5)).readU8();
};
        static set c2g (value) {
        return;
};
        static get c2b () {
        return (((this)._instance).add(6)).readU8();
};
        static set c2b (value) {
        return;
};
        static set red (value) {
        this.c1r = value;
        this.c2r = value;
        return;
};
        static set r (value) {
        this.red = value;
        return;
};
        static set green (value) {
        this.c1g = value;
        this.c2g = value;
        return;
};
        static set g (value) {
        this.green = value;
        return;
};
        static set blue (value) {
        this.c1b = value;
        this.c2b = value;
        return;
};
        static set b (value) {
        this.blue = value;
        return;
};
        <class_fields_init> = undefined;
        ColorTransform;
        class ColorTransform {
            constructor (_instance) {
        if (<class_fields_init>) {
        } /* if 0x73bec */
        this._instance = _instance;
        return;
}
            setColor (displayObject, red, green, blue, alpha) {
        ((displayObject).add(color1RedOffset)).writeU8(red);
        ((displayObject).add(color1GreenOffset)).writeU8(green);
        ((displayObject).add(color1BlueOffset)).writeU8(blue);
        ((displayObject).add(alphaOffset)).writeU8(alpha);
        ((displayObject).add(color2RedOffset)).writeU8(red);
        ((displayObject).add(color2GreenOffset)).writeU8(green);
        return;
}
            setColorDual (displayObject, color1Red, color1Green, color1Blue, alpha, color2Red, color2Green, color2Blue) {
        ((displayObject).add(color1RedOffset)).writeU8(color1Red);
        ((displayObject).add(color1GreenOffset)).writeU8(color1Green);
        ((displayObject).add(color1BlueOffset)).writeU8(color1Blue);
        ((displayObject).add(alphaOffset)).writeU8(alpha);
        ((displayObject).add(color2RedOffset)).writeU8(color2Red);
        ((displayObject).add(color2GreenOffset)).writeU8(color2Green);
        return;
}
        }
        ColorTransform = ColorTransform = ColorTransform;
        exports.ColorTransform = ColorTransform;
        return;
};

// --------------------- MODULE 602 — Matrix2x3 ---------------------


// ============================================================ //
// webpack module 602  —  Matrix2x3
// exports: Matrix2x3
// ============================================================ //

__webpack_modules__[602] = function Matrix2x3_factory(__unused_webpack_module, exports) {
    var Matrix2x3, <class_fields_init>, Matrix2x3;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Matrix2x3 = undefined;
        static get scaleX () {
        return ((this).instance).readFloat();
};
        static set scaleX (value) {
        return;
};
        static get rotateSkew0 () {
        return (((this).instance).add(4)).readFloat();
};
        static set rotateSkew0 (value) {
        return;
};
        static get rotateSkew1 () {
        return (((this).instance).add(8)).readFloat();
};
        static set rotateSkew1 (value) {
        return;
};
        static get scaleY () {
        return (((this).instance).add(12)).readFloat();
};
        static set scaleY (value) {
        return;
};
        static get translateX () {
        return (((this).instance).add(16)).readFloat();
};
        static set translateX (value) {
        return;
};
        static get translateY () {
        return (((this).instance).add(20)).readFloat();
};
        static set translateY (value) {
        return;
};
        static rotate (angle) {
    var scaleX, scaleY, angle, scaleX, scaleY, radians, sinx, cosx, v7, v8, result;
        v8 = this;
        scaleX = angle;
        if (((scaleX) === undefined)) {
            scaleY = scaleX = 1;
        } /* if 0x7f376 */
        if (((scaleY) === undefined)) {
            angle = scaleY = 1;
        } /* if 0x7f37f */
        scaleX = (angle * 0.017453);
        scaleY = (Math).sin(scaleX);
        radians = (Math).cos(scaleX);
        sinx = (scaleY * scaleY);
        cosx = (-(scaleX * scaleY));
        v7 = (radians * scaleY);
        v8.scaleX = (radians * scaleX);
        v8.rotateSkew0 = sinx;
        v8.rotateSkew1 = cosx;
        v8.scaleY = v7;
        return;
};
        <class_fields_init> = undefined;
        Matrix2x3;
        class Matrix2x3 {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x7f0a5 */
        this.instance = instance;
        return;
}
        }
        Matrix2x3 = Matrix2x3 = Matrix2x3;
        exports.Matrix2x3 = Matrix2x3;
        return;
};

// --------------------- MODULE 8632 — Stage ---------------------


// ============================================================ //
// webpack module 8632  —  Stage
// exports: Stage
// deps: 1588 (LogicMemory), 3217 (Sprite), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8632] = function Stage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Sprite, LogicMemory, Stage_instanceAddr, Stage_getObjectsUnderPointAddr, Stage_getObjectsUnderPoint, spriteOffset, pointSizeOffset, xOffset, yOffset, leftSafeMargin, rightSafeMargin, topSafeMargin, bottomSafeMargin, Stage, <class_fields_init>, Stage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Stage = undefined;
        Libg = __webpack_require__(9878);
        Sprite = __webpack_require__(3217);
        LogicMemory = __webpack_require__(1588);
        Stage_instanceAddr = ((Libg).Libg).offset(19835424, 0);
        Stage_getObjectsUnderPointAddr = ((Libg).Libg).offset(5871332, 0);
        Stage_getObjectsUnderPoint = new NativeFunction(Stage_getObjectsUnderPointAddr, "pointer", ["pointer", "float", "float"]);
        spriteOffset = ((LogicMemory).LogicMemory).offset(144);
        pointSizeOffset = ((LogicMemory).LogicMemory).offset(376);
        xOffset = ((LogicMemory).LogicMemory).offset(644);
        yOffset = ((LogicMemory).LogicMemory).offset(648);
        leftSafeMargin = ((LogicMemory).LogicMemory).offset(76);
        rightSafeMargin = ((LogicMemory).LogicMemory).offset(80);
        topSafeMargin = ((LogicMemory).LogicMemory).offset(84);
        bottomSafeMargin = ((LogicMemory).LogicMemory).offset(88);
        <class_fields_init> = undefined;
        Stage;
        class Stage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7bea5 (open) */
}
            getInstance () {
        return (Stage_instanceAddr).readPointer();
}
            addChild (child) {
        return ((Sprite).Sprite).addChild((this).getMainSprite(), child);
}
            getMainSprite () {
    var stage;
        stage = (this).getInstance();
        if ((stage).isNull()) {
            return NULL;
        } /* if 0x7bb02 */
        return ((stage).add(spriteOffset)).readPointer();
}
            getPointSize () {
    var pointSize;
        pointSize = (((this).getInstance()).add(pointSizeOffset)).readFloat();
        if ((pointSize !== 0)) {
            return pointSize;
        } /* if 0x7bb66 */
        return 0.1;
}
            get objectsUnderPointAddr () {
        return Stage_getObjectsUnderPointAddr;
}
            getObjectsUnderPoint (x, y) {
        return Stage_getObjectsUnderPoint((this).getInstance(), x, y);
}
            removeChild (child) {
        return (Sprite).Sprite_removeChild((((this).getInstance()).add(spriteOffset)).readPointer(), child);
}
            getBackgroundCoverWidth () {
    var stage, maxHorizontalMargin;
        stage = (this).getInstance();
        maxHorizontalMargin = (Math).max(((stage).add(leftSafeMargin)).readFloat(), ((stage).add(rightSafeMargin)).readFloat());
        return (((2 * maxHorizontalMargin) + (this).getMatrixX()) + 4);
}
            getBackgroundCoverHeight () {
    var stage, maxVerticalMargin;
        stage = (this).getInstance();
        maxVerticalMargin = (Math).max(((stage).add(topSafeMargin)).readFloat(), ((stage).add(bottomSafeMargin)).readFloat());
        return (((2 * maxVerticalMargin) + (this).getMatrixY()) + 4);
}
            getMatrixX () {
    var stage, pointSize;
        if ((!(this)._matrixX)) {
            stage = (this).getInstance();
            pointSize = (this).getPointSize();
            this._matrixX = (((stage).add(xOffset)).readU32() - ((((stage).add(rightSafeMargin)).readFloat() + ((stage).add(leftSafeMargin)).readFloat()) / pointSize));
        } /* if 0x7bdc4 */
        return (this)._matrixX;
}
            getMatrixY () {
    var stage, pointSize;
        if ((!(this)._matrixY)) {
            stage = (this).getInstance();
            pointSize = (this).getPointSize();
            this._matrixY = (((stage).add(yOffset)).readU32() - ((((stage).add(bottomSafeMargin)).readFloat() + ((stage).add(topSafeMargin)).readFloat()) / pointSize));
        } /* if 0x7be70 */
        return (this)._matrixY;
}
        }
        Stage = xOffset = Stage;
        exports.Stage = Stage;
        return;
};

// --------------------- MODULE 7404 — MovieClipHelper ---------------------


// ============================================================ //
// webpack module 7404  —  MovieClipHelper
// exports: MovieClipHelper
// deps: 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7404] = function MovieClipHelper_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, MovieClipHelper_findButtonByName_native, MovieClipHelper_replaceChildWithMovieClip, MovieClipHelper, <class_fields_init>, MovieClipHelper;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MovieClipHelper = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        MovieClipHelper_findButtonByName_native = new NativeFunction(((Libg).Libg).offset(13921384, 0), "pointer", ["pointer", "pointer"]);
        MovieClipHelper_replaceChildWithMovieClip = new NativeFunction(((Libg).Libg).offset(13917080, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);
        <class_fields_init> = undefined;
        MovieClipHelper;
        class MovieClipHelper {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x799d0 (open) */
}
            findButtonByName (name, buttonVectorPointer) {
        return MovieClipHelper_findButtonByName_native(name, buttonVectorPointer);
}
            replaceChildWithMovieClip (clip, childName, fileName, exportName) {
    var childNameSO, fileNameSO, exportNameSO;
        childNameSO = ((StringObject).StringObject).create(childName);
        fileNameSO = ((StringObject).StringObject).create(fileName);
        exportNameSO = ((StringObject).StringObject).create(exportName);
        MovieClipHelper_replaceChildWithMovieClip((clip).instance, childNameSO, fileNameSO, exportNameSO);
        return;
}
        }
        MovieClipHelper = v8 = MovieClipHelper;
        exports.MovieClipHelper = MovieClipHelper;
        return;
};

// --------------------- MODULE 9878 — Libg ---------------------


// ============================================================ //
// webpack module 9878  —  Libg
// exports: Libg
// deps: 1398 (Protector), 1978 (Libc)
// ============================================================ //

__webpack_modules__[9878] = function Libg_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Protector, Libg, <class_fields_init>, Libg;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Libg = undefined;
        Libc = __webpack_require__(1978);
        Protector = __webpack_require__(1398);
        <class_fields_init> = undefined;
        Libg;
        class Libg {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x84332 (open) */
}
            init () {
        if (((Process).platform === "darwin")) {
        } /* if 0x841c6 */
        /* jump -> 0x841d1 */
        ((Process).getModuleByName("laser")).base.libgBeginOffset = (Libg).findEngineModuleBase();
        return;
}
            findEngineModuleBase () {
        return (((Protector).Protector).getOffsetOf((((Protector).Protector).Globals).LibgOffset)).readPointer();
}
            offset () {
    var offsetArm64, offsetIOS, offsetArm64, offsetIOS;
        offsetArm64 = this;
        if (((offsetArm64) === undefined)) {
            offsetArm64 = offsetArm64 = 0;
        } /* if 0x8429d */
        if (((offsetIOS) === undefined)) {
            offsetIOS = offsetIOS = 0;
        } /* if 0x842a6 */
        if (((offsetArm64).libgBeginOffset).isNull()) {
            (Libg).init();
        } /* if 0x842c3 */
        if (((Process).platform === "linux")) {
            return ((offsetArm64).libgBeginOffset).add(offsetArm64);
        } /* if 0x842e5 */
        if (((Process).platform === "darwin")) {
            return ((offsetArm64).libgBeginOffset).add(offsetIOS);
        } /* if 0x842fd */
        return NULL;
}
        }
        Libg = Libg = Libg;
        exports.Libg = Libg;
        Libg.libgBeginOffset = NULL;
        return;
};

// --------------------- MODULE 6551 — EnvironmentRenderer ---------------------


// ============================================================ //
// webpack module 6551  —  EnvironmentRenderer
// exports: EnvironmentRenderer
// deps: 8852 (Outline), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6551] = function EnvironmentRenderer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Outline, Libg, EnvironmentRenderer_render_OutlineSetupAddr, outlineOffsets, EnvironmentRenderer, <class_fields_init>, EnvironmentRenderer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EnvironmentRenderer = undefined;
        Outline = __webpack_require__(8852);
        Libg = __webpack_require__(9878);
        EnvironmentRenderer_render_OutlineSetupAddr = ((Libg).Libg).offset(8390072, 0);
        outlineOffsets = [9, 10, 11, 12];
        <class_fields_init> = undefined;
        EnvironmentRenderer;
        class EnvironmentRenderer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3d018 (open) */
}
            patch () {
        return;
}
        }
        EnvironmentRenderer = v8 = EnvironmentRenderer;
        exports.EnvironmentRenderer = EnvironmentRenderer;
        return;
};

// --------------------- MODULE 3378 — SceneRenderer ---------------------


// ============================================================ //
// webpack module 3378  —  SceneRenderer
// exports: SceneRenderer
// deps: 8852 (Outline), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3378] = function SceneRenderer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Outline, SceneRenderer_render_OutlineSetupAddr, outlineOffsets, SceneRenderer, <class_fields_init>, SceneRenderer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SceneRenderer = undefined;
        Libg = __webpack_require__(9878);
        Outline = __webpack_require__(8852);
        SceneRenderer_render_OutlineSetupAddr = ((Libg).Libg).offset(8160324, 0);
        outlineOffsets = [420, 424, 428, 432];
        <class_fields_init> = undefined;
        SceneRenderer;
        class SceneRenderer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3d227 (open) */
}
            patch () {
        return;
}
        }
        SceneRenderer = v8 = SceneRenderer;
        exports.SceneRenderer = SceneRenderer;
        return;
};

// --------------------- MODULE 7518 — Character3D ---------------------


// ============================================================ //
// webpack module 7518  —  Character3D
// exports: Character3D
// deps: 3932 (Character), 4009 (Config), 4330 (Player), 4974 (Breadcrumbs), 6139 (LogicDataTables), 6794 (LogicData), 7669 (SkinSelector), 9814 (LogicGameObjectClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7518] = function Character3D_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, SkinSelector, LogicDataTables, LogicData, Player, Character, LogicGameObjectClient, Breadcrumbs, Character3D_ctor, GameObjectManager_addGameObject, Character3D, <class_fields_init>, Character3D;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Character3D = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        SkinSelector = __webpack_require__(7669);
        LogicDataTables = __webpack_require__(6139);
        LogicData = __webpack_require__(6794);
        Player = __webpack_require__(4330);
        Character = __webpack_require__(3932);
        LogicGameObjectClient = __webpack_require__(9814);
        Breadcrumbs = __webpack_require__(4974);
        Character3D_ctor = ((Libg).Libg).offset(11536280, 0);
        GameObjectManager_addGameObject = new NativeFunction(((Libg).Libg).offset(8530520, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        Character3D;
        class Character3D {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4f468 (open) */
}
            flushSkinLogs () {
        Character3D.objectMap = {};
        return;
}
            patch () {
        if ((!((SkinSelector).SkinSelector).isAvailable())) {
            return;
        } /* if 0x4f0e2 */
        (Interceptor).replace(GameObjectManager_addGameObject, new NativeCallback(function (gameObjectManager, gameObject) {
    var logicGameObject, ownerId, data, globalId, patchGlobalId, patchData;
        if (((SkinSelector).SkinSelector).isInUse()) {
            /* CATCH -> 0x4f236 (try region) */
            logicGameObject = new (LogicGameObjectClient).LogicGameObjectClient(gameObject);
            ownerId = (logicGameObject).playerIndex;
            data = (Character3D).objectMap[ownerId];
            if (data) {
                globalId = ((LogicData).LogicData).getGlobalID((logicGameObject).dataPtr);
                patchGlobalId = data[globalId];
                if ((patchGlobalId > 0)) {
                    patchData = ((LogicDataTables).LogicDataTables).getDataById(patchGlobalId);
                    if (patchData) {
                        logicGameObject.dataPtr = (patchData).instance;
                    } /* if 0x4f230 */
                } /* if 0x4f230 */
            } /* if 0x4f230 */
            /* jump -> 0x4f23d */
            patchData = globalId = patchGlobalId = logicGameObject = ownerId = data = <underflow>;
            /* CATCH -> 0x4f23f (try region) */
            /* jump -> 0x4f23d */
            throw <underflow>;
        } /* if 0x4f240 */
        return;
}, "void", ["pointer", "pointer"]));
        return;
}
        }
        Character3D = Breadcrumbs = Character3D;
        exports.Character3D = Character3D;
        Character3D.objectMap = {};
        return;
};

