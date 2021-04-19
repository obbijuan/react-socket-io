const Markers = require('./markers');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.markers = new Markers();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            

            socket.emit('marker-actives', this.markers.actives);
            

            socket.on('marker-new', (marker) => {
                this.markers.addMarker(marker);
                // Emite a todos los clientes
                socket.broadcast.emit('marker-new', marker);
            });

            
            socket.on('marker-update', (marker) => {
                this.markers.updateMarker(marker);
                // Emite a todos los clientes
                socket.broadcast.emit('marker-update', marker);
            });
        
        });
    }


}


module.exports = Sockets;