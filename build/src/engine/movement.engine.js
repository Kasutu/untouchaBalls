export default class Movement {
    constructor() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }
    listen() {
        addEventListener('keydown', this.inputListener);
        addEventListener('keyup', this.inputListener);
    }
    inputListener(event) {
        let inputState = event.type === 'keydown' ? true : false;
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
    }
    get() {
        return {
            up: this.up,
            down: this.down,
            left: this.left,
            right: this.right,
        };
    }
}
