import type { Meta, StoryObj } from '@storybook/react';

import { DatePickerComp } from './datePickerComp';

const meta = {
  component: DatePickerComp,
} satisfies Meta<typeof DatePickerComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "Default Story",
    dateFormat: "yyyy-mm-dd",
    placeholderText: "Placeholder text",    
  }
};

