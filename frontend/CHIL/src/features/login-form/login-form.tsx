import { useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import axios from 'axios';

export type LoginFormProps = {
    tokenURI: string,
    refreshTokenURI: string,
}

const LoginForm = ({
    tokenURI,
    refreshTokenURI
}: LoginFormProps) => {
    const [ showError, setError ] = useState(false)
    const [ usernameErrorMessage, setUsernameErrorMessage ] = useState("")
    const [ passwordErrorMessage, setPasswordErrorMessage ] = useState("")

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameInput(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value);
    };

    const handleLogin = () => {
        let shouldError = false;
        let usernameErrorMessage = "";
        let passwordErrorMessage = "";

        // Basic input validation
        if (usernameInput === "") {
            shouldError = true;
            usernameErrorMessage = "Must not be blank";
        }

        if (passwordInput === "") {
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
        axios({
            method: 'post',
            url: 'chil/auth/token/',
            data: {
                username: usernameInput,
                password: passwordInput,
            }
        })
            .then((response) => {
                // Set tokens to local storage
                // Redirect to correct auth page
                setError(false);
                setUsernameErrorMessage("");
                setPasswordErrorMessage("");
                console.log(response.data);
                return true;
            })
            .catch((error) => {
                if (error.response) {
                    // Username or Password wrong
                    setError(true);
                    setUsernameErrorMessage("Username or Password incorrect");
                    setPasswordErrorMessage("Username or Password incorrect");
                    return false;
                } else {
                    console.error(error.message);
                }
                console.warn(error.config);
            })


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
