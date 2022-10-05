import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

describe('Given a Footer component', () => {
	describe("When it's instantiated with a nextPage and previousPage functions and the two buttons are clicked", () => {
		test('Then it should call both functions', () => {
			const nextPageFunction = jest.fn();
			const previousPageFunction = jest.fn();

			render(
				<Footer
					actualPage={5}
					nextPage={nextPageFunction}
					previousPage={previousPageFunction}
					totalPages={10}
				/>
			);

			const receivedButtons = screen.getAllByRole('button');

			userEvent.click(receivedButtons[0]);
			userEvent.click(receivedButtons[1]);

			expect(previousPageFunction).toHaveBeenCalled();
			expect(nextPageFunction).toHaveBeenCalled();
		});
	});

	describe('When the actual page is 1', () => {
		test('Then the first button should be disabled', () => {
			render(<Footer actualPage={1} nextPage={() => {}} previousPage={() => {}} totalPages={10} />);

			const receivedButtons = screen.getAllByRole('button');

			expect(receivedButtons[0]).toBeDisabled();
		});
	});

	describe('When the actual page is equal to the totalPages', () => {
		test('Then the second button should be disabled', () => {
			render(<Footer actualPage={10} nextPage={() => {}} previousPage={() => {}} totalPages={10} />);

			const receivedButtons = screen.getAllByRole('button');

			expect(receivedButtons[1]).toBeDisabled();
		});
	});
});
