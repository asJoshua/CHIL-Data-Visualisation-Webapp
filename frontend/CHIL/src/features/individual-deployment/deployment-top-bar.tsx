import { Box } from "@/components/ui/box/box";
import { Button } from "@/components/ui/button/button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { theme } from "@/theme/theme"

export type DeploymentTopBarProps = {
    deployment_id: number
}

const DeploymentTopBar = ({
    deployment_id
}: DeploymentTopBarProps) => {

    
    const navigate = useNavigate();

    return (
        <Box className='flex flex-col gap-y-4 flex-wrap justify-center'>
            <Box className='flex flex-row gap-y-4 flex-wrap justify-between'>
                <Typography
                    variant="h2"
                    style={{ color: theme.palette.text.secondary, fontWeight: "400" }}
                >
                    Graphs for deployment ID: {deployment_id}
                </Typography>
                <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    onClick={() => {navigate(`/admin/deployments/${deployment_id}/edit`)}}
                >
                    Add Graph
                </Button>
            </Box>
        </Box>
    )
}

export { DeploymentTopBar }