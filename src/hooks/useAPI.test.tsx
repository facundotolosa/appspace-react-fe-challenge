import useAPI from './useAPI';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
	children: JSX.Element;
}

const queryClient = new QueryClient();

describe('Given a useAPI custom hook', () => {
	describe("When it's called and it receives a url", () => {
		test('Then it should return a list of two characters', async () => {
			const expectedLength = 2;

			const wrapper = ({ children }: Props) => (
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			);

			const { result } = renderHook(() => useAPI('https://rickandmortyapi.com/api/character/'), {
				wrapper
			});

			await waitFor(() => expect(result.current.isSuccess).toBe(true));

			expect(result.current.data?.results).toHaveLength(expectedLength);
		});
	});
});
