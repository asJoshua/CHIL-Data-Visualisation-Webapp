import React from 'react';
import { VariableLayout } from "@/components/layouts/variable-layout";
import { DeploymentTopBar } from '@/features/individual-deployment/deployment-top-bar';
import { useParams } from 'react-router-dom';
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";


const IndividualDeploymentsRoot = (): React.JSX.Element => {
    const { id } = useParams<'id'>();

    if (!Number(id)) {
        return (<>Id not valid</>)
    }

    return (
        <ThemeProvider theme={theme}>
            <VariableLayout>
                <DeploymentTopBar deployment_id={Number(id)}/>
            </VariableLayout>
        </ThemeProvider>
    );
}

export { IndividualDeploymentsRoot };
