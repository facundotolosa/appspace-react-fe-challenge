import { ThemeProvider } from 'styled-components';
import Character from './components/Character/Character';
import { character } from './mocks/characterMocks';
import styledMainTheme from './styledMainTheme';

const App = () => {
	return (
		<ThemeProvider theme={styledMainTheme}>
			<h1>Website under construction</h1>
			<Character character={character} />
		</ThemeProvider>
	);
};

export default App;
