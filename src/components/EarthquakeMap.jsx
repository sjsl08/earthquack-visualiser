// src/components/EarthquakeMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { getIcon } from '../utils/Icons';

const EarthquakeMap = ({ earthquakes }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <MarkerClusterGroup>
        {earthquakes.map((eq) => (
          <Marker
            key={eq.id}
            position={[
              eq.geometry.coordinates[1],
              eq.geometry.coordinates[0],
            ]}
            icon={getIcon(eq.properties.mag)}
          >
            <Popup>
              <strong>Magnitude:</strong> {eq.properties.mag} <br />
              <strong>Location:</strong> {eq.properties.place} <br />
              <strong>Depth:</strong> {eq.geometry.coordinates[2]} km <br />
              <strong>Time:</strong>{' '}
              {new Date(eq.properties.time).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EarthquakeMap;
