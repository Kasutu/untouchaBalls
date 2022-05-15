import CollisionDetector from './engine/collisionDetector.engine.js';
import GameLoop from './class/abstract/gameLoop.abstract.js';
import InvisibleHitBox from './class/parent/invisibleHitBox.child.js';
import Movement from './engine/movement.engine.js';
import Player from './class/child/player.child.js';
import Pokemon from './class/abstract/pokemon.abstract.js';
import Enemy from './class/child/enemy.child.js';
import getRandom, { getRandomNumberBetween } from './utils/getRandom.util.js';
import Canvas from './ux/canvas.ux.js';

// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason

const { movement } = new Movement();
const { fill } = new Canvas();
const { detectCollision, setWorldBoundaries } = new CollisionDetector();
const canvas = new Canvas();

type EnemyAttrib = {
  name: string;
  hp: number;
  damage: number;
  x: number;
  y: number;
};

export default class FreeRoam extends GameLoop {
  private player: Pokemon;
  private playerInBattle: Pokemon;
  private hitBox: InvisibleHitBox;
  private collided: boolean = false;
  private inBattle: boolean = false;
  private attackBtn: HTMLButtonElement = document.getElementById(
    'attack'
  ) as HTMLButtonElement;
  private runBtn: HTMLButtonElement = document.getElementById(
    'run'
  ) as HTMLButtonElement;

  private pokemonArr: Pokemon[] = [];
  private enemyAttrib: EnemyAttrib[];

  constructor() {
    super();
    this.player = new Player('Greninja', 100, 2, 100, 100);
    this.playerInBattle = new Player('Greninja', 100, 2, 100, 100);
    this.playerInBattle.x = 200;
    this.playerInBattle.y = 350;

    this.startLoop();
    console.log('looping...');
  }

  public init() {
    // dev pause
    this.paused = false;

    this.enemyHandler();
    this.hitBox = new InvisibleHitBox(50, 50);

    this.runBtn.addEventListener('click', this.runHandler);

    console.log('initialized');
  }

  private enemyHandler = () => {
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

    this.enemyAttrib.map((e: EnemyAttrib) => {
      const tempEnemy = new Enemy(e.name, e.hp, e.damage);
      tempEnemy.x = e.x;
      tempEnemy.y = e.y;
      tempEnemy.height = 100;
      tempEnemy.width = 100;

      this.pokemonArr.push(tempEnemy);
    });

    this.pokemonArr.push(this.playerInBattle);
  };

  private runHandler = () => {
    console.log('RUNNN');
    this.collided = false;
    this.inBattle = false;

    this.init();
  };

  update(): void {
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

  render(): void {
    fill('white');
    // console.log('updated');
    // renders the image after update finished calculating

    if (!this.inBattle && !this.collided) {
      // freeRoam screen
      this.player.draw();
      this.hitBox.draw();
    } else {
      fill('white');
      // battle screen
      for (let pokemon of this.pokemonArr) {
        pokemon.draw();

        // data
        canvas.context.font = '20px monospace';
        canvas.context.fillStyle = 'black';
        canvas.context.fillText(`HP: ${pokemon.hp}`, pokemon.x, pokemon.y - 20);
      }
    }
  }
}
