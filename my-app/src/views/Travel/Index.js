import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import axios from 'axios';
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_ww2kfnpbc5r.js',
});
class Travel extends React.Component {
	constructor (props) {
		super();
	}
	componentWillMount () {
		axios({
			method: 'post',
			url: 'http://192.168.72.161:4000/travel',
			data: {
				boardId: 36,
				page: 1
			}
		}).then((res) => {
			console.log(res);
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

				</div>
			</div>
		)
	}
}
export default Travel