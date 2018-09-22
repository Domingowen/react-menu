import React from 'react';
import axios from "axios";
import {Tabs} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MusicList from './MusicList';
import MusicRecommend from './MusicRecommend';
import MusicSearch from './MusicSearch';
import _ from 'lodash';
import { StickyContainer, Sticky } from 'react-sticky';
// import ReactAplayer from 'react-aplayer';
const TabPane = Tabs.TabPane;
export default class Index extends React.Component {
	constructor (props) {
		super();
		this.state = {
			activePage: 'play',
			source: null,
			playList: []
		}
	}
	componentDidMount () {
	}
	handleChange (e) {
		// console.log(e);
		this.setState({
            activePage: e
		});
		// console.log(this.state);
	};
	addPlayList (item) {
		if (localStorage.getItem('musicList')) {
			let musicList = JSON.parse(localStorage.getItem('musicList'));
			musicList.unshift(item);
			let newArr = _.uniqBy(musicList, 'songid');
			localStorage.setItem('musicList', JSON.stringify(newArr));
		} else {
			let musicList = [];
			musicList.push(item);
			localStorage.setItem('musicList', JSON.stringify(musicList));
		}
		this.setState({
			playList: localStorage.getItem('musicList')
		})
	}
	render () {
		const music = {
			container: {
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
		const props = {
			theme: '#F57F17',
			lrcType: 3,
			audio: [...this.state.playList]
		};
		const renderTabBar = (props, DefaultTabBar) => (
			<Sticky bottomOffset={0}>
				{({ style }) => (
					<DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff',height: '50px', fontSize: '20px', borderBottom: 'none' }} />
				)}
			</Sticky>
		);
		return(
			<div style={music.container}>
				<StickyContainer>
					<Tabs defaultActiveKey={this.state.activePage}
					      activeKey={this.state.activePage}
					      onChange={this.handleChange.bind(this)}
					      style={music.tabList}
					      size='large'
					      renderTabBar={renderTabBar}
					>
						<TabPane tab="播放列表" key="play"><MusicList playList={this.state.playList}/></TabPane>
						<TabPane tab="搜索歌曲" key="search"><MusicSearch handleChange={this.handleChange.bind(this)} addPlayList={this.addPlayList.bind(this)}/></TabPane>
						<TabPane tab="最新推荐" key="recommend"><MusicRecommend/></TabPane>
					</Tabs>
				</StickyContainer>
				{/*<ReactAplayer*/}
					{/*// audio={this.state.playList}*/}
					{/*{...props}*/}
					{/*// onInit={this.onInit}*/}
					{/*// onPlay={this.onPlay}*/}
					{/*// onPause={this.onPause}*/}
				{/*/>*/}
				{/*<audio controls="controls" src="http://dl.stream.qqmusic.qq.com/M800003OUlho2HcRHC.mp3?vkey=AA3A6C27B6FF587CB864C743C1749BEF8DAACFD790E30DAB2F99A5B47F35F0F63F3CD4935FF0B1D19CB544C2932D5A1C1B4C3D58D69B8F1A&guid=5150825362&fromtag=1"></audio>*/}

				{/*<audio src={this.state.source}></audio>*/}
			</div>
		)
	}
}