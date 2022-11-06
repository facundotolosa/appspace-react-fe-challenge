import { ICharacter, ICharacterDetail } from './characterInterfaces';

interface infoI {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}
interface dataI {
	info: infoI;
	results: ICharacter[];
}
export interface apiResponse {
	data: dataI;
}

export interface apiResponseDetail {
	data: ICharacterDetail;
}
