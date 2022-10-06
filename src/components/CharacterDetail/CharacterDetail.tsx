import { ICharacterDetail } from '../../types/characterInterfaces';
import { CharacterDetailStyled } from './CharacterDetailStyled';

interface Props {
	character: ICharacterDetail;
}

const CharacterDetail = ({
	character: { image, name, species, gender, id, status, episode, origin }
}: Props): JSX.Element => {
	console.log(status);

	return (
		<CharacterDetailStyled>
			<img src={image} alt={name} />
			<div className="character-info">
				<div className="name-and-status">
					<h2 className="character-name">{name}</h2>
					<span className={`status ${status === 'Alive' ? 'status-alive' : 'status-dead'}`}></span>
				</div>
			</div>
		</CharacterDetailStyled>
	);
};

export default CharacterDetail;
