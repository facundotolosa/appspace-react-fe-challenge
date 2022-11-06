import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import styledMainTheme from './styledMainTheme';
import { lazy, Suspense } from 'react';

const DetailPage = lazy(() => import('./Pages/DetailPage/DetailPage'));
const CharactersPage = lazy(() => import('./Pages/CharactersPage/CharactersPage'));

const App = () => {
	return (
		<ThemeProvider theme={styledMainTheme}>
			<Suspense>
				<Routes>
					<Route path="/" element={<Navigate to="/characters" />} />
					<Route path="/characters" element={<CharactersPage />} />
					<Route path="/character/:id" element={<DetailPage />} />
				</Routes>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
