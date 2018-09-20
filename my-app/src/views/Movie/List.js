import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Card } from 'antd';
export default class List extends React.Component {
	constructor (props) {
		super();
		this.state = {}
	}
	componentWillMount () {}
	render () {
		return (
			<div>
				<List
					// grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
					dataSource={data}
					renderItem={item => (
						<List.Item>
							<Card title={item.title}>Card content</Card>
						</List.Item>
					)}
				/>,
			</div>
		)
	}
}