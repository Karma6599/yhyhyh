var GUIContainer_addGameButtonManually = new NativeFunction(Libg.offset(8956356, 0), "void", ["pointer", "pointer"]);
var GUIContainer_getTextField = new NativeFunction(Libg.offset(6125912, 0), "pointer", ["pointer", "pointer", "pointer"]);
var getMovieClipOffset = LogicMemory.offset(144);

class GUIContainer extends Sprite {
    constructor(instance) {
        super(instance);
    }
    getMovieClip() {
        return new MovieClip(GUIContainer.getMovieClip(this.instance));
    }
    isDestructed() {
        return this.visibility;
    }
    addGameButtonManually(button) {
        GUIContainer_addGameButtonManually(this.instance, button.instance);
        return this;
    }
    static getMovieClip(gui) {
        return gui.add(getMovieClipOffset).readPointer();
    }
    static _getMovieClip(instance) {
        return new MovieClip(GUIContainer.getMovieClip(instance));
    }
    static getTextField(gui, textField, text) {
        return GUIContainer_getTextField(gui, textField, text);
    }
}

var DropGUIContainer_ctor = new NativeFunction(Libg.offset(8951716, 0), "void", ["pointer"]);
var DropGUIContainer_addGameButton = new NativeFunction(Libg.offset(8952932, 0), "pointer", ["pointer", "pointer", "int"]);
var DropGUIContainer_setMovieClipOffset = LogicMemory.offset(44 * Process.pointerSize);

class DropGUIContainer extends GUIContainer {
    constructor(instance, allocationSize) {
        if (instance instanceof NativePointer) {
            super(instance);
            return this;
        }
        if (!instance) {
            if (allocationSize == null) {
                allocationSize = DropGUIContainer.allocationSize;
            }
            instance = Libc.malloc(allocationSize);
        }
        DropGUIContainer_ctor(instance);
        super(instance);
    }
    addGameButton(buttonName, int) {
        return new GameButton(DropGUIContainer_addGameButton(this.instance, LogicMemory.ensurePointer(buttonName), int));
    }
    setMovieClip(movieClip) {
        if (movieClip.instance == null) {
            return;
        }
        this.instance.add(DropGUIContainer_setMovieClipOffset).writePointer(movieClip.instance);
    }
}
DropGUIContainer.allocationSize = 496;

var ScrollArea_ctor = new NativeFunction(Libg.offset(8958304, 0), "void", ["pointer", "pointer", "int"]);
var ScrollArea_ctorOwnWidthHeight = new NativeFunction(Libg.offset(8957652), "void", ["pointer", "float", "float", "int"]);
var ScrollArea_addContent = new NativeFunction(Libg.offset(8959636, 0), "void", ["pointer", "pointer"]);
var ScrollArea_addContentDontUpdateBounds = new NativeFunction(Libg.offset(8962464, 0), "void", ["pointer", "pointer"]);
var ScrollArea_update = new NativeFunction(Libg.offset(8960220, 0), "void", ["pointer", "float"]);
var ScrollArea_removeAllContent = new NativeFunction(Libg.offset(8959724, 0), "void", ["pointer"]);
var clippingOffset = LogicMemory.offset(224);
var dragHandlerOffset = LogicMemory.offset(240);
var dragHandlerAlignmentOffset = LogicMemory.offset(392);
var dragHandlerPinchingOffset = LogicMemory.offset(398);
var ScrollArea_unknownOffset = LogicMemory.offset(632);
var widthOffset = LogicMemory.offset(192);
var heightOffset = LogicMemory.offset(196);
var horizontalDragOffset1 = LogicMemory.offset(232);
var verticalDragOffset1 = LogicMemory.offset(231);

