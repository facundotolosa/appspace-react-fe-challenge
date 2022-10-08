import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import { SearchBarStyled } from './SearchBarStyled';

const SearchBar = (): JSX.Element => {
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

	return (
		<SearchBarStyled>
			<div className="form-field">
				<label htmlFor="search">Search</label>
				<input
					type="text"
					id="search"
					value={formValues.search}
					onChange={handleInputChange}
					autoComplete="off"
					placeholder="Search..."
				/>
			</div>
			<FontAwesomeIcon icon={faMagnifyingGlass} color="black" />
		</SearchBarStyled>
	);
};

export default SearchBar;
