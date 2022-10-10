import styled from 'styled-components';

export const CharactersPageStyled = styled.div`
	background-color: ${props => props.theme.thirdColor};
	min-height: 100vh;

	.filters {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		margin: 20px 0 0 0;
	}

	@media (min-width: 600px) {
		.filters {
			height: 30px;
			flex-direction: row;
			justify-content: center;
		}
	}
`;
