import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dispatch, SetStateAction } from 'react';
import GenderFilter from './GenderFilter';

describe('Given a GenderFilter component', () => {
	describe('When it receives a function, and the user selects the option "Male"', () => {
		test('Then it should call the received function with the param "Male"', () => {
			const setRequestURLMock: Dispatch<SetStateAction<string>> = jest.fn();
			const setCurrentPageMock: Dispatch<SetStateAction<number>> = jest.fn();
			const genderToSearch = 'male';
			const urlRequest = `${process.env.REACT_APP_API_URL}?gender=${genderToSearch}`;
			const params = new URLSearchParams();

			render(
				<GenderFilter
					setRequestURL={setRequestURLMock}
					setCurrentPage={setCurrentPageMock}
					setParams={() => {}}
					params={params}
				/>
			);

			const options = screen.getAllByRole('option');
			userEvent.selectOptions(screen.getByRole('combobox'), [options[1]]);

			expect(setCurrentPageMock).toHaveBeenCalledWith(1);
			expect(setRequestURLMock).toHaveBeenCalledWith(urlRequest);
		});
	});
});
