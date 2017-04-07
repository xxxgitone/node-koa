const fs = require('fs');

var data = 'hello node!'

/**
 * 参数依次为文件名、数据、回调函数
 */
fs.writeFile('output.txt', data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('ok');
    }
})