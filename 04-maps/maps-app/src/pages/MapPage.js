import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
require('dotenv').config();


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const initPoint = {
    lng: -70.620,
    lat: -33.450,
    zoom: 11
}

export const MapPage = () => {

    const mapDiv = useRef();
    const [, setMap] = useState();


    useEffect(() => {
        
        const mapbox_lg = new mapboxgl.Map({
            container: mapDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ initPoint.lng, initPoint.lat ],
            zoom: initPoint.zoom
        });
        setMap( mapbox_lg );

    }, [])

    return (
        <>
            <div
                ref={ mapDiv }
                className="mapContainer"
            />
        </>
    )
}
