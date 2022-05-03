// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason

// loads resources and executes the main engine
import GameLoop from "./gameLoop";

const gl = new GameLoop();

gl.start(60);
gl.animate(update(), render());

// update before drawing
function update(): void {}

// draw when update is complete
function render(): void {}

let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");

export default class Canvas {
  public canvas = document.querySelector("canvas") as HTMLCanvasElement;
  public ctx = canvas.getContext("2d");
}
