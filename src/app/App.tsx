import {FC, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';

import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import './styles/index.scss';


export const App: FC = () => {
	const {theme, toggleTheme} = useTheme();


	return (
		<div className={classNames('app', {}, [theme])}>

			<button onClick={toggleTheme}>Theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage/>}/>
					<Route path={'/about'} element={<AboutPage/>}/>
				</Routes>
			</Suspense>

		</div>
	);
};

