import { HeaderStyled } from './HeaderStyled';

const Header = (): JSX.Element => {
	return (
		<HeaderStyled>
			<img src="/images/rick-and-morty-logo.png" alt="Rick and Morty logo" width="283.865px" height="110px" />
			<div className="title-and-name">
				<h1 className="title">Appspace FE challenge</h1> <span className="name">Facundo Tolosa</span>
			</div>
		</HeaderStyled>
	);
};

export default Header;
