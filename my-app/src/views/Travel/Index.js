import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import axios from 'axios';
import TravelList from './TravelList';
import TravelDetail from './TravelDetail';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_ww2kfnpbc5r.js',
});
class Travel extends React.Component {
	constructor (props) {
		super();
		this.state = {
			listData: [],
			totalData: null,
			totalPage: null,
			loading: true,
			page: 1,
		}
	}
	loadMore () {
		if (this.state.page > this.state.totalPage) {
			this.setState({
				loading: false
			});
			return false;
		} else {
			this.setState({
				page: this.state.page + 1,
				loading: false
			}, () => {
				axios({
					method: 'post',
					url: 'http://192.168.99.54:4000/flw',
					data: {
						boardId: 37,
						page: this.state.page
					}
				}).then((res) => {
					let list = res.data.data.list.filter(val => {
						if (val.imageList.length > 0) {
							return val;
						}
					});
					this.setState({
						listData: this.state.listData.concat(list),
						loading: true
					})
				})
			});
		}
	}
	componentWillMount () {
		axios({
			method: 'post',
			url: 'http://192.168.99.54:4000/flw',
			data: {
				boardId: 37,
				page: 1
			}
		}).then((res) => {
			// console.log(res);
			let list = res.data.data.list.filter(val => {
				if (val.imageList.length > 0) {
					return val;
				}
			});
			let totalData = res.data.data.total_num;
			let totalPage = Math.ceil(totalData / 20);
			this.setState({
				listData: list,
				totalData: totalData,
				totalPage: totalPage
			});
		})
	}
	render () {
		const travel = {
			title: {},
			header: {}
		};
		return (
			<div>
				<div style={travel.header}>
					<Route exact path='/travel' component={() => {
						return <TravelList
                            listData={this.state.listData}
                            loadMore={this.loadMore.bind(this)}
                            loading={this.state.loading}
                        />
					}}/>
					<Route path='/travel/detail' component={TravelDetail}/>
				</div>
			</div>
		)
	}
}
export default Travel