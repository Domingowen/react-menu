import {combineReducers} from 'redux';
import defaultState from './state';
function setUserInfo (state = {}, action) {
	switch(action.type) {
		case 'SET_USER_INFO':
			return action.data;
		default:
			return state;
	}
}
function setPlayList (state = {}, action) {
	switch(action.type) {
		case 'SET_PLAYLIST':
			return action.data;
		default:
			return state;
	}
}
export default combineReducers({
	setUserInfo,
	setPlayList,
})