// import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';

const LoginForm = () => {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center'>
            <h1>LOGIN</h1>
            <TextField
                variant='outlined'
                label='Username'
            />
            <TextField
                variant='outlined'
                label='Password'
            />
            <Button
                variant='contained'
                size='small'
                color='primary'
            >
                Login
            </Button>
        </div>
    );
};

export { LoginForm };