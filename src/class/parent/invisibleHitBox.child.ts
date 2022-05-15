import HitBox from '../../interface/hitbox.interface';
import Canvas from '../../ux/canvas.ux.js';
import { getRandomNumberBetween } from '../../utils/getRandom.util.js';

const canvas = new Canvas();

export default class InvisibleHitBox implements HitBox {
  public x: number = 0;
  public y: number = 0;
  public height: number;
  public width: number;
  private ctx: Canvas;

  constructor(height: number, width: number) {
    this.ctx = canvas;
    this.height = height;
    this.width = width;
    this.x = getRandomNumberBetween(0, canvas.width - width);
    this.y = getRandomNumberBetween(0, canvas.height - height);
  }

  public draw() {
    this.ctx.drawInvisibleHitBox(this.x, this.y, this.width, this.height);
  }
}
