import { useQuery } from 'react-query';
import axios from 'axios';

const useAPI = (requestUrl: string) => {
	const useQueryResponse = useQuery(['characters', requestUrl], async () => {
		const { data } = await axios.get(requestUrl);

		return data;
	});

	return useQueryResponse;
};
export default useAPI;
