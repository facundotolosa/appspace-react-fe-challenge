import { useParams } from 'react-router-dom';
import { DetailPageStyled } from './DetailPageStyled';
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from '../../components/Header/Header';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { ICharacterDetail } from '../../types/characterInterfaces';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const DetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, isLoading, isError } = useQuery(['character'], async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_API_URL}${id}`);

		return data;
	});

	return (
		<DetailPageStyled>
			<Header />
			{isLoading && <Loading />}
			{isError && <Error />}
			{!isLoading && !isError && <CharacterDetail character={data as ICharacterDetail} />}
			<span className="back-button">
				<button onClick={() => navigate(-1)}>Go back</button>
			</span>
		</DetailPageStyled>
	);
};

export default DetailPage;
