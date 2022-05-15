// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason
import GameLoop from './utils/gameLoop.js';
import Movement from './engine/movement.engine.js';
import CollisionDetector from './engine/collisionDetector.engine.js';
import Pokemon from './class/parent/pokemon.parentClass.js';
import InvisibleHitBox from './class/parent/invisibleHitBox.child.js';
import Canvas from './ux/canvas.ux.js';
const { movement } = new Movement();
const { fill } = new Canvas();
const { detectCollision, setWorldBoundaries } = new CollisionDetector();
export default class App extends GameLoop {
    constructor() {
        super(60);
        this.collided = false;
        this.winOrLoose = true;
        this.player = new Pokemon('p1', 10, 100, 100, 100);
        this.hitBox = new InvisibleHitBox(50, 50);
    }
    init() {
        console.log('initialized');
        console.log('looping...');
        // dev pause
        this.paused = true;
        this.startLoop();
    }
    freeRoam() {
        this.player.draw();
        this.hitBox.draw();
    }
    update() {
        // console.log('updated');
        // update physics
        if (!this.collided && this.winOrLoose) {
            // give controls while in main UI
            movement(this.player);
        }
        // collisions handler
        setWorldBoundaries(this.player, 500, 500);
        this.collided = detectCollision(this.player, this.hitBox);
        console.log(!this.collided && this.winOrLoose);
    }
    render() {
        fill('white');
        // console.log('updated');
        // renders the image after update finished calculating
        if (!this.collided && this.winOrLoose) {
            // displays main screen
            this.freeRoam();
        }
    }
}
