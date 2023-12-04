import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import {
  articleDetailsPageRecommendationsReducer,
} from '../slices/articleDetailsPageRecommendationsSlice';
import {
  articleDetailsCommentsReducer,
} from '../slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
