import React from 'react';



class Tile extends React.Component{
    constructor(props){
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
    }
    render (){
        
        const tile = this.props.tile; 
        let text;
        let klass;
        let count;
        if (tile.explored){
            if (tile.bombed) {
                text = '\u2622';  
                klass ='bombed';
                
            } else {
                count = tile.adjacentBombCount();
                klass = 'explored';
                if (count == 0) {
                    text = ' ';
                } else {
                    text = count;
                }
            }
        } else if (tile.flagged) {
            text = '🏴‍';
            klass = 'flagged';
        
        } else {
            text = ' ';
            klass = 'unexplored';
        }

        klass = `tile ${klass}`
        return (
            <div className={klass} onClick={this.handleClick}>
                {text}
            </div>
        )
    }

    handleClick(event){
        event.preventDefault();
        let flagged = event.altKey ? true : false; 
        this.props.updateGame(this.props.tile, flagged)
        // if (event.altKey){
        //     this.props.updateGame(this.props.tile, true)
        // } else {
        //     this.props.updateGame(this.props.tile, false)
        // }
    }
}

export default Tile;