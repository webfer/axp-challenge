import { Provider } from 'react-redux';
import Home from './components/Home';
import { store } from './store/store';
import scriptLoader from 'react-async-script-loader';

import { AppProps } from './interfaces/interface';

const { REACT_APP_GOOGLE_MAP_API } = process.env;
const App = ({ isScriptLoaded, isScriptLoadSucceed }: AppProps) => {
  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div data-testid="home-page">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(App);
