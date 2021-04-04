const BandList = require('./band-list');


class Sockets {

    constructor( io ) {
        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            
            console.log('Cliente conectado');
            // Emitir al cliente conectado, todas las bandas actuales.
            socket.emit( 'current-bands', this.bandList.getBands() );
            
            // votar por la banda
            socket.on('votar-banda', (id) => {
                this.bandList.increaseVotes(id);
                // this.io: Emite a todos los clientes conectados
                this.io.emit( 'current-bands', this.bandList.getBands() );
            });

            // borrar una banda
            socket.on('borrar-banda', (id) => {
                this.bandList.removeBand(id);
                // this.io: Emite a todos los clientes conectados
                this.io.emit( 'current-bands', this.bandList.getBands() );
            });
            
            // Actualizar una banda
            socket.on('cambiar-nombre-banda', ({ id, name }) => {
                this.bandList.changeName(id, name);
                // this.io: Emite a todos los clientes conectados
                this.io.emit( 'current-bands', this.bandList.getBands() );
            });
            
            // crear una banda
            socket.on('crear-banda', ({ name }) => {
                this.bandList.addBand(name);
                // this.io: Emite a todos los clientes conectados
                this.io.emit( 'current-bands', this.bandList.getBands() );
            });

        });
    }
}


module.exports = Sockets;