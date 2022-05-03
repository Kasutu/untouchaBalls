"use strict";
// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason
exports.__esModule = true;
// loads resources and executes the main engine
var gameLoop_1 = require("./gameLoop");
var canvas_1 = require("./utils/canvas");
var gl = new gameLoop_1["default"]();
var ctx = new canvas_1["default"]().ctx;
gl.start(60);
gl.animate(update(), render());
// update before drawing
function update() { }
// draw when update is complete
function render() {
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
