import React, { useEffect } from 'react';
import { useMapbox } from '../hooks/useMapbox';


const initPoint = {
    lng: -70.6410,
    lat: -33.4424,
    zoom: 11.45
}

export const MapPage = () => {

    const { setRef, coords, newMarker$ } = useMapbox( initPoint );

    useEffect(() => {
        
        newMarker$.subscribe( marker => {
            console.log(marker);
        })

    }, [newMarker$])


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
