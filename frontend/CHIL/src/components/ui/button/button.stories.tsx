import { Button } from '@/components/ui/button/button'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    component: Button,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const defaultButton: Story = {
    args: {
        variant: "contained",
        size: "small",
        color: "primary",
        children: [<p>Button</p>],
    }
}