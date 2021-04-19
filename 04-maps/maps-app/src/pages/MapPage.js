import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useMapbox } from '../hooks/useMapbox';


const initPoint = {
    lng: -70.6410,
    lat: -33.4424,
    zoom: 11.45
}

export const MapPage = () => {

    const { setRef, coords, newMarker$, markerMovement$, addMarker } = useMapbox( initPoint );
    const { socket } = useContext(SocketContext);


    // Escuchar los marcadores existentes
    useEffect(() => {
        socket.on( 'marker-actives', (marker) => {
            for( const key of Object.keys( marker ) ) {
                addMarker( marker[key], key );
            }
        });
    }, [ socket, addMarker ])


    // Nuevo marcador
    useEffect(() => {
        
        newMarker$.subscribe(marker => {
            socket.emit('marker-new', marker);
        });

    }, [newMarker$, socket])


    // Movimiento de Marcador
    useEffect(() => {
        markerMovement$.subscribe( marker => {
            console.log(marker.id);
        });
    }, [markerMovement$]);


    // Escuchar nuevos marcadores
    useEffect(() => {
        socket.on('marker-new', (marker) => {
            console.log(marker);
        });
    }, [socket]);


    return (
        <>
            <div className="info">
                Lng: { coords.lng } | lat: { coords.lat } | zoom: { coords.zoom }
            </div>
            <div
                ref={ setRef }
                className="mapContainer"
            />
        </>
    )
}
