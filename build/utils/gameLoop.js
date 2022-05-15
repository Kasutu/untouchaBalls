export default class GameLoop {
    constructor(fps) {
        this.fpsInterval = 0;
        this.startTime = 0;
        this.now = 0;
        this.delta = 0;
        this.elapsed = 0;
        this.paused = false;
        this.startLoop = () => {
            this.now = Date.now();
            this.elapsed = this.now - this.delta;
            if (this.elapsed > this.fpsInterval) {
                this.delta = this.now - (this.elapsed % this.fpsInterval);
                // Update and Render functions
                this.update(this.delta);
                this.render();
            }
            if (!this.paused) {
                requestAnimationFrame(this.startLoop);
            }
        };
        this.fpsInterval = 1000 / fps;
        this.delta = window.Date.now();
        this.startTime = this.delta;
    }
}
