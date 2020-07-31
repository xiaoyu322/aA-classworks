function MovingObject(obj) {
    this.pos = obj["pos"];
    this.vel = obj["vel"];
    this.radius = obj["radius"];
    this.color = obj["color"];
    // this.game = obj["game"];
};

// function MovingObject(options) {
//     this.game = options.game;
//     this.pos = options.pos;
//     this.vel = options.vel;
//     this.radius = options.radius;
//     this.color = options.color;
// }


MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color; 
    ctx.beginPath();
    // debugger;
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
};

MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    // if (this.game.wrap(this.pos)) {
    //     this.pos = this.game.wrap(this.pos);
    // }
};

module.exports = MovingObject;