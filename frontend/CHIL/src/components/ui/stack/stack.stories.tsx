import { DirectionStack } from '@/components/ui/stack/stack'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DirectionStack> = {
    title: "Components/DirectionStack",
    component: DirectionStack,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof DirectionStack>;

export const defaultDirectionStack: Story = {
    args: {

    }
}