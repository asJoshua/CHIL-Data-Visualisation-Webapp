import { TextField } from '@/components/ui/text-field/text-field'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
    title: "Components/Text-Field",
    component: TextField,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const defaultTextField: Story = {
    args: {
        required: false,
        disabled: false,
        type: "text",
        helperText: "Helper Text"
    }
}