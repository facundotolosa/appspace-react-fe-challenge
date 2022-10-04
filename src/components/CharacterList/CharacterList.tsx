import { charactersToShow } from '../../mocks/characterMocks';
import Character from '../Character/Character';
import { CharacterListStyled } from './CharacterListStyled';

const CharacterList = (): JSX.Element => {
	return (
		<CharacterListStyled>
			{charactersToShow.map((character, index) => {
				return <Character character={character} key={index} />;
			})}
		</CharacterListStyled>
	);
};

export default CharacterList;
