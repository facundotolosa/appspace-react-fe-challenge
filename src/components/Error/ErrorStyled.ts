import styled from 'styled-components';

export const ErrorStyled = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 10px;
	margin: 20px 0;

	span {
		font-size: 20px;
		font-family: ${props => props.theme.secondaryFont};
	}
`;
