import React, { PropsWithChildren } from 'react';
import { Footer } from '@/components/marginals/footer';
import { AdminHeader } from '../marginals/admin-header';
import logo from '@/assets/images/CHIL-Logo.svg'
export type LayoutProps = PropsWithChildren & {
    className?: string
}

const AdminLayout = ({
    className,
    children
}: LayoutProps): React.JSX.Element => {
    return (
        <>
            <AdminHeader imageSrc={logo}/>
                <div className={className} style={{minHeight:'100vh'}}>
                    {children}
                </div>
            <Footer />
        </>
    );
}

export { AdminLayout }