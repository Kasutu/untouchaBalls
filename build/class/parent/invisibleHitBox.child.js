import Canvas from '../../ux/canvas.ux.js';
import { getRandomNumberBetween } from '../../utils/getRandom.util.js';
const canvas = new Canvas();
export default class InvisibleHitBox {
    constructor(height, width) {
        this.x = 0;
        this.y = 0;
        this.ctx = canvas;
        this.height = height;
        this.width = width;
        this.x = getRandomNumberBetween(0, canvas.width - width);
        this.y = getRandomNumberBetween(0, canvas.height - height);
    }
    draw() {
        this.ctx.drawInvisibleHitBox(this.x, this.y, this.width, this.height);
    }
}
