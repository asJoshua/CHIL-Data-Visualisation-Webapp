import React from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import { LoginForm } from '@/features/login-form/login-form';

const LoginRoot = (): React.JSX.Element => {
    return (
        <PublicLayout className='flex justify-center items-center h-screen'>
            <LoginForm />
        </PublicLayout>
    )
}

export { LoginRoot }