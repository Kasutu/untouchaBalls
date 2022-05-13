export default class GameLoop {
    constructor() {
        this.fpsInterval = 0;
        this.startTime = 0;
        this.now = 0;
        this.delta = 0;
        this.elapsed = 0;
    }
    init(fps) {
        this.fpsInterval = 1000 / fps;
        this.delta = Date.now();
        this.startTime = this.delta;
    }
    startLoop(cb) {
        requestAnimationFrame(() => this.startLoop);
        this.now = Date.now();
        this.elapsed = this.now - this.delta;
        if (this.elapsed > this.fpsInterval) {
            this.delta = this.now - (this.elapsed % this.fpsInterval);
            // Update and Render functions
            console.log(this.delta);
            cb;
        }
    }
}
