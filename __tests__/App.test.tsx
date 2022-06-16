import { render } from '@testing-library/react';
import App from '../src/App';

describe('Testing in <App/>', () => {
  test('Should match the snapshot', () => {
    render(<App />);
  });
});
