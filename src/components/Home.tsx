import { useJsApiLoader } from '@react-google-maps/api';
import Search from './Search';
import Map from './Map';
import { SearchBox, Maps } from '../styles/Main.styled';
import Header from './Header';

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
          { <Header title="Google Search Autocomplete" /> }
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
