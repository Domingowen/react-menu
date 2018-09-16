import React from 'react';
import axios from "axios";
import {Tabs, Input, List, Avatar} from 'antd';
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
    componentWillMount () {

    }
    // searchResult (err, data) {
    //     console.log(data);
    // }
    play () {
        console.log('我要开始播放了');
        this.props.handleChange('play');
        // console.log(this.props.handleChange);
    }
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
    handleSearch (e) {
        // console.log(e);
        this.setState({
            search: e
        });
        // () => {
            // axios({
            //     method: 'post',
            //     url: 'http://192.168.254.100:20200/music/search',
            //     data: {
            //         search: this.state.search,
            //         page: this.state.page
            //     }
            // }).then((res) => {
            //     // console.log(res.data.data);
            //     let data = eval("(" + res.data.data + ")");
            //     console.log(data);
            //     // console.log(JSON.stringify(res.data.data));
            //     // console.log((JSON.parse(res.data.data)));
            //     // this.setState({
            //     //     listData: res.data.data.data
            //     // })
            // });
        // });
        // console.log(data);
        // console.log(this.state.listData);
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
            param: `all=${e}&ft=music&client=kt&cluster=0&pn=${this.state.page}&rn=10&rformat=json&encoding=utf8&vipver=MUSIC_8.0.3.1&callback=searchResult`
        }, searchResult)
    }
    render () {
        const search = {
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
                    dataSource={this.state.listData.abslist}
                    renderItem={(item, index) => (
                        <List.Item actions={[<a onClick={this.play.bind(this)}>播放当前歌曲</a>]}>
                            {/*<Skeleton avatar title={false} loading={item.loading} active>*/}
                            <List.Item.Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={`${item.NAME} | ${item.ARTIST}`}
                                description={`专辑：${item.ALBUM}`}
                            />
                            {/*<div>content</div>*/}
                            {/*</Skeleton>*/}
                        </List.Item>
                    )}
                />
                </InfiniteScroll>
            </div>
        )
    }
}