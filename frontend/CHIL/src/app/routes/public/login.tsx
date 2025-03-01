import React, { useEffect } from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import { LoginForm } from '@/features/login-form/login-form';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { CustomJWTPayload } from '@/components/auth/protectedRoute';
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";

const LoginRoot = (): React.JSX.Element => {

    const navigate = useNavigate();

    // Only allow on this page if not authenticated, else redirect to logged in home page
    useEffect(() => {
        const token = localStorage.getItem("token") || ''

        if (token !== ''){
            const groups = jwtDecode<CustomJWTPayload>(token)["groups"];

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
            }
    });

    return (
        <ThemeProvider theme={theme}>
            <PublicLayout className='flex justify-center items-center h-screen'>
            <LoginForm tokenURI='chil/auth/token/' />
        </PublicLayout>
        </ThemeProvider>
    )
}

export { LoginRoot }
