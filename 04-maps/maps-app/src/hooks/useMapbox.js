import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';

require('dotenv').config();
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


export const useMapbox = ( initPoint ) => {

    // Referencias al div del mapa
    const mapDiv = useRef();
    const setRef = useCallback((node) => {
        mapDiv.current = node;
    }, []);


    const objMarkers = useRef({});

    // Observables de Rxjs
    const markerMovement = useRef( new Subject() );
    const newMarker = useRef( new Subject() );

    const map = useRef();
    const [ coords, setCoords ] = useState( initPoint );
    

    // Funcion para agregar marcadores
    const addMarker = useCallback((ev, id) => {

        const { lng, lat } = ev.lngLat || ev;
        const marker = new mapboxgl.Marker();

        marker.id = id || v4();
        marker
            .setLngLat([ lng, lat ])
            .addTo( map.current )
            .setDraggable( true );

        objMarkers.current[ marker.id ] = marker;

        if ( !id ) {
            newMarker.current.next({
                id: marker.id,
                lng, 
                lat
            })
        }
        
        // Movimientos del marcador
        marker.on('drag', ({ target }) => {
            const { id } = target;
            const { lng, lat } = target.getLngLat();
            markerMovement.current.next({ id, lng, lat });

        })

    },[])


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

        map.current?.on('click', addMarker );

    }, [addMarker])



    return {
        addMarker,
        coords,
        objMarkers,
        newMarker$: newMarker.current,
        markerMovement$: markerMovement.current,
        setRef
    }
}
