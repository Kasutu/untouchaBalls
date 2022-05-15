import Pokemon from '../abstract/pokemon.abstract.js';
import Canvas from '../../ux/canvas.ux.js';
const canvas = new Canvas();
export default class Player extends Pokemon {
    constructor(name, hp, damage, width, height) {
        super();
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
        throw new Error('Method not implemented.');
    }
    draw() {
        this.ctx.drawImage(this.x, this.y, this.width, this.height, this.hp);
    }
}
