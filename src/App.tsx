import { ThemeProvider } from 'styled-components';
import Character from './components/Character/Character';
import styledMainTheme from './styledMainTheme';

const App = () => {
	const character = {
		name: 'Rick Sanchez',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		species: 'Human',
		gender: 'Male'
	};

	return (
		<ThemeProvider theme={styledMainTheme}>
			<h1>Website under construction</h1>
			<Character character={character} />
		</ThemeProvider>
	);
};

export default App;
