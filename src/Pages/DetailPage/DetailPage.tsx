import { useParams } from 'react-router-dom';
import { DetailPageStyled } from './DetailPageStyled';
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from '../../components/Header/Header';

const DetailPage = () => {
	const { id } = useParams();

	const { data } = useQuery(['character'], async () => {
		const {
			data: { name, status, species, gender, image }
		} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

		return { name, status, species, gender, image };
	});

	return (
		<DetailPageStyled>
			<Header />
			<h1>Detail page of {data?.name}</h1>
		</DetailPageStyled>
	);
};

export default DetailPage;
