import HitBox from '../../interface/hitbox.interface';
import Pokemon from '../parent/pokemon.parentClass.js';

export default class invisibleHitBox {
  protected x: number = 0;
  protected y: number = 0;
  protected height: number;
  protected width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  setCoordinates(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  getProps(): HitBox {
    return {
      x: this.x,
      y: this.y,
      height: this.height,
      width: this.width,
    };
  }

  private update() {
    throw 'method not implemented';
  }

  private draw() {
    throw 'method not implemented';
  }
}
