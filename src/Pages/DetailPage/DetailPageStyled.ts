import styled from 'styled-components';

export const DetailPageStyled = styled.div`
	background-color: ${props => props.theme.fifthColor};
	min-height: 100vh;
	padding-bottom: 10px;

	.back-button {
		display: flex;
		justify-content: center;

		button {
			font-family: ${props => props.theme.secondaryFont};
			font-size: 16px;
			color: white;
			font-weight: 600;
			background-color: ${props => props.theme.secondColor};
			box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.75);
			border: none;
			width: 150px;
			height: 50px;
			border-radius: 5px;
			transition: all 0.5s;

			&:hover {
				cursor: pointer;
				background-color: white;
				color: ${props => props.theme.secondColor};
			}
		}
	}
`;
