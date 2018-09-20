import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Card } from 'antd';
export default class Movie extends React.PureComponent {
	constructor (props) {
		super();
		this.state = {}
	}
	componentWillMount () {}
	handlePlayer () {

	}
	render () {
		return (
			<div>
				<List
					grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 6 }}
					// grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
					dataSource={this.props.list}
					locale={{emptyText: '暂无数据'}}
					renderItem={item => (
						<List.Item>
							<Card
								hoverable={true}
								cover={<img src={item.image} width={300} height={300}/>}
								title={item.title}
							>{item.year}</Card>
						</List.Item>
					)}
				/>,
			</div>
		)
	}
}