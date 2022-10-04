import styled from 'styled-components';

export const FooterStyled = styled.footer`
	width: 100%;
	height: 110px;
	background-color: ${props => props.theme.firstColor};
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	.actualPage {
		color: white;
		font-family: 'Roboto', sans-serif;
		font-size: 30px;
	}

	.notActualPage {
		color: grey;
		font-family: 'Roboto', sans-serif;
		font-size: 25px;
	}
`;
