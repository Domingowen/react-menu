import React from 'react';
import './App.css';
import Takeout from './views/Takeout';

class App extends React.Component {
	render() {
		const style = {
			header: {
				textAlign: 'center',
				fontSize: '20px'
			}
		};
		return (
			<div className="App">
				<h1 style={style.header}>M1随手菜单，仅供来学习和讨论，不做盈利和他用</h1>
				<h1 style={style.header}>数据来源于互联网，如有侵权，请告知</h1>
				<Takeout/>
			</div>
		);
	}
	componentDidMount () {
	}
}

export default App;
