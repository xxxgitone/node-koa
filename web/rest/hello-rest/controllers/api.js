//存储Product列表，相当于模拟数据库
const products = [{
    name: 'iPhone',
    price: 6999
},{
    name: 'Kindle',
    price: 999
}]

module.exports = {
    'GET /api/products': async (ctx, next) => {
        //设置Content-Type
        ctx.response.type = 'application/json';

        //设置Response Body, 以Json的数据格式返回给浏览器,在浏览器中输入http://localhost:3000/api/products
        // 便会返回:{"products":[{"name":"iPhone","price":6999},{"name":"Kindle","price":999}]}
        ctx.response.body = {
            products: products
        }
    },

    //可以通过postMan进行测试
    'POST /api/products': async (ctx, next) => {
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
}