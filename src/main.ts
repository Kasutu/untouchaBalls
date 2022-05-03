export default class GameLoop {
  protected fpsInterval: number = 0;
  protected startTime: number = 0;
  protected now: number = 0;
  protected delta: number = 0;
  protected elapsed: number = 0;

  public start(fps: number): void {
    this.fpsInterval = 1000 / fps;
    this.delta = Date.now();
    this.startTime = this.delta;
    this.animate();
  }

  public animate(...args: any): void {
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
