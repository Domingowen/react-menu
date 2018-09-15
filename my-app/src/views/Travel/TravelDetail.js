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
            url: 'http://192.168.99.54:20200/flw/detail',
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