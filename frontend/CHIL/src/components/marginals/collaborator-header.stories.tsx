import { Meta, StoryObj } from "@storybook/react";
import { CollaboratorHeader } from "./collaborator-header";
import CustomThemeProvider from "@/theme/ThemeProvider";
import { ReactNode } from "react";

const meta: Meta<typeof CollaboratorHeader> = {
  title: "Components/CollaboratorHeader",
  component: CollaboratorHeader,
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

type Story = StoryObj<typeof CollaboratorHeader>;

export const DefaultPublicHeader: Story = {};
