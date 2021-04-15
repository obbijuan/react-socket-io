const TicketList = require('./ticket-list');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado!')

            // Nombre del socket, data o payload, callback
            socket.on('request-ticket', ( data, callback ) => {
                
                const newTicket = this.ticketList.crearTicket();
                callback( newTicket );

            });
            
        
        });
    }


}


module.exports = Sockets;