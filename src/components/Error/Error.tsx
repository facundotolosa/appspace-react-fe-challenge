import { ErrorStyled } from './ErrorStyled';

const Error = (): JSX.Element => {
	return (
		<ErrorStyled>
			<span>Error getting the data. Please try again later :(</span>
		</ErrorStyled>
	);
};

export default Error;
