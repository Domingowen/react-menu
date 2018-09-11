import React from 'react';
import axios from "axios";
import EatList from './EatList';
class Eat extends React.Component {
    constructor (props) {
        super();
        this.state = {
        	listData: []
		}
    }
    componentWillMount () {
        axios({
            method: 'post',
            url: 'http://192.168.254.103:4000/travel',
            data: {
                boardId: 36,
                page: 1
            }
        }).then((res) => {
            console.log(res.data.data.list);
            this.setState({
                listData: res.data.data.list
            })
        })
    }
    loadMore () {
        console.log('加载更多~')
    }
    render () {
        const eat = {
            title: {},
            header: {},
            list: {}
        };
        return (
            <div>
                <div style={eat.header}>
                </div>
                <div style={eat.list}>
                    <EatList
                        listData={this.state.listData}
                        loadMore={this.loadMore.bind(this)}
                    />
                </div>
            </div>
        )
    }
}
export default Eat