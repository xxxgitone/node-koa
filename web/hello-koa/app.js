const Koa = require('koa');

//创建一个Koa对象表示web app 本身
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
/**
 * ctx 是由koa传入的封装了request和response的变量
 * 
 * next 是koa传入的将要处理的下一个异步函数。
 */
// app.use(async (ctx, next) => {
//     await next();

//      // 设置response的Content-Type:
//     ctx.response.type = 'text/html';

//     // 设置response的内容:
//     ctx.response.body = '<h1>hello koa2!</h1>';
// })


// koa middleware 中间件流
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); //打印url

    await next(); //调用下一个middleware
})

app.use(async (ctx, next) => {
    const start = Date.now();

    await next();

    const ms = Date.now() - start;

    console.log(`time: ${ms}`); //打印消耗时间
})

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});



app.listen(3000);
console.log('app started at port 3000...');



