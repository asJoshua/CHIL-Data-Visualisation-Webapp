import type { Meta, StoryObj } from '@storybook/react';

import { listItem } from './listItem';

const meta = {
  component: listItem,
} satisfies Meta<typeof listItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemTitle: "Hello world"
  }
};