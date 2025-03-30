import { useEffect, useState } from 'react';
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
import CryoeggGraph from "../graph-components/cryoegg-graph";
import CryowurstGraph from "../graph-components/cryowurst-graph";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CollapsibleGraphContainer = () => {
    const [graphs, setGraphs] = useState<any[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        const fetchGraphs = async () => {
            try {
                const cryoeggResponse = await axios.get(`chil/graph/cryoegg/data/?url_id=${id}`);
                const cryoeggGraphs = cryoeggResponse.data as unknown[];
        
                const cryowurstResponse = await axios.get(`chil/graph/cryowurst/data/?url_id=${id}`);
                const cryowurstGraphs = cryowurstResponse.data as unknown[];
        
                setGraphs((prevGraphs) => [...prevGraphs, ...cryoeggGraphs, ...cryowurstGraphs]);            } catch (error) {
                console.error("Error fetching graphs:", error);
            }
        };
        

        fetchGraphs();
    }, [id]);

    const handleGraphDelete = async (graphId: string) => {
        const cryoeggGraph = graphs.find((graph) => graph.cryoegg_graph_id === graphId);
        
        if (cryoeggGraph) {
            try {
                const response = await axios.delete(`chil/graph/cryoegg/delete/${graphId}/`);
                console.log("Cryoegg graph deleted:", response.data);
    
                setGraphs((prevGraphs) => prevGraphs.filter(graph => graph.cryoegg_graph_id !== graphId));
            } catch (error) {
                console.error("Error deleting Cryoegg graph:", error);
            }
        } else {
            const cryowurstGraph = graphs.find((graph) => graph.cryowurst_graph_id === graphId);
            
            if (cryowurstGraph) {
                try {
                    const response = await axios.delete(`chil/graph/cryowurst/delete/${graphId}/`);
                    console.log("Cryowurst graph deleted:", response.data);
    
                    setGraphs((prevGraphs) => prevGraphs.filter(graph => graph.cryowurst_graph_id !== graphId));
                } catch (error) {
                    console.error("Error deleting Cryowurst graph:", error);
                }
            }
        }
    };
    
    return (
        <div>
            {graphs.map((graph) => {
                return (
                    <Accordion key={graph.cryoegg_graph_id || graph.cryowurst_graph_id} className="size-full mb-4">
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />} id={`panel-${graph.cryoegg_graph_id || graph.cryowurst_graph_id}-header`}>
                            <Box className="flex flex-row align-middle justify-between size-full">
                                <Typography color="black" component="span" align="center">
                                    {graph.graph_name && graph.graph_name !== ''
                                        ? graph.graph_name
                                        : `${graph.measurement} (${new Date(graph.start_date).toLocaleDateString()} to ${new Date(graph.end_date).toLocaleDateString()})`}
                                </Typography>
                                <Box>
                                    <IconButton>
                                        <DatasetIcon />
                                    </IconButton>
                                        <DownloadIcon/>
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleGraphDelete(graph.cryoegg_graph_id || graph.cryowurst_graph_id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className="flex flex-row gap-x-4 items-start">
                                <Box className="flex-1">
                                    {graph.cryoegg_graph_id ? 
                                        <CryoeggGraph
                                            graphName={graph.graph_name}
                                            measurement={graph.measurement}
                                            startDate={new Date(graph.start_date)}
                                            endDate={new Date(graph.end_date)}
                                            stroke={graph.stroke}
                                        />
                                    : 
                                        <CryowurstGraph
                                            uniqueId={graph.unique_id}
                                            graphName={graph.graph_name}
                                            measurement={graph.measurement}
                                            startDate={new Date(graph.start_date)}
                                            endDate={new Date(graph.end_date)}
                                            stroke={graph.stroke}
                                        />
                                    }
                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
    
};

export { CollapsibleGraphContainer };
