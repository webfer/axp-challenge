import { render, screen} from '@testing-library/react';
import Header from '../../src/components/Header';

describe('Testing on <Header/> component', () => {

    test('should return a title in the H1 element', () => {

        const title = 'Google Search Autocomplete';
        render(<Header title={title} />);
        const expectedTitle = screen.getByText(title)

        expect(expectedTitle).toBeTruthy();
        // expect(screen.getByTestId('header__id').innerHTML).toContain(title);
        console.log(screen.getByTestId('header__id').innerHTML);
        expect(screen.getByTestId('header__id').innerHTML).toBe(title);

    });
});