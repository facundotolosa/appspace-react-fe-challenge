import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from 'axios';

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
		<>
			<h1>Website under construction</h1>
			<CharacterList charactersToShow={charactersToShow} />
		</>
	);
};

export default CharactersPage;
