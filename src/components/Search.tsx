import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { useDispatch } from 'react-redux';
import { addMarkerList, saveCurrentSearch } from '../actions/markers';
import { getLatAndLng } from '../helpers/getLatAndLng';
import { MarkerListProps, SearchProps } from '../interfaces/interface';

import '../styles/Global.scss';

// Google serach component 
const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatAndLng(results[0]);
            const marker: MarkerListProps = {
              lat,
              lng,
              locationName: results[0].formatted_address,
            };
            dispatch(saveCurrentSearch({ lat, lng }));
            dispatch(addMarkerList(marker));
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ top: '0', right: '0' }}
          disabled={!ready}
          placeholder="Search address..."
        />
        <ComboboxPopover className="pac-container">
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ description, place_id }: any) => (
                <ComboboxOption value={description} key={place_id} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
