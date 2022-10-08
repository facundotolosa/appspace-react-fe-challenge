import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { SearchBarStyled } from './SearchBarStyled';

interface Props {
	setRequestURL: Dispatch<SetStateAction<string>>;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

const SearchBar = ({ setRequestURL, setCurrentPage }: Props): JSX.Element => {
	const initialFormValue = {
		search: ''
	};

	const [formValues, setFormValues] = useState(initialFormValue);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setFormValues({
			...formValues,
			search: event.target.value
		});
	};

	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setCurrentPage(1);
		setRequestURL(`https://rickandmortyapi.com/api/character/?name=${formValues.search}`);
	};

	return (
		<SearchBarStyled>
			<form className="search-form" onSubmit={submitForm}>
				<label htmlFor="search">Search</label>
				<input
					type="text"
					id="search"
					value={formValues.search}
					onChange={handleInputChange}
					autoComplete="off"
					placeholder="Search..."
				/>

				<button type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} color="black" type="submit" />
				</button>
			</form>
		</SearchBarStyled>
	);
};

export default SearchBar;
