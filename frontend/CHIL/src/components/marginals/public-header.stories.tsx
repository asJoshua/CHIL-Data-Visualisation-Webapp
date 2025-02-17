import { Meta, StoryObj } from "@storybook/react";
import { PublicHeader } from "./public-header";
import CustomThemeProvider from "../../theme/ThemeProvider";
import { ReactNode } from "react";

const meta: Meta<typeof PublicHeader> = {
  title: "Components/PublicHeader",
  component: PublicHeader,
  parameters: {
    layout: "fullscreen", 
  },
  decorators: [
    (Story: () => ReactNode) => (
      <CustomThemeProvider>
        <Story />
      </CustomThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PublicHeader>;

export const DefaultPublicHeader: Story = {};
