import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

let logoutDebounce = false

export type logoutArgs = {
    logoutURI: string,
    setToken: (string | null),
    navigate: (NavigateFunction),
}

// TODO: turn into component so we can call the hooks!!!
const logout = (
    logoutURI: string,
    setToken: (token: string | null) => void,
    navigate: NavigateFunction,
): boolean => {


    if (!logoutDebounce) {
        logoutDebounce = true;
        axios({
            method: 'post',
            url: logoutURI,
            withCredentials: true,
        })
        .then(() => {
            setToken(null);
            navigate(logoutURI);
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

export { logout }