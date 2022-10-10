import styled from 'styled-components';

export const LoadingStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 20px 0;

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border-left-color: #09f;
		animation: spin 1s ease infinite;
		display: inline;
	}

	span {
		font-family: ${props => props.theme.secondaryFont};
		font-size: 20px;
		color: black;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;
