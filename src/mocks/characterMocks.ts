export const character = {
	name: 'Rick Sanchez',
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	species: 'Human',
	gender: 'Male',
	id: 7
};

export const charactersToShow = [
	{
		name: 'Rick Sanchez',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		species: 'Human',
		gender: 'Male',
		id: 1
	},
	{
		name: 'Morty Smith',
		image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
		species: 'Human',
		gender: 'Male',
		id: 2
	},
	{
		name: 'Summer Smith',
		image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
		species: 'Human',
		gender: 'Female',
		id: 3
	}
];

export const apiResponseTwoCharacters = {
	info: {
		count: 2,
		pages: 1,
		next: null,
		prev: null
	},
	results: [
		{
			id: 1,
			name: 'Mock character 1',
			status: 'Alive',
			species: 'Human',
			type: '',
			gender: 'Male',
			origin: {
				name: '',
				url: 'https://rickandmortyapi.com/api/location/1'
			},
			location: {
				name: '',
				url: 'https://rickandmortyapi.com/api/location/3'
			},
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			episode: ['https://rickandmortyapi.com/api/episode/1'],
			url: 'https://rickandmortyapi.com/api/character/1',
			created: '2017-11-04T18:48:46.250Z'
		},
		{
			id: 1,
			name: 'Mock character 2',
			status: 'Alive',
			species: 'Human',
			type: '',
			gender: 'Male',
			origin: {
				name: '',
				url: 'https://rickandmortyapi.com/api/location/1'
			},
			location: {
				name: '',
				url: 'https://rickandmortyapi.com/api/location/3'
			},
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			episode: ['https://rickandmortyapi.com/api/episode/1'],
			url: 'https://rickandmortyapi.com/api/character/1',
			created: '2017-11-04T18:48:46.250Z'
		}
	]
};
