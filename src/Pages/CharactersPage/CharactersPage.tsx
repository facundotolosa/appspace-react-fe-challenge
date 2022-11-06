import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';
import Footer from '../../components/Footer/Footer';
import useAPI from '../../hooks/useAPI';
import SearchBar from '../../components/SearchBar/SearchBar';
import GenderFilter from '../../components/GenderFilter/GenderFilter';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useSearchParams } from 'react-router-dom';

const CharactersPage = () => {
	const [params, setParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState(params.get('page') ? Number(params.get('page') as string) : 1);

	const getFirstRequestUrl = (): string => {
		if (params.get('page')) {
			return `${process.env.REACT_APP_API_URL}/?page=${params.get('page')}`;
		}

		if (params.get('gender')) {
			return `${process.env.REACT_APP_API_URL}/?gender=${params.get('gender')}`;
		}

		if (params.get('name')) {
			return `${process.env.REACT_APP_API_URL}/?name=${params.get('name')}`;
		}

		return `${process.env.REACT_APP_API_URL}`;
	};

	const [requestURL, setRequestURL] = useState(getFirstRequestUrl());
	const { data, isLoading, isError } = useAPI(requestURL);

	const paginate = (nextPage: boolean) => {
		params.set('page', `${nextPage ? currentPage + 1 : currentPage - 1}`);
		setParams(params);
		setRequestURL(nextPage ? data?.info.next : data?.info.prev);
		setCurrentPage(nextPage ? currentPage + 1 : currentPage - 1);
		window.scrollTo(0, 0);
	};

	return (
		<CharactersPageStyled>
			<Header />
			<section className="filters">
				<SearchBar
					setRequestURL={setRequestURL}
					setCurrentPage={setCurrentPage}
					params={params}
					setParams={setParams}
				/>
				<GenderFilter
					setRequestURL={setRequestURL}
					setCurrentPage={setCurrentPage}
					params={params}
					setParams={setParams}
				/>
			</section>

			{isLoading && <Loading />}
			{isError && <Error />}
			{!isLoading && !isError && (
				<>
					<CharacterList charactersToShow={data?.results} />
					<Footer
						actualPage={currentPage}
						nextPage={() => paginate(true)}
						previousPage={() => paginate(false)}
						totalPages={data?.info.pages}
					/>
				</>
			)}
		</CharactersPageStyled>
	);
};

export default CharactersPage;
