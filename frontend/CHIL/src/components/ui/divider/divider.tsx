import {
    Divider as MuiDivider,
    DividerProps as MuiDividerProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type DividerProps = MuiDividerProps

const Divider = ({
    className,
    children,
    ...props
}: DividerProps) => {
    return (
        <MuiDivider
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiDivider>
    );
};

export { Divider };