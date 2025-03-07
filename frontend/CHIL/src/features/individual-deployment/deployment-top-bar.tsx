import { Box } from "@/components/ui/box/box";
import { Button } from "@/components/ui/button/button";
import { Divider } from "@/components/ui/divider/divider";
import { useNavigate } from "react-router-dom";

export type DeploymentTopBarProps = {
    deployment_id: number
}

const DeploymentTopBar = ({
    deployment_id
}: DeploymentTopBarProps) => {

    const navigate = useNavigate();

    return (
        <Box className='flex flex-col gap-y-4 flex-wrap justify-center px-80 py-10'>
            <Box className='flex flex-col gap-y-4 flex-wrap justify-center'>
                <Box className='flex flex-row gap-y-4 flex-wrap justify-between'>
                    {deployment_id}
                    <Button
                        variant='contained'
                        size='small'
                        color='primary'
                        onClick={() => {navigate('/edit-graph')}}
                    >
                        Add Graph
                    </Button>
                </Box>
                <Box>
                    <Divider/>
                    <p>Description here</p>
                    <Divider/>
                </Box>
            </Box>
            <Box>
                {/* Graphs go here */}
            </Box>
        </Box>
    )
}

export { DeploymentTopBar }