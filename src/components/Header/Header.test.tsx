import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a Header component', () => {
	describe("When it's instantiated", () => {
		test('Then it should show an image', () => {
			const expectedPath = 'images/rick-and-morty-logo.png';

			render(<Header />);
			const receivedImage: HTMLImageElement = screen.getByRole('img');

			expect(receivedImage.src).toContain(expectedPath);
		});
	});
});
