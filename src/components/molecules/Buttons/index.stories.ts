import type { Meta, StoryObj } from '@storybook/react';
import { Buttons } from './index';

const meta = {
  title: 'Counter/Molecules/Button',
  component: Buttons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountButtons: Story = {
  args: {},
};
