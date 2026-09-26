var SMOOTH_HUD_GRAPH_HEIGHT_PX = 130;
var SAMPLE_COUNT = 240;
var FRAMES_BEFORE_INIT = 30;
var VIEWPORT_REFRESH_FRAMES = 120;
var GRAPH_TOP = 0;
var BG_LEFT = 40;
var BARS_LEFT = 50;
var FULL_BAR_MS = 50;
var GREEN_MS = 1000 / 50;
var YELLOW_MS = 1000 / 30;
var FLOATS_PER_VERTEX = 6;
var VERTEX_STRIDE = FLOATS_PER_VERTEX * 4;
var MAX_FLOATS = (SAMPLE_COUNT + 1) * 6 * FLOATS_PER_VERTEX;
var GL_TRIANGLES = 4;
var GL_FLOAT = 5126;
var GL_ARRAY_BUFFER = 34962;
var GL_DYNAMIC_DRAW = 35048;
var GL_VERTEX_SHADER = 35633;
var GL_FRAGMENT_SHADER = 35632;
var GL_COMPILE_STATUS = 35713;
var GL_LINK_STATUS = 35714;
var GL_DEPTH_TEST = 2929;
var GL_BLEND = 3042;
var GL_SRC_ALPHA = 770;
var GL_ONE_MINUS_SRC_ALPHA = 771;
var GL_CURRENT_PROGRAM = 35725;
var GL_VERTEX_ARRAY_BINDING = 34229;
var GL_FRAMEBUFFER = 36160;
var GL_DRAW_FRAMEBUFFER_BINDING = 36006;
var GL_STENCIL_TEST = 2960;
var GL_SCISSOR_TEST = 3089;
var GL_VIEWPORT = 2978;
var VERTEX_SHADER_SOURCE = "#version 300 es\nin vec2 aPos;\nin vec4 aColor;\nout vec4 vColor;\nvoid main() { gl_Position = vec4(aPos, 0.0, 1.0); vColor = aColor; }";
var FRAGMENT_SHADER_SOURCE = "#version 300 es\nprecision mediump float;\nin vec4 vColor;\nout vec4 fragColor;\nvoid main() { fragColor = vColor; }";

class SmoothHud {
    isEnabled() {
        return this.textField !== null;
    }

    toggle() {
        if (this.textField) {
            Stage.Stage.removeChild(this.textField.instance);
            this.textField = null;
            SmoothHudGraph.enabled = false;
            return false;
        }
        this.textField = MovieClip.MovieClip.getTextFieldByName(StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left").instance, "text");
        this.textField.x = 20;
        this.textField.y = SMOOTH_HUD_GRAPH_HEIGHT_PX / Stage.Stage.getPointSize() + 8;
        this.textField.fontOutline = true;
        Stage.Stage.addChild(this.textField.instance);
        this.resetWindow(Date.now());
        SmoothHudGraph.enabled = true;
        return true;
    }

    update() {
        if (!this.textField) {
            return;
        }
        var now = Date.now();
        var frameMs = now - this.lastFrameAt;
        this.lastFrameAt = now;
        if (frameMs < this.minFrameMs) {
            this.minFrameMs = frameMs;
        }
        if (frameMs > this.maxFrameMs) {
            this.maxFrameMs = frameMs;
        }
        this.frames++;
        var elapsed = now - this.windowStartedAt;
        if (elapsed < 500) {
            return;
        }
        var fps = Math.round(this.frames * 1000 / elapsed);
        var averageMs = elapsed / this.frames;
        var fpsColor;
        if (fps >= 50) {
            fpsColor = 3329330;
        } else if (fps >= 30) {
            fpsColor = 16776960;
        } else {
            fpsColor = 16711680;
        }
        this.textField.color = 0xd0000000 + fpsColor;
        this.textField.text = "FPS ".concat(fps, "\n", averageMs.toFixed(1), " ms (", this.minFrameMs, "-", this.maxFrameMs, ")");
        this.resetWindow(now);
    }

    resetWindow(now) {
        this.frames = 0;
        this.windowStartedAt = now;
        this.lastFrameAt = now;
        this.minFrameMs = Number.POSITIVE_INFINITY;
        this.maxFrameMs = 0;
    }
}

SmoothHud.textField = null;
SmoothHud.frames = 0;
SmoothHud.windowStartedAt = 0;
SmoothHud.lastFrameAt = 0;
SmoothHud.minFrameMs = Number.POSITIVE_INFINITY;
SmoothHud.maxFrameMs = 0;

class SmoothHudGraph {
    patch() {
        if (Process.platform === "darwin") {
            return;
        }
        var eglSwapBuffers = Module.findExportByName("libEGL.so", "eglSwapBuffers");
        if (!eglSwapBuffers) {
            return;
        }
        Interceptor.attach(eglSwapBuffers, {
            onEnter() {
                SmoothHudGraph.onFrame();
            }
        });
    }

