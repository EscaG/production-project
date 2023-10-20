import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text:
    `<!DOCTYPE html>
<html>
  <body>
    <p id="hello"></p>

    <script>
      document.getElementById("hello").innerHTML = "Hello, world!";
    </script>
  </body>
</html>
`,

};
