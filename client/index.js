console.log('Starting client...');

const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = message => {
    console.log('got message:', JSON.parse(message.data));
};

ws.onclose = message => {
    console.log('got close message:', message);
};

ws.onerror = message => {
    console.log('got error message:', message);
};
