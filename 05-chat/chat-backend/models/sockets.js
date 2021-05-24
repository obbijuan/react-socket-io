const { checkJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            const [ valid, uid ] = checkJWT( socket.handshake.query['x-token'] );

            if ( !valid ) {
                console.log('Socket no identificado!')
                return socket.disconnect();
            }

            console.log('Cliente Conectado!', uid)

            // TODO: Validar el JWT
            // Si el token no es valido, desconectar

            // TODO: Saber que el usuario está activo mediante el UID

            // TODO: Emitir todos los usuarios conectados

            // TODO: Socket join, uid

            // TODO: Escuchar cuando el cliente manda un mensaje
            // mensaje-personal

            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconecto
            
            // TODO: Emitir todos los usuarios conectados
            socket.on('disconnect', () => {
                console.log('Cliente Desconectado!', uid)
            })
            
        
        });
    }


}


module.exports = Sockets;