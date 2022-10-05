import { useQuery } from 'react-query';
import axios from 'axios';

const useAPI = (requestUrl: string) => {
	const useQueryResponse = useQuery(['characters', requestUrl], async () => {
		const {
			data: {
				info: { next, prev, pages },
				results
			}
		} = await axios.get(requestUrl);

		return { next, prev, pages, results };
	});

	return useQueryResponse;
};
export default useAPI;
