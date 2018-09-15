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
				音乐将会近期上线
			</div>
		)
	}
}