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
const value: string = 'Katelyn Rohan';

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'Выберите значение',
  value,
  direction: 'bottom',
  items: [
    { value: 'Durward Reynolds', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne' },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  defaultValue: 'Выберите значение',
  value,
  direction: 'bottom',
  items: [
    { value: 'Durward Reynolds', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne' },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeNotChosen = Template.bind({});
OrangeNotChosen.args = {
  defaultValue: 'Выберите значение',
  value: undefined,
  direction: 'bottom',
  items: [
    { value: 'Durward Reynolds', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne', disabled: true },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};
OrangeNotChosen.decorators = [ThemeDecorator(Theme.ORANGE)];
