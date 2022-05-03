"use strict";
exports.__esModule = true;
var GameLoop = /** @class */ (function () {
    function GameLoop() {
        this.fpsInterval = 0;
        this.startTime = 0;
        this.now = 0;
        this.delta = 0;
        this.elapsed = 0;
    }
    GameLoop.prototype.start = function (fps) {
        this.fpsInterval = 1000 / fps;
        this.delta = Date.now();
        this.startTime = this.delta;
        this.animate();
    };
    GameLoop.prototype.animate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        requestAnimationFrame(this.animate);
        this.now = Date.now();
        this.elapsed = this.now - this.delta;
        if (this.elapsed > this.fpsInterval) {
            this.delta = this.now - (this.elapsed % this.fpsInterval);
            // Update and Render functions
            args;
        }
    };
    return GameLoop;
}());
exports["default"] = GameLoop;
