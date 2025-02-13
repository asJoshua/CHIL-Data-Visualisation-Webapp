import { useState } from 'react';
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
        let shouldError = false;
        let usernameErrorMessage = "";
        let passwordErrorMessage = "";

        // Basic input validation
        if (username === "") {
            shouldError = true;
            usernameErrorMessage = "Must not be blank";
        }

        if (password === "") {
            shouldError = true;
            passwordErrorMessage = "Must not be blank";
        }

        // If inputs are blank, don't make the API request
        if (shouldError === true){
            setError(shouldError);
            setUsernameErrorMessage(usernameErrorMessage);
            setPasswordErrorMessage(passwordErrorMessage);
            return false;
        } 

        // Change to a promise and api request
        const success = false;

        if (success){
            // Set tokens to local storage
            // Redirect to correct auth page
            setError(false);
            setUsernameErrorMessage("");
            setPasswordErrorMessage("");
            return true;
        } else {
            // Username or Password wrong
            setError(true);
            setUsernameErrorMessage("Username or Password incorrect");
            setPasswordErrorMessage("Username or Password incorrect");
            return false;
        }
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
