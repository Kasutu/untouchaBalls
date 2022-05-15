export default abstract class GameLoop {
  protected readonly fpsInterval: number = 0;
  protected startTime: number = 0;
  protected now: number = 0;
  protected delta: number = 0;
  protected elapsed: number = 0;
  protected paused: boolean = false;

  constructor(fps: number) {
    this.fpsInterval = 1000 / fps;
    this.delta = window.Date.now();
    this.startTime = this.delta;
  }

  public startLoop = () => {
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

  protected abstract update(delta: number): void;
  protected abstract render(): void;
}
