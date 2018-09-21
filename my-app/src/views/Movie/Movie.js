import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Card } from 'antd';
export default class Movie extends React.PureComponent {
	constructor (props) {
		super();
	}
	// shouldComponentUpdate (nextProps, nextState) {
	// 	if (nextProps.list !== this.props.list) {
	// 		this.setState({
	// 			listData: nextProps.list
	// 		});
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
	handlePlayer () {}
	handleDetail () {
		console.log('详情页面')
	}
	loadMore (e) {
		this.props.getMore();
	}
	// loadData (start) {
	// 	axios({
	// 		method: 'post',
	// 		url: 'http://192.168.99.54:20200/movie/list',
	// 		data: {
	// 			cid: this.props.cid,
	// 			tid: this.props.tid,
	// 			start: start
	// 		}
	// 	}).then((res) => {
	// 		let data = res.data.data.data.data.datas;
	// 		console.log(data);
	// 		this.setState({
	// 			hasMore: true,
	// 			// listData: data
	// 		})
	// 	})
	// }
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
		return (
			<div>
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
									onClick={this.handleDetail.bind(this)}
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
			</div>
		)
	}
}