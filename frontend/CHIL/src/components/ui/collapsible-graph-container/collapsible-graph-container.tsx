import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AccordionSummary from "@mui/material/AccordionSummary";
import { Accordion } from "../accordion/accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from "../box/box";
import { IconButton } from "../button/icon-button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import DatasetIcon from '@mui/icons-material/Dataset';
import CryoeggGraph from '@/components/ui/graph-components/cryoegg-graph'


const CollapsibleGraphContainer = () => {
    const [graphData, setGraphData] = useState<any>(null);
    const location = useLocation(); // Get the current URL

    useEffect(() => {
        // Extract query parameters from the URL
        const queryParams = new URLSearchParams(location.search);
        
        // Get the individual parameters from the URL
        const measurement = queryParams.get('measurement');
        const startDate = queryParams.get('startDate');
        const endDate = queryParams.get('endDate');
        const stroke = queryParams.get('stroke'); // Get the stroke color if needed

        // Set the graphData state with these parameters
        if (measurement && startDate && endDate) {
            setGraphData({
                measurement,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                stroke: stroke || '', // Default to empty string if stroke is not set
            });
        }
    }, [location.search]);

    if (!graphData) {
        return <div>Loading...</div>; // Show loading state while data is being fetched
    }

    return (
        <Accordion className="size-full">
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                id="panel2-header"
            >
                <Box className="flex flex-row align-middle justify-between size-full">
                    <Typography
                        color='black'
                        component="span"
                        align="center"
                    >
                        Graph Title
                    </Typography>
                    <Box>
                        <IconButton>
                            <DatasetIcon/>
                        </IconButton>
                        <IconButton>
                            <DownloadIcon/>
                        </IconButton>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color='black'>
                   <CryoeggGraph 
                        measurement={graphData.measurement}
                        startDate={graphData.startDate}
                        endDate={graphData.endDate} 
                        stroke={graphData.stroke}/>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export { CollapsibleGraphContainer };