import React from 'react';
import { List, Avatar, Icon, Card } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import history from '../../common/history';
class TravelList extends React.Component {
    constructor (props) {
        super();
    }
	loadMore () {
		this.props.loadMore();
	}
	handleClick (e) {
    	history.push({pathname: '/travel/detail', state: {
    		travelId: e
    	}})
	}
	render () {
		const travelList = {
			list: {
				padding: '10px 10px'
			},
			container: {
				cursor: 'pointer',
			},
			images: {
				backgroundColor: '#fff7e6',
				width: '100%'
			},
			text: {
				overflow: 'hidden',
				textOverflow:'ellipsis',
				whiteSpace: 'nowrap',
				fontSize: '16px'
			}
		};
		return (
			<div>
				<InfiniteScroll
					pageStart={1}
					loadMore={this.loadMore.bind(this)}
					hasMore={this.props.loading}
					initialLoad={false}
					loader={<div key={0} style={{textAlign: 'center'}}>{this.props.loading ? 'Loading...' : '这是我的底线了'}</div>}
				>
					<List
						itemLayout="vertical"
						size="default"
						dataSource={this.props.listData}
						style={travelList.list}
						grid={{ gutter: 10, column: 2 }}
						renderItem={item => {
							return <List.Item
								key={item.topic_id}
								// extra={<img width={200} alt="食物图片" src={item.imageList[0]} style={eatlist.images}/>}
							>
								<Card
									onClick={this.handleClick.bind(this, item.topic_id)}
									style={travelList.container}
									title={item.title}
									// cover={[<img width={400} height={400} alt='旅行图片' src={item.imageList[0]} style={travelList.images}/>]}
								>
									{item.imageList.map((val, index) => {
										if (index < 7) {
											return <Card.Grid style={{width: '25%'}}><img src={val} style={travelList.images} /></Card.Grid>
										}
									})}
									<div style={travelList.text}>
										{item.subject}
									</div>
								</Card>
							</List.Item>
						}}
					/>
				</InfiniteScroll>
			</div>
		)
	}
}
export default TravelList