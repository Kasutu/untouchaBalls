// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason

// loads resources and executes the main engine
import GameLoop from './gameLoop';
import Canvas from './utils/canvas';

const gl = new GameLoop();
const { ctx } = new Canvas();

gl.start(60);
gl.animate(update(), render());

// update before drawing
function update(): void {}

// draw when update is complete
function render(): void {
  // Red rectangle
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = 'red';
  ctx.rect(5, 5, 290, 140);
  ctx.stroke();

  // Green rectangle
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'green';
  ctx.rect(30, 30, 50, 50);
  ctx.stroke();

  // Blue rectangle
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'blue';
  ctx.rect(50, 50, 150, 80);
  ctx.stroke();
}
