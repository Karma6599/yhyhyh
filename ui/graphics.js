class Libg {
    constructor() {
    }
    static init() {
        if (Process.platform === "darwin") {
            return;
        }
        Libg.libgBeginOffset = Libg.findEngineModuleBase();
        return;
    }
    static findEngineModuleBase() {
        return Protector.getOffsetOf(Protector.Globals.LibgOffset).readPointer();
    }
    static offset(offsetArm64, offsetIOS) {
        if (offsetArm64 === undefined) {
            offsetArm64 = 0;
        }
        if (offsetIOS === undefined) {
            offsetIOS = 0;
        }
        if (Libg.libgBeginOffset.isNull()) {
            Libg.init();
        }
        if (Process.platform === "linux") {
            return Libg.libgBeginOffset.add(offsetArm64);
        }
        if (Process.platform === "darwin") {
            return Libg.libgBeginOffset.add(offsetIOS);
        }
        return NULL;
    }
}
Libg.libgBeginOffset = NULL;

var DisplayObject_setSize = new NativeFunction(Libg.offset(5853580, 0), "void", ["pointer", "float", "float"]);
var DisplayObject_removeFromParent = new NativeFunction(Libg.offset(5853740, 0), "void", ["pointer"]);
var DisplayObject_getBounds = new NativeFunction(Libg.offset(5852968, 0), "pointer", ["pointer", "pointer", "pointer", "int"]);
var DisplayObject_setWidth = new NativeFunction(Libg.offset(5854268, 0), "void", ["pointer", "float"]);
var DisplayObject_setHeight = new NativeFunction(Libg.offset(5854176, 0), "void", ["pointer", "float"]);
var activeOffset = LogicMemory.offset(8);
var colorOffset = LogicMemory.offset(9);
var matrix2x3Offset = LogicMemory.offset(16);
var DisplayObject_xOffset = LogicMemory.offset(32);
var DisplayObject_yOffset = LogicMemory.offset(36);
var parentOffset = LogicMemory.offset(56, 64);
var setXYOffset = 5 * Process.pointerSize;
var setScaleOffset = 6 * Process.pointerSize;
var setScaleXOffset = 7 * Process.pointerSize;
var setScaleYOffset = 8 * Process.pointerSize;
var getScaleXOffset = 9 * Process.pointerSize;
var getScaleYOffset = 10 * Process.pointerSize;
var setAlphaOffset = 11 * Process.pointerSize;
var getWidthOffset = 12 * Process.pointerSize;
var getHeightOffset = 13 * Process.pointerSize;
var setVisibleRecursiveOffset = 15 * Process.pointerSize;
var isMovieClipOffset = 16 * Process.pointerSize;
var isTextFieldOffset = 17 * Process.pointerSize;
var isSpriteOffset = 18 * Process.pointerSize;
var isShapeOffset = 19 * Process.pointerSize;
var isScrollAreaOffset = 20 * Process.pointerSize;
var isMovieClipModifierOffset = 21 * Process.pointerSize;
var isCustomButtonOffset = 22 * Process.pointerSize;
var isGUIContainerOffset = 23 * Process.pointerSize;
var isSprite3DOffset = 24 * Process.pointerSize;

