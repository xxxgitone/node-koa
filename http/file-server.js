const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');

//从命令行参数获取root目录，默认是当前目录
const root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

const server = http.createServer(function(request, response) {
    const reqUrl = request.url;
    // 获得URL的path  类似'/css/bootstrap.css'
    const pathname = url.parse(reqUrl).pathname;
    console.log('pathname' + pathname);

    //获取对应的本地文件路径，类似'/srv/www/css/bootstrap.css'
    const filepath = path.join(root, pathname);
    console.log('filepath' + filepath);

    // 获取文件状态
    fs.stat(filepath, function(err, stats) {
        if(!err && static.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);

            // 发送200响应:
            response.writeHead(200);

             // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);

        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);

             // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })

})

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');