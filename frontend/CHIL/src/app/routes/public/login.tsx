import React, { useEffect } from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import { LoginForm } from '@/features/login-form/login-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { CustomJWTPayload } from '@/components/auth/protectedRoute';

const LoginRoot = (): React.JSX.Element => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token") || ''

        if (token !== ''){
            const groups = jwtDecode<CustomJWTPayload>(token)["groups"];

            switch(groups[0]){
                case("admin"):
                    console.log("admin")
                    navigate("/admin/test");
                    break;
                case("collaborator"):
                    console.log("collaborator")
                    navigate("/collaborator/test");
                    break;
                default:
                    console.warn("Group not found: ", groups[0])
                    break;
                }
            }
    });

    return (
        <PublicLayout className='flex justify-center items-center h-screen'>
            <LoginForm tokenURI='chil/auth/token/' />
        </PublicLayout>
    )
}

export { LoginRoot }
