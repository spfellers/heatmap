const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    setInterval(() => {
        const x = Math.random(100);
        const y = Math.random(100);
        const resp = { lat: x, long: y };
        ws.send(JSON.stringify(resp));
    }, 500);
});
