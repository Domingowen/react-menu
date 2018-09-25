import React from 'react';
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_t4tacln8ia8.js',
});
export default class MusicPlayer extends React.Component {
    constructor () {
        super();
        this.state = {
            start: true,
            changePlayerIcon: 'icon-bofang'
        }
    }
    player = null;
    componentDidMount () {
        console.log(this.player.currentTime);
        console.log(this.player.paused);
        console.log(this.player.autoplay);
        console.log(this.player.preload);
        console.log(this.player.volume);
        console.log(this.player.start);
        console.log(this.player.end);
        console.log(this.player.duration);
        console.log(this.player.muted);
        console.log(this.player.loop);
        this.player.addEventListener('canplay', (e) => {
            console.log(this.player.duration);
        });
        this.player.addEventListener('')
    }
    componentWillMount () {}
    playSong () {
        this.setState({
	        start: !this.state.start,
	        changePlayerIcon: this.state.start ? 'icon-zanting2' : 'icon-bofang'
        })
    }
    nextSong () {}
    prevSong () {}
    render () {
        const player = {
            container: {
                borderTop: '1px solid #ccc'
            },
            list: {
                display: 'flex',
                alignItems: 'center',
	            marginTop: '10px',
                // justifyContent: 'space-around'
            },
            left: {
	            fontSize: '50px',
                cursor: 'pointer',
                width: '180px',
                display: 'flex',
                justifyContent: 'space-around'
            },
            right: {
                height: '100%',
                display: 'flex',
                marginLeft: '20px',
            },
            playerTitle: {
                fontSize: '20px'
            },
            playerIconfont: {
            }
        };
        return (
            <div style={player.container}>
                <div style={player.list}>
                    <div style={player.left}>
	                    <IconFont type='icon-kuaitui' onClick={this.prevSong.bind(this)}/>
	                    <IconFont type={this.state.changePlayerIcon} onClick={this.playSong.bind(this)}/>
	                    {/*<IconFont type='icon-zanting1' onClick={this.stopSong.bind(this)}/>*/}
	                    <IconFont type='icon-kuaijin' onClick={this.nextSong.bind(this)}/>
                    </div>
                    <div style={player.right}>
                        <div style={player.playerTitle}><span style={{marginRight: '20px'}}>周杰伦: 晴天</span><span style={{marginRight: '5px'}}>00:00</span><span>04:50</span></div>
                        {/*<div style={player.playerTitle}></div>*/}
                    </div>
                </div>
                <audio ref={player => this.player = player} controls={true} src={'http://dl.stream.qqmusic.qq.com/M800001Lqw2u18t5gh.mp3?vkey=817E56D0D394CEA20BDC96455788AD401C230A9EB8C64D2C0F87F850C2043BABE11A8E4C6E7B9DD017D43096DE6B1CC1CEA76747140E8FEE&guid=5150825362&fromtag=1'}></audio>
            </div>
        )
    }
}