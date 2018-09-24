import React from 'react';
import axios from "axios";
import { Tabs } from 'antd';
import history from '../../common/history';
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
import Hls from 'hls.js';
// import DPlayer from 'react-dplayer';
// import 'DPlayer/dist/DPlayer.min.css';
// var Hls =new hls();
export default class Detail extends React.Component {
	constructor () {
		super();
		this.state = {
			pageData: {},
			actorList: [],
			iframeUrl: null,
		};
	}
	componentWillMount () {
		console.log(history);
		this.getDetailData();
		// new Hls();
	}
	componentDidMount () {
		if(this.state.iframeUrl) {

		}
	}
	player = null;
	playIframe = null;
	getDetailData () {
		let stateParam = history.location.state;
		axios({
			url: 'http://192.168.254.100:20200/movie/detail',
			method: 'post',
			data: {
				id: stateParam.movieId.id,
				cat: stateParam.movieId.cat
			}
		}).then((res) => {
			console.log(res);
			let data = res.data.data.data.data;
			this.setState({
				pageData: data,
				actorList: data.actor,
                iframeUrl: 'http://sina.jingpinxiazai.com/20180918/udpwjY6Z/index.m3u8'
			}, () => {
                this.player = new DPlayer(
                    {
                        container: document.getElementById('player'),
                        autoplay: false,
                        video: {
                            url: this.state.iframeUrl,
                            type: 'customHls',
                            customType: {
                                'customHls': function (video, player) {
                                    const hls = new Hls();
                                    hls.loadSource(video.src);
                                    hls.attachMedia(video);
                                }
                            }
                        },
                    }
                )
			})
		});

		// this.playIframe.setAttribute('src', 'http://api.bbbbbb.me/jx/?url=http://v.qq.com/x/cover/1wbx6hb4d3icse8/z0027hcc6iu.html?ptag=2345.tv');
		// this.playIframe.src= ''
	}
	render () {
		// const actorList = this.state.pageData.actor.map(val => {return <span>{val}</span>});
		// const actorList = this.state.pageData.actor.map(val => <span>{val}</span>);
		const detail = {
			title: {
				fontSize: '30px',
				height: '60px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderBottom: '1px solid #f1f1f1',
				marginBottom: '10px',
			},
			header: {
				display: 'flex',
				justifyContent: 'spaceBetween',
				width: '100%',
                marginBottom: '10px',
			},
			header_left: {
				flex: 1,
			},
            header_img: {
				width: '200px',
				// height: '300px'
			},
			header_right: {
			},
            header_word: {
				marginBottom: '20px',
				marginLeft: '20px'
			},
            header_gather: {

			},
            header_gather_list: {
				width: '20px',
				height: '20px',
				border: '1px solid #ccc',
				marginLeft: '20px'
			},
			player: {

			}
		};
		return (
			<div>
				<div style={detail.title}>{this.state.pageData.title}</div>
                <div style={detail.header}>
					<div style={detail.header_left}>
                        <img style={detail.header_img} src={this.state.pageData.cover} alt=""/>
					</div>
					<div style={detail.header_right}>
						{/*<div>*/}
                            {/*{this.state.pageData.year}*/}
						{/*</div>*/}
						<div style={detail.header_word}>
                            {this.state.actorList.map(val => <span key={val}>{val} /</span>)}
						</div>
						<div style={detail.header_word}>
                            {this.state.pageData.word}
						</div>
                        <div style={detail.header_word}>
                            {this.state.pageData.total ? `更新至${this.state.pageData.upinfo} / 全集${this.state.pageData.total}` : ''}
                        </div>
						<div style={detail.header_gather}>
							<span style={detail.header_gather_list}></span>
						</div>
					</div>
				</div>
                <div id="player"></div>
			</div>
		)
	}
}
// 1. 租车
// 2. 接机
// 3.
// 鲸鲨 菲龙
// 海豚 320
//