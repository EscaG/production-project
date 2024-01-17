import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (props) => <Dropdown {...props} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom left',
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
    { content: 'fourth' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom right',
  items: [
    { content: 'first' },
    { content: 'second', disabled: true },
    { content: 'third' },
    { content: 'fourth' },
  ],
};
BottomRight.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeftOrange = Template.bind({});
TopLeftOrange.args = {
  trigger: <Button>Open</Button>,
  direction: 'top left',
  items: [
    { content: 'first' },
    { content: 'second', disabled: true },
    { content: 'third' },
    { content: 'fourth' },
  ],
};
TopLeftOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const TopRight = Template.bind({});
TopRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'top right',
  items: [
    { content: 'first' },
    { content: 'second', disabled: true },
    { content: 'third' },
    { content: 'fourth' },
  ],
};
