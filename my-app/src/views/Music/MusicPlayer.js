import React from 'react';
export default class MusicPlayer extends React.Component {
    constructor () {
        super();
        this.state = {}
    }
    player = null;
    componentDidMount () {
        console.log(this.player);
    }
    render () {
        return (
            <div>
                <audio ref={player => this.player = player}></audio>
            </div>
        )
    }
}