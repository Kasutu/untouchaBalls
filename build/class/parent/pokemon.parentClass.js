import Canvas from '../../ux/canvas.ux.js';
const canvas = new Canvas();
export default class Pokemon {
    constructor(name, hp, damage, width, height) {
        this.ctx = canvas;
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.width = width;
        this.height = height;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
    }
    attack(target) {
        throw 'method not implemented';
    }
    draw() {
        this.ctx.drawImage(this.x, this.y, this.width, this.height);
    }
}
