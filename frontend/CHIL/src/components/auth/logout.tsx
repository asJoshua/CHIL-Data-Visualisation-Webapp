import axios from 'axios';


let logoutDebounce = false

export const logout = (logoutURI: string): boolean => {

    if (!logoutDebounce) {
        logoutDebounce = true;
        axios({
            method: 'post',
            url: logoutURI,
            withCredentials: true,
        })
        .then(() => {
            localStorage.removeItem('token');
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