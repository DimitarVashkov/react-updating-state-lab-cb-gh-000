// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component{
    constructor(){
        super();

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){
        return (
            <div>
                <p>You've clicked {this.state.timesClicked} times!</p>
                <button onClick={this.handleClick}>
                {this.state.timesClicked == 0 ? 'Click me!' : this.state.timesClicked}</button>
            </div>
        )
    }

}