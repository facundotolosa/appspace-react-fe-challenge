import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';
import Footer from '../../components/Footer/Footer';
import { useQuery } from 'react-query';

const CharactersPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	let link = 'https://rickandmortyapi.com/api/character/';

	const { data, error, isLoading, refetch } = useQuery(['characters'], async () => {
		const { data } = await axios.get(link);

		return data;
	});

	const showNextPage = () => {
		link = data.info.next;
		setCurrentPage(currentPage + 1);
		refetch();
	};

	const showPreviousPage = () => {
		link = data.info.prev;
		setCurrentPage(currentPage - 1);
		refetch();
	};

	return (
		<CharactersPageStyled>
			<Header />
			{data ? <CharacterList charactersToShow={data?.results} /> : ''}
			{data ? (
				<Footer
					actualPage={currentPage}
					nextPage={showNextPage}
					previousPage={showPreviousPage}
					totalPages={data.info.pages}
				/>
			) : (
				''
			)}
		</CharactersPageStyled>
	);
};

export default CharactersPage;
