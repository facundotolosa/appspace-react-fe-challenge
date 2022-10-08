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
	padding: 0 0 0 8px;

	label {
		display: none;
	}

	input {
		height: 20px;
		padding: 0px;
		width: 130px;
		border: none;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
	}

	input:focus {
		outline: none;
	}

	.search-form {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		background-color: transparent;
		width: 25px;
		height: 25px;
		padding: 0;
		margin: 0;
		border: none;
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
		z-index: 20;
		justify-content: space-around;

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

		button:hover {
			cursor: pointer;
		}
	}
`;
