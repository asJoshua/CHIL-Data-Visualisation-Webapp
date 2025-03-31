import { useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { CustomJWTPayload } from "@/components/auth/protectedRoute"
import { useAuth } from '@/components/auth/authenticationProvider';
import { Typography } from '@mui/material';

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

    const { setToken } = useAuth();

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
                setToken(response.data.access);

                const groups = jwtDecode<CustomJWTPayload>(response.data.access)["groups"];

                switch(groups[0]){
                    case("admin"):
                        navigate("/admin/test");
                        break;
                    case("collaborator"):
                        navigate("/collaborator/test");
                        break;
                    default:
                        console.warn("Group not found: ", groups[0])
                        break;
                }
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

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Box
            sx={{width: 'auto', 
                height: 'auto',
                padding: 5, 
                borderRadius: "12px", 
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
                backgroundColor: "white",
                animation: "fadeIn 0.5s ease-in-out"
            }}
        >
            <form className='flex flex-col gap-y-4 flex-wrap justify-center' onKeyDown={handleKeyPress}>
                <Typography variant='h2' sx={{textAlign: 'center'}}>LOGIN</Typography>
                <TextField
                    variant='outlined'
                    label='Username'
                    error={showUsernameError}
                    helperText={showUsernameError ? usernameErrorMessage : "" }
                    onChange={handleUsernameChange}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "black" }, 
                            "&:hover fieldset": { borderColor: "black" }, 
                            "&.Mui-focused fieldset": { borderColor: "black" }
                        } }}
                    />
                <TextField
                    variant='outlined'
                    label='Password'
                    type='password'
                    error={showPasswordError}
                    helperText={showPasswordError ? passwordErrorMessage : "" }
                    onChange={handlePasswordChange}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "black" }, 
                            "&:hover fieldset": { borderColor: "black" }, 
                            "&.Mui-focused fieldset": { borderColor: "black" }
                        } }}
                    />
                <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    onClick={handleLogin}
                    >
                    Continue
                </Button>
            </form>
        </Box>
    );
};

export { LoginForm };
