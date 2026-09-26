// =============================================================
// FEATURE: Smooth HUD
// config keys: -
// Smoothed HUD graphs (health etc.).
// merged webpack modules: 5230 SmoothHud, 6364 SmoothHudGraph
// =============================================================

// --------------------- MODULE 5230 — SmoothHud ---------------------

// ============================================================ //
// webpack module 5230  —  SmoothHud
// exports: SmoothHud
// deps: 612 (MovieClip), 6364 (SmoothHudGraph), 8632 (Stage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[5230] = function SmoothHud_factory(__unused_webpack_module, exports, __webpack_require__) {
    var MovieClip, StringTable, Stage, SmoothHudGraph, SmoothHud, <class_fields_init>, SmoothHud;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SmoothHud = undefined;
        MovieClip = __webpack_require__(612);
        StringTable = __webpack_require__(9250);
        Stage = __webpack_require__(8632);
        SmoothHudGraph = __webpack_require__(6364);
        <class_fields_init> = undefined;
        SmoothHud;
        class SmoothHud {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa73dd (open) */
}
            isEnabled () {
        return ((this).textField !== null);
}
            toggle () {
        if ((this).textField) {
            ((Stage).Stage).removeChild(((this).textField).instance);
            this.textField = null;
            (SmoothHudGraph).SmoothHudGraph.enabled = false;
            return false;
        } /* if 0xa7100 */
        this.textField = ((MovieClip).MovieClip).getTextFieldByName((((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left")).instance, "text");
        (this).textField.x = 20;
        (this).textField.y = (((SmoothHudGraph).SMOOTH_HUD_GRAPH_HEIGHT_PX / ((Stage).Stage).getPointSize()) + 8);
        (this).textField.fontOutline = true;
        ((Stage).Stage).addChild(((this).textField).instance);
        (this).resetWindow((Date).now());
        (SmoothHudGraph).SmoothHudGraph.enabled = true;
        return true;
}
            update () {
    var now, frameMs, elapsed, fps, averageMs;
        if ((!(this).textField)) {
            return;
        } /* if 0xa721e */
        now = (Date).now();
        frameMs = (now - (this).lastFrameAt);
        this.lastFrameAt = now;
        if ((frameMs < (this).minFrameMs)) {
            this.minFrameMs = frameMs;
        } /* if 0xa7259 */
        if ((frameMs > (this).maxFrameMs)) {
            this.maxFrameMs = frameMs;
        } /* if 0xa7270 */
        this.frames = (++(this).frames);
        elapsed = (now - (this).windowStartedAt);
        if ((elapsed < 500)) {
            return;
        } /* if 0xa7293 */
        fps = (Math).round((((this).frames * 1000) / elapsed));
        averageMs = (elapsed / (this).frames);
        if ((fps >= 50)) {
        } /* if 0xa72d5 */
        /* jump -> 0xa72e9 */
        if ((fps >= 30)) {
        } /* if 0xa72e4 */
        /* jump -> 0xa72e9 */
        3329330.color = (16776960 + 16711680);
        (this).textField.text = ("FPS ").concat(fps, "\n", (averageMs).toFixed(1), " ms (", (this).minFrameMs, "-", (this).maxFrameMs, ")");
        return;
}
            resetWindow (now) {
        this.frames = 0;
        this.windowStartedAt = now;
        this.lastFrameAt = now;
        this.minFrameMs = (Number).POSITIVE_INFINITY;
        this.maxFrameMs = 0;
        return;
}
        }
        SmoothHud = v8 = SmoothHud;
        exports.SmoothHud = SmoothHud;
        SmoothHud.textField = null;
        SmoothHud.frames = 0;
        SmoothHud.windowStartedAt = 0;
        SmoothHud.lastFrameAt = 0;
        SmoothHud.minFrameMs = (Number).POSITIVE_INFINITY;
        SmoothHud.maxFrameMs = 0;
        return;
};

// --------------------- MODULE 6364 — SmoothHudGraph ---------------------

// ============================================================ //
// webpack module 6364  —  SmoothHudGraph
// exports: SMOOTH_HUD_GRAPH_HEIGHT_PX, SmoothHudGraph
// deps: 1978 (Libc), 3380 (Logcat)
// ============================================================ //

__webpack_modules__[6364] = function SmoothHudGraph_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Logcat, GL_TRIANGLES, GL_FLOAT, GL_ARRAY_BUFFER, GL_DYNAMIC_DRAW, GL_VERTEX_SHADER, GL_FRAGMENT_SHADER, GL_COMPILE_STATUS, GL_LINK_STATUS, GL_DEPTH_TEST, GL_BLEND, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA, GL_CURRENT_PROGRAM, GL_VERTEX_ARRAY_BINDING, GL_FRAMEBUFFER, GL_DRAW_FRAMEBUFFER_BINDING, GL_STENCIL_TEST, GL_SCISSOR_TEST, GL_VIEWPORT, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE, SAMPLE_COUNT, FRAMES_BEFORE_INIT, VIEWPORT_REFRESH_FRAMES, GRAPH_TOP, BG_LEFT, BARS_LEFT, FULL_BAR_MS, GREEN_MS, YELLOW_MS, FLOATS_PER_VERTEX, VERTEX_STRIDE, MAX_FLOATS, SmoothHudGraph, <class_fields_init>, SmoothHudGraph;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SMOOTH_HUD_GRAPH_HEIGHT_PX = undefined;
        undefined.SmoothHudGraph = exports;
        Libc = __webpack_require__(1978);
        Logcat = __webpack_require__(3380);
        GL_TRIANGLES = 4;
        GL_FLOAT = 5126;
        GL_ARRAY_BUFFER = 34962;
        GL_DYNAMIC_DRAW = 35048;
        GL_VERTEX_SHADER = 35633;
        GL_FRAGMENT_SHADER = 35632;
        GL_COMPILE_STATUS = 35713;
        GL_LINK_STATUS = 35714;
        GL_DEPTH_TEST = 2929;
        GL_BLEND = 3042;
        GL_SRC_ALPHA = 770;
        GL_ONE_MINUS_SRC_ALPHA = 771;
        GL_CURRENT_PROGRAM = 35725;
        GL_VERTEX_ARRAY_BINDING = 34229;
        GL_FRAMEBUFFER = 36160;
        GL_DRAW_FRAMEBUFFER_BINDING = 36006;
        GL_STENCIL_TEST = 2960;
        GL_SCISSOR_TEST = 3089;
        GL_VIEWPORT = 2978;
        VERTEX_SHADER_SOURCE = "#version 300 es\nin vec2 aPos;\nin vec4 aColor;\nout vec4 vColor;\nvoid main() { gl_Position = vec4(aPos, 0.0, 1.0); vColor = aColor; }";
        FRAGMENT_SHADER_SOURCE = "#version 300 es\nprecision mediump float;\nin vec4 vColor;\nout vec4 fragColor;\nvoid main() { fragColor = vColor; }";
        exports.SMOOTH_HUD_GRAPH_HEIGHT_PX = 130;
        SAMPLE_COUNT = 240;
        FRAMES_BEFORE_INIT = 30;
        VIEWPORT_REFRESH_FRAMES = 120;
        GRAPH_TOP = 0;
        BG_LEFT = 40;
        BARS_LEFT = 50;
        FULL_BAR_MS = 50;
        GREEN_MS = (1000 / 50);
        YELLOW_MS = (1000 / 30);
        FLOATS_PER_VERTEX = 6;
        VERTEX_STRIDE = (FLOATS_PER_VERTEX * 4);
        MAX_FLOATS = (((SAMPLE_COUNT + 1) * 6) * FLOATS_PER_VERTEX);
        <class_fields_init> = undefined;
        SmoothHudGraph;
        class SmoothHudGraph {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa89d8 (open) */
}
            patch () {
    var eglSwapBuffers;
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0xa7861 */
        eglSwapBuffers = (Module).findExportByName("libEGL.so", "eglSwapBuffers");
        if ((!eglSwapBuffers)) {
            return;
        } /* if 0xa7895 */
        return;
}
            onFrame () {
    var now, e, e;
        if ((!(this).enabled)) {
            this.lastFrameAt = 0;
            this.sampleFilled = 0;
            this.sampleHead = 0;
            return;
        } /* if 0xa7933 */
        now = (Date).now();
        if (((this).lastFrameAt !== 0)) {
            (this).samples[(this).sampleHead] = (now - (this).lastFrameAt);
            this.sampleHead = (((this).sampleHead + 1) % SAMPLE_COUNT);
            if (((this).sampleFilled < SAMPLE_COUNT)) {
                this.sampleFilled = (++(this).sampleFilled);
            } /* if 0xa798d */
        } /* if 0xa798d */
        this.lastFrameAt = now;
        this.framesSinceStart = (++(this).framesSinceStart);
        if ((!(this).initializationAttempted)) {
            if (((this).framesSinceStart > FRAMES_BEFORE_INIT)) {
                this.initializationAttempted = true;
                /* CATCH -> 0xa79d3 (try region) */
                (this).initializeGPU();
            } /* if 0xa79f2 */
        } /* if 0xa79f2 */
        /* jump -> 0xa79f2 */
        e = this;
        /* CATCH -> 0xa79f4 (try region) */
        ((Logcat).Logcat).logDebug(("SmoothHudGraph init error: " + e));
        /* jump -> 0xa79f2 */
        throw this;
        if ((!(this).initialized)) {
            return;
            /* CATCH -> 0xa7a10 (try region) */
        } /* if 0xa79fc */
        (this).draw();
        return;
        e = this;
        /* CATCH -> 0xa7a30 (try region) */
        ((Logcat).Logcat).logDebug(("SmoothHudGraph draw error: " + e));
        return;
        throw this;
}
            draw () {
    var gl, vertexCount;
        gl = (this).gl;
        if (!((this).viewportWidth === 0)) {
            ((this).viewportWidth === 0);
            if ((((this).framesSinceStart % VIEWPORT_REFRESH_FRAMES) === 0)) {
                (gl).getIntegerv(GL_VIEWPORT, (this).viewportBuffer);
                this.viewportWidth = (((this).viewportBuffer).add(8)).readS32();
                this.viewportHeight = (((this).viewportBuffer).add(12)).readS32();
            } /* if 0xa7b3e */
        } /* if 0xa7aeb */
        if (!((this).viewportWidth <= 0)) {
            ((this).viewportWidth <= 0);
            if (((this).viewportHeight <= 0)) {
                return;
            } /* if 0xa7b55 */
        } /* if 0xa7b52 */
        vertexCount = (this).buildGeometry();
        if ((vertexCount === 0)) {
            return;
        } /* if 0xa7b67 */
        ((this).vertexBuffer).writeByteArray(((this).scratch).buffer);
        (gl).getIntegerv(GL_CURRENT_PROGRAM, (this).savedState);
        (gl).getIntegerv(GL_VERTEX_ARRAY_BINDING, ((this).savedState).add(4));
        (gl).getIntegerv(GL_DRAW_FRAMEBUFFER_BINDING, ((this).savedState).add(8));
        (gl).bindFramebuffer(GL_FRAMEBUFFER, 0);
        (gl).useProgram((this).program);
        (gl).bindVertexArray((this).vertexArrayObject);
        (gl).disable(GL_DEPTH_TEST);
        (gl).disable(GL_STENCIL_TEST);
        (gl).disable(GL_SCISSOR_TEST);
        (gl).enable(GL_BLEND);
        (gl).blendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
        (gl).depthMask(0);
        (gl).bindBuffer(GL_ARRAY_BUFFER, (this).vertexBufferObject);
        (gl).bufferData(GL_ARRAY_BUFFER, (vertexCount * VERTEX_STRIDE), (this).vertexBuffer, GL_DYNAMIC_DRAW);
        (gl).enableVertexAttribArray((this).positionLocation);
        (gl).vertexAttribPointer((this).positionLocation, 2, GL_FLOAT, 0, VERTEX_STRIDE, ptr(0));
        (gl).enableVertexAttribArray((this).colorLocation);
        (gl).vertexAttribPointer((this).colorLocation, 4, GL_FLOAT, 0, VERTEX_STRIDE, ptr(8));
        (gl).drawArrays(GL_TRIANGLES, 0, vertexCount);
        (gl).disableVertexAttribArray((this).positionLocation);
        (gl).disableVertexAttribArray((this).colorLocation);
        (gl).bindBuffer(GL_ARRAY_BUFFER, 0);
        (gl).bindFramebuffer(GL_FRAMEBUFFER, (((this).savedState).add(8)).readU32());
        (gl).bindVertexArray((((this).savedState).add(4)).readU32());
        (gl).useProgram(((this).savedState).readU32());
        (gl).disable(GL_BLEND);
        (gl).enable(GL_DEPTH_TEST);
        return;
}
            buildGeometry () {
    var width, height, graphBottom, barWidth, ndcXScale, ndcYScale, toNdcX, toNdcY, bottomNdc, i, sampleIndex, frameMs, barHeight, left, r, g, b;
        this.scratchIndex = 0;
        width = (this).viewportWidth;
        height = (this).viewportHeight;
        graphBottom = (GRAPH_TOP + (exports).SMOOTH_HUD_GRAPH_HEIGHT_PX);
        barWidth = ((width - BARS_LEFT) / SAMPLE_COUNT);
        ndcXScale = (2 / width);
        ndcYScale = (2 / height);
        toNdcX = this;
        toNdcY = width = height = graphBottom = barWidth = ndcXScale = ndcYScale = toNdcX = toNdcY = bottomNdc = <underflow>;
        (this).emitQuad(toNdcX(BG_LEFT), toNdcY(graphBottom), toNdcX(width), toNdcY(GRAPH_TOP), 0, 0, 0, 0.47);
        bottomNdc = toNdcY(graphBottom);
        i = 0;
        while ((i < (this).sampleFilled)) {
            sampleIndex = (((((this).sampleHead - (this).sampleFilled) + i) + SAMPLE_COUNT) % SAMPLE_COUNT);
            frameMs = (this).samples[sampleIndex];
            if ((frameMs < FULL_BAR_MS)) {
            } /* if 0xa7fa7 */
            /* jump -> 0xa7fa8 */
            barHeight = (1 * (exports).SMOOTH_HUD_GRAPH_HEIGHT_PX);
            left = (BARS_LEFT + (i * barWidth));
            r = 1;
            g = 0.25;
            b = 0.25;
            if ((frameMs <= GREEN_MS)) {
                r = 0.2;
                g = 0.8;
                b = 0.2;
            } /* if 0xa7fe9 */
            /* jump -> 0xa8005 */
            if ((frameMs <= YELLOW_MS)) {
                r = 1;
                g = 0.85;
                b = 0;
            } /* if 0xa8005 */
            (this).emitQuad(toNdcX(left), bottomNdc, toNdcX((left + barWidth)), toNdcY((graphBottom - barHeight)), r, g, b, 0.9);
            i = ((i) + 1);
            (i++);
        } /* while 0xa8049 */
        return ((this).scratchIndex / FLOATS_PER_VERTEX);
}
            emitQuad (x0, y0, x1, y1, r, g, b, a) {
        (this).pushVertex(x0, y0, r, g, b, a);
        (this).pushVertex(x1, y0, r, g, b, a);
        (this).pushVertex(x1, y1, r, g, b, a);
        (this).pushVertex(x0, y0, r, g, b, a);
        (this).pushVertex(x1, y1, r, g, b, a);
        return;
}
            pushVertex (x, y, r, g, b, a) {
    var scratch, index;
        scratch = (this).scratch;
        index = (this).scratchIndex;
        scratch[index] = x;
        scratch[(index + 1)] = y;
        scratch[(index + 2)] = r;
        scratch[(index + 3)] = g;
        scratch[(index + 4)] = b;
        scratch[(index + 5)] = a;
        this.scratchIndex = (index + FLOATS_PER_VERTEX);
        return;
}
            initializeGPU () {
    var fn, vertexShader, fragmentShader, status, idBuffer;
        fn = fn = vertexShader = fragmentShader = status = idBuffer = <underflow>;
        this.gl = { createShader: fn("glCreateShader", "uint32", ["uint32"]), shaderSource: fn("glShaderSource", "void", ["uint32", "int32", "pointer", "pointer"]), compileShader: fn("glCompileShader", "void", ["uint32"]), getShaderiv: fn("glGetShaderiv", "void", ["uint32", "uint32", "pointer"]), createProgram: fn("glCreateProgram", "uint32", []), attachShader: fn("glAttachShader", "void", ["uint32", "uint32"]), linkProgram: fn("glLinkProgram", "void", ["uint32"]), getProgramiv: fn("glGetProgramiv", "void", ["uint32", "uint32", "pointer"]), useProgram: fn("glUseProgram", "void", ["uint32"]), getAttribLocation: fn("glGetAttribLocation", "int32", ["uint32", "pointer"]), enableVertexAttribArray: fn("glEnableVertexAttribArray", "void", ["uint32"]), disableVertexAttribArray: fn("glDisableVertexAttribArray", "void", ["uint32"]), vertexAttribPointer: fn("glVertexAttribPointer", "void", ["uint32", "int32", "uint32", "uint8", "int32", "pointer"]), drawArrays: fn("glDrawArrays", "void", ["uint32", "int32", "int32"]), genBuffers: fn("glGenBuffers", "void", ["int32", "pointer"]), bindBuffer: fn("glBindBuffer", "void", ["uint32", "uint32"]), bufferData: fn("glBufferData", "void", ["uint32", "int32", "pointer", "uint32"]), enable: fn("glEnable", "void", ["uint32"]), disable: fn("glDisable", "void", ["uint32"]), blendFunc: fn("glBlendFunc", "void", ["uint32", "uint32"]), depthMask: fn("glDepthMask", "void", ["uint8"]), getIntegerv: fn("glGetIntegerv", "void", ["uint32", "pointer"]), genVertexArrays: fn("glGenVertexArrays", "void", ["int32", "pointer"]), bindVertexArray: fn("glBindVertexArray", "void", ["uint32"]), bindFramebuffer: fn("glBindFramebuffer", "void", ["uint32", "uint32"]) };
        if ((!((this).gl).createShader)) {
            ((Logcat).Logcat).logDebug("SmoothHudGraph: GL funcs missing");
            return false;
        } /* if 0xa8645 */
        vertexShader = (this).compileShader(GL_VERTEX_SHADER, VERTEX_SHADER_SOURCE);
        fragmentShader = (this).compileShader(GL_FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
        if (!(!vertexShader)) {
            if ((!fragmentShader)) {
                ((Logcat).Logcat).logDebug("SmoothHudGraph: shader compile failed");
                return false;
            } /* if 0xa868d */
        } /* if 0xa8673 */
        this.program = ((this).gl).createProgram();
        ((this).gl).attachShader((this).program, vertexShader);
        ((this).gl).attachShader((this).program, fragmentShader);
        ((this).gl).linkProgram((this).program);
        status = ((Libc).Libc).malloc(4);
        ((this).gl).getProgramiv((this).program, GL_LINK_STATUS, status);
        if ((!(status).readS32())) {
            ((Logcat).Logcat).logDebug("SmoothHudGraph: program link failed");
            return false;
        } /* if 0xa8743 */
        this.positionLocation = ((this).gl).getAttribLocation((this).program, (Memory).allocUtf8String("aPos"));
        this.colorLocation = ((this).gl).getAttribLocation((this).program, (Memory).allocUtf8String("aColor"));
        idBuffer = ((Libc).Libc).malloc(4);
        ((this).gl).genVertexArrays(1, idBuffer);
        this.vertexArrayObject = (idBuffer).readU32();
        ((this).gl).genBuffers(1, idBuffer);
        this.vertexBufferObject = (idBuffer).readU32();
        this.initialized = true;
        return true;
}
            compileShader (type, source) {
    var shader, sourcePointer, sourceArray, status;
        shader = ((this).gl).createShader(type);
        if ((!shader)) {
            return 0;
        } /* if 0xa8907 */
        sourcePointer = (Memory).allocUtf8String(source);
        sourceArray = ((Libc).Libc).malloc(8);
        (sourceArray).writePointer(sourcePointer);
        ((this).gl).shaderSource(shader, 1, sourceArray, NULL);
        ((this).gl).compileShader(shader);
        status = ((Libc).Libc).malloc(4);
        ((this).gl).getShaderiv(shader, GL_COMPILE_STATUS, status);
        if ((status).readS32()) {
            return shader;
        } /* if 0xa89a3 */
        return 0;
}
        }
        SmoothHudGraph = GL_COMPILE_STATUS = SmoothHudGraph;
        exports.SmoothHudGraph = SmoothHudGraph;
        SmoothHudGraph.enabled = false;
        SmoothHudGraph.gl = null;
        SmoothHudGraph.program = 0;
        SmoothHudGraph.vertexBufferObject = 0;
        SmoothHudGraph.vertexArrayObject = 0;
        SmoothHudGraph.positionLocation = 0;
        SmoothHudGraph.colorLocation = 0;
        SmoothHudGraph.initialized = false;
        SmoothHudGraph.initializationAttempted = false;
        SmoothHudGraph.framesSinceStart = 0;
        SmoothHudGraph.samples = new Float32Array(SAMPLE_COUNT);
        SmoothHudGraph.sampleHead = 0;
        SmoothHudGraph.sampleFilled = 0;
        SmoothHudGraph.lastFrameAt = 0;
        SmoothHudGraph.scratch = new Float32Array(MAX_FLOATS);
        SmoothHudGraph.scratchIndex = 0;
        SmoothHudGraph.viewportWidth = 0;
        SmoothHudGraph.viewportHeight = 0;
        SmoothHudGraph.vertexBuffer = ((Libc).Libc).malloc((MAX_FLOATS * 4));
        SmoothHudGraph.savedState = ((Libc).Libc).malloc(12);
        SmoothHudGraph.viewportBuffer = ((Libc).Libc).malloc(16);
        return;
};

