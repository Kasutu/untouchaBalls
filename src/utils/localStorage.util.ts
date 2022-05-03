import PlayerXP from '../interface/playerXp.interface';

export default class LocalDb implements PlayerXP {
  public set(value: number): void {
    let val: string = value.toString();
    localStorage.setItem('xp', val);
  }

  public get(): number {
    return Number(localStorage.getItem('xp'));
  }
}