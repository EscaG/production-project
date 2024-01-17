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
  decorators: [
    (Story) => (
      <div style={{
        padding: 100,
        display: 'flex',
      }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (props) => <ListBox {...props} />;
const value: string = 'Katelyn Rohan';

export const TopLeft = Template.bind({});
TopLeft.args = {
  defaultValue: 'Выберите значение',
  direction: 'top left',
  value: '123',
  items: [
    { value: 'Durward Reynolds', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne' },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};

export const TopRightDark = Template.bind({});
TopRightDark.args = {
  defaultValue: 'Выберите значение',
  value: '123',
  direction: 'top right',
  items: [
    { value: '123', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne' },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};
TopRightDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRightOrange = Template.bind({});
BottomRightOrange.args = {
  defaultValue: 'Выберите значение',
  direction: 'bottom right',
  value: undefined,
  items: [
    { value: 'Durward Reynolds', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne', disabled: true },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};
BottomRightOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  defaultValue: 'Выберите значение',
  direction: 'bottom left',
  value,
  items: [
    { value: 'Durward Reynolds', content: 'Durward Reynolds' },
    { value: 'Kenton Towne', content: 'Kenton Towne', disabled: true },
    { value: 'Therese Wunsch', content: 'Therese Wunsch' },
    { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
    { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
  ],
};
