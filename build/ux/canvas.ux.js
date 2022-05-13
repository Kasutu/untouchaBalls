export default class Canvas {
    constructor() {
        this.width = 500;
        this.height = 500;
    }
    init(canvas) {
        this.context = canvas.getContext('2d');
        this.img = new Image();
        this.img.src = '../assets/greninja.png';
    }
    fill(color) {
        // fills the entire canvas
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.fill();
    }
    drawImage() {
        this.context.drawImage(this.img, 0, 0);
    }
    drawPlayer(posX, posY) {
        this.context.beginPath();
        this.context.rect(posX, posY, 15, 15);
        this.context.fillStyle = 'black';
        this.context.fill();
    }
}
