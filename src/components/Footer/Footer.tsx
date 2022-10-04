import { FooterStyled } from './FooterStyled';

interface Props {
	nextPage: () => void;
	previousPage: () => void;
	actualPage: number;
}

const Footer = ({ nextPage, previousPage, actualPage }: Props): JSX.Element => {
	return (
		<FooterStyled>
			<button
				onClick={() => {
					previousPage();
				}}
			>
				Previous page
			</button>
			<span>{actualPage}</span>
			<button onClick={() => nextPage()}>Next page</button>
		</FooterStyled>
	);
};

export default Footer;
