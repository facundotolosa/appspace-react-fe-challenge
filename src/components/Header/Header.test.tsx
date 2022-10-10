import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a Header component', () => {
	describe("When it's instantiated", () => {
		test('Then it should show an image and a level 1 heading with the text "Appspace FE challenge"', () => {
			const expectedPath = 'images/rick-and-morty-logo.png';
			const headingText = 'Appspace FE challenge';

			render(<Header />);
			const receivedImage: HTMLImageElement = screen.getByRole('img');
			const receivedHeading = screen.getByRole('heading', { level: 1, name: headingText });

			expect(receivedImage.src).toContain(expectedPath);
			expect(receivedHeading).toBeInTheDocument();
		});
	});
});
