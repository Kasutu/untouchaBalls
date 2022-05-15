import CollisionDetector from './engine/collisionDetector.engine.js';
import GameLoop from './class/abstract/gameLoop.abstract.js';
import InvisibleHitBox from './class/parent/invisibleHitBox.child.js';
import Movement from './engine/movement.engine.js';
import Player from './class/child/player.child.js';
import Enemy from './class/child/enemy.child.js';
import getRandom, { getRandomNumberBetween } from './utils/getRandom.util.js';
import Canvas from './ux/canvas.ux.js';
// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason
const { movement } = new Movement();
const { clear } = new Canvas();
const { detectCollision, setWorldBoundaries } = new CollisionDetector();
const canvas = new Canvas();
export default class FreeRoam extends GameLoop {
    constructor() {
        super();
        this.collided = false;
        this.inBattle = false;
        this.attackBtn = document.getElementById('attack');
        this.runBtn = document.getElementById('run');
        this.pokemonArr = [];
        this.enemyHandler = () => {
            this.enemyAttrib = [
                {
                    name: 'enemy1',
                    hp: getRandomNumberBetween(1, 50),
                    damage: getRandom([0.09, 0.1, 0.15, 0.2, 0.25]),
                    x: 50,
                    y: 50,
                },
                {
                    name: 'enemy2',
                    hp: getRandomNumberBetween(1, 50),
                    damage: getRandom([0.09, 0.1, 0.15, 0.2, 0.25]),
                    x: 200,
                    y: 50,
                },
                {
                    name: 'enemy3',
                    hp: getRandomNumberBetween(1, 50),
                    damage: getRandom([0.09, 0.1, 0.15, 0.2, 0.25]),
                    x: 350,
                    y: 50,
                },
            ];
            this.enemyAttrib.map((e) => {
                const tempEnemy = new Enemy(e.name, e.hp, e.damage);
                tempEnemy.x = e.x;
                tempEnemy.y = e.y;
                tempEnemy.height = 100;
                tempEnemy.width = 100;
                this.pokemonArr.push(tempEnemy);
            });
            this.pokemonArr.push(this.playerInBattle);
        };
        this.runHandler = () => {
            console.log('RUNNN');
            this.collided = false;
            this.inBattle = false;
            this.init();
        };
        this.player = new Player('Greninja', 100, 2, 100, 100);
        this.playerInBattle = new Player('Greninja', 100, 2, 100, 100);
        this.playerInBattle.x = 200;
        this.playerInBattle.y = 350;
        this.startLoop();
        console.log('looping...');
    }
    init() {
        // dev pause
        this.paused = false;
        this.enemyHandler();
        this.hitBox = new InvisibleHitBox(50, 50);
        this.runBtn.addEventListener('click', this.runHandler);
        console.log('initialized');
    }
    update() {
        // console.log('updated');
        // update physics
        if (!this.inBattle && !this.collided) {
            movement(this.player);
        }
        // collisions handler
        setWorldBoundaries(this.player, 500, 500);
        this.collided = detectCollision(this.player, this.hitBox);
        console.log(!this.inBattle && !this.collided);
    }
    render() {
        clear();
        // console.log('updated');
        // renders the image after update finished calculating
        if (!this.inBattle && !this.collided) {
            // freeRoam screen
            this.player.draw();
            this.hitBox.draw();
        }
        else {
            // battle screen
            for (let i = 0; i < this.pokemonArr.length; i++) {
                this.pokemonArr[i].draw();
            }
        }
    }
}