class ScrollArea extends Sprite {
    constructor(instance, unkOrWidth, unk2) {
        var scrollInstance;
        if (instance instanceof TextField) {
            scrollInstance = Libc.malloc(ScrollArea.allocationSize);
            ScrollArea_ctor(scrollInstance, instance.instance, unkOrWidth);
            super(scrollInstance);
        } else if (typeof instance === "number") {
            scrollInstance = Libc.malloc(ScrollArea.allocationSize);
            ScrollArea_ctorOwnWidthHeight(scrollInstance, instance, unkOrWidth, unk2);
            super(scrollInstance);
        } else {
            super(instance);
        }
    }
    addContent(content, updateBounds) {
        if (updateBounds === undefined) {
            updateBounds = true;
        }
        if (updateBounds) {
            ScrollArea_addContent(this.instance, content.instance);
            return;
        }
        ScrollArea_addContentDontUpdateBounds(this.instance, content.instance);
        return;
    }
    enablePinching(pinchingState) {
        this.instance.add(dragHandlerPinchingOffset).writeU8(pinchingState ? 1 : 0);
        return;
    }
    enableHorizontalDrag(state) {
        this.instance.add(horizontalDragOffset1).writeU8(state ? 1 : 0);
        return;
    }
    enableVerticalDrag(state) {
        this.instance.add(verticalDragOffset1).writeU8(state ? 1 : 0);
        return;
    }
    removeAllContent() {
        ScrollArea_removeAllContent(this.instance);
        return;
    }
    setClipping(state) {
        this.instance.add(clippingOffset).writeU8(state ? 1 : 0);
        return;
    }
    setAlignment(alignment) {
        this.instance.add(dragHandlerAlignmentOffset).writeInt(alignment);
        return;
    }
    update(deltaTime) {
        ScrollArea_update(this.instance, deltaTime);
        return;
    }
    get clipWidth() {
        return this.instance.add(widthOffset).readFloat();
    }
    set clipWidth(value) {
        this.instance.add(widthOffset).writeFloat(value);
        return;
    }
    get clipHeight() {
        return this.instance.add(heightOffset).readFloat();
    }
    set clipHeight(value) {
        this.instance.add(heightOffset).writeFloat(value);
        return;
    }
}
ScrollArea.allocationSize = 712;

var ListContainer_ctor = new NativeFunction(Libg.offset(9408232, 0), "void", ["pointer", "pointer", "int", "int", "int", "pointer", "pointer"]);
var ListContainer_addEntry = new NativeFunction(Libg.offset(9410960, 0), "void", ["pointer", "pointer"]);
var ListContainer_clearEntries = new NativeFunction(Libg.offset(9410044, 0), "void", ["pointer"]);
var ListContainer_refreshBounds = new NativeFunction(Libg.offset(9410788, 0), "void", ["pointer", "float"]);
var ListContainer_refreshEntryPositions = new NativeFunction(Libg.offset(9411620, 0), "void", ["pointer", "int", "float", "float", "float", "int", "int", "float"]);
var ListContainer_scrollTo = new NativeFunction(Libg.offset(0, 0), "void", ["pointer", "float", "float"]);

class ListContainer {
    constructor(movieClip, a2, a3, a4, str, ptr) {
        this.entries = [];
        this.instance = Libc.malloc(ListContainer.allocationSize);
        ListContainer_ctor(this.instance, movieClip.instance, a2, a3, a4, StringObject.create(str), ptr);
    }
    addEntry(entry) {
        ListContainer_addEntry(this.instance, entry.instance);
        this.entries.push(entry);
        return;
    }
    getEntry(lambda) {
        return this.entries.find(lambda);
    }
    clearEntries() {
        ListContainer_clearEntries(this.instance);
        this.entries = [];
        return;
    }
    refreshBounds(naviHeight) {
        ListContainer_refreshBounds(this.instance, naviHeight);
        return;
    }
    refreshEntryPositions(itemsInRow, startYPosition, distanceBetweenRows, f3, f4, int2, f5) {
        ListContainer_refreshEntryPositions(this.instance, itemsInRow, startYPosition, distanceBetweenRows, f3, f4, int2, f5);
        return;
    }
    scrollTo(x, y) {
        if (Process.platform === "darwin") {
            ListContainer_scrollTo(this.instance, x, y);
            return;
        }
    }
}
ListContainer.allocationSize = 248;
