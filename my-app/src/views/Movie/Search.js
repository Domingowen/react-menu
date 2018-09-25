import React from 'react';
import axios from "axios";
import { List, Card, Tabs, Input } from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import history from '../../common/history';
const TabPane = Tabs.TabPane;
const SearchInput = Input.Search;
export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div style={{width: '95%', margin: '0 auto 10px'}}>
                <SearchInput
                    placeholder="全网百万影视资源，每日急速更新，想要的全都有"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </div>
        )
    }

}