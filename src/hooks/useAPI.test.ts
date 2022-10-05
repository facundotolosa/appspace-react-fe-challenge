import useAPI from './useAPI';

describe('Given a useAPI custom hook', () => {
	describe("When it's called and it receives a url", () => {
		test('Then it should return a list of characters', () => {
			useAPI();
		});
	});
});
