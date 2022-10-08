import { render, screen } from '@testing-library/react';
import Loading from './Loading';
describe('Given a Loading component', () => {
	describe("When it's rendered", () => {
		test("Then it should show a 'Loading...' text", () => {
			const expectedText = 'Loading...';

			render(<Loading />);

			const receivedText = screen.getByText(expectedText);

			expect(receivedText).toBeInTheDocument();
		});
	});
});
