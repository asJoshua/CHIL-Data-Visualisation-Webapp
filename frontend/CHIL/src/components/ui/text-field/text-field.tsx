import {
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps
} from '@mui/material';

import { cn } from '@/utils/cn';

export type TextFieldProps = MuiTextFieldProps

const TextField = ({
    className,
    children,
    ...props
}: TextFieldProps) => {

    return (
        <MuiTextField
            className={cn(className)}
            {...props}
        >
            {children}
        </MuiTextField>
    );
};

export { TextField };