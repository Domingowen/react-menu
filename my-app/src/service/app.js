const Koa = require('koa');
const KoaRouter = require('koa-router');
const axios = require('axios');
const cors = require('koa2-cors');
const app = new Koa();
const Router = new KoaRouter();
const bodyParser = require('koa-bodyparser');
const request = require('superagent');
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
			page: reqData.page,
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
Router.post('/flw', async (ctx, next) => {
	let reqData = ctx.request.body;
	let data = await request
		.post('http://www.flw.ph//mobcent/app/web/index.php?r=forum/topiclistex')
		.send({
			imsi: 1012344748,
			latitude: '0.0',
			apphash: 65690465,
			longitude: '0.0',
			appName: '菲龙网',
			authorId: 0,
			boardId: reqData.boardId,
			egnVersion: 'v2101.5',
			forumKey: 'pamVUXChuxEWW3xrlG',
			forumType: 7,
			imei: 863254010101235,
			packageName: 'com.appbyme.app32067',
			page: reqData.page,
			pageSize: 20,
			platType: 1,
			sdkType: null,
			sdkVersion: '2.5.0.0',
			topicId: 427046,
			orderby: 'all',
			sortby: 'all',
			isImageList: 1
		})
		.set('Host', 'www.flw.ph')
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
		.then((res) => {
			// console.log(res);
			// console.log(JSON.parse(res.text))
			return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/flw/detail', async (ctx, next) => {
    let reqData = ctx.request.body;
    let data = await request
        .post('http://www.flw.ph//mobcent/app/web/index.php?r=forum/postlist')
        .send({
            imsi: 1012344748,
            latitude: '0.0',
            apphash: 65690465,
            longitude: '0.0',
            appName: '菲龙网',
            authorId: 0,
            boardId: reqData.boardId,
            egnVersion: 'v2101.5',
            forumKey: 'pamVUXChuxEWW3xrlG',
            forumType: 7,
            imei: 863254010101235,
			accessToken: '',
            packageName: 'com.appbyme.app32067',
            page: reqData.page,
            pageSize: 20,
            platType: 1,
            sdkType: null,
            sdkVersion: '2.5.0.0',
            topicId: 427046,
            orderby: 'all',
            sortby: 'all',
            isImageList: 1
        })
        .set('Host', 'www.flw.ph')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
        .then((res) => {
            // console.log(res);
            // console.log(JSON.parse(res.text))
            return JSON.parse(res.text);
        });
    return ctx.body ={
        status: 200,
        data: data
    }
});
app
	.use(Router.routes())
	.use(Router.allowedMethods());
app.listen('4000', () => {
	console.log('服务器启动成功')
});
// })();