//crypto模块的目的是为了提供通用的加密和哈希算法

//MD5是一种常用的哈希算法，用于给任意数据一个‘签名’。这个签名通常用一个十六进制的字符串表示

const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello world!');
hash.update('Helo node!');

console.log(hash.digest('hex'));

//如果要计算SHA1，只需要把'md5'改成'sha1'
