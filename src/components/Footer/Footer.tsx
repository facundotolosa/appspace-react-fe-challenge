import { FooterStyled } from './FooterStyled';

const Footer = (): JSX.Element => {
	return (
		<FooterStyled>
			<button>Previous page</button>
			<span>{}</span>
			<button>Next page</button>
		</FooterStyled>
	);
};

export default Footer;
