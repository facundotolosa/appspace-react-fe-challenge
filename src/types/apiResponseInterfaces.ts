import { ICharacter } from './characterInterfaces';

interface dataI {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};

	results: ICharacter[];
}

export interface apiResponse {
	data: dataI;
}
