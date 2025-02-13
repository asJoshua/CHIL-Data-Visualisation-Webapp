import React, { PropsWithChildren } from 'react';
import { PublicHeader } from '@/components/marginals/public-header';

export type LayoutProps = PropsWithChildren & {
    className?: string
}

const PublicLayout = ({
    className,
    children
}: LayoutProps): React.JSX.Element => {
    return (
        <>
            <PublicHeader />
            <div className={className}>
                {children}
            </div>
        </>
    );
}

export { PublicLayout }