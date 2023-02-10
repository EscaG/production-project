import React, {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {routeConfig} from 'shared/config/routerConfig/routeConfig';

const MyComponent: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{/*<Route path={'/'} element={<MainPage/>}/>*/}
				{/*<Route path={'/about'} element={<AboutPage/>}/>*/}
					{Object.values(routeConfig).map(({element,path})=> (
							<Route
								key={path}
								path={path}
								element={element}
							/>
						)
				)}
			</Routes>
		</Suspense>
	);
};

export default MyComponent;
