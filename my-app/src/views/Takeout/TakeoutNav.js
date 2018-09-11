import React from 'react';
import {Menu, Input, Select, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios/index";
// import {Icon} from "antd/lib/index";
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_2ha83kp5en9.js',
});
export default class TakeoutNav extends React.Component {
	constructor (props) {
		super();
		this.state = {
			classify: [
				{
					name: '全部分类',
					id: '',
					icon: 'icon-quanbu'
				},
				{
					name: '早餐',
					id: 123,
					icon: 'icon-zhongcan'
				},
				{
					name: '麻辣烫',
					id: 121,
					icon: 'icon-hanbao'
				},
				{
					name: '火锅',
					id: 119,
					icon: 'icon-huoguo'
				},
				{
					name: '烧烤',
					id: 124,
					icon: 'icon-kaochuan'
				},
				{
					name: '快餐',
					id: 128,
					icon: 'icon-xican'
				},
				{
					name: '粉面',
					id: 132,
					icon: 'icon-mianguan'
				},
				{
					name: '卤味',
					id: 125,
					icon: 'icon-pisa'
				},
				{
					name: '甜品',
					id: 122,
					icon: 'icon-tianpin'
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
			},
			navIcon: {
				display: 'flex',
				width: '100%',
				backgroundColor: '#fff',
				borderBottom: '1px solid #e8e8e8'
			},
			iconContainer: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				padding: '20px 0',
				flex: 1
			},
			icon: {
				fontSize: '35px',
				cursor: 'pointer',
				paddingBottom: '10px',
			}
		};
		// let Li = ;
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
						<ul style={style.navIcon}>
							{this.state.classify.map((val, index) =>
								<li key={index} onClick={this.handleChange.bind(this, val.id)} style={style.iconContainer}>
									<IconFont type={val.icon} style={style.icon}/>
									<span>{val.name}</span>
								</li>
							)}
						</ul>
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