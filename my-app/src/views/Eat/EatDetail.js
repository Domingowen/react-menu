import React from 'react';
import axios from "axios";
import {Route, Link, Switch} from 'react-router-dom';
import history from '../../common/history';
export default class EatDetail extends React.Component {
	componentWillMount () {
		console.log(history);
		axios({
			method: 'post',
            url: 'http://192.168.254.103:4000/flw/detail',
			data: {
				foodId: history.location.state.foodId
			}
		}).then((res) => {
			console.log(res);
		})
	}
	render () {
		return (
			<div>
				111111111111111
			</div>
		)
	}
}