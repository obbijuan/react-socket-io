import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';

require('dotenv').config();
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


export const useMapbox = ( initPoint ) => {

    // Referencias al div del mapa
    const mapDiv = useRef();
    const setRef = useCallback((node) => {
        mapDiv.current = node;
    }, []);


    const objMarkers = useRef({});

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


    // Agregar marcadores al hacer click
    useEffect(() => {

        map.current?.on('click', (ev) => {
            const { lng, lat } = ev.lngLat;
            const marker = new mapboxgl.Marker();

            marker.id = v4();
            marker
                .setLngLat([lng, lat])
                .addTo( map.current )
                .setDraggable( true );

            objMarkers.current[ marker.id ] = marker;
            console.log(objMarkers.current)
        })

    }, [])

    return {
        coords,
        objMarkers,
        setRef
    }
}
