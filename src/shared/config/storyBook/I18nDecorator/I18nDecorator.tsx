import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

export const I18nDecorator = (StoryComponent: Story) => (
  <Suspense fallback="">
    <I18nextProvider i18n={i18n}>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
);
