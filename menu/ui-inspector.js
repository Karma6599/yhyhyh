var MAX_BOXES = 6;
var MAX_LABELS = 8;
var MAX_ENTRIES = 20;
var STRIPS_PER_BOX = 4;
var OUTLINE_THICKNESS = 1;
var STRIP_ALPHA = 235;
var LABEL_LINE_HEIGHT = 22;
var PARENT_WALK_LIMIT = 32;
var EMPTY_BOUNDS_SENTINEL = 100000;
var MAX_LEAVES = 256;
var MAX_CHILDREN_SCAN = 256;
var RECT_TOP_OFFSET = 4;
var RECT_RIGHT_OFFSET = 8;
var RECT_BOTTOM_OFFSET = 12;
var OUTLINE_COLORS = [[0, 229, 255], [255, 64, 129], [124, 252, 0], [255, 193, 7], [156, 39, 176], [255, 87, 34]];

class UiInspector {
    static requestDump(label, includeHidden, requestId) {
        if (label === undefined) {
            label = "screen";
        }
        if (includeHidden === undefined) {
            includeHidden = false;
        }
        this.pendingDump = { label: label.slice(0, 128), includeHidden: includeHidden, requestId: requestId };
    }
    static isEnabled() {
        return this.enabled;
    }
    static toggle() {
        this.enabled = !this.enabled;
        if (this.enabled) {
            this.requestDump("inspector-enabled");
            try {
                var mainSprite = Stage.getMainSprite();
                if (!mainSprite.isNull()) {
                    this.ensureInitialized();
                    this.bringToTop();
                }
            } catch (e) {
            }
        } else {
            this.hideAll();
        }
        return this.enabled;
    }
    static patch() {
        if (this.patched) {
            return;
        }
        this.patched = true;
    }
    static update() {
        this.pollDumpRequest();
        if (this.pendingDump) {
            var request = this.pendingDump;
            this.pendingDump = null;
            try {
                var excluded = new Set();
                for (var box of this.boxes) {
                    for (var strip of box.strips) {
                        excluded.add(strip.instance.toString());
                    }
                }
                for (var label of this.labels) {
                    excluded.add(label.instance.toString());
                }
                UiSnapshot.capture(request.label, request.includeHidden, excluded, request.requestId);
            } catch (error) {
                Logcat.logError("[UI] snapshot failed: ".concat(error));
            }
        }
        if (!this.enabled) {
            return;
        }
        if (this.captureSeq === this.renderedSeq) {
            return;
        }
        this.renderedSeq = this.captureSeq;
        try {
            this.render();
        } catch (e) {
        }
    }
    static pollDumpRequest() {
        if (!ModProperties.isDev() || this.FUCK_POLL_DUMP_REQUEST || !FileManager.saveDirPath) {
            return;
        }
        if (Date.now() < this.nextRequestPoll) {
            return;
        }
        this.nextRequestPoll = Date.now() + 1000;
        var content = FileManager.readFile("".concat(FileManager.saveDirPath, "/ui-inspector-request.json"), "r");
        if (!content || content === this.lastRequest) {
            return;
        }
        this.lastRequest = content;
        try {
            try {
                if (content.length > 512) {
                    throw new Error("request exceeds 512 characters");
                }
                var request = JSON.parse(content);
                if (typeof request.id === "string" && request.id && request.id.length > 64) {
                    throw new Error("request requires a short string id");
                }
                this.requestDump(typeof request.label === "string" ? request.label : request.id, request.includeHidden === true, request.id);
            } catch (error) {
                Logcat.logError("[UI] invalid request: ".concat(error));
            }
        } catch (e) {
            _.LogInfo("sum error with UiInspector.pollDumpRequest");
        }
    }
    static captureLeaves(vectorPointer) {
        try {
            if (vectorPointer.isNull()) {
                return;
            }
            var begin = vectorPointer.readPointer();
            var end = vectorPointer.add(Process.pointerSize).readPointer();
            if (begin.isNull() || end.isNull()) {
                return;
            }
            var count = end.sub(begin).toInt32() / Process.pointerSize;
            if (count < 0 || count > MAX_LEAVES) {
                return;
            }
            var leaves = [];
            var i = 0;
            while (i < count) {
                var leaf = begin.add(i * Process.pointerSize).readPointer();
                if (!leaf.isNull()) {
                    leaves.push(leaf);
                }
                i++;
            }
            this.capturedLeaves = leaves;
            this.captureSeq = ++this.captureSeq;
        } catch (e) {
            return;
        }
    }
    static render() {
        var stage = Stage.getInstance();
        if (stage.isNull()) {
            return;
        }
        var mainSprite = Stage.getMainSprite();
        if (mainSprite.isNull()) {
            return;
        }
        this.ensureInitialized();
        var entries = this.collectEntries(mainSprite);
        var selection = entries.map(function (entry) {
            return entry.instance.toString();
        }).join(",");
        if (selection !== this.lastSelection) {
            this.lastSelection = selection;
            UiSnapshot.logSelection(entries.map(function (entry) {
                return entry.instance;
            }));
        }
        if (entries.length === 0) {
            return;
        }
        var boxesUsed = 0;
        var i = 0;
        while (i < entries.length) {
            if (boxesUsed < MAX_BOXES) {
                var bounds = entries[i].bounds;
                if (bounds) {
                    this.drawBox(boxesUsed, bounds, OUTLINE_COLORS[boxesUsed % OUTLINE_COLORS.length]);
                    boxesUsed++;
                }
            }
            i++;
        }
        i = boxesUsed;
        while (i < MAX_BOXES) {
            this.hideBox(i);
            i++;
        }
    }
    static drawLabels(entries) {
        var visibleCount = Math.min(entries.length, MAX_LABELS);
        var anchor = entries[0].bounds;
        var baseX = 40;
        var baseY = 80;
        if (anchor) {
            if (baseY < 10) {
                baseY = anchor.bottom + 6;
            }
        }
        var i = 0;
        while (i < visibleCount) {
            var label = this.labels[i];
            label.setText("Text", this.formatEntry(entries[i]));
            label.setXY(baseX, baseY + i * LABEL_LINE_HEIGHT);
            label.visibility = 1;
            i++;
        }
        i = visibleCount;
        while (i < MAX_LABELS) {
            this.labels[i].visibility = 0;
            i++;
        }
    }
    static collectEntries(mainSprite) {
        var seen = new Set();
        var entries = [];
        var addEntry = function (pointer) {
            var key = pointer.toString();
            if (seen.has(key)) {
                return null;
            }
            seen.add(key);
            var entry = { instance: pointer };
            entries.push(entry);
            return entry;
        };
        for (var leaf of this.capturedLeaves) {
            var current = leaf;
            var guard = 0;
            while (!current.isNull() && !current.equals(mainSprite) && guard < PARENT_WALK_LIMIT) {
                addEntry(current);
                current = new DisplayObject(current).parent;
                guard++;
            }
        }
        for (var entry of entries) {
            this.fillEntry(entry, mainSprite);
        }
        this.collectTextFieldsUnderPoint(entries, seen, addEntry, mainSprite);
        entries.sort((a, b) => this.boundsArea(a) - this.boundsArea(b));
        return entries.slice(0, MAX_ENTRIES);
    }
    static fillEntry(entry, mainSprite) {
        var displayObject = new DisplayObject(entry.instance);
        if (displayObject.type == null) {
            entry.type = "?";
        } else {
            entry.type = displayObject.type;
        }
        entry.x = displayObject.x;
        entry.y = displayObject.y;
        entry.bounds = this.measureBounds(entry.instance, mainSprite);
        var parentPointer = displayObject.parent;
        if (!parentPointer.isNull()) {
            entry.name = this.resolveName(parentPointer, entry.instance);
        }
    }
    static collectTextFieldsUnderPoint(entries, seen, addEntry, mainSprite) {
        var pointX = NaN;
        var pointY = NaN;
        var smallestArea = Infinity;
        for (var entry of entries) {
            if (entry.bounds) {
                var area = this.boundsArea(entry);
                if (area < smallestArea) {
                    smallestArea = area;
                    pointX = (entry.bounds.left + entry.bounds.right) / 2;
                    pointY = (entry.bounds.top + entry.bounds.bottom) / 2;
                }
            }
        }
        if (Number.isNaN(pointX)) {
            return;
        }
        for (var containerEntry of entries) {
            if (entries.length < MAX_ENTRIES) {
                try {
                    if (new DisplayObject(containerEntry.instance).isMovieClip()) {
                        var container = new MovieClip(containerEntry.instance);
                        var count = container.getChildCount();
                        var childArray = container.getChildArray();
                        if (!childArray.isNull() && count > 0 && count <= MAX_CHILDREN_SCAN) {
                            var i = 0;
                            while (i < count) {
                                var childPointer = childArray.add(i * Process.pointerSize).readPointer();
                                if (!childPointer.isNull() && !seen.has(childPointer.toString())) {
                                    var child = new DisplayObject(childPointer);
                                    if (child.isTextField()) {
                                        var bounds = this.measureBounds(childPointer, mainSprite);
                                        if (bounds && pointX >= bounds.left && pointX <= bounds.right && pointY >= bounds.top && pointY <= bounds.bottom) {
                                            var textEntry = addEntry(childPointer);
                                            if (textEntry) {
                                                textEntry.type = "TextField";
                                                textEntry.x = child.x;
                                                textEntry.y = child.y;
                                                textEntry.bounds = bounds;
                                                textEntry.name = this.resolveName(containerEntry.instance, childPointer);
                                            }
                                        }
                                    }
                                }
                                i++;
                            }
                        }
                    }
                } catch (e) {
                    return;
                }
            }
        }
    }
    static boundsArea(entry) {
        if (!entry.bounds) {
            return Infinity;
        }
        return (entry.bounds.right - entry.bounds.left) * (entry.bounds.bottom - entry.bounds.top);
    }
    static resolveName(parentPointer, childPointer) {
        try {
            var parent = new DisplayObject(parentPointer);
            if (parent.isMovieClip()) {
                var name = new MovieClip(parentPointer).getNameOfChild(new MovieClip(childPointer));
                if (name) {
                    return name;
                }
            }
        } catch (e) {
        }
        try {
            var child = new DisplayObject(childPointer);
            if (child.isMovieClip()) {
                var exportName = new MovieClip(childPointer).exportName;
                if (exportName) {
                    return exportName;
                }
            }
        } catch (e) {
        }
        return "";
    }
    static formatEntry(entry) {
        var label = entry.name;
        if (!label) {
            label = entry.type;
            if (!label) {
                label = "?";
            }
        }
        var position = "".concat(Math.round(entry.x), ",", Math.round(entry.y));
        var size = "";
        return "".concat(label, " [", entry.type, "]", this.formatText(entry), " @", position, size);
    }
    static formatText(entry) {
        try {
            if (entry.type !== "TextField") {
                return "";
            }
            var value = new TextField(entry.instance).text;
            if (!value) {
                return "";
            }
            var trimmed = value;
            if (value.length > 24) {
                trimmed = "".concat(value.slice(0, 24), "...");
            }
            return " =\"".concat(trimmed, "\"");
        } catch (e) {
            return "";
        }
    }
    static measureBounds(pointer, mainSprite) {
        try {
            new DisplayObject(pointer).getBounds(mainSprite, this.rectBuffer);
            var rect = this.readRectBuffer();
            if (!Number.isFinite(rect.left) || rect.left >= EMPTY_BOUNDS_SENTINEL) {
                return null;
            }
            if (rect.right <= rect.left || rect.bottom <= rect.top) {
                return null;
            }
            return rect;
        } catch (e) {
            return null;
        }
    }
    static readRectBuffer() {
        return { left: this.rectBuffer.readFloat(), top: this.rectBuffer.add(RECT_TOP_OFFSET).readFloat(), right: this.rectBuffer.add(RECT_RIGHT_OFFSET).readFloat(), bottom: this.rectBuffer.add(RECT_BOTTOM_OFFSET).readFloat() };
    }
    static drawBox(boxIndex, bounds, color) {
        var strips = this.boxes[boxIndex].strips;
        var width = bounds.right - bounds.left;
        var height = bounds.bottom - bounds.top;
        var thickness = Math.max(0.5, Math.min(OUTLINE_THICKNESS, width / 2, height / 2));
        this.placeStrip(strips[0], bounds.left, bounds.top, width, thickness, color);
        this.placeStrip(strips[1], bounds.left, bounds.bottom - thickness, width, thickness, color);
        this.placeStrip(strips[2], bounds.left, bounds.top, thickness, height, color);
    }
    static placeStrip(strip, left, top, width, height, color) {
        ColorTransform.setColor(strip.instance, color[0], color[1], color[2], STRIP_ALPHA);
        var naturalWidth = this.stripNatural.right - this.stripNatural.left || 1;
        var naturalHeight = this.stripNatural.bottom - this.stripNatural.top || 1;
        var scaleX = Math.max(width, 0.5) / naturalWidth;
        var scaleY = Math.max(height, 0.5) / naturalHeight;
        strip.scaleX = scaleX;
        strip.scaleY = scaleY;
        strip.setXY(left - this.stripNatural.left * scaleX, top - this.stripNatural.top * scaleY);
        strip.visibility = 1;
    }
    static hideBox(boxIndex) {
        var strips = this.boxes[boxIndex].strips;
        for (var strip of strips) {
            strip.visibility = 0;
        }
    }
    static hideAll() {
        if (!this.initialized) {
            return;
        }
        var i = 0;
        while (i < MAX_BOXES) {
            this.hideBox(i);
            i++;
        }
        for (var label of this.labels) {
            label.visibility = 0;
        }
    }
    static bringToTop() {
        if (!this.initialized) {
            return;
        }
        for (var box of this.boxes) {
            for (var strip of box.strips) {
                Stage.removeChild(strip.instance);
                Stage.addChild(strip.instance);
            }
        }
        for (var label of this.labels) {
            Stage.removeChild(label.instance);
            Stage.addChild(label.instance);
        }
    }
    static ensureInitialized() {
        if (this.initialized) {
            return;
        }
        var b = 0;
        while (b < MAX_BOXES) {
            var strips = [];
            var s = 0;
            while (s < STRIPS_PER_BOX) {
                var strip = StringTable.getMovieClip("sc/ui.sc", "map_editor_ui_darkening");
                Stage.addChild(strip.instance);
                strip.visibility = 0;
                strips.push(strip);
                s++;
            }
            this.boxes.push({ strips: strips });
            b++;
        }
        this.measureStripNatural();
        var i = 0;
        while (i < MAX_LABELS) {
            var label = StringTable.getMovieClip("sc/debug.sc", "debug_menu_text");
            Stage.addChild(label.instance);
            label.visibility = 0;
            this.labels.push(label);
            i++;
        }
        this.initialized = true;
    }
    static measureStripNatural() {
        try {
            var mainSprite = Stage.getMainSprite();
            if (mainSprite.isNull()) {
                return;
            }
            var probe = this.boxes[0].strips[0];
            probe.scaleX = 1;
            probe.scaleY = 1;
            probe.setXY(0, 0);
            probe.getBounds(mainSprite, this.rectBuffer);
            var rect = this.readRectBuffer();
            if (Number.isFinite(rect.left)) {
                if (rect.left < EMPTY_BOUNDS_SENTINEL) {
                    if (rect.right > rect.left) {
                        if (rect.bottom > rect.top) {
                            this.stripNatural = rect;
                        }
                    }
                }
            }
        } catch (e) {
            return;
        }
    }
}
UiInspector.patched = false;
UiInspector.enabled = false;
UiInspector.initialized = false;
UiInspector.boxes = [];
UiInspector.labels = [];
UiInspector.rectBuffer = Libc.malloc(16);
UiInspector.stripNatural = { left: 0, top: 0, right: 1, bottom: 1 };
UiInspector.capturedLeaves = [];
UiInspector.captureSeq = 0;
UiInspector.renderedSeq = -1;
UiInspector.pendingDump = null;
UiInspector.lastRequest = "";
UiInspector.nextRequestPoll = 0;
UiInspector.lastSelection = "";
UiInspector.FUCK_POLL_DUMP_REQUEST = true;

