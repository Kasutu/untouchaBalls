export default class Canvas {
  private canvas: HTMLCanvasElement;
  public width: number = 500;
  public height: number = 500;
  public context: CanvasRenderingContext2D;
  private img: HTMLImageElement;

  constructor() {
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.img = new Image();
    this.img.src = '../assets/greninja.png';
  }

  public fill = (color: string): void => {
    // fills the entire canvas
    this.context.beginPath();
    this.context.rect(0, 0, this.width, this.height);
    this.context.fillStyle = color;
    this.context.fill();
  };

  public drawImage(
    posX: number,
    posY: number,
    width: number,
    height: number,
    hp: number
  ): void {
    this.context.drawImage(this.img, posX, posY, width, height);
  }

  public drawBox(
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

  public drawInvisibleHitBox(
    posX: number,
    posY: number,
    width: number,
    height: number
  ): void {
    this.context.beginPath();
    this.context.rect(posX, posY, width, height);
    this.context.fillStyle = 'red';
    this.context.fill();
  }
}
