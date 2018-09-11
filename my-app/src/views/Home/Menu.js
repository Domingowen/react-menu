import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import history from '../../common/history';
const { Header, Content, Footer, Sider } = Layout;
// import {h} from 'react-router-dom';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_831918_ww2kfnpbc5r.js',
});
export default class SiderMenu extends React.Component {
	constructor (props) {
		super();
	}
	handleClick = (e) => {
		console.log(e);
		// console.log(this.props);
		// window.history.push(e.key);
		history.push(e.key);
	};
	logoClick = (e) => {
		history.push('/');
	};
	render() {
		// console.log(this.props);
		// console.log();
		const navStyle = {
			height: '50px',
			lineHeight: '50px',
			fontSize: '16px',
			display: 'flex',
			alignItems: 'center'
		};
		return (
			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
				<div className="logo" onClick={this.logoClick} style={{color: '#fff', fontSize: '20px', textAlign: 'center', height: '100px', lineHeight: '100px', cursor: 'pointer'}}>
					M1生活服务平台
				</div>
				<Menu theme="dark" mode="inline" selectedKeys={[history.location.pathname]} onClick={this.handleClick}>
					<Menu.Item key="/" style={navStyle}>
						<IconFont type="icon-shouye" style={{fontSize: '30px'}}/>
						<span className="nav-text">主页</span>
					</Menu.Item>
					<Menu.Item key="/takeout" style={navStyle}>
						<IconFont type="icon-_waimai" style={{fontSize: '30px'}}/>
						<span className="nav-text">外卖</span>
					</Menu.Item>
					<Menu.Item key="/travel" style={navStyle}>
						<IconFont type="icon-tubiaozhizuomoban_shatan" style={{fontSize: '30px'}}/>
						<span className="nav-text">旅游</span>
					</Menu.Item>
					<Menu.Item key="/eat" style={navStyle}>
						<IconFont type="icon-meishi" style={{fontSize: '30px'}}/>
						<span className="nav-text">美食</span>
					</Menu.Item>
					<Menu.Item key="/charge" style={navStyle}>
						<IconFont type="icon-chongzhi" style={{fontSize: '30px'}}/>
						<span className="nav-text">生活充值</span>
					</Menu.Item>
					<Menu.Item style={navStyle}>
						<IconFont type="icon-heijiao"  style={{fontSize: '30px'}}/>
						<span className="nav-text">全网音乐</span>
					</Menu.Item>
					<Menu.Item style={navStyle}>
						<IconFont type="icon-shipin"  style={{fontSize: '30px'}}/>
						<span className="nav-text">全网视频</span>
					</Menu.Item>
					<Menu.Item key="/my" style={navStyle}>
						<IconFont type="icon-gerenzhongxin"  style={{fontSize: '30px'}}/>
						<span className="nav-text">个人中心</span>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}