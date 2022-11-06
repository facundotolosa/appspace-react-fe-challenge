import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';

describe('Given a SearchBar component', () => {
	describe('When it receives a function, the user types and the form is submitted', () => {
		test('Then it should call the received function with the text written', () => {
			const setRequestURLMock: Dispatch<SetStateAction<string>> = jest.fn();
			const setCurrentPageMock: Dispatch<SetStateAction<number>> = jest.fn();
			const nameToSearch = 'Morty';
			const urlRequest = `${process.env.REACT_APP_API_URL}?name=${nameToSearch}`;
			const params = new URLSearchParams();

			render(
				<SearchBar
					setRequestURL={setRequestURLMock}
					setCurrentPage={setCurrentPageMock}
					params={params}
					setParams={() => {}}
				/>
			);

			const button = screen.getByRole('button');
			const label = screen.getByLabelText('Search');

			userEvent.type(label, nameToSearch);
			userEvent.click(button);

			expect(setCurrentPageMock).toHaveBeenCalledWith(1);
			expect(setRequestURLMock).toHaveBeenCalledWith(urlRequest);
		});
	});

	describe('When the search input is empty and its submitted', () => {
		test('Then the delete method of the received params will be called with "name"', () => {
			const setRequestURLMock: Dispatch<SetStateAction<string>> = jest.fn();
			const setCurrentPageMock: Dispatch<SetStateAction<number>> = jest.fn();
			const params = new URLSearchParams();
			params.delete = jest.fn();

			render(
				<SearchBar
					setRequestURL={setRequestURLMock}
					setCurrentPage={setCurrentPageMock}
					params={params}
					setParams={() => {}}
				/>
			);

			const button = screen.getByRole('button');
			userEvent.click(button);

			expect(params.delete).toHaveBeenCalledWith('name');
		});
	});
});
