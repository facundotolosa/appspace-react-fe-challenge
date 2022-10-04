import CharacterList from '../../components/CharacterList/CharacterList';
import { charactersToShow } from '../../mocks/characterMocks';

const CharactersPage = () => {
	return (
		<>
			<h1>Website under construction</h1>
			<CharacterList charactersToShow={charactersToShow} />
		</>
	);
};

export default CharactersPage;
