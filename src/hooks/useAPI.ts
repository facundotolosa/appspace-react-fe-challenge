import { useQuery } from 'react-query';
import axios from 'axios';
import { apiResponse } from '../types/apiResponseInterfaces';

const useAPI = (requestUrl: string) => {
	const useQueryResponse = useQuery(['characters', requestUrl], async () => {
		const { data }: apiResponse = await axios.get(requestUrl);

		return data;
	});

	return useQueryResponse;
};

export default useAPI;
