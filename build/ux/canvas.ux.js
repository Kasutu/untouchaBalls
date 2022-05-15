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
    drawImage(posX, posY, width, height) {
        this.context.drawImage(this.img, posX, posY, width, height);
    }
    drawPlayer(posX, posY, width, height) {
        this.context.beginPath();
        this.context.rect(posX, posY, width, height);
        this.context.fillStyle = 'black';
        this.context.fill();
    }
}
