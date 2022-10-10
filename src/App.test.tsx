import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { setLogger } from 'react-query';
import { apiResponsePageOne } from './mocks/characterMocks';

setLogger({
	log: () => {},
	warn: () => {},
	error: () => {}
});

describe('Given the App component', () => {
	describe("When it's instantiated and receives a list of items as the API response", () => {
		test('Then it should show the five names of the received list', async () => {
			const queryClient = new QueryClient();

			render(
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</BrowserRouter>
			);

			const receivedHeadings = await screen.findAllByRole('heading', {
				level: 2
			});

			receivedHeadings.forEach((heading, index) => {
				expect(heading).toHaveAccessibleName(apiResponsePageOne.results[index].name);
			});
		});
	});
});
