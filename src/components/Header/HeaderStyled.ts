import styled from 'styled-components';

export const HeaderStyled = styled.header`
	width: 100%;
	height: 185px;
	padding: 5px;
	background-color: ${props => props.theme.firstColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: white;
	font-family: ${props => props.theme.secondaryFont};
	align-items: center;

	.name {
		font-style: italic;
	}

	.title-and-name {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}

	.title {
		margin: 0;
		font-size: 28px;
	}

	img {
		height: 110px;
	}

	@media (min-width: 600px) {
		height: 120px;
		flex-direction: row;
		justify-content: space-between;
		padding: 5px 20px;
		gap: 10px;

		.title {
			font-size: 23px;
		}

		.title-and-name {
			align-items: flex-start;
		}
	}
`;
