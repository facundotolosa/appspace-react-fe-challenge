import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';

const CharactersPage = () => {
	const [charactersToShow, setCharactersToShow] = useState([]);

	useEffect(() => {
		(async () => {
			const {
				data: { results }
			} = await axios.get(`https://rickandmortyapi.com/api/character`);
			setCharactersToShow(results);
		})();
	}, []);

	return (
		<CharactersPageStyled>
			<Header />
			<CharacterList charactersToShow={charactersToShow} />
		</CharactersPageStyled>
	);
};

export default CharactersPage;
