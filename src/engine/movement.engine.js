"use strict";
exports.__esModule = true;
var Movement = /** @class */ (function () {
    function Movement() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }
    Movement.prototype.listen = function () {
        addEventListener('keydown', this.inputListener);
        addEventListener('keyup', this.inputListener);
    };
    Movement.prototype.inputListener = function (event) {
        var inputState = event.type === 'keydown' ? true : false;
        switch (true) {
            case event.key === 'ArrowUp' ||
                event.keyCode === 87 ||
                event.keyCode === 32: // up arrow key
                this.up = inputState;
                break;
            case event.key === 'ArrowLeft' || event.keyCode === 65: // left arrow key
                this.left = inputState;
                break;
            case event.key === 'ArrowRight' || event.keyCode === 68: // right arrow key
                this.right = inputState;
                break;
            case event.key === 'down' || event.keyCode === 83:
                this.down = inputState;
        }
    };
    Movement.prototype.get = function () {
        return {
            up: this.up,
            down: this.down,
            left: this.left,
            right: this.right
        };
    };
    return Movement;
}());
exports["default"] = Movement;
