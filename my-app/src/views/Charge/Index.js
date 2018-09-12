import React from 'react';
class Charge extends React.Component {
	render () {
		const life = {
			container: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '90vh',
				fontSize: '26px'
			}
		};
		return (
			<div style={life.container}>
				生活各类服务即将上线，将会接入各类服务，话费，水电，网费，租车，旅游团，签证等等
			</div>
		)
	}
}
export default Charge