var fs = require('fs');

var rs = fs.createReadStream('simple.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);

//pipe把一个文件流和另外一个文件流串起来，这样源文件设为数据自动写入到目标文件中，实际上就是一个文件复制的过程