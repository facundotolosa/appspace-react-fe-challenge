import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import styledMainTheme from './styledMainTheme';
import CharactersPage from './Pages/CharactersPage/CharactersPage';

const App = () => {
	return (
		<ThemeProvider theme={styledMainTheme}>
			<Routes>
				<Route path="/" element={<Navigate to="/characters" />} />
				<Route path="/characters" element={<CharactersPage />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