    onFrame() {
        if (!this.enabled) {
            this.lastFrameAt = 0;
            this.sampleFilled = 0;
            this.sampleHead = 0;
            return;
        }
        var now = Date.now();
        if (this.lastFrameAt !== 0) {
            this.samples[this.sampleHead] = now - this.lastFrameAt;
            this.sampleHead = (this.sampleHead + 1) % SAMPLE_COUNT;
            if (this.sampleFilled < SAMPLE_COUNT) {
                this.sampleFilled++;
            }
        }
        this.lastFrameAt = now;
        this.framesSinceStart++;
        if (!this.initializationAttempted) {
            if (this.framesSinceStart > FRAMES_BEFORE_INIT) {
                this.initializationAttempted = true;
                try {
                    this.initializeGPU();
                } catch (e) {
                    Logcat.Logcat.logDebug("SmoothHudGraph init error: " + e);
                }
            }
        }
        if (!this.initialized) {
            return;
        }
        try {
            this.draw();
        } catch (e) {
            Logcat.Logcat.logDebug("SmoothHudGraph draw error: " + e);
        }
    }

    draw() {
        var gl = this.gl;
        if (this.viewportWidth === 0 || this.framesSinceStart % VIEWPORT_REFRESH_FRAMES === 0) {
            gl.getIntegerv(GL_VIEWPORT, this.viewportBuffer);
            this.viewportWidth = this.viewportBuffer.add(8).readS32();
            this.viewportHeight = this.viewportBuffer.add(12).readS32();
        }
        if (this.viewportWidth <= 0 || this.viewportHeight <= 0) {
            return;
        }
        var vertexCount = this.buildGeometry();
        if (vertexCount === 0) {
            return;
        }
        this.vertexBuffer.writeByteArray(this.scratch.buffer);
        gl.getIntegerv(GL_CURRENT_PROGRAM, this.savedState);
        gl.getIntegerv(GL_VERTEX_ARRAY_BINDING, this.savedState.add(4));
        gl.getIntegerv(GL_DRAW_FRAMEBUFFER_BINDING, this.savedState.add(8));
        gl.bindFramebuffer(GL_FRAMEBUFFER, 0);
        gl.useProgram(this.program);
        gl.bindVertexArray(this.vertexArrayObject);
        gl.disable(GL_DEPTH_TEST);
        gl.disable(GL_STENCIL_TEST);
        gl.disable(GL_SCISSOR_TEST);
        gl.enable(GL_BLEND);
        gl.blendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
        gl.depthMask(0);
        gl.bindBuffer(GL_ARRAY_BUFFER, this.vertexBufferObject);
        gl.bufferData(GL_ARRAY_BUFFER, vertexCount * VERTEX_STRIDE, this.vertexBuffer, GL_DYNAMIC_DRAW);
        gl.enableVertexAttribArray(this.positionLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, GL_FLOAT, 0, VERTEX_STRIDE, ptr(0));
        gl.enableVertexAttribArray(this.colorLocation);
        gl.vertexAttribPointer(this.colorLocation, 4, GL_FLOAT, 0, VERTEX_STRIDE, ptr(8));
        gl.drawArrays(GL_TRIANGLES, 0, vertexCount);
        gl.disableVertexAttribArray(this.positionLocation);
        gl.disableVertexAttribArray(this.colorLocation);
        gl.bindBuffer(GL_ARRAY_BUFFER, 0);
        gl.bindFramebuffer(GL_FRAMEBUFFER, this.savedState.add(8).readU32());
        gl.bindVertexArray(this.savedState.add(4).readU32());
        gl.useProgram(this.savedState.readU32());
        gl.disable(GL_BLEND);
        gl.enable(GL_DEPTH_TEST);
    }

