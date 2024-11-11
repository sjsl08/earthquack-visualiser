// src/utils/Icons.js
import L from 'leaflet';

// URLs for colored marker icons
const redIconUrl =
  'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png';
const orangeIconUrl =
  'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png';
const yellowIconUrl =
  'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png';

// URL for marker shadow
const shadowUrl =
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

// Function to get custom icon based on magnitude
export const getIcon = (magnitude) => {
  let iconUrl;

  if (magnitude >= 6) {
    iconUrl = redIconUrl;
  } else if (magnitude >= 4) {
    iconUrl = orangeIconUrl;
  } else {
    iconUrl = yellowIconUrl;
  }

  return new L.Icon({
    iconUrl: iconUrl,
    iconSize: [25, 41], // Updated size to match the original Leaflet markers
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: shadowUrl,
    shadowSize: [41, 41],
  });
};
