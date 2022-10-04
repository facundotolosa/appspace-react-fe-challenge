import { charactersToShow } from '../../mocks/characterMocks';
import Character from '../Character/Character';

const CharacterList = (): JSX.Element => {
	return (
		<ul>
			{charactersToShow.map(character => {
				return <Character character={character} />;
			})}
		</ul>
	);
};

export default CharacterList;
