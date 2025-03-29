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
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CollapsibleGraphContainer = () => {
    const [graphs, setGraphs] = useState<unknown[]>([]);  // State is unknown[]

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchGraphs = async () => {
            try {
                if (id) {
                    const response = await axios.get(`chil/graph/cryoegg/data/?url_id=${id}`);
                    const uniqueGraphs = response.data as unknown[]; // Still 'unknown' type
                    const seenGraphIds = new Set<string>();

                    uniqueGraphs.forEach((graph: any) => {
                        if (!seenGraphIds.has(graph.cryoegg_graph_id)) {
                            seenGraphIds.add(graph.cryoegg_graph_id);
                        }
                    });

                    setGraphs(uniqueGraphs); // Update the state
                }
            } catch (error) {
                console.error("Error fetching graphs:", error);
            }
        };

        if (id) {
            fetchGraphs();
        }
    }, [id]);

    // Narrow the type to Graph by checking properties
    const isGraph = (graph: unknown): graph is { cryoegg_graph_id: string; measurement: string; start_date: string | Date; end_date: string | Date; stroke: string } => {
        return (graph as any).cryoegg_graph_id !== undefined && (graph as any).measurement !== undefined;
    };

    return (
        <div>
            {graphs.map((graph, index) => {
                if (!isGraph(graph)) return null;  // Filter out invalid graph data
                return (
                    <Accordion key={graph.cryoegg_graph_id} className="size-full">
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />} id={`panel-${graph.cryoegg_graph_id}-header`}>
                            <Box className="flex flex-row align-middle justify-between size-full">
                                <Typography color='black' component="span" align="center">
                                    {graph.measurement} ({new Date(graph.start_date).toLocaleDateString()} to {new Date(graph.end_date).toLocaleDateString()})
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
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CryoeggGraph
                                measurement={graph.measurement}
                                startDate={new Date(graph.start_date)}
                                endDate={new Date(graph.end_date)}
                                stroke={graph.stroke}
                            />
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

export { CollapsibleGraphContainer };
