import React from 'react';
import axios from "axios";
import EatList from './EatList';
import EatDetail from './EatDetail';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import history from '../../common/history';
class Eat extends React.Component {
    constructor (props) {
        super();
        this.state = {
        	listData: [],
	        totalData: null,
	        totalPage: null,
	        loading: true,
	        page: 1,
		}
    }
    componentWillMount () {
    	console.log(this.props);
    	console.log(history);
        axios({
            method: 'post',
            url: 'http://192.168.99.54:4000/flw',
            data: {
                boardId: 36,
                page: 1
            }
        }).then((res) => {
	        let list = res.data.data.list.filter(val => {
		        if (val.imageList.length > 0) {
			        return val;
		        }
	        });
	        let totalData = res.data.data.total_num;
	        let totalPage = Math.ceil(totalData / 20);
	        this.setState({
		        listData: list,
		        totalData: totalData,
		        totalPage: totalPage
	        });
        })
    }
    loadMore () {
	    if (this.state.page > this.state.totalPage) {
		    this.setState({
			    loading: false
		    });
		    return false;
	    } else {
		    this.setState({
			    page: this.state.page + 1,
			    loading: false
		    }, () => {
			    axios({
				    method: 'post',
				    url: 'http://192.168.99.54:4000/flw',
				    data: {
					    boardId: 36,
					    page: this.state.page
				    }
			    }).then((res) => {
				    let list = res.data.data.list.filter(val => {
					    if (val.imageList.length > 0) {
						    return val;
					    }
				    });
				    this.setState({
					    listData: this.state.listData.concat(list),
					    loading: true
				    })
			    })
		    });
	    }
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
                    {/*<Switch>*/}
                    {/*<Router component={EatDetail}/>*/}
	                {/*<Router path='/detail'/>*/}
	                {/*</Switch>*/}
	                <Route path='/eat/detail' component = {EatDetail}/>
					<Route exact path='/eat' component={() => {
                        return <EatList
                            listData={this.state.listData}
                            loadMore={this.loadMore.bind(this)}
                            loading={this.state.loading}
                        />
					}}/>
	                {/*<EatList*/}
                        {/*listData={this.state.listData}*/}
                        {/*loadMore={this.loadMore.bind(this)}*/}
                        {/*loading={this.state.loading}*/}
	                {/*/>*/}
                </div>
            </div>
        )
    }
}
export default Eat