import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './index';


const meta = {
  title: 'Counter/Organisms/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CounterArea: Story = {
  args: {count: 0},
};
