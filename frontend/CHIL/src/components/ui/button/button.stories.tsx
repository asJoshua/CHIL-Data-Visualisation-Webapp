import { Button } from '@/components/ui/button/button'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const defaultButton: Story = {
    args: {
        variant: "outlined",
        size: "small",
        color: "secondary",
        fontWeight: "100",
        children: [<p>Button</p>],
    }
}