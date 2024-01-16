import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (props) => <ListBox {...props} />;
let value: string| undefined;
function setValue(str: string):void {
  value = str;
}

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'Выберите значение',
  onChange: (str) => setValue(str),
  value,
  direction: 'bottom',
  items: [
    { value: '1', content: '123' },
    { value: '2', content: 'as' },
    { value: '3', content: 'xcv', disabled: true },
    { value: '4', content: 'ewt' },
    { value: '5', content: 'tyjrthtrth' },
  ],
};

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
