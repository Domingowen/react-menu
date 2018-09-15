import React from 'react';
import axios from "axios";
import { Layout, Menu, Icon, Input, Button} from 'antd';
import {Route, Link, Switch} from 'react-router-dom';
import history from '../../common/history';
const { TextArea } = Input;
export default class EatDetail extends React.Component {
	constructor () {
		super();
		this.state = {
			pageData: {},
			pageInfo: [],
			isReply: false,
		}
	}
	componentWillMount () {
		console.log(history);
		axios({
			method: 'post',
            url: 'http://192.168.99.54:20200/flw/detail',
			data: {
				id: history.location.state.foodId,
				boardId: 36
			}
		}).then((res) => {
			let result = res.data.data.topic;
			let info = res.data.data.topic.content;
			info.forEach(val => {
				if (/隐藏内容/.test(val.infor)) {
					this.setState({
						isReply: true
					})
				}
			});
			this.setState({
				pageData: result,
				pageInfo: info,
			});
		})
	}
	render () {
		const style= {
			container:{
				backgroundColor: '#fff',
			},
			header: {
				fontSize: '24px',
				height: '100px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderBottom: '1px solid #e8e8e8'
			},
			title: {},
			content: {
				marginTop: '10px',
				width: '1000px',
				margin: '0 auto'
			},
			text: {
				fontSize: '16px',
				paddingTop: '10px',
				textAlign: 'center',
			},
			imageList: {
				textAlign: 'center',
				marginBottom: '10px'
			},
			image: {
				width: '500px'
			},
			link: {
				textAlign: 'center'
			},
			input: {
				width: '500px',
				margin: '0 auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}
		};
		let pagecontent = this.state.pageInfo.map((val, index) => {
			if (val.type === 0) {
				return <p style={style.text} key={index}>
					{val.infor.replace(/(\[mobcent_phiz=http:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)\]?)/, '').replace(/wen645，/, '')}
				</p>
			} else if (val.type === 1) {
				return <div style={style.imageList} key={index}>
					<img src={val.originalInfo} alt="" style={style.image}/>
				</div>
			} else {
				return <div style={style.link} key={index}>
					<a href={val.infor} target="_blank">{val.infor}</a>
				</div>
			}
		});
		return (
			<div style={style.container}>
				<div style={style.header}>
					<div style={style.title}>
						{this.state.pageData.title}
					</div>
				</div>
				<div style={style.content}>
					{pagecontent}
				</div>
				{this.state.isReply ? <div style={style.input}>
					<TextArea style={{fontSize: '20px', marginBottom: '10px'}} placeholder="查看详情信息需要回复内容，但是会共享的哦" autosize={{ minRows: 3, maxRows: 10 }}/>
					<Button type="primary" style={{marginBottom: '20px'}} size='large'>提交</Button>
				</div> : null}
			</div>
		)
	}
}