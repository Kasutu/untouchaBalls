import Update from '../../interface/update.interface';

export default abstract class Object implements Update {
  public Update(delta: number): void {}
}
