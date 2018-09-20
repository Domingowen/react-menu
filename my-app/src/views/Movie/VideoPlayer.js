import React from 'react';
import axios from "axios";
import ReactPlayer from 'react-aplayer';
export default class VideoPlayer extends React.Component {
	constructor (props) {
		super();
	}
	render () {
		return (
			<div>
				<ReactPlayer/>
			</div>
		)
	}
	componentWillMount () {}
	play () {}
	pause () {}
	next () {}
	prev () {}
}