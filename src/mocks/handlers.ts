import { rest } from 'msw';
import { apiResponseTwoCharacters } from './characterMocks';

export const handlers = [
	rest.get(`https://rickandmortyapi.com/api/character/`, (_req, res, ctx) =>
		res(ctx.status(200), ctx.json(apiResponseTwoCharacters))
	)
];
