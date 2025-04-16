import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const Map = ({ cameras, onMarkerClick }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [46.6753, 24.7136],
      zoom: 11,
    });

    cameras.forEach((camera) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.backgroundColor = 'orange';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

      new mapboxgl.Marker(el)
        .setLngLat([camera.longitude, camera.latitude])
        .addTo(map)
        .getElement()
        .addEventListener('click', () => onMarkerClick(camera));
    });

    return () => map.remove();
  }, [cameras, onMarkerClick]);

  return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;