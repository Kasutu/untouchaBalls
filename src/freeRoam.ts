import CollisionDetector from './engine/collisionDetector.engine.js';
import GameLoop from './class/abstract/gameLoop.abstract.js';
import InvisibleHitBox from './class/parent/invisibleHitBox.child.js';
import Movement from './engine/movement.engine.js';
import Player from './class/child/player.child.js';
import Pokemon from './class/abstract/pokemon.abstract.js';
import Canvas from './ux/canvas.ux.js';
import { enemyHandler } from './utils/enemy.handler.js';

// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason

const { movement } = new Movement();
const { clear } = new Canvas();
const { detectCollision, setWorldBoundaries } = new CollisionDetector();

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

  constructor() {
    super();
    this.player = new Player('Greninja', 100, 2, 100, 100);
    this.playerInBattle = new Player('Greninja', 100, 2, 100, 100);
    this.playerInBattle.x = 200;
    this.playerInBattle.y = 350;
  }

  public init() {
    // dev pause
    this.paused = false;

    enemyHandler(this.pokemonArr, this.playerInBattle);
    this.hitBox = new InvisibleHitBox(50, 50);

    this.runBtn.addEventListener('click', this.runHandler);
    this.attackBtn.addEventListener('click', this.attackHandler);

    console.log('initialized');
    this.startLoop();
    console.log('looping...');
  }

  private attackHandler = () => {
    // add attack mechanics here
  };

  private runHandler = () => {
    this.collided = false;
    this.inBattle = false;

    this.pokemonArr = [];
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
    this.inBattle = this.collided;
  }

  render(): void {
    clear();
    // renders the image after update finished calculating

    if (!this.inBattle && !this.collided) {
      // freeRoam screen
      this.player.draw();
      this.hitBox.draw();
    } else {
      // battle screen

      for (let pokemon of this.pokemonArr) {
        pokemon.draw();
      }
    }
  }
}
