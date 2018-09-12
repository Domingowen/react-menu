import React from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
export default class Index extends React.Component {
	render () {
		const music = {
			container: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '90vh',
				fontSize: '26px'
			}
		};
		return(
			<div style={music.container}>
				由于音乐资源会占据大量的网站资源，所以我们需要等待投资到位的时候开始提供服务
			</div>
		)
	}
}