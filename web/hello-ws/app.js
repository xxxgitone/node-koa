const WebSocket = require('ws');

//引用server类
const WebSocketServer = WebSocket.Server;

//实例化
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function(ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function(message) {
        console.log(`[SERVER] Receive: ${message}`);
        ws.send(`ECHD:${message}`, (err) => {
            if(err) {
                console.log(`[SERVER] error:${err}`);
            }
        })
    })
})



//客户端
let ws = new WebSocket('ws://localhost:3000/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
}
