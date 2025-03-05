import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

// Adapted from: https://dev.to/sanjayttg/jwt-authentication-in-react-with-react-router-1d03
// Accessed: 17 Feb 2025

type AuthContextType = {
    token: string | null;
    setToken: (newToken: string | null) => void;
}

type AuthProviderType = {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token',token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);

    const contextValue = useMemo<AuthContextType>(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
