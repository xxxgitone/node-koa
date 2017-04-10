module.exports = {
    'POST /signin': async (ctx, next) => {
        const email = ctx.request.body.email || '';
        const password = ctx.request.body.password || '';

        if(email === 'admin@example.com' && password === '123456') {
            //登录成功
            ctx.render('signin-ok.html', {
                title: 'Sign In Ok',
                name: 'MR node'
            });
        } else {
            ctx.render('signin-failed.html', {
                title: 'Sign In failed'
            })
        }
    }
}