const Game = require("./game");

function GameView(game, ctx){
    this.game = game;
    this.ctx = ctx;
};

GameView.prototype.start = function(){
    // debugger;
    // invoke it immidately  
    setInterval(function () { this.game.draw.bind(this.game)(this.ctx) }, 20);
        // this.game.moveObjects.bind(this.game)()}, 20);
    setInterval(this.game.moveObjects.bind(this.game), 20);
};

module.exports = GameView;