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
			episodeList: [],
			iframeUrl: null,
		};
	}
	componentWillMount () {
		console.log(history);
		this.getDetailData();
		// new Hls();
	}
	componentDidMount () {
		if(this.state.iframeUrl) {}
	}
	playVideo (item) {
		console.log(item);
		this.setState({
			iframeUrl: item
		}, () => {
			document.getElementById('videoUrl').setAttribute('src', this.state.iframeUrl);
			console.log(this.player);
			// document.getElementById('videoUrl').contentWindow.location.reload();
			// this.player.location.reload()
		})
	}
	player = null;
	playIframe = null;
	getDetailData () {
		let stateParam = history.location.state;
		// console.log(stateParam);
		axios({
			url: 'http://192.168.99.54:20200/movie/detail',
			method: 'post',
			data: {
				ids: stateParam.movieId.vod_id
				// wd: stateParam.movieId.title
				// id: stateParam.movieId.id,
				// cat: stateParam.movieId.cat
			}
		}).then((res) => {
			// console.log(res);
			let data = res.data.data.list[0];
			let actorList = res.data.data.list[0].vod_actor.split(',');
			let episodeList = res.data.data.list[0].vod_play_url.split('#');
			let firstItem = episodeList[0].split('$')[1];
			console.log(episodeList);
			this.setState({
				pageData: data,
				actorList: actorList,
				episodeList: episodeList,
				iframeUrl: firstItem
			}, () => {
				document.getElementById('videoUrl').setAttribute('src', this.state.iframeUrl);
			});
			console.log(this.state);
		});

		// this.playIframe.setAttribute('src', 'http://api.bbbbbb.me/jx/?url=http://v.qq.com/x/cover/1wbx6hb4d3icse8/z0027hcc6iu.html?ptag=2345.tv');
		// this.playIframe.src= ''
	}
	componentWillUnmount () {
		// if (this.player) {
		// 	this.player.destroy();
		// }
	}
	render () {
		const detail = {
			container: {
				padding: '0 5px'
			},
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
				// justifyContent: 'spaceBetween',
				width: '100%',
				marginBottom: '10px',
			},
			header_left: {
				// flex: 1,
			},
			header_img: {
				width: '200px',
				// height: '300px'
			},
			header_right: {
				flex: 1,
				marginLeft: '20px',
			},
			header_word: {
				marginBottom: '20px',
			},
			header_gather: {
				display: 'flex',
				flexWrap: 'wrap'
			},
			header_gather_list: {
				// width: '20px',
				// height: '20px',
				border: '1px solid #ccc',
				marginLeft: '5px',
				marginBottom: '5px',
				padding: '10px',
				cursor: 'pointer'
				// marginLeft: '20px'
			},
			player: {
				margin: '0 auto',
				width: '100%',
				height: '600px'
			},
			iframe: {
				width: '100%',
				height: '100%'
			}
		};
		// const actorList = this.state.pageData.actor.map(val => {return <span>{val}</span>});
		// const actorList = this.state.pageData.actorList.map(val => <span>{val}</span>);
		const episodeList = this.state.episodeList.map(val => <span key={val} style={detail.header_gather_list} onClick={this.playVideo.bind(this, val.split('$')[1])}>{val.split('$')[0]}</span>);

		return (
			<div style={detail.container}>
				<div style={detail.title}>{this.state.pageData.vod_name}</div>
                <div style={detail.header}>
					<div style={detail.header_left}>
                        <img style={detail.header_img} src={this.state.pageData.vod_pic} alt=""/>
					</div>
					<div style={detail.header_right}>
						{/*<div>*/}
                            {/*{this.state.pageData.year}*/}
						{/*</div>*/}
						<div style={detail.header_word}>
                            {this.state.actorList.map(val => <span key={val}>{val} /</span>)}
							{/*{actorList}*/}
						</div>
						<div style={detail.header_word}>
                            {this.state.pageData.vod_content}
						</div>
                        <div style={detail.header_word}>
                            {this.state.pageData.vod_remarks ? `更新至${this.state.pageData.vod_remarks}`: ''}
                        </div>
						<div style={detail.header_gather}>
							{episodeList}
						</div>
					</div>
				</div>
				<div id="player" style={detail.player}>
					<iframe src={this.state.iframeUrl} style={detail.iframe} ref={video => this.player = video} id='videoUrl'></iframe>
				</div>
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