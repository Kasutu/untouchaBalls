import HitBox from '../interface/hitbox.interface';

export default class Pokemon {
  protected name: string;
  protected hp: number;
  protected damage: number;
  protected x: number = 0;
  protected y: number = 0;
  protected width: number;
  protected height: number;

  constructor(
    name: string,
    hp: number,
    damage: number,
    width: number,
    height: number
  ) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.width = width;
    this.height = height;
  }

  public attack(target: Pokemon) {
    throw 'method not implemented';
  }

  public getAttrib(): HitBox {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  public setCoord(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
