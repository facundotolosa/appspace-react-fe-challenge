import { rest } from 'msw';
import { apiResponseTwoCharacters } from './characterMocks';

export const handlers = [
	rest.get(`${process.env.REACT_APP_API_URL}`, (_req, res, ctx) =>
		res(ctx.status(200), ctx.json(apiResponseTwoCharacters))
	)
];
