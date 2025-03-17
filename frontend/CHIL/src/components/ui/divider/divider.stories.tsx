import { Divider } from '@/components/ui/divider/divider'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Divider> = {
    title: "Components/Divider",
    component: Divider,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const defaultDivider: Story = {
    args: {

    }
}