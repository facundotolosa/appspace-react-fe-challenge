import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DetailPage from './DetailPage';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { characterDetail } from '../../mocks/characterMocks';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({ id: '44' }),
	useNavigate: () => mockUseNavigate
}));

describe('Given the DetailPage component', () => {
	describe("When it's rendered with a character id as a param", () => {
		test('Then it should show the data of the character with that id', async () => {
			const queryClient = new QueryClient();

			render(
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<DetailPage />
					</QueryClientProvider>
				</BrowserRouter>
			);

			await screen.findByRole('heading', { level: 2, name: characterDetail.name });

			const receivedSpecies = screen.getByText(`Species: ${characterDetail.species}`);
			const receivedGender = screen.getByText(`Gender: ${characterDetail.gender}`);

			expect(receivedSpecies).toBeInTheDocument();
			expect(receivedGender).toBeInTheDocument();
		});
	});

	describe("When the 'Back to home' button is clicked", () => {
		test("Then it should call navigate with '/characters'", async () => {
			const queryClient = new QueryClient();

			window.scrollTo = jest.fn();

			render(
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<DetailPage />
					</QueryClientProvider>
				</BrowserRouter>
			);

			await screen.findByRole('heading', { level: 2, name: characterDetail.name });

			const receivedButton = screen.getByRole('button', { name: 'Back to home' });
			userEvent.click(receivedButton);

			expect(mockUseNavigate).toHaveBeenCalledWith('/characters');
		});
	});
});
