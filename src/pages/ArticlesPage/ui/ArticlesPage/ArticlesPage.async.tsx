import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => import('./ArticlesPage'));
// export const ArticlesPageAsync = lazy(() => import('./ArticlesPage')
//   .then((module) => ({ default: module.ArticlesPage })));
