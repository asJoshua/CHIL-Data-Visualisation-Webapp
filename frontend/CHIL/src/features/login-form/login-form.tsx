import { use, useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';

const LoginForm = () => {
    const [ showError, setError ] = useState(false)
    const [ usernameErrorMessage, setUsernameErrorMessage ] = useState("")
    const [ passwordErrorMessage, setPasswordErrorMessage ] = useState("")

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        console.log("Username: ", username);
        console.log("Password: ", password);
    };

    return (
        <Box
            sx={{width: '20vw', height: '50vh'}}
        >
            <form className='flex flex-col gap-y-4 flex-wrap justify-center'>
                <h1 className='text-3xl font-bold text-center'>LOGIN</h1>
                <TextField
                    variant='outlined'
                    label='Username'
                    error={showError}
                    helperText={showError ? usernameErrorMessage : "" }
                    onChange={handleUsernameChange}
                    />
                <TextField
                    variant='outlined'
                    label='Password'
                    type='password'
                    error={showError}
                    helperText={showError ? passwordErrorMessage : "" }
                    onChange={handlePasswordChange}
                    />
                <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    onClick={handleLogin}
                    >
                    Login
                </Button>
            </form>
        </Box>
    );
};

export { LoginForm };
