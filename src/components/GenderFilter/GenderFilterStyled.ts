import styled from 'styled-components';

export const GenderFilterStyled = styled.div`
	.select-gender {
		width: 200px;
		height: 50px;
		padding: 0 8px;
		border: none;
		border-radius: 15px;
		font-size: 16px;

		option {
			font-family: 'Roboto', sans-serif;
		}
	}

	label {
		display: none;
	}

	@media (min-width: 600px) {
		.select-gender {
			width: 142px;
			height: 30px;
		}
	}
`;
