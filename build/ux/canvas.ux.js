export default class Canvas {
    constructor() {
        this.width = 500;
        this.height = 500;
        this.clear = () => {
            // fills the entire canvas
            this.context.clearRect(0, 0, this.width, this.height);
        };
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.img = new Image();
        this.img.src = '../assets/greninja.png';
    }
    drawImage(posX, posY, width, height, hp) {
        this.context.drawImage(this.img, posX, posY, width, height);
        // data
        this.context.font = '20px monospace';
        this.context.fillStyle = 'black';
        this.context.clearRect(posX, posY - 20, width, 20);
        this.context.fillText(`HP: ${hp}`, posX, posY - 20);
    }
    drawBox(posX, posY, width, height) {
        this.context.beginPath();
        this.context.rect(posX, posY, width, height);
        this.context.fillStyle = 'black';
        this.context.fill();
    }
    drawInvisibleHitBox(posX, posY, width, height) {
        this.context.beginPath();
        this.context.rect(posX, posY, width, height);
        this.context.fillStyle = 'red';
        this.context.fill();
    }
}
