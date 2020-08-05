import React from 'react';
import TabIndexItem from './tab_index_item';

export default class Tab extends React.Component {
    constructor(props){
        super(props);
        // this.title = [];

        // for(let i = 0; i < optionsArr.length; i++){
            
        // }
        // console.log(this.props.tabsArr)
        // this.title = 'optionsArr[i].title';
        // this.content = ['I am the first', 'Second', 'Third'];
        this.state = {
            tabId: 0
        }
    }

    render(){
        return (
            <div>
                <h1>Tabs</h1>
                <ul>
                    {this.props.tabsArr.map( (tab, idx) => {
                        return (
                            <div>
                                <button onClick={this.clickHandler(idx)}>{tab.title}</button>
                                <article>{tab.content}</article>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
    // <button onClick={this.clickHandler}>{this.state.tabId}</button>
    
    clickHandler(index) {
        return () => this.setState({tabId: index})
    }


}

