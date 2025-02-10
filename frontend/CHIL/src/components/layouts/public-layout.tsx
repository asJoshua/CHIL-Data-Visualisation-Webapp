import React, { PropsWithChildren } from 'react';
import { PublicHeader } from '../marginals/public-header';

const PublicLayout = ({ children }: PropsWithChildren): React.JSX.Element => {
    return (
        <>
            <PublicHeader />
            {children}
        </>
    );
}

export { PublicLayout }