class DisplayObject {
    constructor(instance) {
        this.instance = instance;
    }
    get vtable() {
        return this.instance.readPointer();
    }
    get width() {
        return new NativeFunction(this.instance.readPointer().add(getWidthOffset).readPointer(), "float", ["pointer"])(this.instance);
    }
    get height() {
        return new NativeFunction(this.instance.readPointer().add(getHeightOffset).readPointer(), "float", ["pointer"])(this.instance);
    }
    set x(x) {
        this.instance.add(DisplayObject_xOffset).writeFloat(x);
        return;
    }
    get x() {
        return this.instance.add(DisplayObject_xOffset).readFloat();
    }
    set y(y) {
        this.instance.add(DisplayObject_yOffset).writeFloat(y);
        return;
    }
    get y() {
        return this.instance.add(DisplayObject_yOffset).readFloat();
    }
    get matrix2x3() {
        return new Matrix2x3(this.instance.add(matrix2x3Offset));
    }
    setXY(x, y) {
        new NativeFunction(this.instance.readPointer().add(setXYOffset).readPointer(), "void", ["pointer", "float", "float"])(this.instance, x, y);
        return this;
    }
    setWidth(width) {
        return DisplayObject_setWidth(this.instance, width);
    }
    setHeight(height) {
        return DisplayObject_setHeight(this.instance, height);
    }
    shiftX(offset) {
        this.x = this.x + offset;
        return;
    }
    shiftY(offset) {
        this.y = this.y - offset;
        return;
    }
    set visibility(isVisible) {
        this.instance.add(activeOffset).writeU8(isVisible ? 1 : 0);
        return;
    }
    get visibility() {
        return this.instance.add(activeOffset).readU8();
    }
    set alpha(alpha) {
        this.colorTransform.alpha = alpha;
        return;
    }
    get colorTransform() {
        if (!this._color) {
            this._color = new ColorTransform(this.instance.add(colorOffset));
        }
        return this._color;
    }
    setSize(height, width) {
        DisplayObject_setSize(this.instance, height, width);
        return this;
    }
    setPixelSnappedXY(x, y) {
        return this.setXY(Math.floor(x), Math.floor(y));
    }
    rotate(angle, scaleX, scaleY) {
        if (scaleX === undefined) {
            scaleX = 1;
        }
        if (scaleY === undefined) {
            scaleY = 1;
        }
        return;
    }
    set scale(scale) {
        this.matrix2x3.scaleX = scale;
        this.matrix2x3.scaleY = scale;
        return;
    }
    set scaleX(scale) {
        this.matrix2x3.scaleX = scale;
        return;
    }
    set scaleY(scale) {
        this.matrix2x3.scaleY = scale;
        return;
    }
    get scaleX() {
        return this.matrix2x3.scaleX;
    }
    get scaleY() {
        return this.matrix2x3.scaleY;
    }
    get parent() {
        return this.instance.add(parentOffset).readPointer();
    }
    getBounds(coordSpace, outRect) {
        DisplayObject_getBounds(this.instance, coordSpace, outRect, 0);
        return outRect;
    }
    get type() {
        if (this.isMovieClip()) {
            return "MovieClip";
        }
        if (this.isTextField()) {
            return "TextField";
        }
        if (this.isSprite()) {
            return "Sprite";
        }
        if (this.isShape()) {
            return "Shape";
        }
        if (this.isScrollArea()) {
            return "ScrollArea";
        }
        if (this.isMovieClipModifier()) {
            return "MovieClipModifier";
        }
        if (this.isCustomButton()) {
            return "CustomButton";
        }
        if (this.isGUIContainer()) {
            return "GUIContainer";
        }
        if (this.isSprite3D()) {
            return "Sprite3D";
        }
    }
    isMovieClip() {
        var DisplayObject_isMovieClip;
        DisplayObject_isMovieClip = new NativeFunction(this.instance.readPointer().add(isMovieClipOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isMovieClip(this.instance);
    }
    isTextField() {
        var DisplayObject_isTextField;
        DisplayObject_isTextField = new NativeFunction(this.instance.readPointer().add(isTextFieldOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isTextField(this.instance);
    }
    isSprite() {
        var DisplayObject_isSprite;
        DisplayObject_isSprite = new NativeFunction(this.instance.readPointer().add(isSpriteOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isSprite(this.instance);
    }
    isShape() {
        var DisplayObject_isShape;
        DisplayObject_isShape = new NativeFunction(this.instance.readPointer().add(isShapeOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isShape(this.instance);
    }
    isScrollArea() {
        var DisplayObject_isScrollArea;
        DisplayObject_isScrollArea = new NativeFunction(this.instance.readPointer().add(isScrollAreaOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isScrollArea(this.instance);
    }
    isMovieClipModifier() {
        var DisplayObject_isMovieClipModifier;
        DisplayObject_isMovieClipModifier = new NativeFunction(this.instance.readPointer().add(isMovieClipModifierOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isMovieClipModifier(this.instance);
    }
    isCustomButton() {
        var DisplayObject_isCustomButton;
        DisplayObject_isCustomButton = new NativeFunction(this.instance.readPointer().add(isCustomButtonOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isCustomButton(this.instance);
    }
    isGUIContainer() {
        var DisplayObject_isGUIContainer;
        DisplayObject_isGUIContainer = new NativeFunction(this.instance.readPointer().add(isGUIContainerOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isGUIContainer(this.instance);
    }
    isSprite3D() {
        var DisplayObject_isSprite3D;
        DisplayObject_isSprite3D = new NativeFunction(this.instance.readPointer().add(isSprite3DOffset).readPointer(), "int", ["pointer"]);
        return DisplayObject_isSprite3D(this.instance);
    }
    isNull() {
        return this.instance.isNull();
    }
    removeFromParent() {
        DisplayObject_removeFromParent(this.instance);
        return;
    }
    destruct() {
        return;
    }
}

var Sprite_Sprite = new NativeFunction(Libg.offset(5847748, 0), "void", ["pointer", "int16"]);
var Sprite_removeChild = new NativeFunction(Libg.offset(5849028, 0), "void", ["pointer", "pointer"]);
var Sprite_addChildAt = new NativeFunction(Libg.offset(5848296, 0), "void", ["pointer", "pointer", "int"]);
var Sprite_childCountOffset = LogicMemory.offset(78);
var Sprite_childArrayOffset = LogicMemory.offset(80);
var Sprite_allocSize = LogicMemory.offset(128);

class Sprite extends DisplayObject {
    constructor(instance) {
        var instPtr;
        if (instance instanceof NativePointer) {
            super(instance);
            return this;
        }
        instPtr = Libc.malloc(Sprite_allocSize);
        Sprite_Sprite(instPtr, instance);
        super(instPtr);
    }
    addChild(child) {
        return Sprite.addChild(this.instance, child);
    }
    get childCount() {
        return this.instance.add(Sprite_childCountOffset).readU16();
    }
    getChildAt(index) {
        var arrayPtr, childPtr;
        if (this.childCount === 0) {
            return null;
        }
        arrayPtr = this.instance.add(Sprite_childArrayOffset).readPointer();
        childPtr = arrayPtr.add(index * Process.pointerSize).readPointer();
        return childPtr;
    }
    addChildAt(child, at) {
        if (child.instance == null) {
            return;
        }
        Sprite_addChildAt(this.instance, child.instance, at);
        return;
    }
    removeChild(child) {
        var childPointer;
        if (child.instance == null) {
            childPointer = child;
        } else {
            childPointer = child.instance;
        }
        Sprite_removeChild(this.instance, childPointer);
        return;
    }
    static addChild(instance, child) {
        var childPointer, childCount;
        if (child.instance == null) {
            childPointer = child;
        } else {
            childPointer = child.instance;
        }
        childCount = instance.add(Sprite_childCountOffset).readU16();
        return Sprite_addChildAt(instance, childPointer, childCount);
    }
}

var MovieClip_gotoAndStopFrameIndex = new NativeFunction(Libg.offset(6125536, 0), "void", ["pointer", "int"]);
var MovieClip_setInteractiveRecursive = new NativeFunction(Libg.offset(6127284, 0), "void", ["pointer", "int"]);
var exportNameOffset = LogicMemory.offset(128);
var MovieClip_childArrayOffset = LogicMemory.offset(144);
var childNameArrayOffset = LogicMemory.offset(152);
var totalFramesAmount = LogicMemory.offset(190);
var MovieClip_childCountOffset = LogicMemory.offset(192);

class MovieClip extends Sprite {
    constructor(instance) {
        super(instance);
    }
    getChildByName(name) {
        var foundIdx, child;
        foundIdx = MovieClip.findChildIndexByName(this.instance, name);
        if (foundIdx < 0) {
            EDebugger.addMessage(EDebugger.ERROR, "No child with this name! (".concat(name, ")"));
            return null;
        }
        child = this.instance.add(MovieClip_childArrayOffset).readPointer().add(foundIdx * Process.pointerSize).readPointer();
        if (child.isNull()) {
            EDebugger.addMessage(EDebugger.ERROR, "MovieClip is null!");
            return null;
        }
        return MovieClip.castInstanceToClass(child);
    }
    get exportName() {
        var exportNamePtr;
        exportNamePtr = this.instance.add(exportNameOffset).readPointer();
        if (exportNamePtr.isNull()) {
            return "";
        }
        return exportNamePtr.readUtf8String();
    }
    get totalFramesAmount() {
        return this.instance.add(totalFramesAmount).readShort();
    }
    getNameOfChild(child) {
        var childCount, nameList, children, i, currentChildPtr, nameStrPtr, e;
        childCount = this.getChildCount();
        if (childCount <= 0) {
            return "";
        }
        nameList = this.getChildNameList();
        children = this.getChildArray();
        if (nameList.isNull() || children.isNull()) {
            return "";
        }
        i = 0;
        while (i < childCount) {
            currentChildPtr = children.add(i * Process.pointerSize).readPointer();
            if (currentChildPtr.equals(child.instance)) {
                nameStrPtr = nameList.add(i * Process.pointerSize).readPointer();
                if (!nameStrPtr.isNull()) {
                    try {
                        return nameStrPtr.readUtf8String();
                    } catch (e) {
                        return "";
                    }
                }
            }
            i = i + 1;
        }
        return "";
    }
    getMovieClipByName(movieClipName) {
        return MovieClip.getMovieClipByName(this.instance, movieClipName);
    }
    getTextFieldByName(childTextFieldName) {
        return MovieClip.getTextFieldByName(this.instance, childTextFieldName);
    }
    getChildCount() {
        return this.instance.add(MovieClip_childCountOffset).readS16();
    }
    getChildArray() {
        return this.instance.add(MovieClip_childArrayOffset).readPointer();
    }
    getChildNameList() {
        return this.instance.add(childNameArrayOffset).readPointer();
    }
    gotoAndStopFrameIndex(frameIndex) {
        MovieClip_gotoAndStopFrameIndex(this.instance, frameIndex);
        return this;
    }
    setInteractiveRecursive(int) {
        return MovieClip_setInteractiveRecursive(this.instance, int);
    }
    setText(clipName, text) {
        var textField;
        textField = this.getTextFieldByName(clipName);
        if (!textField) {
            return this;
        }
        textField.text = text;
        return this;
    }
    getChildById(index) {
        var child;
        child = this.instance.add(MovieClip_childArrayOffset).readPointer().add(index * Process.pointerSize).readPointer();
        if (child.isNull()) {
            EDebugger.addMessage(EDebugger.ERROR, "Child is null!");
            return null;
        }
        return MovieClip.castInstanceToClass(child);
    }
    static getMovieClipByName(parentMovieClip, childMovieClipName) {
        var foundIdx, movieClipArray, movieClip;
        foundIdx = MovieClip.findChildIndexByName(parentMovieClip, childMovieClipName);
        if (foundIdx < 0) {
            EDebugger.addMessage(EDebugger.ERROR, "No child with this name! (".concat(childMovieClipName, ")"));
            return null;
        }
        movieClipArray = parentMovieClip.add(MovieClip_childArrayOffset).readPointer();
        if (movieClipArray.isNull()) {
            EDebugger.addMessage(EDebugger.ERROR, "MovieClip List is null!");
            return null;
        }
        movieClip = movieClipArray.add(foundIdx * Process.pointerSize).readPointer();
        if (movieClip.isNull()) {
            EDebugger.addMessage(EDebugger.ERROR, "MovieClip is null!");
            return null;
        }
        if (!new DisplayObject(movieClip).isMovieClip()) {
            EDebugger.addMessage(EDebugger.ERROR, "Not a MovieClip");
        }
        return new MovieClip(movieClip);
    }
    static getTextFieldByName(movieClipPtr, childTextFieldName) {
        var foundIdx, textFieldList, textField, displayObject;
        foundIdx = MovieClip.findChildIndexByName(movieClipPtr, childTextFieldName);
        if (foundIdx < 0) {
            return null;
        }
        textFieldList = movieClipPtr.add(MovieClip_childArrayOffset).readPointer();
        if (textFieldList.isNull()) {
            Logcat.logError("TextField List is null!");
            return null;
        }
        textField = textFieldList.add(foundIdx * Process.pointerSize).readPointer();
        if (textField.isNull()) {
            Logcat.logError("TextField is null!");
            return null;
        }
        displayObject = new DisplayObject(textField);
        if ((displayObject.isTextField() & 1) === 0) {
            Logcat.logError("Not a TextField");
            return null;
        }
        return new TextField(textField);
    }
    static findChildIndexByName(movieClipPtr, name) {
        var childNameList, childCount, normalizedName, i, namePtr, candidate;
        childNameList = movieClipPtr.add(childNameArrayOffset).readPointer();
        if (childNameList.isNull()) {
            EDebugger.addMessage(EDebugger.ERROR, "Child Name List is null");
            return -1;
        }
        childCount = movieClipPtr.add(MovieClip_childCountOffset).readS16();
        if (childCount <= 0) {
            EDebugger.addMessage(EDebugger.ERROR, childCount === 0 ? "Child count equals zero!" : "Child count is lower than zero!");
            return -1;
        }
        normalizedName = name.toLowerCase();
        i = 0;
        while (i < childCount) {
            namePtr = childNameList.add(i * Process.pointerSize).readPointer();
            if (!namePtr.isNull()) {
                candidate = namePtr.readUtf8String();
                if (candidate) {
                    if (candidate.toLowerCase() === normalizedName) {
                        return i;
                    }
                }
            }
            i = i + 1;
        }
        return -1;
    }
    static castInstanceToClass(instance) {
        var displayObject;
        displayObject = new DisplayObject(instance);
        if (displayObject.type === "MovieClip") {
            return new MovieClip(displayObject.instance);
        }
        if (displayObject.type === "TextField") {
            return new TextField(displayObject.instance);
        }
        if (displayObject.type === "Sprite") {
            return new Sprite(displayObject.instance);
        }
        if (displayObject.type === "Shape") {
            return new DisplayObject(displayObject.instance);
        }
        if (displayObject.type === "ScrollArea") {
            return new DisplayObject(displayObject.instance);
        }
        if (displayObject.type === "MovieClipModifier") {
            return new DisplayObject(displayObject.instance);
        }
        if (displayObject.type === "CustomButton") {
            return new CustomButton(displayObject.instance);
        }
        if (displayObject.type === "GUIContainer") {
            return new GUIContainer(displayObject.instance);
        }
        if (displayObject.type === "Sprite3D") {
            return new DisplayObject(displayObject.instance);
        }
        return new DisplayObject(displayObject.instance);
    }
}

var color1RedOffset = LogicMemory.offset(9);
var color1GreenOffset = LogicMemory.offset(10);
var color1BlueOffset = LogicMemory.offset(11);
var alphaOffset = LogicMemory.offset(12);
var color2RedOffset = LogicMemory.offset(13);
var color2GreenOffset = LogicMemory.offset(14);
var color2BlueOffset = LogicMemory.offset(15);

class ColorTransform {
    constructor(_instance) {
        this._instance = _instance;
    }
    get c1r() {
        return this._instance.readU8();
    }
    set c1r(value) {
        this._instance.writeU8(value);
        return;
    }
    get c1g() {
        return this._instance.add(1).readU8();
    }
    set c1g(value) {
        this._instance.add(1).writeU8(value);
        return;
    }
    get c1b() {
        return this._instance.add(2).readU8();
    }
    set c1b(value) {
        this._instance.add(2).writeU8(value);
        return;
    }
    get alpha() {
        return this._instance.add(3).readU8();
    }
    set alpha(value) {
        this._instance.add(3).writeU8(value);
        return;
    }
    get c2r() {
        return this._instance.add(4).readU8();
    }
    set c2r(value) {
        this._instance.add(4).writeU8(value);
        return;
    }
    get c2g() {
        return this._instance.add(5).readU8();
    }
    set c2g(value) {
        this._instance.add(5).writeU8(value);
        return;
    }
    get c2b() {
        return this._instance.add(6).readU8();
    }
    set c2b(value) {
        this._instance.add(6).writeU8(value);
        return;
    }
    set red(value) {
        this.c1r = value;
        this.c2r = value;
        return;
    }
    set r(value) {
        this.red = value;
        return;
    }
    set green(value) {
        this.c1g = value;
        this.c2g = value;
        return;
    }
    set g(value) {
        this.green = value;
        return;
    }
    set blue(value) {
        this.c1b = value;
        this.c2b = value;
        return;
    }
    set b(value) {
        this.blue = value;
        return;
    }
    setColor(displayObject, red, green, blue, alpha) {
        displayObject.add(color1RedOffset).writeU8(red);
        displayObject.add(color1GreenOffset).writeU8(green);
        displayObject.add(color1BlueOffset).writeU8(blue);
        displayObject.add(alphaOffset).writeU8(alpha);
        displayObject.add(color2RedOffset).writeU8(red);
        displayObject.add(color2GreenOffset).writeU8(green);
        displayObject.add(color2BlueOffset).writeU8(blue);
        return;
    }
    setColorDual(displayObject, color1Red, color1Green, color1Blue, alpha, color2Red, color2Green, color2Blue) {
        displayObject.add(color1RedOffset).writeU8(color1Red);
        displayObject.add(color1GreenOffset).writeU8(color1Green);
        displayObject.add(color1BlueOffset).writeU8(color1Blue);
        displayObject.add(alphaOffset).writeU8(alpha);
        displayObject.add(color2RedOffset).writeU8(color2Red);
        displayObject.add(color2GreenOffset).writeU8(color2Green);
        displayObject.add(color2BlueOffset).writeU8(color2Blue);
        return;
    }
}

class Matrix2x3 {
    constructor(instance) {
        this.instance = instance;
    }
    get scaleX() {
        return this.instance.readFloat();
    }
    set scaleX(value) {
        this.instance.writeFloat(value);
        return;
    }
    get rotateSkew0() {
        return this.instance.add(4).readFloat();
    }
    set rotateSkew0(value) {
        this.instance.add(4).writeFloat(value);
        return;
    }
    get rotateSkew1() {
        return this.instance.add(8).readFloat();
    }
    set rotateSkew1(value) {
        this.instance.add(8).writeFloat(value);
        return;
    }
    get scaleY() {
        return this.instance.add(12).readFloat();
    }
    set scaleY(value) {
        this.instance.add(12).writeFloat(value);
        return;
    }
    get translateX() {
        return this.instance.add(16).readFloat();
    }
    set translateX(value) {
        this.instance.add(16).writeFloat(value);
        return;
    }
    get translateY() {
        return this.instance.add(20).readFloat();
    }
    set translateY(value) {
        this.instance.add(20).writeFloat(value);
        return;
    }
    rotate(angle, scaleX, scaleY) {
        var radians, sinx, cosx;
        if (scaleX === undefined) {
            scaleX = 1;
        }
        if (scaleY === undefined) {
            scaleY = 1;
        }
        radians = angle * 0.017453;
        sinx = Math.sin(radians);
        cosx = Math.cos(radians);
        this.scaleX = cosx * scaleX;
        this.rotateSkew0 = sinx * scaleX;
        this.rotateSkew1 = -sinx * scaleY;
        this.scaleY = cosx * scaleY;
        return;
    }
}

var Stage_instanceAddr = Libg.offset(19835424, 0);
var Stage_getObjectsUnderPointAddr = Libg.offset(5871332, 0);
var Stage_getObjectsUnderPoint = new NativeFunction(Stage_getObjectsUnderPointAddr, "pointer", ["pointer", "float", "float"]);
var spriteOffset = LogicMemory.offset(144);
var pointSizeOffset = LogicMemory.offset(376);
var Stage_xOffset = LogicMemory.offset(644);
var Stage_yOffset = LogicMemory.offset(648);
var leftSafeMargin = LogicMemory.offset(76);
var rightSafeMargin = LogicMemory.offset(80);
var topSafeMargin = LogicMemory.offset(84);
var bottomSafeMargin = LogicMemory.offset(88);

class Stage {
    constructor() {
    }
    static getInstance() {
        return Stage_instanceAddr.readPointer();
    }
    static addChild(child) {
        return Sprite.addChild(Stage.getMainSprite(), child);
    }
    static getMainSprite() {
        var stage;
        stage = Stage.getInstance();
        if (stage.isNull()) {
            return NULL;
        }
        return stage.add(spriteOffset).readPointer();
    }
    static getPointSize() {
        var pointSize;
        pointSize = Stage.getInstance().add(pointSizeOffset).readFloat();
        if (pointSize !== 0) {
            return pointSize;
        }
        return 0.1;
    }
    get objectsUnderPointAddr() {
        return Stage_getObjectsUnderPointAddr;
    }
    static getObjectsUnderPoint(x, y) {
        return Stage_getObjectsUnderPoint(Stage.getInstance(), x, y);
    }
    static removeChild(child) {
        return Sprite_removeChild(Stage.getInstance().add(spriteOffset).readPointer(), child);
    }
    static getBackgroundCoverWidth() {
        var stage, maxHorizontalMargin;
        stage = Stage.getInstance();
        maxHorizontalMargin = Math.max(stage.add(leftSafeMargin).readFloat(), stage.add(rightSafeMargin).readFloat());
        return 2 * maxHorizontalMargin + Stage.getMatrixX() + 4;
    }
    static getBackgroundCoverHeight() {
        var stage, maxVerticalMargin;
        stage = Stage.getInstance();
        maxVerticalMargin = Math.max(stage.add(topSafeMargin).readFloat(), stage.add(bottomSafeMargin).readFloat());
        return 2 * maxVerticalMargin + Stage.getMatrixY() + 4;
    }
    static getMatrixX() {
        var stage, pointSize;
        if (!Stage._matrixX) {
            stage = Stage.getInstance();
            pointSize = Stage.getPointSize();
            Stage._matrixX = stage.add(Stage_xOffset).readU32() - (stage.add(rightSafeMargin).readFloat() + stage.add(leftSafeMargin).readFloat()) / pointSize;
        }
        return Stage._matrixX;
    }
    static getMatrixY() {
        var stage, pointSize;
        if (!Stage._matrixY) {
            stage = Stage.getInstance();
            pointSize = Stage.getPointSize();
            Stage._matrixY = stage.add(Stage_yOffset).readU32() - (stage.add(bottomSafeMargin).readFloat() + stage.add(topSafeMargin).readFloat()) / pointSize;
        }
        return Stage._matrixY;
    }
}
Stage._matrixX = null;
Stage._matrixY = null;

var MovieClipHelper_findButtonByName_native = new NativeFunction(Libg.offset(13921384, 0), "pointer", ["pointer", "pointer"]);
var MovieClipHelper_replaceChildWithMovieClip = new NativeFunction(Libg.offset(13917080, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);

class MovieClipHelper {
    constructor() {
    }
    static findButtonByName(name, buttonVectorPointer) {
        return MovieClipHelper_findButtonByName_native(name, buttonVectorPointer);
    }
    static replaceChildWithMovieClip(clip, childName, fileName, exportName) {
        var childNameSO, fileNameSO, exportNameSO;
        childNameSO = StringObject.create(childName);
        fileNameSO = StringObject.create(fileName);
        exportNameSO = StringObject.create(exportName);
        MovieClipHelper_replaceChildWithMovieClip(clip.instance, childNameSO, fileNameSO, exportNameSO);
        return;
    }
}

var EnvironmentRenderer_render_OutlineSetupAddr = Libg.offset(8390072, 0);
var EnvironmentRenderer_outlineOffsets = [9, 10, 11, 12];

class EnvironmentRenderer {
    constructor() {
    }
    static patch() {
        return;
    }
}

var SceneRenderer_render_OutlineSetupAddr = Libg.offset(8160324, 0);
var SceneRenderer_outlineOffsets = [420, 424, 428, 432];

class SceneRenderer {
    constructor() {
    }
    static patch() {
        return;
    }
}

var Character3D_ctor = Libg.offset(11536280, 0);
var GameObjectManager_addGameObject = new NativeFunction(Libg.offset(8530520, 0), "void", ["pointer", "pointer"]);

class Character3D {
    constructor() {
    }
    static flushSkinLogs() {
        Character3D.objectMap = {};
        return;
    }
    static patch() {
        if (!SkinSelector.isAvailable()) {
            return;
        }
        Interceptor.replace(GameObjectManager_addGameObject, new NativeCallback(function (gameObjectManager, gameObject) {
            var logicGameObject, ownerId, data, globalId, patchGlobalId, patchData;
            if (SkinSelector.isInUse()) {
                try {
                    logicGameObject = new LogicGameObjectClient(gameObject);
                    ownerId = logicGameObject.playerIndex;
                    data = Character3D.objectMap[ownerId];
                    if (data) {
                        globalId = LogicData.getGlobalID(logicGameObject.dataPtr);
                        patchGlobalId = data[globalId];
                        if (patchGlobalId > 0) {
                            patchData = LogicDataTables.getDataById(patchGlobalId);
                            if (patchData) {
                                logicGameObject.dataPtr = patchData.instance;
                            }
                        }
                    }
                } catch (e) {
                }
            }
            return;
        }, "void", ["pointer", "pointer"]));
        return;
    }
}
Character3D.objectMap = {};
