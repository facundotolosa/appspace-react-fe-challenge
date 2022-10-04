import { ThemeProvider } from 'styled-components';
import Character from './components/Character/Character';
import styledMainTheme from './styledMainTheme';

const App = () => (
	<ThemeProvider theme={styledMainTheme}>
		<h1>Website under construction</h1>
		<Character />
	</ThemeProvider>
);

export default App;
