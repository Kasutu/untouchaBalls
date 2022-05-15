import Pokemon from '../abstract/pokemon.abstract.js';
import Canvas from '../../ux/canvas.ux.js';

const canvas = new Canvas();

export default class Enemy extends Pokemon {
  protected ctx: Canvas;
  protected name: string;
  public hp: number;
  protected damage: number;
  public width: number;
  public height: number;
  public x: number;
  public y: number;

  constructor(name: string, hp: number, damage: number) {
    super();
    this.ctx = canvas;
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }

  public attack(target: Pokemon): void {
    throw new Error('Method not implemented.');
  }

  public draw(): void {
    this.ctx.drawImage(this.x, this.y, this.width, this.height, this.hp);
  }
}
