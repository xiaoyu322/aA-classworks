const Game = require("./game")

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
      // alert($(event.currentTarget).text());
    });

    // $("ul").on("mouseover", "li", event => {
    //   console.log(event.target);
    //   console.log(event.currentTarget);
    //   console.log(event.delegateTarget);
    // });
  }

  makeMove($square) {
    // this.game.playMove($square.data("pos"));
    $square.addClass(this.game.currentPlayer);

    try {
      (this.game.playMove($square.data("pos")));
    }
    catch (err) {
      alert("This move is invalid");
      return;
    }

   if (this.game.isOver()){
     const $figcaption = $("<figcaption></figcaption>");
     $figcaption.html('You win!');
     this.$el.append($figcaption);
   }

  }

  setupBoard() {
    // const unorderedList = $('<ul></ul>');
    // unorderedList.append($('<li></li>'));
    // const ttt = $(".ttt");
    const $ul = $('<ul></ul>');


    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $('<li></li>');
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
