//使用koa-router处理路由url

const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

//引入bodyParser
const bodyParser = require('koa-bodyparser');

const app = new Koa();

//打印请求路径
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/hello/:name', async (ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}<h1>`
})

router.get('/', async (ctx, next) => {
    const html = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;


    ctx.response.body = html;
});

//处理post请求，post通常会发送一个表单或者json，作为request的body发送，需要添加中间件koa-bodyparser获取
router.post('/signin', async (ctx, next) => {
    const name = ctx.request.body.name || '';
    const password = ctx.request.body.password || '';

    console.log(`signin with name: ${name}, password: ${password}`);

    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }

})


//处理post请求的，request的body，应该在router注册之前注册
app.use(bodyParser());

//添加router中间件
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');

