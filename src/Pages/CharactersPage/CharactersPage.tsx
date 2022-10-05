import { useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';
import Footer from '../../components/Footer/Footer';
import { useQuery } from 'react-query';

const CharactersPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	let requestURL = 'https://rickandmortyapi.com/api/character/';

	const { data, error, isLoading, refetch } = useQuery(['characters'], async () => {
		const {
			data: {
				info: { next, prev, pages },
				results
			}
		} = await axios.get(requestURL);

		return { next, prev, pages, results };
	});

	const paginate = (nextPage: boolean) => {
		requestURL = nextPage ? data?.next : data?.prev;
		setCurrentPage(nextPage ? currentPage + 1 : currentPage - 1);
		window.scrollTo(0, 0);
		refetch();
	};

	return (
		<CharactersPageStyled>
			<Header />
			{isLoading ? (
				<span>Loading...</span>
			) : (
				<>
					<CharacterList charactersToShow={data?.results} />{' '}
					<Footer
						actualPage={currentPage}
						nextPage={() => paginate(true)}
						previousPage={() => paginate(false)}
						totalPages={data?.pages}
					/>
				</>
			)}
		</CharactersPageStyled>
	);
};

export default CharactersPage;
