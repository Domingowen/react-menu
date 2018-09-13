import React from 'react';
import SiderMenu from './Menu';
import {Route, Link, Switch } from "react-router-dom";
import Takeout from '../Takeout/Takeout';
import Today from '../Today/Index';
import Eat from '../Eat/Index';
import Travel from '../Travel/Index';
import Charge from '../Charge/Index';
import Movie from '../Movie/Index';
import Music from '../Music/Index';
import My from '../My/Index';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Home extends React.Component {
	constructor (props) {
		super();
	}
	render () {
		return (
			<Layout>
				<SiderMenu />
				<Layout style={{ marginLeft: 200 }}>
					{/*<Header style={{ background: '#ccc', padding: 0, textAlign: 'center', fontSize: '20px', position: 'fixed', zIndex: 1, width: '100%', color: 'red', height: '10vh', lineHeight: '10vh'}}>*/}
						{/*M1随手菜单改名菲哩咕生活服务平台*/}
					{/*</Header>*/}
					<Content style={{minHeight: '90vh'}}>
						<Switch>
							<Route exact path="/" component={Today}></Route>
							<Route path="/takeout" component={Takeout}></Route>
							<Route path="/travel" component={Travel}></Route>
							<Route path="/eat" component={Eat}></Route>
							<Route path="/charge" component={Charge}></Route>
							<Route path="/movie" component={Movie}></Route>
							<Route path="/music" component={Music}></Route>
							<Route path="/my" component={My}></Route>
						</Switch>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Design by 菲哩咕
					</Footer>
				</Layout>
			</Layout>
		)
	}
}
export default Home