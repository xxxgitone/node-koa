//以流的形式写入文件,需要不断调用write方法,以end结束
const fs = require('fs');

const ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('write stream!!! \n');
ws1.write('END');
ws1.end();

const ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('写入二进制文件 \n', 'utf-8'));
ws2.write(new Buffer('END', 'utf-8'));
ws2.end();