import { rest } from 'msw';
import { apiResponseTwoCharacters, characterDetail } from './characterMocks';

export const handlers = [
	rest.get(`${process.env.REACT_APP_API_URL}`, (_req, res, ctx) =>
		res(ctx.status(200), ctx.json(apiResponseTwoCharacters))
	),
	rest.get(`${process.env.REACT_APP_API_URL}44`, (_req, res, ctx) => res(ctx.status(200), ctx.json(characterDetail)))
];
