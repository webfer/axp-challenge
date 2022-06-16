import { GoogleMap } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import MapMarkers from './MapMarkers';
import styles from '../data/GoogleMapStyles.json';

const Map = () => {
  const { markersList, currentMarker } = useSelector(
    (state: any) => state.markers
  );
  const currentMarkerPosition =
    Object.keys(currentMarker).length === 0
      ? { lat: 41.38701458164727, lng: 2.17004518956768 }
      : currentMarker;
  return (
    <>
      <GoogleMap
        options={{
          styles: styles,
        }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={currentMarkerPosition}
        zoom={13}
      >
        <MapMarkers markersList={markersList} />
        {/* <InfoWindowMaps markersList={markersList} /> */}
      </GoogleMap>
    </>
  );
};

export default Map;
