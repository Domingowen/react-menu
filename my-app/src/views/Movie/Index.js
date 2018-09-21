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
			activePage: 'movie',
			listData: [],
		}
	}
	handleChange (e) {
		console.log(e);
		this.setState({
			activePage: e
		})
	}
	componentWillMount () {
		this.getData();
	}
	getData () {
		axios({
			method: 'post',
			url: 'http://192.168.254.100:20200/movie/list',
			data: {}
		}).then((res) => {
			console.log(res);
			// this.setState({
				// listData: res.data.data.list
			// })
		})
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
					>
						<TabPane tab="电影" key="movie">
							<Movie list={this.state.listData}/>
						</TabPane>
						<TabPane tab="电视剧" key="tv">
							<TV/>
						</TabPane>
						<TabPane tab="综艺" key="shows">
							<Shows/>
						</TabPane>
						<TabPane tab="动漫" key="cartoon">
							<Cartoon/>
						</TabPane>
						<TabPane tab="韩剧" key="koreaTv">
							<AmericanTV/>
						</TabPane>
						<TabPane tab="美剧" key="americanTv">
							<AmericanTV/>
						</TabPane>
						<TabPane tab="抢先" key="candid">
							<Candid/>
						</TabPane>
						<TabPane tab="播放器" key="player">
							<VideoPlayer/>
						</TabPane>
					</Tabs>
				</StickyContainer>
			</div>
		)
	}
}