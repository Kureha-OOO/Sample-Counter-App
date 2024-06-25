import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { MINUS, PLUS, RESET } from '../../../common/constant';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Counter/Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const SmGray: Story = {
  args: {
    bgColor: 'gray',
    size: 'sm',
    label: 'Test'
  },
};
export const Plus: Story = {
  args: {
    bgColor: 'blue',
    size: 'md',
    label: PLUS,
  },
};

export const Minus: Story = {
  args: {
    bgColor: 'red',
    size: 'md',
    label: MINUS,
  },
};

export const Reset: Story = {
  args: {
    bgColor: 'green',
    size: 'md',
    label: RESET
  },
};

