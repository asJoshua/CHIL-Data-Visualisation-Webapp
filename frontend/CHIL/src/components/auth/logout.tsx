import axios from 'axios';
import { useAuth } from './authenticationProvider';
import { useNavigate } from 'react-router-dom';

let logoutDebounce = false

// TODO: turn into component so we can call the hooks!!!
export const logout = (logoutURI: string): boolean => {

    const { setToken } = useAuth();
    const navigate = useNavigate();

    if (!logoutDebounce) {
        logoutDebounce = true;
        axios({
            method: 'post',
            url: logoutURI,
            withCredentials: true,
        })
        .then(() => {
            setToken();
            navigate(loginURI);
        })
        .catch((error) => {
            console.error(error.config);
            return false
        })
        logoutDebounce = false;
        return true;
    }

    return false
}