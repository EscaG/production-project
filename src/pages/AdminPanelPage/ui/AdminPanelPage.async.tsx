import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(() => import('./AdminPanelPage'));
// export const AboutPageAsync = lazy(() => import('./AboutPage')
//   .then((module) => ({ default: module.AboutPage })));
