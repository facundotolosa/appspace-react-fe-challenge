import { LoadingStyled } from './LoadingStyled';

const Loading = (): JSX.Element => {
	return (
		<LoadingStyled>
			<div className="spinner"></div>
			<span>Loading...</span>
		</LoadingStyled>
	);
};

export default Loading;
