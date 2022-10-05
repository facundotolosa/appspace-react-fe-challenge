import styled from 'styled-components';

export const CharacterStyled = styled.li`
	width: 270px;
	background-color: ${props => props.theme.firstColor};
	padding: 20px;
	box-shadow: 4px 4px 9px -1px rgba(0, 0, 0, 0.75);
	display: flex;
	flex-direction: column;
	font-family: 'Gemunu Libre', sans-serif;
	border-radius: 5px;

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

	.more-info {
		font-size: 22px;
		color: white;
		text-align: right;
		margin-top: 5px;
		&:hover {
			cursor: pointer;
		}
	}
`;
