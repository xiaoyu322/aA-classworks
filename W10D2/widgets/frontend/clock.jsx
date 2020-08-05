import React from 'react';

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.id;
        this.state = {
            time: new Date()
        };
    }

    render(){
        return (
            <div>
                <h1 id="clock">Clock</h1>
                <div id='inside-div'>
                    <h2 id='time-title'>Time:</h2>
                    <h2 id='time'>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h2>
                    <br />
                    <h2 id='date-title'>Date:</h2>
                    <h2 id='date'>{this.state.time.getMonth()} / {this.state.time.getDay()} / {this.state.time.getFullYear()}</h2>
                </div>
            </div>
        )
    }

    componentDidMount() {  //lifecycle method  // does the html exist in the dom 
        this.id = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount(){  // did the user do sth to take off the screen
        clearInterval(this.id);
        this.id = 0;
    }

    tick(){
        this.setState({time: new Date()});
    }
}