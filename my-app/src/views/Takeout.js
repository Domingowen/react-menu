import React, {Component} from 'react';
import TakeoutList from './TakeoutList';
// import TakeoutDetail from './TakeoutDetail';
import TakeoutNav from './TakeoutNav';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Takeout extends React.Component {
	constructor (props) {
		super();
		this.state = {
			classify: null,
			listData: []
		}
	}
	selectClassify (val) {
		console.log(val);
		this.setState({
			classify: val
		})
	}
	searchMenu (val) {
		console.log(val);
		if (val) {
			axios({
				method: 'post',
				url: 'http://192.168.99.54:8888/searchMenu',
				data: {
					search: val,
					page: 1
				}
			}).then((res) => {
				console.log(res);
				this.setState({
					listData: res.data.data.data
				})
			});
		} else {
			axios({
				method: 'post',
				url: 'http://192.168.99.54:8888/searchMenu',
				data: {
					page: 1
				}
			}).then((res) => {
				console.log(res);
				this.setState({
					listData: res.data.data.data
				})
			});
		}
	}
	confirmSelect () {
		axios({
			method: 'post',
			url: 'http://192.168.99.54:8888/searchFood',
			data: {
				classify: this.state.classify
			}
		}).then((res) => {
			console.log(res);
			// this.setState({
			// 	listData: res.data.data.data
			// })
		})
	}
	loadMore () {

	}
	render () {
		const container = {
			padding: 10,
		};
		return (
			<div style={container}>
				<TakeoutNav changeClassify={this.selectClassify} searchMenu={this.searchMenu.bind(this)} confirm={this.confirmSelect}/>
				<TakeoutList listData={this.state.listData}/>
				{/*<TakeoutDetail/>*/}
			</div>
		)
	}
	componentDidMount () {}
}
export default Takeout;