const {WebSocketServer} = require('ws');
const wss = new WebSocketServer({port: 8080});

console.log('Server running on port: 8080');

wss.on('connection', (socket) => {
    console.log('Connected to the server');
    socket.on('message', (data) => {
        const text =data.toString();
        console.log("Get:",text);
        wss.clients.forEach(client => {
            client.send(text);
        })
    });
    socket.on('disconnect', () => {
        console.log('Disconnected');
    })
    socket.on('message', (data) => {
        const text = data.toString();
        const time = new Date().toLocaleTimeString('uk-UA');
        const message = `[${time}] ${text}`;

        wss.clients.forEach((client) => {
            client.send(message);
        });
    });

})