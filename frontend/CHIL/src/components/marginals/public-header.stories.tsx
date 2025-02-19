import { PublicHeader } from '@/components/marginals/public-header'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PublicHeader> = {
    component: PublicHeader,
};

export default meta;
type Story = StoryObj<typeof PublicHeader>;

export const defaultPublicHeader: Story = {
    args: {

    }
}