import type { Meta, StoryObj } from '@storybook/react';
import { CounterTop } from './index';


const meta = {
  title: 'Counter/Templates/Top',
  component: CounterTop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CounterTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CounterTopPage: Story = {
  args: { count: 0 },
};
