export function setUserInfo (data) {
	return (dispath, getState) => {
		dispath({
			type: 'SET_USER_INFO',
			data: data,
		})
	}
}
export function setPlayList (data) {
	return (dispath, getState) => {
		dispath({
			type: 'SET_PLAYLIST',
			data: data
		})
	}
}
