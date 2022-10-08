import { useParams } from 'react-router-dom';
import { DetailPageStyled } from './DetailPageStyled';
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from '../../components/Header/Header';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { ICharacterDetail } from '../../types/characterInterfaces';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

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
			{isError && <span>Error getting the data. Please try again later :(</span>}
			{isLoading && <Loading />}
			{!isLoading && !isError && <CharacterDetail character={data as ICharacterDetail} />}
			<span className="back-button">
				<button
					onClick={() => {
						window.scrollTo(0, 0);
						navigate('/characters');
					}}
				>
					Back to home
				</button>
			</span>
		</DetailPageStyled>
	);
};

export default DetailPage;
