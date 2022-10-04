import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';
import Footer from '../../components/Footer/Footer';

const CharactersPage = () => {
	const [charactersToShow, setCharactersToShow] = useState([]);
	const [nextPage, setNextPage] = useState('');
	const [previousPage, setPreviousPage] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		(async () => {
			const {
				data: { results, info }
			} = await axios.get(`https://rickandmortyapi.com/api/character/?name=rick&status=alive`);
			setCharactersToShow(results);
			setPreviousPage(info.prev);
			setNextPage(info.next);
			setTotalPages(info.pages);
		})();
	}, []);

	const showNextPage = () => {
		(async () => {
			window.scrollTo(0, 0);
			const {
				data: { results, info }
			} = await axios.get(nextPage);

			setCharactersToShow(results);
			setPreviousPage(info.prev);
			setNextPage(info.next);
			setCurrentPage(currentPage + 1);
		})();
	};

	const showPreviousPage = () => {
		(async () => {
			window.scrollTo(0, 0);
			const {
				data: { results, info }
			} = await axios.get(previousPage);

			setCharactersToShow(results);
			setPreviousPage(info.prev);
			setNextPage(info.next);
			setCurrentPage(currentPage - 1);
		})();
	};

	return (
		<CharactersPageStyled>
			<Header />
			<CharacterList charactersToShow={charactersToShow} />
			<Footer
				actualPage={currentPage}
				nextPage={showNextPage}
				previousPage={showPreviousPage}
				totalPages={totalPages}
			/>
		</CharactersPageStyled>
	);
};

export default CharactersPage;
