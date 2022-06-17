import { Marker } from '@react-google-maps/api';
import { MarkerListProps } from '../interfaces/interface';
import vector from '../assets/pin.svg';
import '../styles/LabelMarker.scss';
import { PrintMarkersProps } from '../interfaces/interface';

const MapMarkers: React.FC<PrintMarkersProps> = ({ markersList }) => {
  const items: JSX.Element[] = [];
  markersList.map(async (marker: MarkerListProps, key: any) => {
    const { lat, lng } = marker;
    items.push(
      <Marker
        icon={{
          url: vector,
          anchor: new google.maps.Point(5, 58),
          scaledSize: new google.maps.Size(90, 42),
        }}
        key={key}
        position={{ lat, lng }}
        options={{
          label: { text: marker.locationName, className: 'label-map' },
        }}
      />
    );
  });

  return <>{items}</>;
};

export default MapMarkers;
