import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';

describe('Given a SearchBar component', () => {
	describe('When it receives a function, the user types and the form is submitted', () => {
		// test('Then it should call the received function with the text written', () => {
		// 	const setRequestURLMock: Dispatch<SetStateAction<string>> = jest.fn();
		// 	const setCurrentPageMock: Dispatch<SetStateAction<number>> = jest.fn();
		// 	const nameToSearch = 'Morty';
		// 	const urlRequest = `${process.env.REACT_APP_API_URL}?name=${nameToSearch}`;
		// 	render(<SearchBar setRequestURL={setRequestURLMock} setCurrentPage={setCurrentPageMock} />);
		// 	const button = screen.getByRole('button');
		// 	const label = screen.getByLabelText('Search');
		// 	userEvent.type(label, nameToSearch);
		// 	userEvent.click(button);
		// 	expect(setCurrentPageMock).toHaveBeenCalledWith(1);
		// 	expect(setRequestURLMock).toHaveBeenCalledWith(urlRequest);
		// });
	});
});
