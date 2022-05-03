// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason

// loads resources and executes the main engine

import GameLoop from './main';

const gl = new GameLoop();

gl.start(60);
gl.animate(update, render);

function update(): void {}
function render(): void {}
