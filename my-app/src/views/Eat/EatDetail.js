import React from 'react';
import axios from "axios";
import {Route, Link, Switch} from 'react-router-dom';
import history from '../../common/history';
export default class EatDetail extends React.Component {
	componentWillMount () {
		console.log(history);
		axios({
			method: 'post',
            url: 'http://192.168.99.54:4000/flw/detail',
			data: {
				id: history.location.state.foodId,
				boardId: 36
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