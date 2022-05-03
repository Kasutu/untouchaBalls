import Movement from "../engine/movement.engine";

const { listen, get } = new Movement();

export default class Canvas {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  private charX: number = 0;

  constructor() {
      this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
      this.eventHandler();
  }

  redraw = () => {
      const context = this.ctx;
      const greninjaImg = new Image();
      greninjaImg.onload = (e) => {
          context?.drawImage(greninjaImg, 0, 0);
      }
      greninjaImg.src = '../assets/greninja.png';
  }

  private eventHandler = () => {
    listen();
    
      if (get().up) {
          this.charX += 25;
      }
      else if (get().down) {
        this.charX += 25;
      }
      else if (get().right) {
        this.charX += 25;
      }
      else if (get().left) {
        this.charX += 25;
      };
  }
}