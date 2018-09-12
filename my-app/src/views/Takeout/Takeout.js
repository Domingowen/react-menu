import React, {Component} from 'react';
import TakeoutList from './TakeoutList';
// import TakeoutDetail from './TakeoutDetail';
import TakeoutNav from './TakeoutNav';
import axios from 'axios';
class Takeout extends React.Component {
	constructor (props) {
		super();
		this.state = {
			classify: null,
			listData: [],
			page: null,
			pageTotal: null,
		}
	}
	selectClassify (val) {
		this.setState({
			classify: val
		}, this.confirmSelect)
	}
	searchMenu (val) {
		if (val) {
			axios({
				method: 'post',
				url: 'http://192.168.99.54:4000/searchMenu',
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
				url: 'http://192.168.99.54:4000/searchMenu',
				data: {
					page: 1
				}
			}).then((res) => {
				this.setState({
					listData: res.data.data.data
				})
			});
		}
	}
	confirmSelect () {
		axios({
			method: 'post',
			url: 'http://192.168.99.54:4000/searchFood',
			data: {
				page: 1,
				classify: this.state.classify
			}
		}).then((res) => {
			console.log(res);
			this.setState({
				listData: res.data.data.data,
				pageTotal: res.data.data.page_count,
			})
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
				<TakeoutNav changeClassify={this.selectClassify.bind(this)} searchMenu={this.searchMenu.bind(this)} confirm={this.confirmSelect}/>
				<TakeoutList listData={this.state.listData} classify={this.state.classify} pageTotal={this.state.pageTotal}/>
				{/*<TakeoutDetail/>*/}
			</div>
		)
	}
	componentDidMount () {}
}
export default Takeout;