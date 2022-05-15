import HitBox from '../../interface/hitbox.interface';
import Canvas from '../../ux/canvas.ux.js';

export default class Pokemon implements HitBox {
  private ctx: Canvas;
  protected name: string;
  protected hp: number;
  protected damage: number;
  public width: number;
  public height: number;
  public x: number;
  public y: number;

  constructor(
    name: string,
    hp: number,
    damage: number,
    width: number,
    height: number,
    canvas: Canvas
  ) {
    this.ctx = canvas;
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.width = width;
    this.height = height;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }

  public attack(target: Pokemon) {
    throw 'method not implemented';
  }

  public draw(): void {
    this.ctx.fill('white');
    this.ctx.drawImage(this.x, this.y, this.width, this.height);
  }
}
