import React from 'react';
import axios from "axios";
import {Tabs} from 'antd';
import jsonp from "jsonp";
let MusicJsonCallback = (err, data) => {
	console.log(data);
	// this.setState({
	//     listData: data,
	//     totalMusic: data.TOTAL,
	//     totalPage: Math.ceil(data.TOTAL / 10),
	// });
	// console.log(this.state);
};
export default class Recommend extends React.Component {
    constructor (props) {
        super();
        this.state = {}
    }
    componentWillMount () {
        axios({
            method: 'post',
	        url: 'http://192.168.254.100:20200/music/recommend',
        }).then((res) => {
            console.log(res);
        });
	    // jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', {
		//     param: `callback=MusicJsonCallback`
	    // }, MusicJsonCallback)
    }
    render () {
        return (
            <div>我是推荐页面</div>
        )
    }
}