import { ICharacter } from '../../types/characterInterfaces';
import Character from '../Character/Character';
import { CharacterListStyled } from './CharacterListStyled';

interface Props {
	charactersToShow: ICharacter[];
}

const CharacterList = ({ charactersToShow }: Props): JSX.Element => {
	return (
		<CharacterListStyled>
			{charactersToShow.map((character, index) => {
				return <Character character={character} key={index} />;
			})}
		</CharacterListStyled>
	);
};

export default CharacterList;
