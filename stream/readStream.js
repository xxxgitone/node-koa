//从文件流读取文本内容

const fs = require('fs');

// 打开一个流
const rs = fs.createReadStream('simple.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA');
    console.log(chunk);
})

rs.on('end', function() {
    console.log('END');
})

rs.on('error', function(err) {
    console.log('ERROR' + err);
})

//data可能执行多次，每次传入的chunk是流的一部分