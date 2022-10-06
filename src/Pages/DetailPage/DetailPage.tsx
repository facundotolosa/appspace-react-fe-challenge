import { useParams } from 'react-router-dom';
import { DetailPageStyled } from './DetailPageStyled';
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from '../../components/Header/Header';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { ICharacterDetail } from '../../types/characterInterfaces';

const DetailPage = () => {
	const { id } = useParams();

	const { data, isLoading } = useQuery(['character'], async () => {
		const {
			data: { name, status, species, gender, image, origin, episode }
		} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

		return { name, status, species, gender, image, origin, episode };
	});

	return (
		<DetailPageStyled>
			<Header />
			{!isLoading && <CharacterDetail character={data as ICharacterDetail} />}
		</DetailPageStyled>
	);
};

export default DetailPage;
