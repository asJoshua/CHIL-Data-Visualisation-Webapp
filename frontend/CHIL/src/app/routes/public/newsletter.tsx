import React from 'react';
import { PublicLayout } from '@/components/layouts/public-layout';
import { Newsletter } from '@/features/newsletter/newsletter-page';
import imagePlaceholder from "@/assets/images/yukon_mike_receiver.jpg";

const NewsletterRoot = (): React.JSX.Element => {
    return (
        <PublicLayout className='flex justify-center items-center h-screen'>
            <Newsletter apiURL='chil/newsletter/signup/' imageSrc={imagePlaceholder}/>
        </PublicLayout>
    )
}

export { NewsletterRoot }
