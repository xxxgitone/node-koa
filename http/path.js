//处理本地文件目录需要使用path模块，可以方便地构造目录

const path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); //  node-koa/http

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');

console.log(filePath); ////  node-koa/http/public/index.html