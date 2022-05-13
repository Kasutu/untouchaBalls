export default class Canvas {
    constructor() {
        this.width = 500;
        this.height = 500;
    }
    init(canvas) {
        this.context = canvas.getContext('2d');
    }
    erase(color) {
        // fills the entire canvas
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.fill();
    }
}
