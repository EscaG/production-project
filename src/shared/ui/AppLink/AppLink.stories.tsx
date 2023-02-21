import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'TEXT',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'TEXT',
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDARK = Template.bind({});
PrimaryDARK.args = {
  children: 'TEXT',
  theme: AppLinkTheme.PRIMARY,
};

export const SecondaryDARK = Template.bind({});
SecondaryDARK.args = {
  children: 'TEXT',
  theme: AppLinkTheme.SECONDARY,
};

PrimaryDARK.decorators = [ThemeDecorator(Theme.DARK)];
SecondaryDARK.decorators = [ThemeDecorator(Theme.DARK)];
