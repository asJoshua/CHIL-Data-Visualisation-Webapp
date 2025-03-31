import {
    AccordionSummary as MuiAccordionSummary,
    AccordionSummaryProps as MuiAccordionSummaryProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type AccordionSummaryProps = MuiAccordionSummaryProps

const AccordionSummary = ({
    className,
    children,
    ...props
}: AccordionSummaryProps) => {
    return (
        <MuiAccordionSummary
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiAccordionSummary>
    );
};

export { AccordionSummary };