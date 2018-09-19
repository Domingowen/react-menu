import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Sticky, StickyContainer} from "react-sticky";
import {Tabs} from "antd";
import List from "../Fiction/List";
// import TV from "../Movie/TV";
// import Shows from "../Movie/Shows";
// import Cartoon from "../Movie/Cartoon";
// import AmericanTV from "../Movie/AmericanTV";
// import Candid from "../Movie/Candid";
const TabPane = Tabs.TabPane;
export default class Index extends React.Component{
	constructor (props) {
		super();
		this.state = {
			activePage: 'list'
		}
	}
	handleChange (e) {
		console.log(e);
		this.setState({
			activePage: e
		})
	}
	componentWillMount () {

	}
	render () {
		const movie = {
			container: {
				backgroundColor: '#fff',
				height: '90vh',
			},
			tabList: {
				paddingLeft: '10px',
				paddingRight: '10px',
			}
		};
		const renderTabBar = (props, DefaultTabBar) => (
			<Sticky bottomOffset={0}>
				{({ style }) => (
					<DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff',height: '50px', fontSize: '20px', borderBottom: 'none' }} />
				)}
			</Sticky>
		);
		return(
			<div style={movie.container}>
				<StickyContainer>
					<Tabs
						defaultActiveKey={this.state.activePage}
						activeKey={this.state.activePage}
						onChange={this.handleChange.bind(this)}
						size='large'
						renderTabBar={renderTabBar}
						style={movie.tabList}
					>
						<TabPane tab="书城" key="list">
							<List/>
						</TabPane>
						<TabPane tab="阅读历史" key="history">
							<List/>
						</TabPane>
						{/*<TabPane tab="电视剧" key="tv">*/}
							{/*/!*<TV/>*!/*/}
						{/*</TabPane>*/}
						{/*<TabPane tab="综艺" key="shows">*/}
							{/*/!*<Shows/>*!/*/}
						{/*</TabPane>*/}
					</Tabs>
				</StickyContainer>
			</div>
		)
	}
}