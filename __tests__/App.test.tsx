import { render } from '@testing-library/react';
import App from '../src/App';

describe('Testing in <App/>', () => {
  test('Should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
