import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';
import { charactersToShow } from '../../mocks/characterMocks';
import { BrowserRouter } from 'react-router-dom';

describe('Given a CharacterList component', () => {
	describe('When it receives a list of three characters', () => {
		test('Then it should show three level two headings with the name of each character of the list', () => {
			render(
				<BrowserRouter>
					<CharacterList charactersToShow={charactersToShow} />
				</BrowserRouter>
			);

			const receivedHeadings = screen.getAllByRole('heading', { level: 2 });

			receivedHeadings.forEach((heading, index) => {
				expect(heading).toHaveTextContent(charactersToShow[index].name);
			});
		});
	});
});
