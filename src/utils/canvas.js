"use strict";
exports.__esModule = true;
var movement_engine_1 = require("../engine/movement.engine");
var _a = new movement_engine_1["default"](), listen = _a.listen, get = _a.get;
var Canvas = /** @class */ (function () {
    function Canvas() {
        var _this = this;
        this.charX = 0;
        this.redraw = function () {
            var context = _this.ctx;
            var greninjaImg = new Image();
            greninjaImg.onload = function (e) {
                context === null || context === void 0 ? void 0 : context.drawImage(greninjaImg, _this.charX, 0);
            };
            greninjaImg.src = 'greninja.png';
        };
        this.eventHandler = function () {
            if (get().up) {
                _this.charX += 25;
            }
            else if (get().down) {
                _this.charX += 25;
            }
            else if (get().right) {
                _this.charX += 25;
            }
            else if (get().left) {
                _this.charX += 25;
            }
        };
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.eventHandler();
    }
    return Canvas;
}());
exports["default"] = Canvas;
var canvas = new Canvas();
canvas.redraw();
