import { Newsletter } from '@/features/newsletter/newsletter-page'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Newsletter> = {
    component: Newsletter,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const defaultNewsletter: Story = {
    args: {

    }
}