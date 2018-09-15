import React from 'react';
import { List, Avatar, Icon } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
// import 'antd/dist/antd.css';
import TakeoutImageShow from './TakeoutImageShow';
class TakeoutList extends React.Component {
	constructor (props) {
		super();
		this.state = {
			listData: [],
			loading: true,
			page: 2,
			pageTotal: null,
			imagesList: [],
			isImageShow: false
		}
	}
	shouldComponentUpdate (nextProps, nextState) {
		// console.log(nextProps);
		if(this.props.listData !== nextProps.listData) {
			this.setState({
				listData: nextProps.listData,
				pageTotal: nextProps.pageTotal,
				page: 2,
				loading: true
			})
		}
		return true
	}
	loadMore () {
		if (!this.state.loading) {
			return false;
		}
		// console.log(this.state.page);
		if (this.state.page > this.state.pageTotal) {
			// this.setState({
			// 	loading: false
			// });
			return false;
		} else {
			this.setState({
				loading: !this.state.loading
			}, () => {
				axios({
					method: 'post',
					url: 'http://192.168.99.54:20200/getPagination',
					data: {
						page: this.state.page,
						classify: this.props.classify
					}
				}).then((res) => {
					this.setState({
						page: this.state.page + 1,
						listData: this.state.listData.concat(res.data.data.data),
						loading: !this.state.loading
					});
				});
			});
		}
		// console.log(this.state.page);
	}
	imagesShow (val) {
		this.setState({
			imagesList: val,
			isImageShow: true
		})
	}
	imagesClose () {
		this.setState({
			imagesList: [],
			isImageShow: false
		})
	}
	render () {
		const style= {
			list: {
				width: '95%',
				margin: '0 auto'
			}
		};
		return (
			<div style={style.list}>
				<InfiniteScroll
					pageStart={1}
					loadMore={this.loadMore.bind(this)}
					hasMore={this.state.loading}
					initialLoad={false}
					loader={<div key={0} style={{textAlign: 'center'}}>{this.state.loading ? 'Loading...' : '这是我的底线了'}</div>}
				>
					<List
						itemLayout="vertical"
						size="default"
						dataSource={this.state.listData}
						renderItem={item => (
							<List.Item
								key={item.id}
								extra={<img width={200} height={200} alt="logo" src={item.wm_pic_array[0]} />}
							>
								<List.Item.Meta
									avatar={<Avatar src={item.avatar} />}
									title={<a href="javascript:;">{item.wm_name}</a>}
									description={item.wm_desc}
								/>
								<div style={{fontSize: '16px'}}>微信: {item.wm_wechat}</div>
								<div style={{fontSize: '16px'}}>电话: {item.wm_phone ? item.wm_phone: ''}</div>
								<div style={{fontSize: '16px'}}>最低起送价: {item.wm_min_consume ? item.wm_min_consume: ''}</div>
								<div style={{fontSize: '16px'}}>送餐时间平均: 30分钟左右</div>
								<div style={{fontSize: '20px', color: 'red', cursor: 'pointer'}} onClick={this.imagesShow.bind(this, item.wm_pic_array)}>点我查看菜单</div>
							</List.Item>
						)}
					/>
				</InfiniteScroll>
				<TakeoutImageShow imagesList={this.state.imagesList} isOpen={this.state.isImageShow} closeImage={this.imagesClose.bind(this)}/>
			</div>
		)
	}
	componentDidMount () {
		axios.post('http://192.168.254.103:4000/getFoodList').then((res) => {
			this.setState({
				pageTotal: res.data.data.page_count,
				listData: res.data.data.data
			});
			// console.log(this.state.listData);
		});
	}
}
export default TakeoutList;