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
    const [graphs, setGraphs] = useState<any[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchGraphs = async () => {
            try {
                if (id) {
                    const response = await axios.get(`chil/graph/cryoegg/data/?url_id=${id}`);
                    const uniqueGraphs = response.data as unknown[];
                    const seenGraphIds = new Set<string>();

                    uniqueGraphs.forEach((graph: any) => {
                        if (!seenGraphIds.has(graph.cryoegg_graph_id)) {
                            seenGraphIds.add(graph.cryoegg_graph_id);
                        }
                    });

                    setGraphs(uniqueGraphs);
                }
            } catch (error) {
                console.error("Error fetching graphs:", error);
            }
        };
        if (id) {
            fetchGraphs();
        }
    }, [id]);

    const deleteGraph = async (graphId: any) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this graph?")
        if(isConfirmed){
        try {
          const response = await axios.delete(`chil/graph/cryoegg/delete/${graphId}/`);
          console.log("Graph deleted successfully:", response);
          setGraphs((prevGraphs) => prevGraphs.filter((graph) => graph.cryoegg_graph_id !== graphId));
        } catch (error) {
          console.error("Error deleting graph:", error);
        }
      };
    }
      
    return (
        <div>
            {graphs.map((graph) => {
                return (
                    <Accordion key={graph.cryoegg_graph_id} className="size-full mb-4">
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />} id={`panel-${graph.cryoegg_graph_id}-header`}>
                            <Box className="flex flex-row align-middle justify-between size-full">
                                <Typography color='black' component="span" align="center">
                                    {graph.graph_name && graph.graph_name !== '' ? graph.graph_name: 
                                        `${graph.measurement} (${new Date(graph.start_date).toLocaleDateString()} 
                                        to ${new Date(graph.end_date).toLocaleDateString()}`}
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
                                    <IconButton onClick={() => deleteGraph(graph.cryoegg_graph_id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CryoeggGraph
                                graphName={graph.graph_name}
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
