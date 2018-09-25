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
                <audio ref={player => this.player = player} controls={true} src={'http://dl.stream.qqmusic.qq.com/M8000037YJLr1J1a0G.mp3?vkey=C492284B3DABA80BF065A2DDCED946DC5BB2BD960711CBBD3DECA402CB760560268445912F2D3907FEB983A9EA7F18529C11E09F06037F7A&guid=5150825362&fromtag=1'}></audio>
            </div>
        )
    }
}