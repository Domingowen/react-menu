import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Lists from "../Movie/Lists";
import Detail from '../Movie/Detail';
export default class Index extends React.Component {
	constructor (props) {
		super();
		this.state = {
			activeKey: 'tv',
			cid: 3,
			tid: 3,
			type: 13,
			listData: [],
			start: 0,
			page: 1,
			loading: true,
			navList: [
				{
					name: '电视剧',
					id: 'tv',
					tid: 3,
					cid: 3,
					type: 13
				},
				{
					name: '电影',
					id: 'movie',
					tid: 22,
					cid: 4,
					type: 6
				},
				{
					name: '综艺',
					id: 'shows',
					tid: 413,
					cid: 5,
					type: 3,
				},
				{
					name: '韩剧',
					id: 'koreaTv',
					tid: 6,
					cid: 3,
					type: 15,
				},
				{
					name: '美剧',
					id: 'americanTv',
					tid: 8,
					cid: 3,
					type: 16,
				},
				{
					name: '动漫',
					id: 'canton',
					tid: 413,
					cid: 5,
					type: 4,
				},
			]
		}
	}
	handleChange (e) {
		this.state.navList.forEach((val, index) => {
			if (val.id === e) {
                this.setState({
                    activeKey: e,
	                type: val.type,
                    cid: val.cid,
                    tid: val.tid,
                }, () => {
                    this.getData();
				});
			} else {
				this.setState({
					activeKey: e,
				})
			}
		});

	}
	componentWillMount () {
		this.getData();
	}
	getMore () {
		this.setState({
			loading: false,
			start: this.state.start + 20,
			page: this.state.page + 1,
		}, () => {
			axios({
				method: 'post',
				url: 'http://192.168.99.54:20200/movie/list',
				data: {
					type: this.state.type,
					page: this.state.page,
					// cid: this.state.cid,
					// tid: this.state.tid,
					// start: this.state.start,
				}
			}).then((res) => {
				console.log(res);
				let data = res.data.data.list;
				this.setState({
					listData: this.state.listData.concat(data),
					loading: true
				})
			})
		});
	}
	getData () {
		this.setState({
			listData: [],
			start: 0,
		}, () => {
			axios({
				method: 'post',
				url: 'http://192.168.99.54:20200/movie/list',
				data: {
					type: this.state.type
					// cid: this.state.cid,
					// tid: this.state.tid,
					// start: this.state.start
				}
			}).then((res) => {
				console.log(res);
				let data = res.data.data.list;
				this.setState({
					listData: this.state.listData.concat(data),
					loading: true
				})
			})
		});
	}
	render () {
		const movie = {
			container: {
				backgroundColor: '#fff',
			},
			tabList: {
				paddingLeft: '10px',
				paddingRight: '10px',
			}
		};
		return(
			<div style={movie.container}>
				<Route path='/movie' exact component={() => (
					<Lists list={this.state.listData}
					       getMore={this.getMore.bind(this)}
					       loading={this.state.loading}
					       handleChange={this.handleChange.bind(this)}
					       activeKey={this.state.activeKey}
					       navList={this.state.navList}
					/>)}
				/>
				<Route path='/movie/detail' component={Detail}/>
			</div>
		)
	}
}