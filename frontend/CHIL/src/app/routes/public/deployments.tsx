import React from 'react';
import { DeploymentsPage } from '@/features/deployments/deployments';
import { VariableLayout } from "@/components/layouts/variable-layout";

const DeploymentsRoot = (): React.JSX.Element => {
    return (
        <VariableLayout>
            <DeploymentsPage/>
        </VariableLayout>
    );
}

export { DeploymentsRoot };
