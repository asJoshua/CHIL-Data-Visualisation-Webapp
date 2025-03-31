import { Accordion } from '@/components/ui/accordion/accordion'
import { Meta, StoryObj } from '@storybook/react'
import { AccordionDetails } from './accordion-details';
import { AccordionSummary } from './accordion-summary';

const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,

    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const defaultAccordion: Story = {
    render: (args) => {
        <Accordion {...args}>
            <AccordionDetails></AccordionDetails>
            <AccordionSummary></AccordionSummary>
        </Accordion>
    }
}