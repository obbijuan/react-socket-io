import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

require('dotenv').config();
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


export const useMapbox = ( initPoint ) => {

    // Referencias al div del mapa
    const mapDiv = useRef();
    const setRef = useCallback((node) => {
        mapDiv.current = node;
    }, []);


    const map = useRef();
    const [ coords, setCoords ] = useState( initPoint );


    useEffect(() => {
        
        const mapbox = new mapboxgl.Map({
            container: mapDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ initPoint.lng, initPoint.lat ],
            zoom: initPoint.zoom
        });
        
        map.current = mapbox;

    }, [ initPoint ]);



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


    return {
        coords,
        setRef
    }
}
