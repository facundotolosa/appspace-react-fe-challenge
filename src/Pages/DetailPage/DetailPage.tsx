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

	const { data, isLoading } = useQuery(['character'], async () => {
		const {
			data: { name, status, species, gender, image, origin, episode }
		} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

		return { name, status, species, gender, image, origin, episode };
	});

	return (
		<DetailPageStyled>
			<Header />
			{isLoading && <Loading />}
			{!isLoading && <CharacterDetail character={data as ICharacterDetail} />}
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
