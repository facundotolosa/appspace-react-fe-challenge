import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharactersPage from './CharactersPage';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { apiResponsePageOne, apiResponsePageTwo } from '../../mocks/characterMocks';
import { setLogger } from 'react-query';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockUseNavigate
}));

setLogger({
	log: () => {},
	warn: () => {},
	error: () => {}
});

describe('Given the CharactersPage component', () => {
	describe("When it's rendered and receives three pages of items as the API response", () => {
		describe('And the next page button is clicked first and then the prev page button is clicked', () => {
			test('Then it should show first the data of the first page, then the data of the second one and then the data of the first page again', async () => {
				const queryClient = new QueryClient();
				window.scrollTo = jest.fn();

				render(
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<CharactersPage />
						</QueryClientProvider>
					</BrowserRouter>
				);

				await screen.findByRole('heading', { level: 2, name: apiResponsePageOne.results[0].name });

				const nextButton = screen.getByRole('button', { name: '>' });
				userEvent.click(nextButton);

				await screen.findByRole('heading', { level: 2, name: apiResponsePageTwo.results[0].name });

				const prevButton = screen.getByRole('button', { name: '<' });
				userEvent.click(prevButton);

				const receivedHeading = await screen.findByRole('heading', {
					level: 2,
					name: apiResponsePageOne.results[0].name
				});

				expect(receivedHeading).toBeInTheDocument();
			});
		});

		describe('And the next page button is clicked two times', () => {
			test('Then it should show an error message', async () => {
				const queryClient = new QueryClient({
					defaultOptions: {
						queries: {
							retry: 0,
							retryDelay: 1
						}
					}
				});
				window.scrollTo = jest.fn();
				const errorMessage = 'Error getting the data. Please try again later :(';

				render(
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<CharactersPage />
						</QueryClientProvider>
					</BrowserRouter>
				);

				await screen.findByRole('heading', { level: 2, name: apiResponsePageOne.results[0].name });

				const nextButton = screen.getByRole('button', { name: '>' });
				userEvent.click(nextButton);

				await screen.findByRole('heading', { level: 2, name: apiResponsePageTwo.results[0].name });

				const nextButtonTwo = screen.getByRole('button', { name: '>' });
				userEvent.click(nextButtonTwo);

				const receivedErrorMessage = await screen.findByText(errorMessage);

				expect(receivedErrorMessage).toBeInTheDocument();
			});
		});
	});
});
