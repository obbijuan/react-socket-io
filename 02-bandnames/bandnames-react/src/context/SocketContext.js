import React, { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

// Se crea un context
export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('http://localhost:8080');

    return (
        // El provider ayudará a poner información a lo largo de toda la aplicación,
        // a través de la propiedad value
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )

}