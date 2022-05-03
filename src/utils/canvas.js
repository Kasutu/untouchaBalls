"use strict";
exports.__esModule = true;
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    return Canvas;
}());
exports["default"] = Canvas;
