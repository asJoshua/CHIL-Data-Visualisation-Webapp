import type { Meta, StoryObj } from '@storybook/react';

import { DropDownSelect } from './select';

const meta = {
  component: DropDownSelect,
} satisfies Meta<typeof DropDownSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectLabel: "Instrument",
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'date', label: 'Date' } ],
    labelText: "Label Text",
    selectId: "Select id",
    labelId: "Select Label Id",
  }
};

