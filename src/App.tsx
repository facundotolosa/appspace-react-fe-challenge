import { ThemeProvider } from 'styled-components';
import CharacterList from './components/CharacterList/CharacterList';
import styledMainTheme from './styledMainTheme';

const App = () => {
	return (
		<ThemeProvider theme={styledMainTheme}>
			<h1>Website under construction</h1>
			<CharacterList />
		</ThemeProvider>
	);
};

export default App;
