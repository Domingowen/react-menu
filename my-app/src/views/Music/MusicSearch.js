import React from 'react';
import axios from "axios";
import {Tabs, Input, List, Avatar, Icon} from 'antd';
import jsonp from 'jsonp';
import InfiniteScroll from 'react-infinite-scroller';
const Search = Input.Search;
export default class MusicSearch extends React.Component {
    constructor (props) {
        super();
        this.state = {
            listData: {},
            search: null,
            page: 0,
            totalPage: null,
            totalMusic: null,
        }
    }
    componentWillMount () {}
    // play (item) {
    // console.log('我要开始播放了');
    // console.log(item);
    // this.props.handleChange('play');
    // console.log(this.props.handleChange);
    // }
	addPlayList (item) {
        // console.log(item);
        this.props.addPlayList(item);
    }
    // componentWillUpdate () {
    // console.log(1111);
    // }
    loadMore () {
        this.setState({
            page: this.state.page + 1
        }, () => {
            let searchResult = (err, data) => {
                console.log(data);
                this.setState({
                    listData: data
                })
            };
            jsonp('http://search.kuwo.cn/r.s', {
                param: `all=${this.state.search}&ft=music&client=kt&cluster=0&pn=${this.state.page}&rn=10&rformat=json&encoding=utf8&vipver=MUSIC_8.0.3.1&callback=searchResult`
            }, searchResult)
        })
    }
    useKuwo (e) {
	    let searchResult = (err, data) => {
	        // console.log(data);
	        // console.log(this);
	        this.setState({
	            listData: data,
	            totalMusic: data.TOTAL,
	            totalPage: Math.ceil(data.TOTAL / 10),
	        });
	        console.log(this.state);
	    };
	    jsonp('http://search.kuwo.cn/r.s', {
	        param: `all=${this.state.search}&ft=music&client=kt&cluster=0&pn=${this.state.page}&rn=10&rformat=json&encoding=utf8&vipver=MUSIC_8.0.3.1&callback=searchResult`
	    }, searchResult)
    }
    useQQ () {
	    axios({
		    method: 'post',
		    url: 'http://192.168.99.54:20200/music/search/qq',
		    data: {
			    search: this.state.search,
			    page: this.state.page + 1,
			    type: 'qq',
                filter: 'name',
		    }
	    }).then((res) => {
		    console.log(res.data.data.data);
		    this.setState({
			    listData: res.data.data.data,
		    });
	    });
    }
    handleSearch (e) {
        this.setState({
            search: e
        }, () => {
	        this.useQQ();
        });

    }
    render () {
        const search = {
            list: {
                cursor: 'pointer'
            },
	        title: {
	            display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '40px'
            }
        };
        return (
            <div>
                <Search
                    placeholder="请输入歌星或者歌曲"
                    onSearch={this.handleSearch.bind(this)}
                    enterButton
                />
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.loadMore.bind(this)}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <List
                    // loading={initLoading}
                    itemLayout="horizontal"
                    // loadMore={loadMore}
                    locale={{emptyText: '暂无数据'}}
                    dataSource={this.state.listData}
                    // style={search.list}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[<Icon type="play-circle"
                                            theme="outlined"
                                            style={{fontSize: '40px', color: '#1890ff'}}
                                            onClick={this.addPlayList.bind(this, item)} />]}
                        >
                            <List.Item.Meta
                                // title={`${item.NAME} | ${item.ARTIST}`}
	                            // description={`专辑：${item.ALBUM}`}
	                            style={search.title}
                                title={`${item.author} | ${item.title}`}
                            />
                            <div>
	                            <img src={item.pic} alt="pic" width={100} height={100}/>
                            </div>
                        </List.Item>
                    )}
                />
                </InfiniteScroll>
            </div>
        )
    }
}