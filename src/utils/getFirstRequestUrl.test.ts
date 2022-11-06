import { getFirstRequestUrl } from './getFirstRequestUrl';

describe('Given a getFirstRequestUrl function', () => {
	const page = '10';
	const gender = 'male';
	const name = 'carlos';

	describe("When it's called with three null params", () => {
		test('Then the received string shouldnt contain "name", "page", or "gender"', () => {
			const url = getFirstRequestUrl(null, null, null);

			expect(url).not.toContain('name');
			expect(url).not.toContain('page');
			expect(url).not.toContain('gender');
		});
	});

	describe("When it's called with a name param", () => {
		test('Then the received string should contain "name"', () => {
			const url = getFirstRequestUrl(null, null, name);

			expect(url).toContain(`name=${name}`);
		});
	});

	describe("When it's called with a gender param", () => {
		test('Then the received string should contain "gender"', () => {
			const url = getFirstRequestUrl(null, gender, null);

			expect(url).toContain(`gender=${gender}`);
		});
	});

	describe("When it's called with a page param", () => {
		test('Then the received string should contain "page"', () => {
			const url = getFirstRequestUrl(page, null, null);

			expect(url).toContain(`page=${page}`);
		});
	});

	describe("When it's called with a page and name params", () => {
		test('Then the received string should contain "page" and "name"', () => {
			const url = getFirstRequestUrl(page, null, name);

			expect(url).toContain(`page=${page}&name=${name}`);
		});
	});

	describe("When it's called with a page and gender params", () => {
		test('Then the received string should contain "page" and "gender"', () => {
			const url = getFirstRequestUrl(page, gender, null);

			expect(url).toContain(`page=${page}&gender=${gender}`);
		});
	});
});
