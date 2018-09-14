import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom';
import history from './common/history';
// const history =History();
// const history = History();
ReactDOM.render(
	<Router history={history}>
		<App/>
	</Router>,
	document.getElementById('root'));
registerServiceWorker();
