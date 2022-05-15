export default class invisibleHitBox {
    constructor(height, width) {
        this.x = 0;
        this.y = 0;
        this.height = height;
        this.width = width;
    }
    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }
    getProps() {
        return {
            x: this.x,
            y: this.y,
            height: this.height,
            width: this.width,
        };
    }
    update() {
        throw 'method not implemented';
    }
    draw() {
        throw 'method not implemented';
    }
}
