import React from 'react';
import {Menu, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios/index";
export default class TakeoutNav extends React.Component {
	constructor (props) {
		super();
		this.state = {
			classify: [
				{
					name: '全部分类',
					id: 1
				},
				{
					name: '早餐',
					id: 123
				},
				{
					name: '麻辣烫',
					id: 121
				},
				{
					name: '火锅',
					id: 119
				},
				{
					name: '烧烤',
					id: 124
				},
				{
					name: '快餐',
					id: 128
				},
				{
					name: '粉面',
					id: 132
				},
				{
					name: '卤味',
					id: 125
				},
				{
					name: '甜品',
					id: 122
				}
			],
			sort: [
				{
					name: '默认',
					id: 1
				},
				{
					name: '评分',
					id: 2
				},
				{
					name: '价格',
					id: 3
				},
				{
					name: '人气',
					id: 4
				}
			],
			address: [
				{
					name: '全部地区',
					id: 1
				},
				{
					name: 'Makati',
					id: 2
				}
			]
		}
	}
	searchHandler (value) {
		// console.log(value);

		this.props.searchMenu(value);
	}
	navClick (value) {
		console.log(value);
	}
	handleChange (value) {
		// console.log(value);
		this.props.changeClassify(value)
	}
	handleConfirm () {
		this.props.confirm();
	}
	render () {
		const Search = Input.Search;
		const Option = Select.Option;
		const style = {
			header: {},
			nav: {
				marginTop: '10px',
				display: 'flex',
				justifyContent: 'space-between'
			},
			navList: {
				display: 'flex',
				width: '100%'
			}
		};
		return (
			<div style={style.header}>
				<Search
					placeholder="输入商家或者分类"
					enterButton="Search"
					size="large"
					onSearch={this.searchHandler.bind(this)}
				/>
				<div style={style.nav}>
					<div style={style.navList}>
						{/*<Select defaultValue="全部分类" style={{ flex: 1 }} onChange={value => this.handleChange(value)}>*/}
							{/*{this.state.classify.map((val, index) => (*/}
								{/*<Option value={val.id} key={index}>{val.name}</Option>*/}
							{/*))}*/}
						{/*</Select>*/}
						{/*<Select defaultValue="全部地区" style={{ flex: 1, marginLeft: '20px'}} onChange={value => this.handleChange(value)}>*/}
							{/*{this.state.address.map((val, index) => (*/}
								{/*<Option value={val.id} key={index}>{val.name}</Option>*/}
							{/*))}*/}
						{/*</Select>*/}
						{/*<Select defaultValue="默认" style={{ flex: 1, marginLeft: '20px'}} onChange={value => this.handleChange(value)}>*/}
							{/*{this.state.sort.map((val, index) => (*/}
								{/*<Option value={val.id} key={index}>{val.name}</Option>*/}
							{/*))}*/}
						{/*</Select>*/}
					</div>
					{/*<Button type="primary" icon="search" style={{marginLeft: '30px'}} onClick={this.handleConfirm.bind(this)}>确定</Button>*/}
				</div>
			</div>
		)
	}
}