import HitBox from '../../interface/hitbox.interface';
import Canvas from '../../ux/canvas.ux.js';

export default abstract class Pokemon implements HitBox {
  protected abstract ctx: Canvas;
  protected abstract name: string;
  public abstract hp: number;
  protected abstract damage: number;
  public abstract width: number;
  public abstract height: number;
  public abstract x: number;
  public abstract y: number;

  public abstract attack(target: Pokemon): void;

  public abstract draw(): void;
}
