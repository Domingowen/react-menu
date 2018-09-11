import React from 'react';
import './App.css';
// import Takeout from './views/Takeout';
import 'antd/dist/antd.css';
import Home from './views/Home/Index';
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
			<div className="App">
				{/*<h1 style={style.header}>数据来源于互联网，如有侵权，请告知</h1>*/}
				<Home/>
			</div>
		);
	}
	componentDidMount () {
	}
}

export default App;
