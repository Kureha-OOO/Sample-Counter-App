import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';
import { APP_NAME } from '../../../common/constant';

const meta = {
  title: 'Counter/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

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