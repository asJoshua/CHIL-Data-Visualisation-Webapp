import React from 'react'
import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import '@/index.css'
import 'tailwindcss/tailwind.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};


export default preview;
