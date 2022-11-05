import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { GenderFilterStyled } from './GenderFilterStyled';

interface Props {
	setRequestURL: Dispatch<SetStateAction<string>>;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	params: URLSearchParams;
	setParams: any;
}

const GenderFilter = ({ setRequestURL, setCurrentPage, params, setParams }: Props): JSX.Element => {
	const handleGenderInputChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		setCurrentPage(1);
		setRequestURL(`${process.env.REACT_APP_API_URL}?gender=${event.target.value}`);
		params.set('gender', event.target.value);
		setParams(params);
	};

	return (
		<GenderFilterStyled>
			<label htmlFor="Gender">Gender</label>
			<select name="Gender" id="Gender" onChange={handleGenderInputChange} className="select-gender">
				<option value="">All genders</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">Unknown</option>
			</select>
		</GenderFilterStyled>
	);
};

export default GenderFilter;
