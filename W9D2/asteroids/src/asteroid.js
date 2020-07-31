const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
Util.inherits(Asteroid, MovingObject); 

function Asteroid(pos) {
    this.COLOR = "#FFA500";
    this.RADIUS = 10;
    this.pos = pos;
    this.vel = Util.randomVec(this.RADIUS); // random velocity
    // this.game = obj["game"];
    MovingObject.call(this, { color: this.COLOR, radius: this.RADIUS, pos: this.pos, vel: this.vel }); // game: this.game
};

module.exports = Asteroid;

// const Util = require("./utils.js");
// const MovingObject = require("./moving_object.js");
// Util.inherits(Asteroid, MovingObject);
// Asteroid.COLOR = 'pink';
// Asteroid.RADIUS = 25;
// function Asteroid(option) {
//     const vel = Util.randomVec(10);
//     MovingObject.call(this, { game: option.game, pos: option.pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR });
// };
// module.exports = Asteroid;