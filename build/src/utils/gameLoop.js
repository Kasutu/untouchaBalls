export default class GameLoop {
    constructor() {
        this.fpsInterval = 0;
        this.startTime = 0;
        this.now = 0;
        this.delta = 0;
        this.elapsed = 0;
    }
    start(fps) {
        this.fpsInterval = 1000 / fps;
        this.delta = Date.now();
        this.startTime = this.delta;
        this.animate();
    }
    animate(...args) {
        requestAnimationFrame(this.animate);
        this.now = Date.now();
        this.elapsed = this.now - this.delta;
        if (this.elapsed > this.fpsInterval) {
            this.delta = this.now - (this.elapsed % this.fpsInterval);
            // Update and Render functions
            args;
        }
    }
}
