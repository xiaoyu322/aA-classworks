import React from 'react';
import Tile from './tile';

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const board = this.props.board; 
        return(
            <div className="row">
                {board.grid.map((row, idx1) => (
                    <div key={idx1}>
                        {row.map((tile, idx2) => (
                            <Tile key={idx2} tile={tile} updateGame={this.props.updateGame}/>
                        ))}
                    </div>
                ))}
            </div>
        )
    } 

}

export default Board;