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
<<<<<<< HEAD
				url: 'http://192.168.99.54:20200/searchMenu',
=======
				url: 'http://192.168.254.103:4000/searchMenu',
>>>>>>> 9dc5374b19c8750c724064ef158b490d8c45b987
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
<<<<<<< HEAD
				url: 'http://192.168.99.54:20200/searchMenu',
=======
				url: 'http://192.168.254.103:4000/searchMenu',
>>>>>>> 9dc5374b19c8750c724064ef158b490d8c45b987
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
<<<<<<< HEAD
			url: 'http://192.168.99.54:20200/searchFood',
=======
			url: 'http://192.168.254.103:4000/searchFood',
>>>>>>> 9dc5374b19c8750c724064ef158b490d8c45b987
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