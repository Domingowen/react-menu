import React from 'react';
import axios from "axios";
// import axios from "axios";
import {Tabs, List, Avatar, Button, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
export default class MusicList extends React.Component {
    constructor (props) {
        super();
        this.state = {
            listData: [{}, {}, {}, {}],
            loading: false,
        }
    }
    componentWillMount () {
        if (localStorage.getItem('musicList')) {
            // this.setState({
            //     listData: localStorage.getItem('musicList')
            // });
        } else {

        }
    }
    loadMore () {

    }

    render () {
        return (
            <div>
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
                        dataSource={this.state.listData}
                        renderItem={(item, index) => (
                            <List.Item actions={[<a>播放</a>, <a>删除</a>]}>
                                {/*<Skeleton avatar title={false} loading={item.loading} active>*/}
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">111111</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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