const View = require("./ttt-view")
const Game = require("./game")

  $(() => {
    // Your code here
    const view = $('.ttt');
    const game = new Game();
    const render = new View(game, view);
  });
