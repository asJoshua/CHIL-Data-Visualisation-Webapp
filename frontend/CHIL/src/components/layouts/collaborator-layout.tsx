import React, { PropsWithChildren } from 'react';
import { Footer } from '@/components/marginals/footer';
import { CollaboratorHeader } from '../marginals/collaborator-header';
export type LayoutProps = PropsWithChildren & {
    className?: string
}

const CollaboratorLayout = ({
    className,
    children
}: LayoutProps): React.JSX.Element => {
    return (
        <>
            <CollaboratorHeader />
                <div className={className}>
                    {children}
                </div>
            <Footer />
        </>
    );
}

export { CollaboratorLayout }