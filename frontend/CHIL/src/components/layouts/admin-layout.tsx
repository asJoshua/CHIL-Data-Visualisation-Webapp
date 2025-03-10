import React, { PropsWithChildren } from 'react';
import { Footer } from '@/components/marginals/footer';
import { AdminHeader } from '../marginals/admin-header';
export type LayoutProps = PropsWithChildren & {
    className?: string
}

const AdminLayout = ({
    className,
    children
}: LayoutProps): React.JSX.Element => {
    return (
        <>
            <AdminHeader />
                <div className={className}>
                    {children}
                </div>
            <Footer />
        </>
    );
}

export { AdminLayout }