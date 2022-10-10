import { rest } from 'msw';
import { apiResponseTwoCharacters, apiResponsePageOne, characterDetail, apiResponsePageTwo } from './characterMocks';

export const handlers = [
	rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
		const page = req.url.searchParams.get('page');

		if (page === '2') {
			return res(ctx.status(200), ctx.json(apiResponsePageTwo));
		}

		if (page === '3') {
			return res(ctx.status(404), ctx.json({}));
		}

		return res(ctx.status(200), ctx.json(apiResponsePageOne));
	}),

	rest.get(`${process.env.REACT_APP_API_URL}/custom-hook-test`, (_req, res, ctx) =>
		res(ctx.status(200), ctx.json(apiResponseTwoCharacters))
	),

	rest.get(`${process.env.REACT_APP_API_URL}44`, (_req, res, ctx) => res(ctx.status(200), ctx.json(characterDetail))),
	rest.get(`${process.env.REACT_APP_API_URL}1000`, (_req, res, ctx) => res(ctx.status(404), ctx.json({})))
];
