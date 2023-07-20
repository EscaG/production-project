import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator';
import { I18nDecorator } from '../../src/shared/config/storyBook/I18nDecorator/I18nDecorator';
import { TranslationDecorator } from '../../src/shared/config/storyBook/TranslationDecorator/TranslationDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
// addDecorator(I18nDecorator);
