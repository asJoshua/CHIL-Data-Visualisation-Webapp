import { IconButton } from '@/components/ui/button/icon-button'
import { Meta, StoryObj } from '@storybook/react'
import DeleteIcon from '@mui/icons-material/Delete';

const meta: Meta<typeof IconButton> = {
    title: "Components/IconButton",
    component: IconButton,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const defaultIconButton: Story = {
    args: {
        size: "small",
        color: "secondary",
        children: [<DeleteIcon />],
    }
}