import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';


export const BandList = () => {


    const [ bands, setBands ] = useState([]);
    const { socket } = useContext( SocketContext );


    useEffect(() => {
        socket.on( 'current-bands', ( bands ) => {
            setBands( bands );
        });
        return () => socket.off( 'current-bands' );
    }, [ socket ])


    const cambioNombre = ( event, id ) => {
        const nuevoNombre = event.target.value;
        
        setBands( bands => bands.map( band =>{
            if ( band.id === id ) {
                band.name = nuevoNombre;
            }
            return band;
        }));
    }


    const onPerdioFoco = ( id, name ) => {
        socket.emit( 'cambiar-nombre-banda', { id, name });
    }


    const votar = ( id ) => {
        socket.emit( 'votar-banda', id );
    }


    const borrar = ( id ) => {
        socket.emit( 'borrar-banda', id );
    }



    const crearRows = () => {

        return(

            bands.map( band => (
                <tr key={ band.id }>
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={ () => votar( band.id) }
                        > +1 </button>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            value={ band.name }
                            onChange={ (event) => cambioNombre( event, band.id ) }
                            onBlur={ () => onPerdioFoco( band.id, band.name ) }
                        />
                    </td>
                    <td><h3> { band.votes } </h3></td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ () => borrar( band.id ) }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                    </button>
                    </td>
                </tr>
            ))

        );
    }


    return (
        <>
            <h3>Bandas Actuales</h3>

            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    { crearRows() }
                </tbody>
            </table>

        </>
    )
}
