import axios from "axios";
import { useAuth } from "../components/auth/authenticationProvider.tsx";

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        const { setToken } = useAuth();

        axios({
			method: 'post',
			url: 'chil/auth/token/refresh',
			withCredentials: true,
        })
			.then(response => {
			if (response.status === 200) {
				setToken(response.data.access);
			}
			})
			.catch((error) => {
				console.error(error.config);
			})
    }
    refresh = false;
    return error;
});