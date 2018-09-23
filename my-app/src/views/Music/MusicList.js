import React from 'react';
import axios from "axios";
import {Tabs, List, Avatar, Button, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import 'aplayer/dist/APlayer.min.css';
// import skPlayer from 'skplayer';
import APlayer from 'aplayer';
// import Player from './test';
// import ReactAPlayer from 'react-aplayer';

export default class MusicList extends React.Component {
    constructor (props) {
        super();
        this.state = {
            listData: [],
        }
    }
    handlePlay () {

	}
	handleDelete () {

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
            // this.player = new APlayer({
            //     container: document.getElementById('player'),
            //     audio: arrList,
            // });
            // console.log(arrList);
            // this.player.destroy();
            this.setState({
                listData: arrList
            })
            //     this.player = new APlayer({
            //         container: document.getElementById('player'),
            //         audio: this.state.listData,
            //     })
            // });
        }
    }
	componentDidMount () {
       this.getLocalStore();
    }
	player = null;
    render () {
    	return (
    		<div>
                <List
                    className="demo-loadmore-list"
                    // loading={initLoading}
                    itemLayout="horizontal"
                    // loadMore={loadMore}
                    dataSource={this.state.listData}
                    locale={{emptyText: '还没有播放历史哦，快去添加歌曲吧'}}
                    renderItem={item => (
                        <List.Item actions={[<a onClick={this.handlePlay.bind(this)}>播放</a>, <a onClick={this.handleDelete.bind(this)}>删除</a>]}>
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
				{/*<div id="player"></div>*/}
			</div>
		)
	}
}