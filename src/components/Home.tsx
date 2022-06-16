import { useJsApiLoader } from '@react-google-maps/api';
import Search from './Search';
import Map from './Map';
import { SearchBox, Maps } from '../styles/Main.styled';
//import './mapScreen.scss';

const Home = () => {
  const googleApiKey: string = process.env.REACT_APP_GOOGLE_MAP_API || '';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey,
  });

  return (
    <Maps>
      {isLoaded && (
        <>
          <SearchBox>
            <Search />
          </SearchBox>

          <Map />
        </>
      )}
    </Maps>
  );
};

export default Home;
