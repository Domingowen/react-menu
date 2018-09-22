import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { StickyContainer, Sticky } from 'react-sticky';
import { List, Card, Tabs } from 'antd';
import history from '../../common/history';
const TabPane = Tabs.TabPane;
export default class Lists extends React.PureComponent {
	constructor (props) {
		super();
	}
	handleChange (e) {
		this.props.handleChange(e)
	}
	handleDetail (e) {
		history.push({pathname: '/movie/detail', state: {movieId: e}});
	}
	loadMore (e) {
		this.props.getMore();
	}
	render () {
		const style = {
			title: {
				display: 'flex',
				justifyContent: 'space-between',
			},
			word: {
				overflow: 'hidden',
				textOverFlow: 'ellipsis',
				display: '-webkit-box',
				// webkitLineClamp: '1',
				// webkitBoxOrient: 'vertical',
				height: '20px'
			}
		};
		const renderTabBar = (props, DefaultTabBar) => (
			<Sticky bottomOffset={0}>
				{({ style }) => (
					<DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff',height: '50px', fontSize: '20px', borderBottom: 'none' }} />
				)}
			</Sticky>
		);
		return (
			<div>
				<StickyContainer>
					<Tabs
						defaultActiveKey={this.props.activeKey}
						activeKey={this.props.activeKey}
						onChange={this.handleChange.bind(this)}
						size='large'
						renderTabBar={renderTabBar}
						// onTabClick={this.handleChangeChannel.bind(this)}
					>
						{this.props.navList.map((val, index) =>
							<TabPane tab={val.name} key={val.id}>
								<InfiniteScroll
									initialLoad={false}
									pageStart={0}
									loadMore={this.loadMore.bind(this)}
									hasMore={this.props.loading}
									useWindow={true}
								>
									<List
										grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 6 }}
										dataSource={this.props.list}
										locale={{emptyText: '我们正在飞速上传资源'}}
										renderItem={item => (
											<List.Item>
												<Card
													onClick={this.handleDetail.bind(this, item)}
													hoverable={true}
													cover={<img src={item.cover} width={200} height={300}/>}
													title={item.title}
												>
													<div style={style.title}><span>年份：{item.year}</span><span>评分：{item.score}</span></div>
													{item.actor ? <div style={style.word}>{`${item.actor[0]} ${item.actor[1]}`}</div> : ''}
													<div>{item.finish ? `全集${item.upinfo}` : `更新至${item.upinfo}集`}</div>
													<div style={style.word}>{item.word ? `${item.word}` : ``}</div>
												</Card>
											</List.Item>
										)}
									/>,
								</InfiniteScroll>
							</TabPane>
						)}
					</Tabs>
				</StickyContainer>
			</div>
		)
	}
}