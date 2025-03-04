import React from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';

const AboutUsRoot = (): React.JSX.Element => {
    return (
        <PublicLayout className='flex justify-center items-center h-screen'>
            <div className='text-3xl'>About Us</div>
        </PublicLayout>
    )
}

export { AboutUsRoot }