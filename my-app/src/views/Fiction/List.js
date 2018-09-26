import React from 'react';
import axios from "axios";
import {Tabs, List, Avatar, Button, Skeleton } from 'antd';
export default class VList extends React.Component {
	constructor () {
		super();
		this.state = {}
	}
	componentWillMount () {
		axios({
			method: 'post',
			url: 'http://192.168.254.100:20200/fiction/list',
		}).then((res) => {
			console.log(res)
		})
	}
	render () {
		return (
			<div>
				小说将会全面上线
			</div>
		)
	}
}