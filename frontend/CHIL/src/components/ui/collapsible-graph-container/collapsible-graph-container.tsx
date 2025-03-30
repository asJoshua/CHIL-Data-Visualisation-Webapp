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

    // fix
     const queryParams = new URLSearchParams(location.search);
     const uniqueId = queryParams.get('uniqueId');

    useEffect(() => {
        if (!id) return;

        const fetchGraphs = async () => {
            try {
                const response = await axios.get(`chil/graph/cryoegg/data/?url_id=${id}`);
                console.log("Cryoegg graphs:", response.data);
                const cryoeggGraphs = response.data as unknown[];

                const cryowurstResponse = await axios.get(`chil/graph/cryowurst/data/?url_id=${id}`);
                console.log("Cryowurst graphs:", cryowurstResponse.data);
                console.log(`chil/graph/cryowurst/data/?url_id=${id}`);
                const cryowurstGraphs = cryowurstResponse.data as unknown[];

                setGraphs([...cryoeggGraphs, ...cryowurstGraphs]);
            } catch (error) {
                console.error("Error fetching graphs:", error);
            }
        };

        fetchGraphs();
    }, [id]);

    console.log("unique id for each graph:", graphs.map((graph) => graph.unique_id || "No unique_id available"));

    return (
        <div>
            {graphs.map((graph) => (
                
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
                                <IconButton>
                                    <DownloadIcon />
                                </IconButton>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton >
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
                                        uniqueId={uniqueId || 'cf240002'}
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
            ))}
        </div>
    );
};

export { CollapsibleGraphContainer };
