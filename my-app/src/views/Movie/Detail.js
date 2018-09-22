import React from 'react';
import axios from "axios";
import { Tabs } from 'antd';
import history from '../../common/history';
import Hls from 'hls.js';
import DPlayer from 'react-dplayer';
export default class Detail extends React.Component {
	constructor () {
		super();
		this.state = {
			pageData: {},
			actorList: []
		};
	}
	componentWillMount () {
		console.log(history);
		this.getDetailData();
	}
	getDetailData () {
		let stateParam = history.location.state;
		axios({
			url: 'http://192.168.99.54:20200/movie/detail',
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
			})
		})
	}
	render () {
		// const actorList = this.state.pageData.actor.map(val => {return <span>{val}</span>});
		// const actorList = this.state.pageData.actor.map(val => <span>{val}</span>);
		return (
			<div>
				<div>
					{this.state.pageData.title}
				</div>
				<div>
					{this.state.actorList.map(val => <span key={val}>{val} /</span>)}
				</div>
				<div>
					{this.state.pageData.year}
				</div>
				<div>
					<img src={this.state.pageData.cover} alt=""/>
				</div>
				<div>
					{this.state.pageData.word}
				</div>
				<div>
					{this.state.pageData.total ? `${this.state.pageData.upinfo} / ${this.state.pageData.total}` : ''}
				</div>
				<DPlayer video={{url: 'https://apd-d4898a57d2726d5a6900a5e53b4c74f3.v.smtcdns.com/moviets.tc.qq.com/Asdz8aXiEMGHLC-E4hxcruXlaUTzq9gSRdFR32z7hoQk/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/q01POoz-CQeyAikPfWKcRr97X1I2z3wbG7PZjbb5yxi3DAyZyMufo-a51fRY5c1s6Dms4XAcZkJxLYzr5Xz6fvjF6PjB75tjlDqpt4ZZLlPdSnetubXvK9bTvXjp6wvLDW370GNW-FWFHdm98wMwcnymhp9UmWyQ/m0027l6mudp.321002.ts.m3u8?ver=4'}}/>
			</div>
		)
	}
}