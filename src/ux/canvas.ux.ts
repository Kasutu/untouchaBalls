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

  public clear = (): void => {
    // fills the entire canvas
    this.context.clearRect(0, 0, this.width, this.height);
  };

  public drawImage(
    posX: number,
    posY: number,
    width: number,
    height: number,
    hp: number
  ): void {
    this.context.drawImage(this.img, posX, posY, width, height);

    // data
    this.context.font = '20px monospace';
    this.context.fillStyle = 'black';
    this.context.clearRect(posX, posY - 20, width, 20);
    this.context.fillText(`HP: ${hp}`, posX, posY - 20);
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
