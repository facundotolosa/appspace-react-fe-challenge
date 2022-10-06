import styled from 'styled-components';

export const CharacterDetailStyled = styled.div`
	width: 300px;
	background-color: ${props => props.theme.firstColor};
	padding: 20px;
	box-shadow: 4px 4px 9px -1px rgba(0, 0, 0, 0.75);
	font-family: 'Gemunu Libre', sans-serif;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	margin: 20px auto;

	.character-info {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.name-and-status {
		margin-top: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.character-name {
		text-align: center;
		font-size: 35px;
		margin: 0;
		color: white;
		display: inline;
		max-width: 200px;
	}

	.status {
		width: 28px;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 2px solid black;

		&-alive {
			background-color: green;
		}

		&-dead {
			background-color: red;
		}
	}

	@media (min-width: 600px) {
		width: 530px;
		flex-direction: row;

		img {
			width: 250px;
		}

		.character-info {
			padding-left: 10px;
		}
	}
`;
