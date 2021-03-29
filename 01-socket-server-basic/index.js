// Servidor de Express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Desplegar el directorio publico
app.use( express.static( __dirname + '/public' ) )

// Configuracion del socket server
const io = require('socket.io')(server);

io.on('connection', ( socket ) => {
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server!',
        date: new Date()
    })
});

server.listen(8080, () => {
    console.log('Running Server on port 8080!');
});