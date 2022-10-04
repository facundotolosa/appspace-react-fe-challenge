import { FooterStyled } from './FooterStyled';

interface Props {
	nextPage: () => void;
	previousPage: () => void;
	actualPage: number;
	disablePrevious: boolean;
	disableNext: boolean;
}

const Footer = ({ nextPage, previousPage, actualPage, disablePrevious, disableNext }: Props): JSX.Element => {
	return (
		<FooterStyled>
			<button
				onClick={() => {
					previousPage();
				}}
				disabled={disablePrevious}
			>
				Previous page
			</button>
			<span>{actualPage}</span>
			<button onClick={() => nextPage()} disabled={disableNext}>
				Next page
			</button>
		</FooterStyled>
	);
};

export default Footer;
