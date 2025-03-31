import {
    AccordionDetails as MuiAccordionDetails,
    AccordionDetailsProps as MuiAccordionDetailsProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type AccordionDetailsProps = MuiAccordionDetailsProps

const AccordionDetails = ({
    className,
    children,
    ...props
}: AccordionDetailsProps) => {
    return (
        <MuiAccordionDetails
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiAccordionDetails>
    );
};

export { AccordionDetails };