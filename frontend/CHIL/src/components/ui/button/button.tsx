import { cva, VariantProps } from "class-variance-authority";
import { Button as MuiButton } from '@mui/material';

import { cn } from '@/utils/cn';

const buttonVariants = cva(

)

const Button = ({ className, children, ...props }: muiButton) => {
    return (
        <MuiButton
            className={cn}
        >
            {children}
        </MuiButton>
    )
}