import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';
import { APP_NAME } from '../../../common/constant';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Counter/Organisms/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Blue: Story = {
  args: {
    title: APP_NAME,
    bgColor: 'blue',
  },
};

export const White: Story = {
  args: {
    title: 'White App',
    bgColor: 'white',
  },
};

export const Gray: Story = {
  args: {
    title: 'Gray App',
    bgColor: 'gray',
  },
};