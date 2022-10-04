import { CharacterStyled } from './CharacterStyled';

const Character = () => {
	return (
		<CharacterStyled>
			<h2>Rick Sánchez</h2>
			<img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt={'Rick Sánchez'} />
		</CharacterStyled>
	);
};

export default Character;
