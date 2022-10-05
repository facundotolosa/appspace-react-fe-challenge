import { ICharacter } from '../../types/characterInterfaces';
import { CharacterStyled } from './CharacterStyled';
import { useNavigate } from 'react-router-dom';
interface Props {
	character: ICharacter;
}

const Character = ({ character: { image, name, species, gender, id } }: Props): JSX.Element => {
	const navigate = useNavigate();

	return (
		<CharacterStyled>
			<img src={image} alt={name} />
			<h2 className="character-name">{name}</h2>
			<span className="character-info">Species: {species}</span>
			<span className="character-info">Gender: {gender}</span>
			<span className="more-info" onClick={() => navigate(`/character/${id}`)}>
				More info
			</span>
		</CharacterStyled>
	);
};

export default Character;
