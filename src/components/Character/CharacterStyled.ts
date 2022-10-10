import styled from 'styled-components';

export const CharacterStyled = styled.li`
	width: 270px;
	background-color: ${props => props.theme.firstColor};
	padding: 20px;
	box-shadow: 4px 4px 9px -1px rgba(0, 0, 0, 0.75);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: ${props => props.theme.primaryFont};
	border-radius: 5px;

	.character-info-picture {
		display: flex;
		flex-direction: column;
	}

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
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
	}

	.more-info-button {
		width: 100px;
		height: 27px;
		font-size: 27px;
		background-color: transparent;
		color: white;
		font-family: ${props => props.theme.primaryFont};
		text-decoration: underline white;
		text-align: right;
		padding: 0px;
		border: none;
		transition: 0.2s all;

		&:hover {
			cursor: pointer;
			color: ${props => props.theme.secondColor};
			text-decoration: underline ${props => props.theme.secondColor};
		}
	}

	.character-image {
		object-fit: cover;
	}
`;
