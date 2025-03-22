import {
    IconButton as MuiIconButton,
    IconButtonProps as MuiIconButtonProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type IconButtonProps = MuiIconButtonProps

const IconButton = ({
    className,
    children,
    ...props
}: IconButtonProps) => {
    return (
        <MuiIconButton
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiIconButton>
    );
};

export { IconButton };