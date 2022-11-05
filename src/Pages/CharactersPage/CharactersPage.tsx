import { useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Header from '../../components/Header/Header';
import { CharactersPageStyled } from './CharactersPageStyled';
import Footer from '../../components/Footer/Footer';
import useAPI from '../../hooks/useAPI';
import SearchBar from '../../components/SearchBar/SearchBar';
import GenderFilter from '../../components/GenderFilter/GenderFilter';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CharactersPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [requestURL, setRequestURL] = useState(`${process.env.REACT_APP_API_URL}`);
	const [params, setParams] = useSearchParams();

	const { data, isLoading, isError } = useAPI(requestURL);

	const paginate = (nextPage: boolean) => {
		setParams({ page: `${nextPage ? currentPage + 1 : currentPage - 1}` });
		setRequestURL(nextPage ? data?.info.next : data?.info.prev);
		setCurrentPage(nextPage ? currentPage + 1 : currentPage - 1);
		window.scrollTo(0, 0);
	};

	return (
		<CharactersPageStyled>
			<Header />
			<section className="filters">
				<SearchBar setRequestURL={setRequestURL} setCurrentPage={setCurrentPage} />
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
