import React from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import { Newsletter } from '@/features/newsletter/newsletter-page';

const NewsletterRoot = (): React.JSX.Element => {
    return (
        <PublicLayout className='flex justify-center items-center h-screen'>
            <Newsletter/>
        </PublicLayout>
    )
}

export { NewsletterRoot }
