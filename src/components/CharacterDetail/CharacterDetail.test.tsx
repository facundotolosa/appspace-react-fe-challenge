import { render, screen } from '@testing-library/react';
import { characterDetail, characterDetailFiveChapters } from '../../mocks/characterMocks';
import CharacterDetail from './CharacterDetail';

describe('Given a CharacterDetail component', () => {
	describe("When it's instantiated with a character", () => {
		test("Then it should show it's name, species, gender, origin name and the episodes that it appears on", () => {
			render(<CharacterDetail character={characterDetail} />);

			const receivedName = screen.getByRole('heading', { level: 2, name: characterDetail.name });
			const receivedSpecies = screen.getByText(`Species: ${characterDetail.species}`);
			const receivedGender = screen.getByText(`Gender: ${characterDetail.gender}`);
			const receivedOrigin = screen.getByText(`Origin: ${characterDetail.origin.name}`);
			const receivedEpisodesLength = screen.getByText(`It appears on ${characterDetail.episode.length} episode`);
			const receivedImage = screen.getByRole('img');

			expect(receivedName).toBeInTheDocument();
			expect(receivedSpecies).toBeInTheDocument();
			expect(receivedGender).toBeInTheDocument();
			expect(receivedOrigin).toBeInTheDocument();
			expect(receivedEpisodesLength).toBeInTheDocument();
			expect(receivedImage).toHaveProperty('src', characterDetail.image);
		});
	});

	describe("When it's instantiated with a character that appears on 5 episodes", () => {
		test("Then it should show the text 'It appears on 5 episodes", () => {
			render(<CharacterDetail character={characterDetailFiveChapters} />);

			const receivedEpisodesLength = screen.getByText(
				`It appears on ${characterDetailFiveChapters.episode.length} episodes`
			);

			expect(receivedEpisodesLength).toBeInTheDocument();
		});
	});
});
