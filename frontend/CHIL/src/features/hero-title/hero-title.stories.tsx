import { HeroTitle } from '@/features/hero-title/hero-title'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HeroTitle> = {
    component: HeroTitle,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof HeroTitle>;

export const defaultHeroTitle: Story = {
    args: {

    }
}