import { ThemeProvider } from 'styled-components';
import CharacterList from './components/CharacterList/CharacterList';
import styledMainTheme from './styledMainTheme';
import { charactersToShow } from './mocks/characterMocks';

const App = () => {
	return (
		<ThemeProvider theme={styledMainTheme}>
			<h1>Website under construction</h1>
			<CharacterList charactersToShow={charactersToShow} />
		</ThemeProvider>
	);
};

export default App;
