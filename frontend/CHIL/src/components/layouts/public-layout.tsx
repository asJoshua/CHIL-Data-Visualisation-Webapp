import React, { PropsWithChildren } from 'react';
import { PublicHeader } from '@/components/marginals/public-header';
import { Footer } from '@/components/marginals/footer';
import logo from '@/assets/images/CHIL-Logo.svg'
export type LayoutProps = PropsWithChildren & {
    className?: string
}

const PublicLayout = ({
    className,
    children
}: LayoutProps): React.JSX.Element => {
    return (
        <>
            <PublicHeader imageSrc={logo} />
                <div className={className}>
                    {children}
                </div>
            <Footer />
        </>
    );
}

export { PublicLayout }