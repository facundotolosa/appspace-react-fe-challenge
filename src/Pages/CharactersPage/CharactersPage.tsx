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

	useEffect(() => {
		(async () => {
			const {
				data: { results, info }
			} = await axios.get(`https://rickandmortyapi.com/api/character`);
			setCharactersToShow(results);
			setPreviousPage(info.prev);
			setNextPage(info.next);
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
		})();
	};

	return (
		<CharactersPageStyled>
			<Header />
			<CharacterList charactersToShow={charactersToShow} />
			<Footer
				actualPage={1}
				nextPage={showNextPage}
				previousPage={showPreviousPage}
				disablePrevious={!previousPage}
				disableNext={!nextPage}
			/>
		</CharactersPageStyled>
	);
};

export default CharactersPage;
