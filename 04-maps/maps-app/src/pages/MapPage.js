import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
require('dotenv').config();


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const initPoint = {
    lng: -70.6410,
    lat: -33.4424,
    zoom: 11.45
}

export const MapPage = () => {

    const mapDiv = useRef();
    // const [ map, setMap ] = useState();
    const map = useRef();
    const [ coords, setCoords ] = useState(initPoint)


    useEffect(() => {
        
        const mapbox = new mapboxgl.Map({
            container: mapDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ initPoint.lng, initPoint.lat ],
            zoom: initPoint.zoom
        });
        
        map.current = mapbox;

    }, []);



    // Se dispara cuando se mueve el mapa
    useEffect(() => {

        map.current?.on('move', () => {
            const { lng, lat } = map.current.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.current.getZoom().toFixed(2),
            });
        })

    }, []);


    return (
        <>
            <div className="info">
                Lng: { coords.lng } | lat: { coords.lat } | zoom: { coords.zoom }
            </div>
            <div
                ref={ mapDiv }
                className="mapContainer"
            />
        </>
    )
}
