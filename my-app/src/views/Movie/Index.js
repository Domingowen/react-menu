import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import _ from 'lodash';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import TV from "./TV";
import Movie from "../Movie/Movie";
import Shows from "../Movie/Shows";
import AmericanTV from "../Movie/AmericanTV";
import Candid from "../Movie/Candid";
import Cartoon from "../Movie/Cartoon";
import VideoPlayer from "../Movie/VideoPlayer";
const TabPane = Tabs.TabPane;
export default class Index extends React.Component {
	constructor (props) {
		super();
		this.state = {
			activePage: 'tv',
			cid: 3,
			tid: 3,
			listData: [],
			navList: [
				{
					name: '电视剧',
					id: 'tv',
					tid: 3,
					cid: 3,
				},
				{
					name: '电影',
					id: 'movie',
					tid: 22,
					cid: 4,
				},
				{
					name: '综艺',
					id: 'shows',
					tid: 413,
					cid: 5,
				},
				{
					name: '韩剧',
					id: 'koreaTv',
					tid: 6,
					cid: 3,
				},
				{
					name: '美剧',
					id: 'americanTv',
					tid: 8,
					cid: 3,
				}
			],
			start: 0,
			loading: true
		}
	}
	handleChange (e) {
		let cid = null;
		let tid = null;
		this.state.navList.forEach((val, index) => {
			if (val.id === e) {
				this.setState({
					activePage: e,
					cid: val.cid,
					tid: val.tid,
				}, () => {
					this.getData();
				});
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
		}, () => {
			axios({
				method: 'post',
				url: 'http://192.168.99.54:20200/movie/list',
				data: {
					cid: this.state.cid,
					tid: this.state.tid,
					start: this.state.start,
				}
			}).then((res) => {
				let data = res.data.data.data.data.datas;
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
					cid: this.state.cid,
					tid: this.state.tid,
					start: this.state.start
				}
			}).then((res) => {
				let data = res.data.data.data.data.datas;
				this.setState({
					listData: data
				})
			})
		});
	}
	render () {
		const movie = {
			container: {
				backgroundColor: '#fff',
				// display: 'flex',
				// justifyContent: 'center',
				// alignItems: 'center',
				// height: '90vh',
				// fontSize: '26px'
			},
			tabList: {
				paddingLeft: '10px',
				paddingRight: '10px',
				// borderBottom: 'none',
			}
		};
		const renderTabBar = (props, DefaultTabBar) => (
			<Sticky bottomOffset={0}>
				{({ style }) => (
					<DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff',height: '50px', fontSize: '20px', borderBottom: 'none' }} />
				)}
			</Sticky>
		);
		return(
			<div style={movie.container}>
				<StickyContainer>
					<Tabs
						defaultActiveKey={this.state.activePage}
				        activeKey={this.state.activePage}
				        onChange={this.handleChange.bind(this)}
				        size='large'
				        renderTabBar={renderTabBar}
						style={movie.tabList}
						// onTabClick={this.handleChangeChannel.bind(this)}
					>
						{this.state.navList.map((val, index) =>
							<TabPane tab={val.name} key={val.id}>
								<Movie
									list={this.state.listData}
									getMore={this.getMore.bind(this)}
									loading={this.state.loading}
								/>
							</TabPane>
						)}
						<TabPane tab="播放器" key="player">
							<VideoPlayer/>
						</TabPane>
					</Tabs>
				</StickyContainer>
			</div>
		)
	}
}