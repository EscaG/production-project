import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => import('./ArticleDetailsPage'));
// export const ArticleDetailsPageAsync = lazy(() => import('./ArticleDetailsPage')
//   .then((module) => ({ default: module.ArticleDetailsPage })));
