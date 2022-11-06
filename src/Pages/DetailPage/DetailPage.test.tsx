import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DetailPage from './DetailPage';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { characterDetail } from '../../mocks/characterMocks';
import { setLogger } from 'react-query';

const mockUseNavigate = jest.fn();
let mockId = '44';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({ id: mockId }),
	useNavigate: () => mockUseNavigate
}));

setLogger({
	log: () => {},
	warn: () => {},
	error: () => {}
});

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

			const receivedButton = screen.getByRole('button', { name: 'Go back' });
			userEvent.click(receivedButton);

			expect(mockUseNavigate).toHaveBeenCalledWith(-1);
		});
	});

	describe("When it's instantiated with a character id that doesn't exists", () => {
		test('Then it should show an error message', async () => {
			const queryClient = new QueryClient({
				defaultOptions: {
					queries: {
						retry: 0,
						retryDelay: 1
					}
				}
			});

			mockId = '1000';
			const errorMessage = 'Error getting the data. Please try again later :(';

			render(
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<DetailPage />
					</QueryClientProvider>
				</BrowserRouter>
			);

			await screen.findByText(errorMessage);
		});
	});
});
