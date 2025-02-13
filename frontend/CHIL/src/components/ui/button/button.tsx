import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type ButtonProps = MuiButtonProps

const Button = ({
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <MuiButton
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

export { Button };