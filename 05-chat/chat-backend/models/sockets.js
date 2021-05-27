const { checkJWT } = require("../helpers/jwt");
const { userConnect, userDisconnect, getUsers } = require("../controllers/sockets");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {

            const [ valid, uid ] = checkJWT( socket.handshake.query['x-token'] );

            if ( !valid ) {
                console.log('Socket no identificado!');
                return socket.disconnect();
            }

            const user = await userConnect(uid);
            console.log('Se conectó', user.nombre)

            // TODO: Validar el JWT
            // Si el token no es valido, desconectar

            // TODO: Saber que el usuario está activo mediante el UID

            // TODO: Emitir todos los usuarios conectados
            this.io.emit('users-list', await getUsers())

            // TODO: Socket join, uid

            // TODO: Escuchar cuando el cliente manda un mensaje
            // mensaje-personal

            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconecto
            
            // TODO: Emitir todos los usuarios conectados
            socket.on('disconnect', async() => {
                const user = await userDisconnect(uid);
                console.log(`El usuario ${user.nombre} se desconectó!`)
            })
            
        
        });
    }


}


module.exports = Sockets;