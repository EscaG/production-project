import {FC} from 'react';

import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';

import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import './styles/index.scss';


export const App: FC = () => {
	const {theme, toggleTheme} = useTheme();


	return (
		<div className={classNames('app', {}, [theme])}>


			<Navbar/>
			<AppRouter/>

			<button onClick={toggleTheme}>Theme</button>

		</div>
	);
};

