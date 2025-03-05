import { DirectionStack } from "@/components/ui/stack/stack";
import { Meta, StoryObj } from "@storybook/react";
import imagePlaceholder from "@/assets/images/BgICe.jpg";

const meta: Meta<typeof DirectionStack> = {
  title: "Components/DirectionStack",
  component: DirectionStack,

  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DirectionStack>;

// Sample data for Storybook
const sampleItems = [
  {
    imageSrc: imagePlaceholder,
    text: "This is the first card's text content.",
  },
  {
    imageSrc: imagePlaceholder,
    text: "This is the second card's text content.",
  },
  {
    imageSrc: imagePlaceholder,
    text: "This is the third card's text content.",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};
