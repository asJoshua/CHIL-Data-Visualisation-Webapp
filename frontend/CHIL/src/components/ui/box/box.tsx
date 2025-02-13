import {
    Box as MuiBox,
    BoxProps as MuiBoxProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type BoxProps = MuiBoxProps

const Box = ({
    className,
    children,
    ...props
}: BoxProps) => {
    return (
        <MuiBox
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiBox>
    );
};

export { Box };