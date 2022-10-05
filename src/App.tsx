import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import styledMainTheme from './styledMainTheme';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import DetailPage from './Pages/DetailPage/DetailPage';

const App = () => {
	return (
		<ThemeProvider theme={styledMainTheme}>
			<Routes>
				<Route path="/" element={<Navigate to="/characters" />} />
				<Route path="/characters" element={<CharactersPage />} />
				<Route path="/character/:id" element={<DetailPage />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
