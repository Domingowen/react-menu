import React from 'react';
import axios from "axios";
import {Tabs} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MusicList from './MusicList';
import MusicRecommend from './MusicRecommend';
import MusicSearch from './MusicSearch';
const TabPane = Tabs.TabPane;
export default class Index extends React.Component {
	constructor (props) {
		super();
		this.state = {
			activePage: 'play'
		}
	}
	handleChange (e) {
		console.log(e);
		this.setState({
            activePage: e
		});
		console.log(this.state);
	};
	render () {
		const music = {
			container: {
				// display: 'flex',
				// justifyContent: 'center',
				// alignItems: 'center',
				// height: '90vh',
				// fontSize: '26px'
                backgroundColor: '#fff'
			},
			header: {
				textAlign: 'center'
			},
            tabList: {
				paddingLeft: '10px',
				paddingRight: '10px',
			}
		};
		return(
			<div style={music.container}>
				<div style={music.header}>目前融合了QQ音乐等多个平台数据</div>
                <Tabs defaultActiveKey={this.state.activePage} activeKey={this.state.activePage} onChange={this.handleChange.bind(this)} style={music.tabList}>
                    <TabPane tab="播放列表" key="play"><MusicList/></TabPane>
                    <TabPane tab="搜索歌曲" key="search"><MusicSearch handleChange={this.handleChange.bind(this)}/></TabPane>
                    <TabPane tab="最新推荐" key="recommend"><MusicRecommend/></TabPane>
                </Tabs>
			</div>
		)
	}
}