    buildGeometry() {
        this.scratchIndex = 0;
        var width = this.viewportWidth;
        var height = this.viewportHeight;
        var graphBottom = GRAPH_TOP + SMOOTH_HUD_GRAPH_HEIGHT_PX;
        var barWidth = (width - BARS_LEFT) / SAMPLE_COUNT;
        var ndcXScale = 2 / width;
        var ndcYScale = 2 / height;
        var toNdcX = function (x) {
            return x * ndcXScale - 1;
        };
        var toNdcY = function (y) {
            return 1 - y * ndcYScale;
        };
        this.emitQuad(toNdcX(BG_LEFT), toNdcY(graphBottom), toNdcX(width), toNdcY(GRAPH_TOP), 0, 0, 0, 0.47);
        var bottomNdc = toNdcY(graphBottom);
        for (var i = 0; i < this.sampleFilled; i++) {
            var sampleIndex = (this.sampleHead - this.sampleFilled + i + SAMPLE_COUNT) % SAMPLE_COUNT;
            var frameMs = this.samples[sampleIndex];
            var barHeight = (frameMs < FULL_BAR_MS ? frameMs / FULL_BAR_MS : 1) * SMOOTH_HUD_GRAPH_HEIGHT_PX;
            var left = BARS_LEFT + i * barWidth;
            var r = 1;
            var g = 0.25;
            var b = 0.25;
            if (frameMs <= GREEN_MS) {
                r = 0.2;
                g = 0.8;
                b = 0.2;
            } else if (frameMs <= YELLOW_MS) {
                r = 1;
                g = 0.85;
                b = 0;
            }
            this.emitQuad(toNdcX(left), bottomNdc, toNdcX(left + barWidth), toNdcY(graphBottom - barHeight), r, g, b, 0.9);
        }
        return this.scratchIndex / FLOATS_PER_VERTEX;
    }

    emitQuad(x0, y0, x1, y1, r, g, b, a) {
        this.pushVertex(x0, y0, r, g, b, a);
        this.pushVertex(x1, y0, r, g, b, a);
        this.pushVertex(x1, y1, r, g, b, a);
        this.pushVertex(x0, y0, r, g, b, a);
        this.pushVertex(x1, y1, r, g, b, a);
        this.pushVertex(x0, y1, r, g, b, a);
    }

    pushVertex(x, y, r, g, b, a) {
        var scratch = this.scratch;
        var index = this.scratchIndex;
        scratch[index] = x;
        scratch[index + 1] = y;
        scratch[index + 2] = r;
        scratch[index + 3] = g;
        scratch[index + 4] = b;
        scratch[index + 5] = a;
        this.scratchIndex = index + FLOATS_PER_VERTEX;
    }

