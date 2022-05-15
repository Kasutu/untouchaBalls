export default class Movement {
    constructor() {
        this.movement = (player) => {
            // movement and position behavior calculation
            // up
            if (this.up) {
                // console.log('up');
                player.y -= 5;
            }
            // down
            if (this.down) {
                // console.log('down');
                player.y += 5;
            }
            // left
            if (this.left) {
                // console.log('left');
                player.x -= 5;
            }
            // right
            if (this.right) {
                // console.log('right');
                player.x += 5;
            }
        };
        window.addEventListener('keydown', (ev) => this.inputListener(ev));
        window.addEventListener('keyup', (ev) => this.inputListener(ev));
    }
    inputListener(event) {
        this.inputState = event.type === 'keydown' ? true : false;
        switch (true) {
            case event.key === 'ArrowUp' ||
                event.keyCode === 87 ||
                event.keyCode === 32: // up arrow key
                this.up = this.inputState;
                break;
            case event.key === 'ArrowLeft' || event.keyCode === 65: // left arrow key
                this.left = this.inputState;
                break;
            case event.key === 'ArrowRight' || event.keyCode === 68: // right arrow key
                this.right = this.inputState;
                break;
            case event.key === 'down' || event.keyCode === 83:
                this.down = this.inputState;
                break;
        }
    }
}
