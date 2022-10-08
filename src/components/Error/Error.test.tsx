import { screen, render } from '@testing-library/react';
import Error from './Error';

describe('Given an Error component', () => {
	describe("When it's istantiated", () => {
		test("Then it should show a text 'Error getting the data. Please try again later :('", () => {
			const expectedText = 'Error getting the data. Please try again later :(';

			render(<Error />);

			const receivedText = screen.getByText(expectedText);

			expect(receivedText).toBeInTheDocument();
		});
	});
});
