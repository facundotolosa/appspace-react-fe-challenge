import { ICharacter } from '../../types/characterInterfaces';
import { CharacterStyled } from './CharacterStyled';

interface Props {
	character: ICharacter;
}

const Character = ({ character: { image, name, species, gender } }: Props): JSX.Element => {
	return (
		<CharacterStyled>
			<img src={image} alt={name} />
			<h2 className="character-name">{name}</h2>
			<span className="character-info">Species: {species}</span>
			<span className="character-info">Gender: {gender}</span>
		</CharacterStyled>
	);
};

export default Character;
