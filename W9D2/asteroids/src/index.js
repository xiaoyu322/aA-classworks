console.log("hello")

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.addEventListener('DOMContentLoaded', (event) => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
    window.ctx = ctx; 
    window.MovingObject = MovingObject;
    // window.asteroid = Asteroid;
    game = new Game();
    gameView = new GameView(game, ctx);
    gameView.start();
});


/* TESTING--------------------
window.mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    window.ast = new Asteroid([70, 60]);
    mo.draw(ctx);
    ast.draw(ctx);
    mo.move();
    ast.move();
    setInterval(mo.draw.bind(mo, ctx), 6000);
    setInterval(ast.draw.bind(ast, ctx), 6000);
*/