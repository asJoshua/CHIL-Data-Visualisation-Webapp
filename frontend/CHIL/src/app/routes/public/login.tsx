import React from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import { LoginForm } from '@/features/login-form/login-form';

const LoginRoot = (): React.JSX.Element => {
    return (
        <PublicLayout className='flex justify-center items-center h-screen'>
            <LoginForm tokenURI='chil/auth/token/' />
        </PublicLayout>
    )
}

export { LoginRoot }
