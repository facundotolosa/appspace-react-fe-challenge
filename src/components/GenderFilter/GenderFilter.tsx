import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { GenderFilterStyled } from './GenderFilterStyled';

interface Props {
	setRequestURL: Dispatch<SetStateAction<string>>;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

const GenderFilter = ({ setRequestURL, setCurrentPage }: Props): JSX.Element => {
	const handleGenderInputChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		setCurrentPage(1);
		setRequestURL(`${process.env.REACT_APP_API_URL}?gender=${event.target.value}`);
	};

	return (
		<GenderFilterStyled>
			<label htmlFor="Gender">Gender</label>
			<select name="Gender" id="Gender" onChange={handleGenderInputChange} className="select-gender">
				<option value="">All genders</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="unknown">Unknown</option>
			</select>
		</GenderFilterStyled>
	);
};

export default GenderFilter;