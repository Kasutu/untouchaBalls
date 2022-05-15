// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason
import Canvas from './ux/canvas.ux.js';
import GameLoop from './utils/gameLoop.js';
import Movement from './engine/movement.engine.js';
import CollisionDetector from './engine/collisionDetector.engine.js';
import Pokemon from './class/parent/pokemon.parentClass.js';
const { movement } = new Movement();
const canvas = new Canvas();
const { detectCollision, setWorldBoundaries } = new CollisionDetector();
export default class App extends GameLoop {
    constructor() {
        super(60);
        this.player = new Pokemon('p1', 10, 100, 15, 15, canvas);
    }
    init() {
        canvas.init(document.getElementById('canvas'));
        console.log('initialized');
        console.log('looping...');
        this.paused = false;
        this.startLoop();
    }
    update() {
        // console.log('updated');
        // update physics
        movement(this.player);
        // collisions handler
        setWorldBoundaries(this.player, 500, 500);
    }
    render() {
        // console.log('updated');
        // renders the image after update finished calculating
        this.player.draw();
    }
}
