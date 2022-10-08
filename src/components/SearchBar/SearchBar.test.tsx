import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';

describe('Given a SearchBar component', () => {
	describe('When it receives a function, the user types and the form is submitted', () => {
		test('Then it should call the received function with the text written', () => {
			const setRequestURLMock: Dispatch<SetStateAction<string>> = jest.fn();
			const nameToSearch = 'Morty';
			const urlRequest = `https://rickandmortyapi.com/api/character/?name=${nameToSearch}`;

			render(<SearchBar setRequestURL={setRequestURLMock} />);

			const button = screen.getByRole('button');
			const label = screen.getByLabelText('Search');

			userEvent.type(label, nameToSearch);
			userEvent.click(button);

			expect(setRequestURLMock).toHaveBeenCalledWith(urlRequest);
		});
	});
});