var MAX_NODES = 8192;
var MAX_CHILDREN = 1024;
var MAX_DEPTH = 32;
var LOG_CHUNK_LENGTH = 700;

class UiSnapshot {
    static logSelection(pointers) {
        this.sequence = ++this.sequence;
        var snapshot = "".concat(Date.now(), "-", this.sequence);
        var nodes = pointers.map((pointer) => {
            var object = new DisplayObject(pointer);
            var type = this.getType(object);
            if (type.textField) {
                var text = new TextField(pointer).text;
            }
            return new TextField(pointer).text;
        });
    }
    static capture(label, includeHidden, excluded, requestId) {
        var started = Date.now();
        this.sequence = ++this.sequence;
        var snapshot = "".concat(started, "-", this.sequence);
        var nodes = [];
        var issues = [];
        var seen = new Set();
        var names = new Map();
        var root = Stage.getMainSprite();
        var viewport = [Stage.getMatrixX(), Stage.getMatrixY()];
        var pending = [{ pointer: root, parent: null, index: 0, name: "Stage", visible: true, alpha: 255, button: null, depth: 0 }];
        while (pending.length && nodes.length < MAX_NODES) {
            var item = pending.pop();
            var key = item.pointer.toString();
            if (!item.pointer.isNull() && !seen.has(key) && !excluded.has(key)) {
                seen.add(key);
                if (!item.name) {
                    item.name = names.get(key);
                }
                var node = { id: nodes.length, parent: item.parent, index: item.index, pointer: key, name: "", type: "Unknown", visible: false, effectiveVisible: false, button: item.button };
                try {
                    var object = new DisplayObject(item.pointer);
                    node.visible = object.visibility !== 0;
                    node.alpha = object.colorTransform.alpha;
                    node.effectiveAlpha = item.alpha * node.alpha / 255;
                    if (item.visible && node.visible) {
                        node.effectiveVisible = node.effectiveAlpha > 0;
                    }
                    if (!node.effectiveVisible && !includeHidden) {
                        continue;
                    }
                    var type = this.getType(object);
                    node.type = type.name;
                    if (type.button) {
                        node.button = item.button;
                    }
                    node.vtable = object.vtable.sub(Libg.libgBeginOffset).toString();
                    node.position = [object.x, object.y];
                    if (type.movieClip) {
                        node.exportName = new MovieClip(item.pointer).exportName || "";
                    }
                    if (type.textField) {
                        node.text = new TextField(item.pointer).text;
                    }
                    object.getBounds(root, this.rectangle);
                    var bounds = [0, 4, 8, 12].map((offset) => {
                        return this.rectangle.add(offset).readFloat();
                    });
                    if (bounds.every(Number.isFinite)) {
                        if (bounds[0] < 100000) {
                            if (bounds[2] > bounds[0]) {
                                if (bounds[3] > bounds[1]) {
                                    node.bounds = bounds.map(function (value) {
                                        return Math.round(value * 100) / 100;
                                    });
                                    if (bounds[2] > 0) {
                                        if (bounds[3] > 0) {
                                            if (bounds[0] < viewport[0]) {
                                                node.inViewport = bounds[1] < viewport[1];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    nodes.push(node);
                    var children = this.getChildren(item.pointer, type, names);
                    if (item.depth >= MAX_DEPTH) {
                        if (children.length) {
                            issues.push("depth limit at node ".concat(node.id));
                        }
                    }
                    var index = children.length - 1;
                    while (index >= 0) {
                        var child = children[index];
                        if (!child.pointer.isNull() && new DisplayObject(child.pointer).parent.equals(item.pointer)) {
                            pending.push({ pointer: child.pointer, parent: node.id, index: child.index, name: child.name, visible: node.effectiveVisible, button: node.button, alpha: node.effectiveAlpha, depth: item.depth + 1 });
                        }
                        index--;
                    }
                } catch (error) {
                    node.error = String(error);
                    if (nodes[nodes.length - 1] !== node) {
                        nodes.push(node);
                    }
                    issues.push("node ".concat(node.id, ": ", node.error));
                }
            }
        }
        if (pending.length) {
            issues.push("node limit reached; ".concat(pending.length, " branches remain"));
        }
        for (var node of nodes) {
            if (node.parent === node.button && node.button != null) {
                if (node.name) {
                    if (!nodes[node.button].name) {
                        nodes[node.button].name = node.name;
                    }
                }
            }
        }
        var result = { schema: 1, snapshot: snapshot, requestId: requestId, label: label, includeHidden: includeHidden, coordinateSpace: "Stage.mainSprite", traversal: "live display list", viewport: viewport, pointSize: Stage.getPointSize(), nodes: nodes, issues: issues, elapsedMs: Date.now() - started };
        Object.assign(result, null);
        this.emit(snapshot, 0, { event: "begin", nodes: undefined });
        nodes.forEach((node, index) => {
            this.emit(snapshot, index + 1, Object.assign({ event: "node" }, node));
        });
        this.emit(snapshot, nodes.length + 1, { event: "end", nodes: nodes.length, issues: issues });
        if (FileManager.saveDirPath) {
            FileManager.writeFile("".concat(FileManager.saveDirPath, "/ui-inspector-snapshot.json"), "w", JSON.stringify(result));
        }
        return result;
    }
    static emit(snapshot, record, value) {
        var serialized = JSON.stringify(value);
        var parts = Math.ceil(serialized.length / LOG_CHUNK_LENGTH);
        var part = 0;
        while (part < parts) {
            Logcat.logDebug("[UI] ".concat(JSON.stringify({ snapshot: snapshot, record: record, part: part, parts: parts, data: serialized.slice(part * LOG_CHUNK_LENGTH, (part + 1) * LOG_CHUNK_LENGTH) })));
            part++;
        }
    }
    static getType(object) {
        var key = object.vtable.toString();
        var cached = this.types.get(key);
        if (cached) {
            return cached;
        }
        var movieClip = !!object.isMovieClip();
        var textField = !movieClip && !!object.isTextField();
        var button = !movieClip && !textField && !!object.isCustomButton();
        var gui = !movieClip && !textField && !button && !!object.isGUIContainer();
        var scroll = !movieClip && !textField && !button && !gui && !!object.isScrollArea();
        var sprite = !movieClip && !textField && !!object.isSprite();
        var name = "DisplayObject";
        if (movieClip) {
            name = "MovieClip";
        } else if (textField) {
            name = "TextField";
        } else if (button) {
            name = "CustomButton";
        } else if (gui) {
            name = "GUIContainer";
        } else if (scroll) {
            name = "ScrollArea";
        } else if (sprite) {
            name = "Sprite";
        } else if (object.isShape()) {
            name = "Shape";
        } else if (object.isSprite3D()) {
            name = "Sprite3D";
        }
        var type = { name: name, movieClip: movieClip, textField: textField, sprite: sprite, button: button };
        return type;
    }
    static getChildren(pointer, type, names) {
        var children = [];
        if (type.movieClip) {
            var movieClip = new MovieClip(pointer);
            var count = movieClip.getChildCount();
            if (count < 0 || count > MAX_CHILDREN) {
                throw new Error("invalid MovieClip child count ".concat(count));
            }
            var array = movieClip.getChildArray();
            var nameArray = movieClip.getChildNameList();
            if (count) {
                if (array.isNull()) {
                    throw new Error("null MovieClip child array");
                }
            }
            var index = 0;
            while (index < count) {
                var childName = "";
                if (!nameArray.isNull()) {
                    var namePointer = nameArray.add(index * Process.pointerSize).readPointer();
                    if (!namePointer.isNull() && namePointer.readUtf8String() != null) {
                        childName = namePointer.readUtf8String();
                        names.set(array.add(index * Process.pointerSize).readPointer().toString(), childName);
                    }
                }
                children.push({ pointer: array.add(index * Process.pointerSize).readPointer(), index: index, name: childName });
                index++;
            }
        }
        if (!type.movieClip && type.sprite) {
            var sprite = new Sprite(pointer);
            var spriteChildCount = sprite.childCount;
            if (spriteChildCount > MAX_CHILDREN) {
                throw new Error("invalid Sprite child count ".concat(spriteChildCount));
            }
            var spriteIndex = 0;
            while (spriteIndex < spriteChildCount) {
                children.push({ pointer: sprite.getChildAt(spriteIndex), index: spriteIndex, name: "" });
                spriteIndex++;
            }
            return children;
        }
        return children;
    }
}
UiSnapshot.types = new Map();
UiSnapshot.rectangle = Libc.malloc(16);
UiSnapshot.sequence = 0;
