import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';

const tabs = [{ title: 'one', content: "i am first" }, { title: 'two', content: "i am second" }, { title: 'three', content: "i am third" }];
const Root = function(){
    return (
        <div>
            <Clock />
            <Tab tabsArr={tabs}/>
        </div> 
    )
}

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
})