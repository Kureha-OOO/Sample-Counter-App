import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { MINUS, PLUS, RESET } from '../../../common/constant';

const meta = {
  title: 'Counter/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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

