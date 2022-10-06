import { ICharacterDetail } from '../../types/characterInterfaces';
import { CharacterDetailStyled } from './CharacterDetailStyled';

interface Props {
	character: ICharacterDetail;
}

const CharacterDetail = ({
	character: {
		image,
		name,
		species,
		gender,
		status,
		episode,
		origin: { name: originName }
	}
}: Props): JSX.Element => {
	return (
		<CharacterDetailStyled>
			<img src={image} alt={name} />
			<section className="character-info">
				<div className="name-and-status">
					<h2 className="character-name">{name}</h2>
					<span className={`status ${status === 'Alive' ? 'status-alive' : 'status-dead'}`}></span>
				</div>

				<ul className="more-info">
					<li>Species: {species}</li>
					<li>Gender: {gender}</li>
					<li>Origin: {originName}</li>
					<li>
						It appears on {episode.length} episode{episode.length === 1 ? '' : 's'}
					</li>
				</ul>
			</section>
		</CharacterDetailStyled>
	);
};

export default CharacterDetail;
