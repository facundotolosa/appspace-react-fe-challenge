import { ICharacter } from '../../types/characterInterfaces';
import { CharacterDetailStyled } from './CharacterDetailStyled';

interface Props {
	character: ICharacter;
}

const CharacterDetail = ({ character: { image, name, species, gender, id } }: Props): JSX.Element => {
	return <CharacterDetailStyled></CharacterDetailStyled>;
};

export default CharacterDetail;
