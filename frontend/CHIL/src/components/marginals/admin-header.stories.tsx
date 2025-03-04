import { Meta, StoryObj } from "@storybook/react";
import { AdminHeader } from "./admin-header";
import CustomThemeProvider from "@/theme/ThemeProvider";
import { ReactNode } from "react";

const meta: Meta<typeof AdminHeader> = {
  title: "Components/AdminHeader",
  component: AdminHeader,
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

type Story = StoryObj<typeof AdminHeader>;

export const DefaultPublicHeader: Story = {};
