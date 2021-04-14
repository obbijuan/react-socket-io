const Ticket = require('./ticket');

class TicketList {

    constructor() {

        this.ultimoNumero = 0;

        this.pendientes = [];
        this.asignados = [];
        
    }

    get siguienteNumero() {
        return this.ultimoNumero++;
    }

    // 3 que se verán en las tarjetas y 10 en el historial
    get ultimos13() {
        return this.asignados.slice(0,13);
    }

    crearTicket() {
        const nuevoTicket = new Ticket( this.siguienteNumero );
        this.pendientes.push( nuevoTicket );
        return nuevoTicket;
    }

    asignarTicket( agent, desk ) {

        if ( this.pendientes.length === 0 ) {
            return null;
        }

        const siguienteTicket = this.pendientes.shift();

        siguienteTicket.agent = agent;
        siguienteTicket.desk = desk;

        this.asignados.unshift( siguienteTicket );

        return siguienteTicket;
    }


}


module.exports = TicketList;