import { useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export type LoginFormProps = {
    tokenURI: string,
}

const LoginForm = ({
    tokenURI,
}: LoginFormProps) => {
    const [ showUsernameError, setUsernameError ] = useState(false)
    const [ showPasswordError, setPasswordError ] = useState(false)
    const [ usernameErrorMessage, setUsernameErrorMessage ] = useState("")
    const [ passwordErrorMessage, setPasswordErrorMessage ] = useState("")

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

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
            setUsernameError(true);
            usernameErrorMessage = "Must not be blank";
        } else {
            setUsernameError(false);
        }

        if (passwordInput === "") {
            shouldError = true;
            setPasswordError(true)
            passwordErrorMessage = "Must not be blank";
        } else {
            setPasswordError(false);
        }

        // If inputs are blank, don't make the API request
        if (shouldError === true){
            setUsernameErrorMessage(usernameErrorMessage);
            setPasswordErrorMessage(passwordErrorMessage);
            return false;
        }

        // Change to a promise and api request
        axios({
            method: 'post',
            url: tokenURI,
            withCredentials: true,
            data: {
                username: usernameInput,
                password: passwordInput,
            }
        })
            .then((response) => {
                // Set JWT to local storage (Refresh token should be stored in HTTP only cookie)
                // Redirect to correct auth page
                setUsernameError(false);
                setPasswordError(false);
                setUsernameErrorMessage("");
                setPasswordErrorMessage("");
                localStorage.setItem('token', response.data.access);
                // navigate('/home');
                return true;
            })
            .catch((error) => {
                if (error.response) {
                    // Username or Password wrong
                    setUsernameError(true);
                    setPasswordError(true);
                    setUsernameErrorMessage("Username or Password incorrect");
                    setPasswordErrorMessage("Username or Password incorrect");
                    return false;
                } else {
                    console.error(error.message);
                }
                console.log(error.config);
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
                    error={showUsernameError}
                    helperText={showUsernameError ? usernameErrorMessage : "" }
                    onChange={handleUsernameChange}
                    />
                <TextField
                    variant='outlined'
                    label='Password'
                    type='password'
                    error={showPasswordError}
                    helperText={showPasswordError ? passwordErrorMessage : "" }
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
