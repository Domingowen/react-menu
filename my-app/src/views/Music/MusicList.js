import React from 'react';
import axios from "axios";
import {Tabs, List, Avatar, Button, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import 'aplayer/dist/APlayer.min.css';
// import skPlayer from 'skplayer';
import APlayer from 'aplayer';
import MusicPlayer from '../Music/MusicPlayer';
// import Player from './test';
// import ReactAPlayer from 'react-aplayer';

export default class MusicList extends React.Component {
    constructor (props) {
        super();
        this.state = {
            listData: [],
        }
    }
    handlePlay (e) {
        console.log(e);
        axios({
            url: 'http://192.168.254.100:20200/music/play',
            method: 'post',
            data: {
                id: e.songid,
                filter: 'id',
                type: e.type,
                page: 1
            }
        }).then((res) => {
            console.log(res.data.data);
        })
	}
	handleDelete (e) {
        console.log(e);
	}
	getLocalStore () {
        let dataList = JSON.parse(localStorage.getItem('musicList'));
        // console.log(dataList);
        if(dataList) {
            let arrList = dataList.map(val => {
                val.name = val.title;
                val.artist = val.author;
                val.cover = val.pic;
                return val;
            });
            this.setState({
                listData: arrList
            })
        }
    }
	componentWillMount () {
       this.getLocalStore();
    }
	player = null;
    playerComponent = null;
    render () {
    	return (
    		<div>
                <List
	                style={{height: '70vh', overflow: 'auto'}}
                    // loading={initLoading}
                    itemLayout="horizontal"
                    // loadMore={loadMore}
                    dataSource={this.state.listData}
                    locale={{emptyText: '还没有播放历史哦，快去添加歌曲吧'}}
                    renderItem={item => (
                        <List.Item actions={[<a onClick={this.handlePlay.bind(this, item)}>播放</a>, <a onClick={this.handleDelete.bind(this, item)}>删除</a>]}>
                            {/*<Skeleton avatar title={false} active>*/}
                                <List.Item.Meta
                                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
									title={<div><span>歌手：</span><span>{item.author}</span></div>}
									description={<div><span>歌曲名：</span><span>{item.title}</span></div>}
                                />
                                {/*<div>晴天</div>*/}
                            {/*</Skeleton>*/}
                        </List.Item>
                    )}
				/>
				<MusicPlayer/>
				{/*<div id="player" ref={video => this.playerComponent = video}></div>*/}
			</div>
		)
	}
}