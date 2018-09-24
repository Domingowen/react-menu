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
            listData: [],
            search: null,
            page: 0,
            totalPage: null,
            totalMusic: null,
	        loading: true
        }
    }
    componentWillMount () {}
	addPlayList (item) {
        this.props.addPlayList(item);
    }
    loadMore () {
    	console.log('加载更多');
        this.setState({
            page: this.state.page + 1,
	        loading: false
        }, () => {
	        this.useQQ();
        })
    }
    useKuwo (e) {
	    let searchResult = (err, data) => {
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
		    if (res.data.data.data) {
			    this.setState({
				    listData: this.state.listData.concat(res.data.data.data),
				    loading: true
			    });
		    }
	    });
    }
    handleSearch (e) {
	    this.setState({
		    listData: [],
		    loading: true
	    });
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
                    placeholder="请输入歌手名字或者歌曲"
                    onSearch={this.handleSearch.bind(this)}
                    enterButton
                />
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.loadMore.bind(this)}
                    hasMore={this.state.loading}
                >
                    <List
                    itemLayout="horizontal"
                    locale={{emptyText: '你想听的都有哦！'}}
                    dataSource={this.state.listData}
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
	                            <img src={item.pic} alt="pic" width={50} height={50}/>
                            </div>
                        </List.Item>
                    )}
                />
                </InfiniteScroll>
            </div>
        )
    }
}