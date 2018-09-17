import React from 'react';
import axios from "axios";
// import axios from "axios";
import {Tabs, List, Avatar, Button, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import 'aplayer/dist/APlayer.min.css';
import skPlayer from 'skplayer';
export default class MusicList extends React.Component {
    constructor (props) {
        super();
        this.state = {
            listData: [],
            loading: false,
            page: 0
        }
    }
    player = null;
    componentWillMount () {
        if (localStorage.getItem('musicList')) {
            this.setState({
                listData: JSON.parse(localStorage.getItem('musicList'))
            });
	        let playList =JSON.parse(localStorage.getItem('musicList')).map((val, index) => {
		        val.name = val.title;
		        val.artist = val.author;
		        val.cover = val.pic;
		        val.src = val.url;
		        // console.log(val);
		        return val;
	        });
	        this.setState({
		        playList: playList
	        })
		        // if (this.state.playList.length > 0) {

		        // this.player = new APlayer({
			     //    container: document.getElementById('player'),
			     //    mini: false,
			     //    autoplay: false,
			     //    theme: '#FADFA3',
			     //    loop: 'all',
			     //    order: 'random',
			     //    preload: 'auto',
			     //    volume: 0.7,
			     //    mutex: true,
			     //    listFolded: false,
			     //    listMaxHeight: 90,
			     //    lrcType: 3,
			     //    music: this.state.playList
		        // });
		        // this.player.destroy();
		        // this.player.list.add(this.state.playList)
		        // }
        }
    }
    // shouldComponentUpdate (nextProps, nextState) {
	    // if (nextProps !== this.props.playList) {
		 //    this.setState({
			//     listData: nextProps
		 //    });
	    // }
	    // return true;
    // }
	componentDidMount () {
    	if (this.state.playList) {
		    // console.log(this.state.playList);
		    this.player = new skPlayer({
			    autoplay: false,
			    //可选项,自动播放,默认为false,true/false
			    listshow: true,
			    //可选项,列表显示,默认为true,true/false
			    mode: 'listloop',
			    //可选项,循环模式,默认为'listloop'
			    //'listloop',列表循环
			    //'singleloop',单曲循环
			    music: {
				    type: 'file',
				    source: this.state.playList
			    }
		    })
	    }
	}
	componentWillUnmount () {
		this.player.destroy()
	}
    loadMore () {}
    deleteSong (id) {
        console.log(id)
    }
	play (id) {
		axios({
			method: 'post',
			url: 'http://192.168.99.54:20200/music/play',
			data: {
                input: id,
				filter: 'id',
				type: 'qq',
                page: this.state.page + 1
			}
		})
	}
    render () {
    	const playList = {
    		player: {
    			width: '99%',
			    height: '90%',
			    margin: '0 auto'
		    }
	    };
        return (
            <div style={{height: '80vh'}}>
                {/*<InfiniteScroll*/}
                    {/*initialLoad={false}*/}
                    {/*pageStart={0}*/}
                    {/*loadMore={this.loadMore.bind(this)}*/}
                    {/*hasMore={!this.state.loading && this.state.hasMore}*/}
                    {/*useWindow={false}*/}
                {/*>*/}
                    {/*<List*/}
                        {/*// loading={initLoading}*/}
                        {/*itemLayout="horizontal"*/}
                        {/*// loadMore={loadMore}*/}
                        {/*locale={{emptyText: '播放列表为空'}}*/}
                        {/*dataSource={this.state.listData}*/}
                        {/*renderItem={(item, index) => (*/}
                            {/*<List.Item actions={[<a onClick={this.play.bind(this, item.songid)}>播放</a>, <a onClick={this.deleteSong.bind(this, item.songid)}>删除</a>]}>*/}
                                {/*<List.Item.Meta*/}
                                    {/*// title={`${item.NAME} | ${item.ARTIST}`}*/}
                                    {/*// description={`专辑：${item.ALBUM}`}*/}
	                                {/*title={`${item.author} | ${item.title}`}*/}
                                {/*/>*/}
                                {/*<div>*/}
                                    {/*<img src={item.pic} alt="pic" width={100} height={100}/>*/}
                                {/*</div>*/}
                            {/*</List.Item>*/}
                        {/*)}*/}
                    {/*/>*/}
                {/*</InfiniteScroll>*/}
	            <div id="skPlayer" style={playList.player}></div>
            </div>
        )
    }
}