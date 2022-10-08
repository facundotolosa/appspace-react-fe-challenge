import { useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';
import Footer from '../../components/Footer/Footer';
import useAPI from '../../hooks/useAPI';
import SearchBar from '../../components/SearchBar/SearchBar';

const CharactersPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [requestURL, setRequestURL] = useState('https://rickandmortyapi.com/api/character/');

	const { data, isLoading, refetch } = useAPI(requestURL);

	const paginate = (nextPage: boolean) => {
		setRequestURL(nextPage ? data?.next : data?.prev);
		setCurrentPage(nextPage ? currentPage + 1 : currentPage - 1);
		window.scrollTo(0, 0);
		refetch();
	};

	return (
		<CharactersPageStyled>
			<Header />
			<SearchBar setRequestURL={setRequestURL} />
			{isLoading ? (
				<span>Loading...</span>
			) : (
				<>
					<CharacterList charactersToShow={data?.results} />
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
