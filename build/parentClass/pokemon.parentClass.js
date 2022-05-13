export default class Pokemon {
    constructor(name, hp, damage, width, height) {
        this.x = 0;
        this.y = 0;
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.width = width;
        this.height = height;
    }
    attack(target) {
        throw 'method not implemented';
    }
    getAttrib() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };
    }
    setCoord(x, y) {
        this.x = x;
        this.y = y;
    }
}
