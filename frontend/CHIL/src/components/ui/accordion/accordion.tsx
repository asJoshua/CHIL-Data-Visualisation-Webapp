import {
    Accordion as MuiAccordion,
    AccordionProps as MuiAccordionProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type AccordionProps = MuiAccordionProps

const Accordion = ({
    className,
    children,
    ...props
}: AccordionProps) => {
    return (
        <MuiAccordion
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiAccordion>
    );
};

export { Accordion };