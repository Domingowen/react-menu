import React from 'react';
import './App.css';
// import Takeout from './views/Takeout';
import 'antd/dist/antd.css';
import Home from './views/Home/Index';
import {Route, Link, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import MusicPlayer from './views/Music/MusicPlayer';
class App extends React.Component {
	render() {
		const style = {
			header: {
				textAlign: 'center',
				fontSize: '20px'
			},
			headerColor: {
				color: 'red'
			}
		};
		return (
			<div className="App" style={{position: 'reactive'}}>
				{/*<h1 style={style.header}>数据来源于互联网，如有侵权，请告知</h1>*/}
				<Route path='/' component={Home}/>
				{/*<Home/>*/}
			</div>
		);
	}
	componentDidMount () {
	}
}

export default hot(module)(App)
