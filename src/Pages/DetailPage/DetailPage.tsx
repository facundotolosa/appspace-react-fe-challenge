import { useParams } from 'react-router-dom';
import { DetailPageStyled } from './DetailPageStyled';
import useAPI from '../../hooks/useAPI';

const CharactersPage = () => {
	const { id } = useParams();

	const { data, isLoading } = useAPI(`https://rickandmortyapi.com/api/character/${id}`);

	return (
		<DetailPageStyled>
			<h1>Detail page</h1>
		</DetailPageStyled>
	);
};

export default CharactersPage;
