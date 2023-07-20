import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const RouterDecorator = (story: ()=> Story) => (
  <BrowserRouter>
    <Suspense fallback="">
      {story()}
    </Suspense>
  </BrowserRouter>
);
