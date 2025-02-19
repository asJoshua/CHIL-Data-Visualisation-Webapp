import { Box } from "@/components/ui/box/box";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Box> = {
  title: "Components/Box", 
  component: Box,

  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const defaultBox: Story = {
  args: {
    children: "This is a Box!", 
  },
};
