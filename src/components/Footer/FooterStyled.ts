import styled from 'styled-components';

export const FooterStyled = styled.footer`
	width: 100%;
	height: 110px;
	background-color: ${props => props.theme.firstColor};
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 25px;
	font-family: 'Roboto', sans-serif;
	font-size: 30px;

	.pages {
		span {
			margin: 0 5px;
		}
	}

	.actualPage {
		color: white;
	}

	.notActualPage {
		color: grey;
	}

	button {
		border: none;
		background-color: transparent;
		color: white;
		font-size: 30px;
		transition: all 0.3s;
	}

	button:hover {
		cursor: pointer;
		color: ${props => props.theme.fourthColor};
	}

	button:disabled {
		color: grey;
		cursor: auto;
	}
`;
