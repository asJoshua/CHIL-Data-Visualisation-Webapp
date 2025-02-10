import { Meta, StoryObj } from '@storybook/react'
import { PublicHeader } from './public-header'

const meta: Meta<typeof PublicHeader> = {
    component: PublicHeader,
};

export default meta;
type Story = StoryObj<typeof PublicHeader>;

export const defaultPublicHeader: Story = {
    args: {
        
    }
}