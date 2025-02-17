import axios from 'axios';

export type LogoutProps = {
    logoutURI: string,
}

let logoutDebounce = false

export const logout = ({
    logoutURI
}: LogoutProps): boolean => {

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