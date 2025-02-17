import React from 'react';
import { DeploymentsPage } from '@/features/deployments';
import { PublicLayout } from '@/components/layouts/public-layout';

const DeploymentsRoot = (): React.JSX.Element => {
    return (
        <PublicLayout>
            <DeploymentsPage/>
        </PublicLayout>
    );
}

export { DeploymentsRoot };
