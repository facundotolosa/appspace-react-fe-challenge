import styled from 'styled-components';

export const CharacterStyled = styled.li`
	width: 300px;
	background-color: ${props => props.theme.firstColor};
	padding: 20px;
	box-shadow: 4px 4px 9px -1px rgba(0, 0, 0, 0.75);
	display: flex;
	flex-direction: column;
	font-family: 'Gemunu Libre', sans-serif;

	.character-name {
		text-align: center;
		font-size: 35px;
		margin: 5px 0;
		color: white;
	}

	.character-info {
		font-size: 22px;
		color: white;

		&:first-of-type {
			margin-bottom: 3px;
		}
	}
`;
