const Asteroid = require("./asteroid");

function Game() {
   this.asteroids = this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 100;

Game.prototype.addAsteroids = function () {
    const asteroids = [];

    while (asteroids.length < Game.NUM_ASTEROIDS) {
        asteroids.push(new Asteroid(this.randomPosition()))
    }
    return asteroids;
};

Game.prototype.randomPosition = function () {
    const pos = [];
    pos.push(Math.random() * Math.floor(Game.DIM_X));
    pos.push(Math.random() * Math.floor(Game.DIM_Y));
    return pos;
};

Game.prototype.draw = function (ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    this.asteroids.forEach(function (asteroid) {
        asteroid.draw(ctx);
    });
};

Game.prototype.moveObjects = function(){
    this.asteroids.forEach(function (asteroid) {
        asteroid.move();
    });
};

Game.prototype.wrap = function(pos){
    let xPos = pos[0];
    let yPos = pos[1];

    // Wrap X Coordinates
    if (xPos > Game.DIM_X) {
        xPos = xPos - Game.DIM_X ;
    } else if (xPos < 0) {
        xPos = Game.DIM_X - xPos;
    }
    // Wrap Y Coodinates
    if (yPos > Game.DIM_Y) {
        yPos = yPos - Game.DIM_Y;
    } else if (yPos < 0){
        yPos = Game.DIM_Y - yPos;
    }

    return [xPos, yPos];
};

module.exports = Game;