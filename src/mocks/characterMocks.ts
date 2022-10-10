export const character = {
	name: 'Rick Sanchez',
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	species: 'Human',
	gender: 'Male',
	id: 7
};

export const characterDetail = {
	name: 'Mock character',
	status: 'Alive',
	species: 'Human',
	gender: 'Male',
	origin: {
		name: 'Mock origin'
	},
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	episode: ['https://rickandmortyapi.com/api/episode/1']
};

export const characterDetailFiveChapters = {
	name: 'Mock character',
	status: 'Dead',
	species: 'Human',
	gender: 'Male',
	origin: {
		name: 'Mock origin'
	},
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	episode: [
		'https://rickandmortyapi.com/api/episode/1',
		'https://rickandmortyapi.com/api/episode/2',
		'https://rickandmortyapi.com/api/episode/3',
		'https://rickandmortyapi.com/api/episode/4',
		'https://rickandmortyapi.com/api/episode/5'
	]
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

export const apiResponsePageOne = {
	info: {
		count: 2,
		pages: 3,
		next: 'https://rickandmortyapi.com/api/character/?page=2',
		prev: null
	},
	results: [
		{
			id: 1,
			name: 'Mock character page one',
			status: 'Alive',
			species: 'Human',
			type: '',
			gender: 'Male',
			origin: {
				name: 'Argentina',
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
			id: 2,
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
		},
		{
			id: 3,
			name: 'Mock character 3',
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
			id: 4,
			name: 'Mock character 4',
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
			id: 5,
			name: 'Mock character 5',
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

export const apiResponsePageTwo = {
	info: {
		count: 3,
		pages: 3,
		next: 'https://rickandmortyapi.com/api/character/?page=3',
		prev: 'https://rickandmortyapi.com/api/character/'
	},
	results: [
		{
			id: 1,
			name: 'Mock character page two',
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
