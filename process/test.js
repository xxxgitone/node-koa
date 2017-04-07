//process对象表示node.js进程
//nextTick可以在下一次事件响应中执行代码
process.nextTick(function() {
    console.log('next');
})

console.log('first');

//fisrt
// next