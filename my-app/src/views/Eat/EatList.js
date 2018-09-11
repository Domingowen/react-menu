import React from 'react';
import { List, Avatar, Icon, Card } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
class EatList extends React.Component {
    constructor (props) {
        super();
        this.state = {
            loading: true
        }
    }
    loadMore () {
        this.props.loadMore();
    }
    render () {
        const eatlist = {
            list: {
                padding: '10px 10px'
            },
            container: {
                cursor: 'pointer',
            },
            images: {

            }
        };
        return (
            <div>
                <InfiniteScroll
                    pageStart={1}
                    loadMore={this.loadMore.bind(this)}
                    hasMore={this.state.loading}
                    initialLoad={false}
                    loader={<div key={0} style={{textAlign: 'center'}}>{this.state.loading ? 'Loading...' : '这是我的底线了'}</div>}
                >
                    <List
                        itemLayout="vertical"
                        size="default"
                        dataSource={this.props.listData}
                        style={eatlist.list}
                        grid={{ gutter: 10, column: 2 }}
                        renderItem={item => (
                            <List.Item
                                key={item.id}
                                // extra={<img width={200} alt="食物图片" src={item.imageList[0]} style={eatlist.images}/>}
                            >
                                <Card
                                    style={eatlist.container}
                                    title={item.title}
                                    cover={<img width={'300'} height={'300'} alt="食物图片" src={item.imageList[0]} style={eatlist.images}/>}
                                >
                                    <div style={eatlist.text}>
                                        {item.subject}
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>
        )
    }
}
export default EatList