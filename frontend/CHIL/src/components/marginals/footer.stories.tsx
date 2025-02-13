import { Footer } from '@/components/marginals/footer'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Footer> = {
    component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const defaultFooter: Story = {
    args: {

    }
}