export interface ICharacter {
	image: string;
	name: string;
	species: string;
	gender: string;
	id: number;
}

export interface ICharacterDetail {
	image: string;
	name: string;
	species: string;
	gender: string;
	status: string;
	origin: {
		name: string;
	};

	episode: string[];
}
