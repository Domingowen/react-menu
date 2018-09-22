import React from 'react';
import axios from "axios";
import {Tabs, List, Avatar, Button, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
// import 'aplayer/dist/APlayer.min.css';
// import skPlayer from 'skplayer';
// import APlayer from 'aplayer';
// import Player from './test';
// import ReactAPlayer from 'react-aplayer';

export default class MusicList extends React.Component {
    constructor (props) {
        super();
	    // this.APlayer = React.createRef();
        this.state = {
            listData: [
				{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
			],
        //     loading: false,
        //     page: 0
        }
    }
    handlePlay () {

	}
	handleDelete () {

	}
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
									title={<div><span>歌手：</span><span>周杰伦</span></div>}
									description={<div><span>歌曲名：</span><span>晴天</span></div>}
                                />
                                {/*<div>晴天</div>*/}
                            {/*</Skeleton>*/}
                        </List.Item>
                    )}
				/>
			</div>
		)
	}
}