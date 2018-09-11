import React from 'react';
import Lightbox from 'react-images';
export default class TakeoutImageShow extends React.Component {
	constructor (props) {
		super();
		this.state = {
			// isOpen: false,
			currentImage: 0,
			imgList: []
		}
	}
	closeImage () {
		this.props.closeImage();
		this.setState({
			currentImage: 0
		})
	}
	nextImage () {
		this.setState({
			currentImage: this.state.currentImage + 1
		})
	}
	prevImage () {
		this.setState({
			currentImage: this.state.currentImage - 1
		})
	}
	thumbnailImage (e) {
		// console.log(e);
		this.setState({
			currentImage: e
		})
	}
	// componentDidMount () {
	// 	this.setState({
	// 		isOpen: this.props.isOpen
	// 	});
	// }
	// componentDidUpdate () {

	// }
	// shouldComponentUpdate (nextProps, nextState) {
		// console.log(nextProps);
		// console.log(nextState);
		// if(this.props !== nextProps) {
		// 	this.setState({
		// 		isOpen: this.props.isOpen
		// 	});
		// 	return true;
		// }
	// }
	render() {
		let arrList = [];
		this.props.imagesList.map((val, index) => {
			arrList.push({src: val, thumbnail: val})
		});
		// console.log(arrList);
		if (arrList) {
			return (
				<Lightbox
					images={arrList}
					isOpen={this.props.isOpen}
					onClose={this.closeImage.bind(this)}
					onClickNext={this.nextImage.bind(this)}
					onClickPrev={this.prevImage.bind(this)}
					onClickThumbnail={this.thumbnailImage.bind(this)}
					currentImage={this.state.currentImage}
					showThumbnails={true}
				/>
			)
		}
	}
}