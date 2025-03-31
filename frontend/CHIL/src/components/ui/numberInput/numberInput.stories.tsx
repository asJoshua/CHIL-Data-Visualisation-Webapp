import type { Meta, StoryObj } from '@storybook/react';

import { NumberSelect } from './numberInput';

const meta = {
  component: NumberSelect,
} satisfies Meta<typeof NumberSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "numberSelect",
    label: "numberSelect"
  }
};