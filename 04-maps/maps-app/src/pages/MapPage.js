import React from 'react';
import { useMapbox } from '../hooks/useMapbox';


const initPoint = {
    lng: -70.6410,
    lat: -33.4424,
    zoom: 11.45
}

export const MapPage = () => {

    const { setRef, coords } = useMapbox( initPoint );


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
