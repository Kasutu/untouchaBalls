"use strict";
// untouchaBalls
// Diadem Grace Arroz, Jerome Cabugwason
exports.__esModule = true;
// loads resources and executes the main engine
var gameLoop_1 = require("./gameLoop");
var gl = new gameLoop_1["default"]();
gl.start(60);
gl.animate(update, render);
function update() { }
function render() { }
