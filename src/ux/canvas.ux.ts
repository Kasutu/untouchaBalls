export default class Canvas {
  public width: number = 500;
  public height: number = 500;
  public context: CanvasRenderingContext2D;
  private img: HTMLImageElement;

  public init(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.img = new Image();
    this.img.src = '../assets/greninja.png';
  }

  public fill(color: string): void {
    // fills the entire canvas
    this.context.beginPath();
    this.context.rect(0, 0, this.width, this.height);
    this.context.fillStyle = color;
    this.context.fill();
  }

  public drawImage(): void {
    this.context.drawImage(this.img, 0, 0);
  }

  public drawPlayer(
    posX: number,
    posY: number,
    width: number,
    height: number
  ): void {
    this.context.beginPath();
    this.context.rect(posX, posY, width, height);
    this.context.fillStyle = 'black';
    this.context.fill();
  }
}
