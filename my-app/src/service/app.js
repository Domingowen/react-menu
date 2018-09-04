const Koa = require('koa');
const KoaRouter = require('koa-router');
const axios = require('axios');
const cors = require('koa2-cors');
const app = new Koa();
const Router = new KoaRouter();
const bodyParser = require('koa-bodyparser');
app.use(cors());
app.use(bodyParser());
// (async () => {
Router.post('/getFoodList', async (ctx, next) => {
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: 1,
			city_id: '',
			class_id: '',
			order: '',
			sear_name: '',
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body = {
		status: 200,
		data: data
	}
});
Router.post('/getPagination', async (ctx, next) => {
	console.log(ctx.request.body);
	let reqData = ctx.request.body;
	// console.log(ctx.res);
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: reqData.page,
			city_id: '',
			class_id: '',
			order: '',
			sear_name: '',
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/searchFood', async (ctx, next) => {
	let reqData = ctx.request.body;
	// console.log(ctx.res);
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: '',
			city_id: '',
			class_id: reqData.classify,
			order: '',
			sear_name: '',
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/searchMenu', async (ctx, next) => {
	// console.log(ctx);
	let reqData = ctx.request.body;
	// console.log(reqData);
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: reqData.page,
			city_id: '',
			class_id: '',
			order: '',
			sear_name: reqData.search,
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(1111);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body ={
		status: 200,
		data: data
	}
});
app
	.use(Router.routes())
	.use(Router.allowedMethods());
app.listen('8888', () => {
	console.log('服务器启动成功')
});
// })();