import styled from 'styled-components';

export const HeaderStyled = styled.header`
	width: 100%;
	height: 120px;
	padding: 5px;
	background-color: ${props => props.theme.firstColor};
	display: flex;
	justify-content: center;

	img {
		height: 100%;
	}
`;
