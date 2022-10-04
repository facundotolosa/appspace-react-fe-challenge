import { CharacterStyled } from './CharacterStyled';

const Character = () => {
	return (
		<CharacterStyled>
			<img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt={'Rick Sánchez'} />
			<h2>Rick Sanchez</h2>
			<span className="character-info">Species: Human</span>
			<span className="character-info">Gender: Male</span>
		</CharacterStyled>
	);
};

export default Character;
