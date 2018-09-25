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
					title: 'Hi 上午好'
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
			} else if (this.state.currentHours >= 9 && this.state.currentHours < 11) {
				this.setState({
					currentIndex: 1
				})
			} else if (this.state.currentHours >= 11 && this.state.currentHours < 12) {
                this.setState({
                    currentIndex: 2
                })
            } else if (this.state.currentHours >= 12 && this.state.currentHours < 18) {
				this.setState({
					currentIndex: 3
				})
			} else if (this.state.currentHours >= 18 && this.state.currentHours < 24) {
				this.setState({
					currentIndex: 4
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
				fontSize: '24px',
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
				marginTop: '10px',
				backgroundColor: '#fff',
				borderBottom: '1px solid #e8e8e8',
				padding: '10px'
			}
		};
		return (
			<div>
				<div style={container.title}>
					<span>菲哩咕生活服务平台，菲律宾首家提供视频和音乐的服务平台</span>
				</div>
				<div style={container.main}>
					<p>1、提供完善的外卖菜单服务</p>
					<p>2、众多网友分享的在菲旅游，美食</p>
					<p>3、提供充值服务商服务，涵盖你在菲所有生活需要</p>
					<p>4、全网百万音乐资源，每天最新音乐资讯推送</p>
					<p>5、全网百万影视资源，每天急速更新，绝无广告</p>
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