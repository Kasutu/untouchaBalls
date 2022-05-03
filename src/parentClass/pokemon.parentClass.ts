export default class Pokemon {
    public name: string;
    public hp: number;
    public damage: number;
    public speed: number;

    constructor(
        name: string,
        hp: number,
        damage: number,
        speed: number,
    ){
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.speed = speed;
    }

    public attack(target: Pokemon) {
        return 'void'
    }

    // run(speedExerted: number) {
    //     this.speed = speedExerted;
    // }
}