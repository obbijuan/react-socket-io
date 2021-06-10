const { checkJWT } = require("../helpers/jwt");
const { userConnect, userDisconnect, getUsers, saveMessage } = require("../controllers/sockets");


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
            
            // Unir al usuario a una sala de socket.io
            socket.join( uid );

            // TODO: Validar el JWT
            // Si el token no es valido, desconectar

            // TODO: Saber que el usuario está activo mediante el UID

            // TODO: Emitir todos los usuarios conectados
            this.io.emit('users-list', await getUsers())

            // TODO: Socket join, uid

            // TODO: Escuchar cuando el cliente manda un mensaje
            socket.on('private-message', async(payload) => {
                const message = await saveMessage(payload);
                console.log(message);
            })

            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconecto
            
            // TODO: Emitir todos los usuarios conectados
            socket.on('disconnect', async() => {
                await userDisconnect(uid);
                // Hay que emitir la nueva lista de usuarios
                this.io.emit('users-list', await getUsers())
            })
            
        
        });
    }


}


module.exports = Sockets;