import React from 'react';
import axios from "axios";
import {Route, Link, Switch} from 'react-router-dom';
import history from '../../common/history';
export default class TravelDetail extends React.Component {
    constructor (props) {
        super();
        this.state = {
            listData: null,
        }
    }
    componentWillMount () {
        // console.log(history);
        axios({
            method: 'post',
<<<<<<< HEAD
            url: 'http://192.168.99.54:20200/flw/detail',
=======
            url: 'http://192.168.254.103:4000/flw/detail',
>>>>>>> 9dc5374b19c8750c724064ef158b490d8c45b987
            data: {
                foodId: history.location.state.foodId
            }
        }).then((res) => {
            console.log(res);
        })
    }
    render () {
        return (
            <div>
                111111111111111
            </div>
        )
    }
}