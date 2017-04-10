//使用koa-router处理路由url

const Koa = require('koa');


//引入bodyParser
const bodyParser = require('koa-bodyparser');

const controller = require('./controllers');

const app = new Koa();

//打印请求路径
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//处理post请求的，request的body，应该在router注册之前注册
app.use(bodyParser());

//controller
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');

