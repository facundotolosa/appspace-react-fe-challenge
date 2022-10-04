import { render, screen } from '@testing-library/react';
import { character } from '../../mocks/characterMocks';
import { BrowserRouter } from 'react-router-dom';
import Character from './Character';

describe('Given a Character component', () => {
	describe("When it's instantiated with a character", () => {
		test("Then it should show a level two heading with it's name, the gender and the species, and an image with the received src", () => {
			render(
				<BrowserRouter>
					<Character character={character} />
				</BrowserRouter>
			);

			const receivedName = screen.getByRole('heading', { level: 2, name: character.name });
			const receivedSpecies = screen.getByText(`Species: ${character.species}`);
			const receivedGender = screen.getByText(`Gender: ${character.gender}`);
			const receivedImage = screen.getByRole('img');

			expect(receivedName).toBeInTheDocument();
			expect(receivedSpecies).toBeInTheDocument();
			expect(receivedGender).toBeInTheDocument();
			expect(receivedImage).toHaveProperty('src', character.image);
		});
	});
});
