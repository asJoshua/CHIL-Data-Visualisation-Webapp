import { LoginForm } from '@/features/login-form/login-form'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const defaultLoginForm: Story = {
    args: {

    }
}