import styled from 'styled-components';

export const SearchBarStyled = styled.div`
	width: 200px;
	height: 50px;
	background-color: #fff;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	color: white;
	z-index: 20;
	justify-content: space-around;
	margin-top: 10px;

	img {
		height: 24px;
		width: 24px;
	}

	label {
		display: none;
	}

	input {
		height: 20px;
		width: 105px;
		border: none;
		margin-left: 2px;
	}

	input:focus {
		outline: none;
	}

	@media (min-width: 600px) {
		display: contents;
		width: 150px;
		height: 30px;
		background-color: #fff;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		color: white;
		/* font-family: "Koulen"; */
		z-index: 20;
		justify-content: space-around;
		margin-top: 0px;

		img {
			height: 24px;
			width: 24px;
		}

		label {
			display: none;
		}

		input {
			height: 20px;
			width: 105px;
			border: none;
			margin-left: 2px;
		}

		input:focus {
			outline: none;
		}
	}
`;
