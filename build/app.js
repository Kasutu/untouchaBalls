import Canvas from './ux/canvas.ux.js';
import GameLoop from './utils/gameLoop.js';
import Movement from './engine/movement.engine.js';
// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason
const { listen, get } = new Movement();
const gameLoop = new GameLoop();
const canvas = new Canvas();
class Game {
    constructor() {
        this.posX = 0;
        this.posY = 0;
        this.eventHandler = () => {
            listen();
            if (get().up) {
                this.posY -= 25;
                this.render();
                console.log('up');
            }
            else if (get().down) {
                this.posY += 25;
                this.render();
            }
            else if (get().right) {
                this.posX += 25;
                this.render();
            }
            else if (get().left) {
                this.posX -= 25;
                this.render();
            }
        };
    }
    init() {
        canvas.init(document.getElementById('canvas'));
        // this.update();
        this.render();
        // gameLoop.init(60);
    }
    update() {
        // update physics
        this.eventHandler();
    }
    render() {
        // renders the image after update finished calculating
        canvas.fill('blue');
        canvas.drawPlayer(this.posX, this.posY);
    }
}
const game = new Game();
game.init();
