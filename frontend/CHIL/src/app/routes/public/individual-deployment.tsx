import React from 'react';
import { VariableLayout } from "@/components/layouts/variable-layout";
import { DeploymentTopBar } from '@/features/individual-deployment/deployment-top-bar';
import { useParams } from 'react-router-dom';
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from '@/components/ui/box/box';
import { CollapsibleGraphContainer } from '@/components/ui/collapsible-graph-container/collapsible-graph-container';

const IndividualDeploymentsRoot = (): React.JSX.Element => {
    const { id } = useParams<'id'>();

    if (!Number(id)) {
        return <div>Id not valid</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <VariableLayout className="flex flex-col min-h-screen">
                <Box className="flex flex-col flex-grow gap-y-4 px-60 py-10"> 
                    <DeploymentTopBar deployment_id={Number(id)} />
                    <Box className="flex flex-col gap-y-4">
                        <CollapsibleGraphContainer />
                    </Box>
                </Box>
            </VariableLayout>
        </ThemeProvider>
    );
};

export { IndividualDeploymentsRoot };
