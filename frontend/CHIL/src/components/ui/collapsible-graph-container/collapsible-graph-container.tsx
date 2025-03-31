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

    interface Graph {
        unique_id: string;
        graph_name: string;
        measurement: string;
        start_date: string;
        end_date: string;
        stroke: string;
    }
    
    interface CryoeggGraphData extends Graph {
        cryoegg_graph_id: string;
    }
    
    interface CryowurstGraphData extends Graph {
        cryowurst_graph_id?: string;
    }
    
    type GraphData = CryoeggGraphData | CryowurstGraphData;


    const [graphs, setGraphs] = useState<GraphData[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        const fetchGraphs = async () => {
            try {
                const response = await axios.get<CryoeggGraphData[]>(`chil/graph/cryoegg/data/?url_id=${id}`);
                console.log("Cryoegg graphs:", response.data);

                const cryowurstResponse = await axios.get<CryowurstGraphData[]>(`chil/graph/cryowurst/data/?url_id=${id}`);
                console.log("Cryowurst graphs:", cryowurstResponse.data);

                setGraphs([...response.data, ...cryowurstResponse.data]);
            } catch (error) {
                console.error("Error fetching graphs:", error);
            }
        };

        fetchGraphs();
    }, [id]);
    
    return (
        <div>
            {graphs.map((graph) => {
                return (
                    <Accordion key={graph.unique_id} className="size-full mb-4">
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />} id={`panel-${graph.unique_id}-header`}>
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
                                    <IconButton >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className="flex flex-row gap-x-4 items-start">
                                <Box className="flex-1">
                                    {'cryoegg_graph_id' in graph ?
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
