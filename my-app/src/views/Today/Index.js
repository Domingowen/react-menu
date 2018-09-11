import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_ww2kfnpbc5r.js',
});
class Today extends React.Component {
	constructor (props) {
		super();
		this.state = {
			currentHours: 0,
			currentStatus: [
				{
					icon: 'icon-richu',
					title: 'Hi 早上好'
				},
				{
					icon: 'icon-taiyang-copy',
					title: 'Hi 中午好'
				},
				{
					icon: 'icon-tianqi-duoyun',
					title: 'Hi 下午好'
				},
				{
					icon: 'icon-yewan',
					title: 'Hi 晚上好'
				}
			],
			currentIndex: 0
		}
	}
	componentWillMount () {
		this.setState({
			currentHours: new Date().getHours()
		}, () => {
			if ( this.state.currentHours >= 0 && this.state.currentHours < 9) {
				this.setState({
					currentIndex: 0
				})
			} else if (this.state.currentHours >= 9 && this.state.currentHours < 12) {
				this.setState({
					currentIndex: 1
				})
			} else if (this.state.currentHours >= 12 && this.state.currentHours < 18) {
				this.setState({
					currentIndex: 2
				})
			} else if (this.state.currentHours >= 18 && this.state.currentHours < 24) {
				this.setState({
					currentIndex: 3
				})
			}
		})
	}
	_renderHeader = () => {
		const header = {
			container: {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#fff',
				paddingLeft: '20px',
				borderBottom: '1px solid #e8e8e8'
			},
			icon: {
				fontSize: '120px'
			},
			title: {
				fontSize: '30px',
				marginLeft: '20px'
			}
		};
		// console.log(this.state.currentHours);
		return (
			<div style={header.container}>
				<IconFont type={this.state.currentStatus[this.state.currentIndex].icon} style={header.icon}/>
				<span style={header.title}>{this.state.currentStatus[this.state.currentIndex].title}</span>

			</div>
		)
	};
	_renderContainer () {
		const container = {
			title: {
				fontSize: '30px',
				// textAlign: 'center',
				backgroundColor: '#fff',
				minHeight: '100px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				// lineHeight: '100px',
				marginTop: '10px',
				borderBottom: '1px solid #e8e8e8',
				padding: '0 10px'
			},
			main: {
				marginTop: '10px',
				padding: '20px',
				fontSize: '20px',
				// textAlign: 'center',
				backgroundColor: '#fff',
				borderBottom: '1px solid #e8e8e8'
			},
			statement: {
				fontSize: '20px',
				textAlign: 'center',
			}
		};
		return (
			<div>
				<div style={container.title}>
					<span>小公告：我们改名字啦，M1生活服务平台(*^▽^*)~~即将提供外网服务~~菲律宾首家提供视频和音乐的服务平台</span>
				</div>
				<div style={container.main}>
					<p>1、提供完善的外卖菜单服务</p>
					<p>2、接入旅游，美食</p>
					<p>3、提供充值服务商服务</p>
					<p>4、将会提供全球的音乐（预计仅限外网）</p>
					<p>5、将会提供全面的视频（预计仅限外网）</p>
				</div>
				<div style={container.statement}>
					<p>数据源于互联网，我们将会对所有的数据标明来源，我们接受任何一方提供资金支持，以便维持网站正常运行开支，但我们不以营利为目的</p>
				</div>
			</div>
		)
	}
	render () {
		return (
			<div>
				{this._renderHeader()}
				{this._renderContainer()}
			</div>
		)
	}
}
export default Today