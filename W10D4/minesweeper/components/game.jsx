import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';
import Tile from './tile';
// import {Board, Tile} from 'minesweeper';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(9, 5)
        };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({board: this.state.board})
    }

    render() {
        let complete = '';
        if (this.state.board.won()){
            complete = 'You win!';
        } else if (this.state.board.lost()){
            complete = 'You lost!';
        };
            return (
            <div>
                <h1>Minesweeper</h1>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                
                <h3>{complete}</h3>
            </div>
        );
    }
}

export default Game; 