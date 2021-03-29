// Servidor de Express
const app = require('express')();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

io.on('connection', () => { /* … */ });

server.listen(8080, () => {
    console.log('Running Server on port 8080!');
});