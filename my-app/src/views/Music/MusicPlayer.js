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
            changePlayerIcon: 'icon-bofang',
            currentPlayTime: 0,
            currentPlayTotalTime: 0,
            musicUrl: 'http://dl.stream.qqmusic.qq.com/M800003MUDkf30pS5B.mp3?vkey=CDC15BE2E44A41829FD7041D67794076DCF63B06645FB8E6316B12C08EFD18856138A7B91F0CD63636E3ABD166EE45EED30F85C2E0A80F6C&guid=5150825362&fromtag=1'
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
        // this.player.setAttribute('autoplay', true);
        this.initPlayer();
    }
    componentWillMount () {}
    initPlayer () {
        this.player.addEventListener('canplay', (e) => {
            // console.log(this.timeFormat(this.player.duration));
            this.setState({
                currentPlayTotalTime: this.timeFormat(this.player.duration),
                currentPlayTime: this.timeFormat(this.player.currentTime),
            });
            this.player.play();
        });
        this.player.addEventListener('timeupdate', (e) => {
            // console.log(e);
            // console.log(this.timeFormat(this.player.currentTime));
            if(this.player) {
                this.setState({
                    // currentPlayTotalTime: this.timeFormat(this.player.duration),
                    currentPlayTime: this.timeFormat(this.player.currentTime),
                })
            }
        });
        this.player.addEventListener('ended', (e) => {
            // console.log(e)
            this.setState({
                musicUrl: 'http://dl.stream.qqmusic.qq.com/M5000006Iv8w0BtteM.mp3?vkey=D29DA03F24660A0507E058B416CCB9789B9E505E506B2595EF152522F08894B02D750444D1570908AE261AF53FA3C1C53138891B317EE438&guid=5150825362&fromtag=1'
            }, () => {
                this.player.play();
            })
        });
    }
    timeFormat (time) {
        let tempMin = parseInt(time / 60);
        let tempSec = parseInt(time % 60);
        let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin;
        let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec;
        return curMin + ':' + curSec;
    }
    playSong () {
        this.setState({
	        start: !this.state.start,
	        changePlayerIcon: this.state.start ? 'icon-zanting2' : 'icon-bofang'
        }, () => {
            this.state.start ? this.player.play() : this.player.pause()
        })
    }
    nextSong () {

    }
    prevSong () {

    }
    componentWillUnmount () {
        this.player = null;
    }
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
                        <div style={player.playerTitle}><span style={{marginRight: '20px'}}>周杰伦: 晴天</span><span style={{marginRight: '5px'}}>{this.state.currentPlayTime}</span>/<span>{this.state.currentPlayTotalTime}</span></div>
                        {/*<div style={player.playerTitle}></div>*/}
                    </div>
                </div>
                <audio ref={player => this.player = player} controls={true} src={this.state.musicUrl}></audio>
            </div>
        )
    }
}