    initializeGPU() {
        var fn = function (name, ret, args) {
            var address = Module.findExportByName("libGLESv2.so", name);
            return address === null ? null : new NativeFunction(address, ret, args);
        };
        this.gl = { createShader: fn("glCreateShader", "uint32", ["uint32"]), shaderSource: fn("glShaderSource", "void", ["uint32", "int32", "pointer", "pointer"]), compileShader: fn("glCompileShader", "void", ["uint32"]), getShaderiv: fn("glGetShaderiv", "void", ["uint32", "uint32", "pointer"]), createProgram: fn("glCreateProgram", "uint32", []), attachShader: fn("glAttachShader", "void", ["uint32", "uint32"]), linkProgram: fn("glLinkProgram", "void", ["uint32"]), getProgramiv: fn("glGetProgramiv", "void", ["uint32", "uint32", "pointer"]), useProgram: fn("glUseProgram", "void", ["uint32"]), getAttribLocation: fn("glGetAttribLocation", "int32", ["uint32", "pointer"]), enableVertexAttribArray: fn("glEnableVertexAttribArray", "void", ["uint32"]), disableVertexAttribArray: fn("glDisableVertexAttribArray", "void", ["uint32"]), vertexAttribPointer: fn("glVertexAttribPointer", "void", ["uint32", "int32", "uint32", "uint8", "int32", "pointer"]), drawArrays: fn("glDrawArrays", "void", ["uint32", "int32", "int32"]), genBuffers: fn("glGenBuffers", "void", ["int32", "pointer"]), bindBuffer: fn("glBindBuffer", "void", ["uint32", "uint32"]), bufferData: fn("glBufferData", "void", ["uint32", "int32", "pointer", "uint32"]), enable: fn("glEnable", "void", ["uint32"]), disable: fn("glDisable", "void", ["uint32"]), blendFunc: fn("glBlendFunc", "void", ["uint32", "uint32"]), depthMask: fn("glDepthMask", "void", ["uint8"]), getIntegerv: fn("glGetIntegerv", "void", ["uint32", "pointer"]), genVertexArrays: fn("glGenVertexArrays", "void", ["int32", "pointer"]), bindVertexArray: fn("glBindVertexArray", "void", ["uint32"]), bindFramebuffer: fn("glBindFramebuffer", "void", ["uint32", "uint32"]) };
        if (!this.gl.createShader) {
            Logcat.Logcat.logDebug("SmoothHudGraph: GL funcs missing");
            return false;
        }
        var vertexShader = this.compileShader(GL_VERTEX_SHADER, VERTEX_SHADER_SOURCE);
        var fragmentShader = this.compileShader(GL_FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
        if (!vertexShader || !fragmentShader) {
            Logcat.Logcat.logDebug("SmoothHudGraph: shader compile failed");
            return false;
        }
        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        var status = Libc.Libc.malloc(4);
        this.gl.getProgramiv(this.program, GL_LINK_STATUS, status);
        if (!status.readS32()) {
            Logcat.Logcat.logDebug("SmoothHudGraph: program link failed");
            return false;
        }
        this.positionLocation = this.gl.getAttribLocation(this.program, Memory.allocUtf8String("aPos"));
        this.colorLocation = this.gl.getAttribLocation(this.program, Memory.allocUtf8String("aColor"));
        var idBuffer = Libc.Libc.malloc(4);
        this.gl.genVertexArrays(1, idBuffer);
        this.vertexArrayObject = idBuffer.readU32();
        this.gl.genBuffers(1, idBuffer);
        this.vertexBufferObject = idBuffer.readU32();
        this.initialized = true;
        return true;
    }

    compileShader(type, source) {
        var shader = this.gl.createShader(type);
        if (!shader) {
            return 0;
        }
        var sourcePointer = Memory.allocUtf8String(source);
        var sourceArray = Libc.Libc.malloc(8);
        sourceArray.writePointer(sourcePointer);
        this.gl.shaderSource(shader, 1, sourceArray, NULL);
        this.gl.compileShader(shader);
        var status = Libc.Libc.malloc(4);
        this.gl.getShaderiv(shader, GL_COMPILE_STATUS, status);
        if (status.readS32()) {
            return shader;
        }
        return 0;
    }
}

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
SmoothHudGraph.vertexBuffer = Libc.Libc.malloc(MAX_FLOATS * 4);
SmoothHudGraph.savedState = Libc.Libc.malloc(12);
SmoothHudGraph.viewportBuffer = Libc.Libc.malloc(16);
