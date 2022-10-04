import { FooterStyled } from './FooterStyled';

interface Props {
	nextPage: () => void;
	previousPage: () => void;
	actualPage: number;
	totalPages: number;
}

const Footer = ({ nextPage, previousPage, actualPage, totalPages }: Props): JSX.Element => {
	return (
		<FooterStyled>
			<button
				onClick={() => {
					previousPage();
				}}
				disabled={actualPage === 1}
			>
				{'<<'}
			</button>

			<div className="pages">
				<span className="notActualPage">{actualPage === 1 ? '-' : actualPage - 1}</span>
				<span className="actualPage">{actualPage}</span>
				<span className="notActualPage">{actualPage === totalPages ? '-' : actualPage + 1}</span>
			</div>

			<button onClick={() => nextPage()} disabled={actualPage === totalPages}>
				{'>>'}
			</button>
		</FooterStyled>
	);
};

export default Footer;
