import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers.js';
let store = createStore(
	reducers,
	applyMiddleware(ReduxThunk)
);
export default store