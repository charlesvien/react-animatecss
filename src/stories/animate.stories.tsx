import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Animate from '../index';

export default {
  title: 'Animate',
  component: Animate,
} as Meta;

const Template: Story<ComponentProps<typeof Animate>> = (args) => (
  <Animate { ...args }>
    Magnolia
  </Animate>
);

export const AnimateStory = Template.bind({});

AnimateStory.args = {
  visible: true,
};